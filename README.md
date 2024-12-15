# next-sign-in-in-place

This is a demo that uses Next.js's [experimental `unauthorized()` API](https://nextjs.org/blog/next-15-1#forbidden-and-unauthorized-experimental) to implement a sign-in in place flow.

See it in action at https://next-sign-in-in-place.vercel.app/.

Currently, there are shortcomings with this approach:

* It relies on the HTTP `referer` header (which generally isn't reliable) to determine the URL of the original page.
* It performs a redirect to refresh the original page, causing a flash of white.

However, if Next.js were to provide a server-side `refresh()` function to trigger a client-side refresh, it could potentially eliminate these problems.
