import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ToggleClientComponent from './ToggleClientComponent';

const pageHeadings = [
  { title: 'Toggle', slug: 'toggle', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Disabled State', slug: 'disabled-state', level: 2 },
  { title: 'Toggle with Icon', slug: 'toggle-with-icon', level: 2 },
  { title: 'Different Sizes', slug: 'different-sizes', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Toggle Switch Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen toggle switch yang dibuat dengan React dan Tailwind CSS. Termasuk status dinonaktifkan, dengan ikon, dan berbagai ukuran.',
  keywords: ['react toggle', 'tailwind css toggle', 'toggle switch component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Toggle Switch Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen toggle switch yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function TogglePage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Toggle</span>
        </nav>

        <h1 id="toggle" className="scroll-mt-20 text-4xl font-bold">
          Toggle
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen toggle untuk mengizinkan pengguna beralih antara dua status, seperti aktif atau nonaktif.</p>
        <ToggleClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}