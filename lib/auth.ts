import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { db } from "@/lib/db"
import prisma from "@/lib/prisma";

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET)
  throw new Error("Failed to initialize Github authentication");

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ],
  adapter: PrismaAdapter(db as any),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({session, token }) {
      console.log("Calls the session function!")
      if (token) {
        console.log("Here is the token!")
        console.log(token)
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
      }
      return session
    },
    async jwt({ token, user }) {
      console.log("Calls the jwt function!")
      console.log(token)
      console.log(user)

      // check the user exists in the db already
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
  pages: {
    signIn: "/auth/signin"
  },
} as NextAuthOptions;

