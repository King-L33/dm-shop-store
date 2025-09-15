import React from 'react';
import { useAuth as useSbAuth } from './useAuth';
import { signOut as sbSignOut } from './auth';

type UseAuthReturn = {
  userId: string | null;
  isSignedIn: boolean;
  getToken: (opts?: any) => Promise<string>;
  signOut: () => Promise<void>;
};

export function useAuth(): UseAuthReturn {
  const { user } = useSbAuth();
  return {
    userId: user?.id ?? null,
    isSignedIn: !!user,
    // No JWT/Bearer expected anymore – APIs use Supabase cookie auth
    getToken: async () => "",
    signOut: async () => {
      await sbSignOut();
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    },
  };
}

export function useUser() {
  const { user } = useSbAuth();
  return { isSignedIn: !!user, user };
}

export function UserButton(_props: React.HTMLAttributes<HTMLButtonElement>) {
  // Minimal stub – render nothing (UI moved to Supabase-aware header)
  return null;
}

export function SignedIn(props: { children?: React.ReactNode }) {
  const { user } = useSbAuth();
  return user ? <>{props.children}</> : null;
}

export function SignedOut(props: { children?: React.ReactNode }) {
  const { user } = useSbAuth();
  return !user ? <>{props.children}</> : null;
}

export function SignOutButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const onClick = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e?.preventDefault?.();
      await sbSignOut();
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    } catch (err) {
      console.error('SignOutButton error:', err);
    }
  };
  return (
    <button {...props} onClick={onClick}>
      {props?.children ?? 'Sign out'}
    </button>
  );
}