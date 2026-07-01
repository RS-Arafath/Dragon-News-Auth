import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import { NextResponse } from 'next/server';
import { auth } from './lib/auth';
import { headers } from 'next/headers';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
   const session = await auth.api.getSession({
        headers: await headers()
    })
  const isLoggedIn = false;
  if (session) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(
      new URL('/login?message=login-required', request.url),
    );
  }
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
  //matcher page doesnot show in ui
  matcher: ['/career','/news/:path*'],
};
