
// import Navbar from "@/components/ui/Navbar";
import "./globals.css";



export const metadata = {
  title: 'Note To Self',
  description: 'A simple note-taking app built with Supabase and Next.js',
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/og-image.png',
  },
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
