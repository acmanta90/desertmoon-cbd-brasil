import type { Metadata } from 'next';
import Script from 'next/script';
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/config/site';

const sans = Manrope({ subsets: ['latin'], variable: '--font-sans' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.desertmooncbd.com.br'),
  title: {
    default: 'Desertmoon CBD Brasil',
    template: '%s | Desertmoon CBD Brasil',
  },
  description: siteConfig.description,
  keywords: ['CBD', 'canabidiol', 'medicina', 'educação', 'Brasil'],
  authors: [{ name: 'Desertmoon CBD Brasil' }],
  openGraph: {
    title: 'Desertmoon CBD Brasil',
    description: siteConfig.description,
    url: 'https://www.desertmooncbd.com.br',
    siteName: 'Desertmoon CBD Brasil',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desertmoon CBD Brasil',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const whatsappUrl = process.env.WHATSAPP_URL;
  const calendlyUrl = process.env.CALENDLY_URL;
  const supportEmail = process.env.SUPPORT_EMAIL;

  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-background font-[family-name:var(--font-sans)]">
        {recaptchaSiteKey ? (
          <Script src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`} strategy="afterInteractive" />
        ) : null}
        <div className="flex min-h-screen flex-col">
          <Header whatsappUrl={whatsappUrl ?? calendlyUrl ?? '#'} patientAreaUrl="/pacientes" />
          <main className="flex-1">{children}</main>
          <Footer supportEmail={supportEmail ?? 'contato@desertmoon.com.br'} />
        </div>
      </body>
    </html>
  );
}
