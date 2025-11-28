import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TabsClientComponent from './TabsClientComponent';

const pageHeadings = [
  { title: 'Tabs', slug: 'tabs', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Tabs with Icons', slug: 'tabs-with-icons', level: 2 },
  { title: 'Tabs with Underline', slug: 'tabs-with-underline', level: 2 },
  { title: 'Pills Tabs', slug: 'pills-tabs', level: 2 },
  { title: 'Full Width Tabs', slug: 'full-width-tabs', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Tabs Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen tab yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, dengan ikon, garis bawah, dan pil.',
  keywords: ['react tabs', 'tailwind css tabs', 'tab component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Tabs Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen tab yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function TabsPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Tabs</span>
        </nav>

        <h1 id="tabs" className="scroll-mt-20 text-4xl font-bold">
          Tabs
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen tab untuk mengatur konten ke dalam beberapa bagian yang dapat ditampilkan satu per satu.</p>
        <TabsClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}