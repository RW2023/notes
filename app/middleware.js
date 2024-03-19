import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired - required for Server Components
  await supabase.auth.getUser();

  return res;
}

// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: [
    '/notes', // Protect the notes route
    '/notes/:path*', // Optionally, protect all subpaths under notes
    // Add any other paths you wish to protect
  ],
};
