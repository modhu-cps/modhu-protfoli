import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SocialDock } from '@/components/layout/social-dock';
import { ScrollProgress } from '@/components/layout/scroll-progress';
import { MouseGlow } from '@/components/effects/mouse-glow';

import { siteConfig } from '@/lib/config';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        {/* ✅ THEME PROVIDER MUST WRAP EVERYTHING */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          {/* UI LAYERS */}
          <ScrollProgress />
          <MouseGlow />
          <Navbar />

          <main className="relative">{children}</main>

          <SocialDock />
          <Footer />

          {/* Analytics only production */}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
