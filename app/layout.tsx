import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deployment Test App',
  description: 'Minimal Next.js app for testing Azure App Service deployment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

