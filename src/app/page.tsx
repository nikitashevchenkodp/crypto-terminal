import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center p-24">
      <h1>HEre will be cool landing page </h1>
      <Link href="/terminal" className="text-primary underline">
        Go to the terminal
      </Link>
    </main>
  );
}
