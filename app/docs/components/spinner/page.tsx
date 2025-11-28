import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpinnerClientComponent from './SpinnerClientComponent';

const pageHeadings = [
  { title: 'Spinner', slug: 'spinner', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Colors', slug: 'colors', level: 2 },
  { title: 'Sizes', slug: 'sizes', level: 2 },
  { title: 'Alignment', slug: 'alignment', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Spinner Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen spinner yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai warna, ukuran, dan opsi penyelarasan.',
  keywords: ['react spinner', 'tailwind css spinner', 'loading spinner', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Spinner Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen spinner yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function SpinnerPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Spinner</span>
        </nav>

        <h1 id="spinner" className="scroll-mt-20 text-4xl font-bold">
          Spinner
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen spinner untuk menunjukkan status pemuatan suatu aksi atau halaman.</p>
        <SpinnerClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}