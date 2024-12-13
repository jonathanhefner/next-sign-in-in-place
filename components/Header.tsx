import { isAuthenticated } from "@/lib/authentication"
import Link from "next/link"
import { SignOutButton } from "./authentication"
import "./Header.css"

export default async function Header() {
  const authenticated = await isAuthenticated()

  return (
    <header className={authenticated ? " authenticated" : " unauthenticated"}>
      <Link href="/">Home</Link>
      {" — "}
      {authenticated
        ? <>
            You are signed in. <SignOutButton>Sign Out</SignOutButton>
          </>
        : <>
            You are not signed in. <Link href="/sign-in">Sign In</Link>
          </>
      }
    </header>
  )
}
