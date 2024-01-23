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

import NextAuth from "next-auth"

import { authOptions } from "@/lib/auth";

// @see ./lib/auth
export default NextAuth(authOptions)