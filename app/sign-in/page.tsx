import { SignInForm } from "@/components/authentication"
import { isAuthenticated } from "@/lib/authentication"

export default async function Page() {
  if (await isAuthenticated()) {
    return <h1>You are already signed in.</h1>
  } else {
    return <>
      <h1>Do you want to sign in?</h1>
      <SignInForm />
    </>
  }
}
