import Link from "next/link"

export default function Page() {
  return (
    <ul>
      <li><Link href="/public-page">Public page</Link> does not require authentication.</li>
      <li><Link href="/private-page">Private page</Link> requires authentication.</li>
    </ul>
  )
}
