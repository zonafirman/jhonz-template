import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ProgressBarClientComponent from './ProgressBarClientComponent';

const pageHeadings = [
  { title: 'Progress Bar', slug: 'progress-bar', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'With Label', slug: 'with-label', level: 2 },
  { title: 'Different Colors', slug: 'different-colors', level: 2 },
  { title: 'Different Sizes', slug: 'different-sizes', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Progress Bar Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen progress bar yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, dengan label, dan berbagai warna serta ukuran.',
  keywords: ['react progress bar', 'tailwind css progress bar', 'progress bar component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Progress Bar Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen progress bar yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function ProgressBarPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Progress Bar</span>
        </nav>

        <h1 id="progress-bar" className="scroll-mt-20 text-4xl font-bold">
          Progress Bar
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Gunakan komponen progress bar untuk menampilkan kemajuan suatu proses atau tugas kepada pengguna secara visual.
        </p>
        <ProgressBarClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}