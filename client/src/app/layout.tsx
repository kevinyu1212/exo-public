import type { Metadata } from 'next';
import AuthInitializer from '@/components/auth/auth-initializer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Exo:Public',
  description: '사육자의 신뢰와 개체의 이야기를 연결하는 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AuthInitializer />
        {children}
      </body>
    </html>
  );
}
