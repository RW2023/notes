import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    '/notes', // Protect the notes route
    '/notes/:path*', // Optionally, protect all subpaths under notes
    // Add any other paths you wish to protect
  ],
};
