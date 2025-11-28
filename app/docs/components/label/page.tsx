import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import LabelClientComponent from './LabelClientComponent';

const pageHeadings = [
  { title: 'Label', slug: 'label', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Required Indicator', slug: 'required-indicator', level: 2 },
  { title: 'Disabled State', slug: 'disabled-state', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Label Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen label yang dibuat dengan React dan Tailwind CSS untuk meningkatkan aksesibilitas form.',
  keywords: ['react label', 'tailwind css label', 'label component', 'form label', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
};

export default function LabelPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Label</span>
        </nav>

        <h1 id="label" className="scroll-mt-20 text-4xl font-bold">
          Label
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Label digunakan untuk memberikan deskripsi atau judul pada elemen input dalam sebuah form, meningkatkan aksesibilitas dan pengalaman pengguna.
        </p>
        <LabelClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}