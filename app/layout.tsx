
// import Navbar from "@/components/ui/Navbar";
import "./globals.css";



export const metadata = {
  title: "Note To Self",
  description: "A simple note-taking app built with Supabase and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="business">
      <body>
        {/* <Navbar /> */}
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
