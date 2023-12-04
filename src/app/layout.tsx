import type { Metadata } from 'next';
import { Session } from 'next-auth';
import { Inter } from 'next/font/google';
import React from 'react';

import { siteConfig } from '@/config';
import { Providers } from '@lib/Providers';
import '@styles/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'OtShellNick',
      url: siteConfig.url,
    },
  ],
  creator: 'OtShellNick',
  openGraph: {
    type: 'website',
    locale: 'ru-RU',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@CodeCollabSite',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

type TLayoutProps = {
  children: React.ReactNode;
  session: Session | null;
};

const RootLayout = ({ children, session }: TLayoutProps) => {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
