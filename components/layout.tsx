import AuthButton from '@/components/AuthButton';
import Navbar from '@/components/ui/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="business">
      <body>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center">
          <AuthButton />
          {children}
        </main>
      </body>
    </html>
  );
}
