import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import PaginationClientComponent from './PaginationClientComponent';

const pageHeadings = [
  { title: 'Pagination', slug: 'pagination', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'With Icons', slug: 'with-icons', level: 2 },
  { title: 'Previous and Next Only', slug: 'prev-next-only', level: 2 },
  { title: 'Modern Pagination', slug: 'modern-pagination', level: 2 },
  { title: 'Advanced Pagination', slug: 'advanced-pagination', level: 2 },
  { title: 'Minimalist Pagination', slug: 'minimalist-pagination', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Pagination Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen pagination yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, dengan ikon, dan modern.',
  keywords: ['react pagination', 'tailwind css pagination', 'pagination component', 'navigation component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Pagination Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen pagination yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function PaginationPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Pagination</span>
        </nav>

        <h1 id="pagination" className="scroll-mt-20 text-4xl font-bold">
          Pagination
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Komponen pagination digunakan untuk membagi konten menjadi beberapa halaman, memungkinkan pengguna untuk menavigasi antar halaman dengan mudah.
        </p>
        <PaginationClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}