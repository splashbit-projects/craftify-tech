import { Manrope } from 'next/font/google';
import { Fragment_Mono } from 'next/font/google';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';

import { cn } from '@/shared/lib/helpers/styles';
import { Footer, Header } from '@/shared/ui/components';

import '@/shared/lib/styles/null.scss';
import '@/shared/lib/styles/base.scss';

  const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const fragmentMono = Fragment_Mono({
  variable: '--font-fragment-mono',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Craftity Tech',
    default: 'Craftity Tech',
  },
  description:
    'Craftity Tech',
  openGraph: {
    title: {
      template: '%s | Craftity Tech',
      default: 'Craftity Tech',
    },
    description:
      'Craftity Tech',
    images: '#',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={cn(manrope.variable, fragmentMono.variable)}>
        <NextIntlClientProvider>
          {/**<Preloader /> */}
            <Header />
            {children}
            <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
