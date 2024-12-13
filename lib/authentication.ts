'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function isAuthenticated() {
  return !!(await cookies()).get("authenticated")
}

export type SignInError = { error?: string }

export async function signIn(state: SignInError, formData: FormData): Promise<SignInError> {
  if (!!formData.get("letMeIn")) {
    (await cookies()).set({ name: "authenticated", value: "1", sameSite: "lax" })
    redirect("/")
  } else {
    return { error: "Invalid" }
  }
}

export async function signOut(state: void) {
  (await cookies()).delete({ name: "authenticated", sameSite: "lax" })
  redirect("/")
}
