import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TooltipClientComponent from './TooltipClientComponent';

const pageHeadings = [
  { title: 'Tooltip', slug: 'tooltip', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Positioning', slug: 'positioning', level: 2 },
  { title: 'Triggering', slug: 'triggering', level: 2 },
  { title: 'Styling', slug: 'styling', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Tooltip Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen tooltip yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai posisi, pemicu, dan gaya.',
  keywords: ['react tooltip', 'tailwind css tooltip', 'tooltip component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Tooltip Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen tooltip yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function TooltipPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Tooltip</span>
        </nav>

        <h1 id="tooltip" className="scroll-mt-20 text-4xl font-bold">
          Tooltip
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen tooltip untuk menampilkan informasi tambahan saat pengguna mengarahkan kursor atau fokus pada sebuah elemen.</p>
        <TooltipClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}