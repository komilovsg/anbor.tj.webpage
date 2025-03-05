import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Footer } from '@/widgets/footer';
import { languages } from '@/shared/constants';
import { I18nProvider } from '@/shared/providers';
import { Navbar } from '@/widgets/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Anbor.tj | CRM-система для автоматизации бизнеса в Таджикистане',
  description:
    'Anbor.tj – мощная CRM-система для управления финансами, складом и клиентами. Упрощайте учет доходов и расходов, автоматизируйте бизнес-процессы и повышайте эффективность работы.',
  keywords: [
    'CRM-система',
    'автоматизация бизнеса',
    'учет доходов',
    'контроль расходов',
    'складской учет',
    'управление клиентами',
    'финансовый учет',
    'интеграция с банками',
    'API для бизнеса',
    'анализ данных',
    'автоматизация продаж',
    'бизнес в Таджикистане',
    'онлайн-CRM',
    'SaaS-решение',
    'электронная бухгалтерия',
    'бизнес-аналитика',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Anbor.tj – CRM для автоматизации бизнеса',
    description:
      'Anbor.tj – комплексная CRM-система для контроля финансов, складского учета и управления клиентами. Оптимизируйте бизнес-процессы и повысьте эффективность работы.',
    url: 'https://dev.anbor.tj/',
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://dev.anbor.tj/preview.jpg',
        alt: 'Anbor.tj – CRM для бизнеса',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anbor.tj – CRM для эффективного бизнеса',
    description:
      'CRM-система Anbor.tj помогает автоматизировать бизнес: учет финансов, контроль склада и управление клиентами в одном месте.',
    images: ['https://dev.anbor.tj/preview.jpg'],
  },
  alternates: {
    canonical: 'https://dev.anbor.tj/',
    languages: {
      'ru-RU': 'https://dev.anbor.tj/ru',
      'en-US': 'https://dev.anbor.tj/en',
    },
  },
};

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lang: lng }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18nProvider>
      <html lang="ru">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </I18nProvider>
  );
}
