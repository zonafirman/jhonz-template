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
      <main className={isSectionsPage ? 'pl-72 pb-10 pt-24' : 'pl-72 pr-64 pb-10 pt-24'}>
        {children}
      </main>
    </>
  );
}