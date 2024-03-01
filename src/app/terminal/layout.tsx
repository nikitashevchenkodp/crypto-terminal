'use client';
import Header from '@/components/widgets/Header';
import React, { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col w-screen h-screen relative">
        <Header />
        <main className="flex h-[calc(100vh-48px)]">{children}</main>
      </body>
    </html>
  );
}
