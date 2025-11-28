import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import DatePickerClientComponent from './DatePickerClientComponent';

export const metadata: Metadata = {
  title: 'React Date Picker Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen date picker yang dibuat dengan React dan Tailwind CSS. Termasuk gaya sederhana, dengan ikon, dan rentang tanggal.',
  keywords: ['react date picker', 'tailwind css date picker', 'date picker component', 'form component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Date Picker Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen date picker yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};
const pageHeadings = [
  { title: 'Date Picker', slug: 'date-picker', level: 1 },
  { title: 'Simple', slug: 'simple-date-picker', level: 2 },
  { title: 'With Icon', slug: 'with-icon', level: 2 },
  { title: 'Date Range', slug: 'date-range', level: 2 },
];

export default function DatePickerPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Date Picker</span>
        </nav>

        <h1 id="date-picker" className="scroll-mt-20 text-4xl font-bold">
          Date Picker
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The date picker component allows users to select a date from a calendar. This is a standard HTML input element styled with Tailwind CSS.
        </p>
        <DatePickerClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}