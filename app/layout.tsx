// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// 1. Import your new Providers component and Navbar
import { Providers } from "./components/providers";
import Navbar from './components/Navbar'; // Assumes you use path aliases ('@/')

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Next.js Portfolio',
  description: 'Built with Next.js, TypeScript, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 2. Add suppressHydrationWarning to the <html> tag
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300`}>
        {/* 
          3. Wrap your application with the Providers component and pass configuration props.
             These props will be passed directly to the ThemeProvider from next-themes.
        */}
        <Providers 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
