import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Aurion Stack',
    default: 'Aurion Stack | Full-Stack Web Development & AI Solutions',
  },
  description: 'Professional web development agency in Goa specializing in Next.js, Firebase, and AI-driven applications. We build scalable digital solutions for your business.',
  keywords: ['Web Development Goa', 'Next.js Developer', 'Aurion Stack', 'Full-stack AI Bot', 'Samir Developer Portfolio', 'React Developer India', 'AI Integration Services'],
  authors: [{ name: 'Samir' }],
  metadataBase: new URL('https://buildwithsamir.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aurion Stack | Build Your Digital Future',
    description: 'Custom web and mobile solutions tailored for your business growth.',
    url: 'https://buildwithsamir.dev',
    siteName: 'Aurion Stack',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurion Stack Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurion Stack | High-Performance Web Apps',
    description: 'Expert Next.js and Firebase development by Samir.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aurion Stack',
    description: 'Full-Stack Web Development & AI Solutions',
    url: 'https://buildwithsamir.dev',
    logo: 'https://buildwithsamir.dev/aurion-logo.png',
    foundingDate: '2021',
    founder: {
      '@type': 'Person',
      name: 'Samir',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Goa',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://github.com/ProSamhacker',
      'https://www.youtube.com/channel/UCyFd0sig38yK9O6B6Alh5MQ',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'aurionstack@gmail.com',
      contactType: 'Customer Service',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}