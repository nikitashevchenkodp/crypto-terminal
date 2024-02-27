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
      <body>
        <div className="flex flex-col w-screen h-screen">
          <Header />
          <main className="flex flex-1 ">{children}</main>
        </div>
      </body>
    </html>
  );
}
