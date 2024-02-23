import React from 'react';
import { DesktopLayout } from './layouts/DesktopLayout';
import { MobileLayout } from './layouts/MobileLayout';

export default function Home() {
  return (
    <>
      <DesktopLayout />
      <MobileLayout />
    </>
  );
}
