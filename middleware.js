import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getUser();
  return res;
}

export const config = {
  matcher: [
    '/notes', // Protect the notes route
    '/notes/:path*', // Optionally, protect all subpaths under notes
    // Add any other paths you wish to protect
  ],
};
