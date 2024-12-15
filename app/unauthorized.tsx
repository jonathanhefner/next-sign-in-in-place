import { SignInForm } from "@/components/authentication";

export default async function Unauthorized() {
  return <>
    <h1>You must sign in to see this.</h1>
    <SignInForm inPlace={true} />
  </>
}
