import './reset.css';
import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HelpMeOut',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}