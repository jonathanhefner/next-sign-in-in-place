import { isAuthenticated } from "@/lib/authentication"

export default async function Page() {
  if (await isAuthenticated()) {
    return <h1>For your eyes only.</h1>
  } else {
    return <h1>Access denied.</h1>
  }
}
