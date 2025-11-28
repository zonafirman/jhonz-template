import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import LinkClientComponent from './LinkClientComponent';

const pageHeadings = [
  { title: 'Link', slug: 'link', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Without Underline', slug: 'without-underline', level: 2 },
  { title: 'With Icon', slug: 'with-icon', level: 2 },
  { title: 'As a Button', slug: 'as-a-button', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Link Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen Link yang dibuat dengan React dan Tailwind CSS untuk navigasi.',
  keywords: ['react link', 'tailwind css link', 'link component', 'next.js link', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
};

export default function LinkPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Link</span>
        </nav>

        <h1 id="link" className="scroll-mt-20 text-4xl font-bold">
          Link
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Gunakan komponen Link untuk navigasi antar halaman dalam aplikasi Next.js Anda. Komponen ini menyediakan pre-fetching dan client-side navigation untuk pengalaman pengguna yang lebih cepat.
        </p>
        <LinkClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}