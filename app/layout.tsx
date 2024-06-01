import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Profile Card',
  description: 'Profile Card for Marketing Component Library',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${notoSans.className} h-screen w-screen bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB]`}
      >
        {children}
      </body>
    </html>
  );
}
