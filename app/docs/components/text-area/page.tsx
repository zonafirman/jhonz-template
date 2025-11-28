import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TextAreaClientComponent from './TextAreaClientComponent';

const pageHeadings = [
  { title: 'Text Area', slug: 'text-area', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Disabled State', slug: 'disabled-state', level: 2 },
  { title: 'With Helper Text', slug: 'with-helper-text', level: 2 },
  { title: 'Validation', slug: 'validation', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Text Area Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen text area yang dibuat dengan React dan Tailwind CSS. Termasuk status dinonaktifkan, teks bantuan, dan validasi.',
  keywords: ['react text area', 'tailwind css text area', 'textarea component', 'form component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Text Area Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen text area yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function TextAreaPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Text Area</span>
        </nav>

        <h1 id="text-area" className="scroll-mt-20 text-4xl font-bold">
          Text Area
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen Text Area untuk input teks multi-baris dalam formulir.</p>
        <TextAreaClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}