import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth";

export async function getCurrentUser() {
  console.log("Calls GetCurrentUser functions")
  const session = await getServerSession(authOptions);
  console.log(session)
  return session?.user
}