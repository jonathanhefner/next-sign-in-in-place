'use client'

import { signIn, signOut } from "@/lib/authentication"
import { useActionState } from "react"
import "./authentication.css"

export function SignInForm({ inPlace }: { inPlace?: boolean }) {
  const [state, action, pending] = useActionState(signIn, { })
  const isInvalid = !!state.error

  return (
    <form className="sign-in-form" action={action}>
      {inPlace && <input type="hidden" name="inPlace" value="1" />}
      <label className={`let-me-in ${isInvalid ? "invalid" : ""}`}>
        <input type="checkbox" name="letMeIn" value="1"/>
        Let me in!
      </label>
      <button type="submit" disabled={pending}>Sign In</button>
    </form>
  )
}

export function SignOutButton({ children }: { children: React.ReactNode }) {
  const [state, action, pending] = useActionState(signOut, undefined)

  return (
    <form className="sign-out-form" action={action}>
      <button type="submit" disabled={pending}>{children}</button>
    </form>
  )
}
