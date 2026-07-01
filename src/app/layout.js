import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Inter, Poppins, Black_Ops_One, Mystery_Quest } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import FooterPage from '@/components/shared/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
});
const mysteryQuest = Mystery_Quest({
  variable: '--font-MysteryQuest',
  subsets: ['latin'],
  weight: ['400'],
});
export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
});

export const metadata = {
  title: 'The Dragon News',
  description: 'Get the latest breaking news and updates.',
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${poppins.variable} ${mysteryQuest.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
        <FooterPage></FooterPage>
      </body>
    </html>
  );
}