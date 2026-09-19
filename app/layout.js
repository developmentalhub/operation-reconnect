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
  metadataBase: new URL('https://operationreconnect.com'),

  title: {
    default: 'Operation Reconnect',
    template: '%s | Operation Reconnect',
  },

  description:
    'Operation Reconnect helps teens make friends, build confidence, practise real-world conversation, and create stronger communities through videos, webinars, challenges, and Connection Benches.',

  keywords: [
    'teen friendship',
    'social skills for teens',
    'making friends',
    'confidence building',
    'connection',
    'conversation skills',
    'Connection Benches',
    'community connection',
    'Operation Reconnect',
  ],

  openGraph: {
    title: 'Operation Reconnect',
    description:
      'Helping people build stronger friendships, confidence, conversation skills, and real-world connection.',
    url: 'https://operationreconnect.com',
    siteName: 'Operation Reconnect',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Operation Reconnect',
    description:
      'Helping people build stronger friendships, confidence, conversation skills, and real-world connection.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${hand.variable}`}
    >
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            Operation Reconnect
          </Link>

          <nav className="site-nav">
            <Link href="/podcast">
              Podcast
            </Link>

            <Link href="/videos">
              Videos
            </Link>

            <Link href="/webinars">
              Webinars
            </Link>

            <Link href="/blog">
              Blog
            </Link>

            <Link href="/connection-benches">
              Connection Benches
            </Link>

            <Link
              href="/subscribe"
              className="nav-cta"
            >
              Subscribe
            </Link>
          </nav>
        </header>

        {children}

        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} Operation Reconnect
          </p>
        </footer>
      </body>
    </html>
  );
}