import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { getProfile, getUserRole } from './auth'
import type { User, Session } from '@supabase/supabase-js'
import type { Database } from './supabase'

type Profile = Database['public']['Tables']['profiles']['Row']

interface AuthState {
  user: User | null
  session: Session | null
  profile: Profile | null
  role: string | null
  loading: boolean
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    session: null,
    profile: null,
    role: null,
    loading: true,
  })

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()

      if (error) {
        console.error('Error getting session:', error)
        setAuthState(prev => ({ ...prev, loading: false }))
        return
      }

      if (session?.user) {
        await loadUserData(session.user)
      } else {
        setAuthState(prev => ({ ...prev, loading: false }))
      }
    }

    getInitialSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.id)

        if (session?.user) {
          await loadUserData(session.user)
        } else {
          setAuthState({
            user: null,
            session: null,
            profile: null,
            role: null,
            loading: false,
          })
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const loadUserData = async (user: User) => {
    try {
      // Get profile
      const { data: profile, error: profileError } = await getProfile(user.id)

      if (profileError && profileError.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error loading profile:', profileError)
      }

      // Get role
      const role = await getUserRole(user.id)

      setAuthState({
        user,
        session: { user } as Session,
        profile: profile || null,
        role,
        loading: false,
      })
    } catch (error) {
      console.error('Error loading user data:', error)
      setAuthState(prev => ({ ...prev, loading: false }))
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error)
    }
  }

  return {
    ...authState,
    signOut,
    refreshProfile: () => authState.user && loadUserData(authState.user),
  }
}

// Hook for checking authentication status
export const useAuthCheck = () => {
  const { user, loading } = useAuth()
  return { isAuthenticated: !!user, loading }
}

// Hook for role-based access control
export const useRoleCheck = (requiredRole?: string) => {
  const { role, loading } = useAuth()

  const hasRole = (checkRole: string) => {
    if (!role) return false
    if (checkRole === 'admin') return role === 'admin'
    if (checkRole === 'vendor') return role === 'vendor' || role === 'admin'
    if (checkRole === 'customer') return true // all authenticated users are customers
    return false
  }

  return {
    role,
    hasRole: requiredRole ? hasRole(requiredRole) : true,
    isAdmin: role === 'admin',
    isVendor: role === 'vendor',
    isCustomer: role === 'customer',
    loading,
  }
}

// Hook for profile management
export const useProfile = () => {
  const { profile, user, refreshProfile } = useAuth()

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) return { error: 'No user logged in' }

    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single()

    if (!error && refreshProfile) {
      refreshProfile()
    }

    return { data, error }
  }

  return {
    profile,
    updateProfile,
  }
}