import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SelectClientComponent from './SelectClientComponent';

const pageHeadings = [
  { title: 'Select', slug: 'select', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Disabled State', slug: 'disabled-state', level: 2 },
  { title: 'With Helper Text', slug: 'with-helper-text', level: 2 },
  { title: 'Different Sizes', slug: 'different-sizes', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Select Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen select yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, dinonaktifkan, dan dengan teks bantuan.',
  keywords: ['react select', 'tailwind css select', 'select component', 'dropdown component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Select Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen select yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function SelectPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Select</span>
        </nav>

        <h1 id="select" className="scroll-mt-20 text-4xl font-bold">
          Select
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen select untuk memungkinkan pengguna memilih satu opsi dari daftar.</p>
        <SelectClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}