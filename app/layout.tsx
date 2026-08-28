import type { Metadata } from 'next';
import './globals.css';
import WhatsAppButton from './whatsapp-button';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4173'),
  title: 'HONG LIANG | Stainless Steel Water Tanks',
  description: 'Custom stainless steel water tanks and water supply equipment for global projects.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<WhatsAppButton /></body></html>;
}
