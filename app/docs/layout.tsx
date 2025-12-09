'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/docs/SideBar';
import Navbar from '@/components/docs/Navbar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSectionsPage = pathname.startsWith('/docs/sections');

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className={`pb-10 pt-24 lg:pl-72 ${isSectionsPage ? 'px-4 sm:px-6 lg:px-8' : 'px-4 sm:px-6 lg:px-8 lg:pr-72'}`}>
        {children}
      </main>
    </>
  );
}