import { auth } from '@/auth';
import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Roboto, Poppins, Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '500', '700', '900'],
  variable: '--font-roboto'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Bellshire Mansory Dashboard'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.variable} ${roboto.className} ${roboto.variable} ${inter.className} ${inter.variable} overflow-hidden`}
        suppressHydrationWarning={true}
      >
        <NextTopLoader showSpinner={false} color="#4563F9" />
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
