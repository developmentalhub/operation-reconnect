import './globals.css';
import Link from 'next/link';
import { Space_Grotesk, Inter, Kalam } from 'next/font/google';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const hand = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-hand',
});

export const metadata = {
  title: 'Operation Reconnect',
  description: 'Helping teens make friends, build confidence, and understand how communities work.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>
        <header className="site-header">
          <Link href="/" className="brand">Operation Reconnect</Link>
          <nav className="site-nav">
            <Link href="/podcast">Podcast</Link>
            <Link href="/videos">Videos</Link>
            <Link href="/webinars">Webinars</Link>
            <Link href="/subscribe" className="nav-cta">Subscribe</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} Operation Reconnect</p>
        </footer>
      </body>
    </html>
  );
}