import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import RadioButtonClientComponent from './RadioButtonClientComponent';

const pageHeadings = [
  { title: 'Radio Button', slug: 'radio-button', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Disabled State', slug: 'disabled-state', level: 2 },
  { title: 'Radio Group', slug: 'radio-group', level: 2 },
  { title: 'With Description', slug: 'with-description', level: 2 },
  { title: 'As a Card', slug: 'as-a-card', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Radio Button Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen radio button yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, dinonaktifkan, dan sebagai kartu.',
  keywords: ['react radio button', 'tailwind css radio button', 'radio button component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Radio Button Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen radio button yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function RadioButtonPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Radio Button</span>
        </nav>

        <h1 id="radio-button" className="scroll-mt-20 text-4xl font-bold">
          Radio Button
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen radio button untuk memungkinkan pengguna memilih satu opsi dari beberapa pilihan yang tersedia.</p>
        <RadioButtonClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}