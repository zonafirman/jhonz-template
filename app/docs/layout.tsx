import type { Metadata } from 'next';

import Sidebar from '@/components/docs/SideBar';
import Navbar from '@/components/docs/Navbar';
import RightSidebar from '@/components/docs/RightSideBar';

export const metadata: Metadata = {
  title: 'Jhonz Docs',
  description: 'Documentation for Jhonz sass',
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
     <Navbar />
      <Sidebar />
      <main className="pl-72 pr-64 pb-10 pt-24">{children}</main>
    </>
  );
}