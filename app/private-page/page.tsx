import { isAuthenticated } from "@/lib/authentication"
import { unauthorized } from "next/navigation"

export default async function Page() {
  if (await isAuthenticated()) {
    return <h1>For your eyes only.</h1>
  } else {
    unauthorized()
  }
}
