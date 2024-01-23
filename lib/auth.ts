// import { NextApiHandler } from 'next';
// import NextAuth from 'next-auth';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import GitHubProvider from 'next-auth/providers/github';
// import prisma from '../../../lib/prisma';

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
// export default authHandler;

// // console.log("test!")
// // console.log(process.env.AUTH_SECRET);

// const options = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   adapter: PrismaAdapter(prisma),
//   secret: process.env.AUTH_SECRET,
// };

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { db } from "@/lib/db"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/signin",
  // },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
      }
      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
      }
    },
  },
}