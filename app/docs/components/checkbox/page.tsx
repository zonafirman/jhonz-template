import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import CheckboxClientComponent from './CheckboxClientComponent';

export const metadata: Metadata = {
  title: 'React Checkbox Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen checkbox yang dibuat dengan React dan Tailwind CSS. Termasuk gaya sederhana, dengan label, dinonaktifkan, dan gaya kartu.',
  keywords: ['react checkbox', 'tailwind css checkbox', 'checkbox component', 'form component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Checkbox Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen checkbox yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

const pageHeadings = [
  { title: 'Checkbox', slug: 'checkbox', level: 1 },
  { title: 'Simple', slug: 'simple-checkbox', level: 2 },
  { title: 'With Label', slug: 'checkbox-with-label', level: 2 },
  { title: 'Disabled', slug: 'disabled-checkbox', level: 2 },
  { title: 'Custom Color', slug: 'custom-color-checkbox', level: 2 },
  { title: 'With Description', slug: 'checkbox-with-description', level: 2 },
  { title: 'Card Style', slug: 'card-style-checkbox', level: 2 },
];

export default function CheckboxPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Checkbox</span>
        </nav>

        <h1 id="checkbox" className="scroll-mt-20 text-4xl font-bold">
          Checkbox
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Checkboxes allow users to select one or more options from a set. They are ideal for forms, settings, and lists where multiple selections are possible.
        </p>
        <CheckboxClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}