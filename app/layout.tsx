import type { Metadata } from 'next';
import { Inter, Manrope, Cormorant } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/shared/navbar';
import { CustomCursor } from '@/components/shared/custom-cursor';
import { ScrollToTop } from '@/components/shared/scroll-to-top';
import { PageNav } from '@/components/shared/page-nav';
import { SmoothScroll } from '@/components/shared/smooth-scroll';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});
const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});
const cormorant = Cormorant({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://viktorina-yunusova.portfolio'),
  title: {
    default: 'Виктория Юнусова | Project Manager',
    template: '%s — Виктория Юнусова',
  },
  description: 'Виктория Юнусова — специалист по управлению проектами. Опыт в управлении проектами, бизнес-анализе, снабжении и цифровизации бизнеса.',
  keywords: ['Виктория Юнусова', 'Project Manager'],
  authors: [{ name: 'Виктория Юнусова' }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Виктория Юнусова | Project Manager',
    description: 'Персональное портфолио Виктории Юнусовой. Опыт в управлении проектами, бизнес-анализе, снабжении и цифровизации бизнеса.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <CustomCursor />
        <Navbar />
        <PageNav />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
        <ScrollToTop />
      </body>
    </html>
  );
}
