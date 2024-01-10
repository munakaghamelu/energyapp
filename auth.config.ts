import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/sigin'
  },
  // adding middleware to prevent use accessing form without being signed in
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnForm = nextUrl.pathname.startsWith('/form');
      if (isOnForm) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/form', nextUrl));
      }
      return true;
    },
  },
  providers: [], // add providers with an empty array for now
} satisfies NextAuthConfig;