'use server'

import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

export async function isAuthenticated() {
  return !!(await cookies()).get("authenticated")
}

export type SignInError = { error?: string }

export async function signIn(state: SignInError, formData: FormData): Promise<SignInError> {
  if (formData.get("letMeIn")) {
    let destination = "/"
    if (formData.get("inPlace")) {
      destination = (await headers()).get("referer") ?? destination
    }

    (await cookies()).set({ name: "authenticated", value: "1", sameSite: "lax" })
    redirect(destination)
  } else {
    return { error: "Invalid" }
  }
}

export async function signOut(state: void) {
  (await cookies()).delete({ name: "authenticated", sameSite: "lax" })
  redirect("/")
}
