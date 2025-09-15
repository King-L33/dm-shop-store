import { supabase } from './supabase'
import type { Database } from './supabase'

type Profile = Database['public']['Tables']['profiles']['Row']
type ProfileInsert = Database['public']['Tables']['profiles']['Insert']

// Authentication helper functions

export const signUp = async (email: string, password: string, userData?: Partial<ProfileInsert>) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return { data: null, error }
  }

  // Create profile if user was created
  if (data.user && userData) {
    const profileData: ProfileInsert = {
      id: data.user.id,
      ...userData,
    }

    const { error: profileError } = await supabase
      .from('profiles')
      .insert(profileData)

    if (profileError) {
      console.error('Error creating profile:', profileError)
    }
  }

  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXTAUTH_URL}/reset-password`,
  })
  return { data, error }
}

export const updatePassword = async (newPassword: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  })
  return { data, error }
}

// OAuth sign in functions
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXTAUTH_URL}/auth/callback`,
    },
  })
  return { data, error }
}

export const signInWithGitHub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${process.env.NEXTAUTH_URL}/auth/callback`,
    },
  })
  return { data, error }
}

export const signInWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      redirectTo: `${process.env.NEXTAUTH_URL}/auth/callback`,
    },
  })
  return { data, error }
}

// Session management
export const getSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession()
  return { session, error }
}

export const getUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

// Profile management
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data, error }
}

export const updateProfile = async (userId: string, updates: Partial<Profile>) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()
  return { data, error }
}

export const createProfile = async (profileData: ProfileInsert) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert(profileData)
    .select()
    .single()
  return { data, error }
}

// Role-based access control helpers
export const getUserRole = async (userId: string): Promise<string | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('Error fetching user role:', error)
    return null
  }

  return data?.role || 'customer'
}

export const isAdmin = async (userId: string): Promise<boolean> => {
  const role = await getUserRole(userId)
  return role === 'admin'
}

export const isVendor = async (userId: string): Promise<boolean> => {
  const role = await getUserRole(userId)
  return role === 'vendor'
}

export const isCustomer = async (userId: string): Promise<boolean> => {
  const role = await getUserRole(userId)
  return role === 'customer'
}

// Auth state listener
export const onAuthStateChange = (callback: (event: string, session: any) => void) => {
  return supabase.auth.onAuthStateChange(callback)
}