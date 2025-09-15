// Minimal server-side Clerk shim for front-store.
// Maps "@clerk/nextjs/server" to this file via tsconfig paths.
// Avoids runtime usage; prefer migrating code to Supabase helpers.

type AuthReturn = {
  userId: string | null;
  getToken: (opts?: any) => Promise<string>;
};

export function auth(): AuthReturn {
  return {
    userId: null,
    // No Bearer tokens; APIs use Supabase cookie auth now.
    getToken: async () => "",
  };
}

// Legacy compatibility
export const clerkClient = {
  users: {
    updateUserMetadata: async () => {
      return;
    },
  },
};