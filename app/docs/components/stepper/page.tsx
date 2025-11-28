import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import StepperClientComponent from './StepperClientComponent';

const pageHeadings = [
  { title: 'Stepper', slug: 'stepper', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Stepper with Icons', slug: 'stepper-with-icons', level: 2 },
  { title: 'Vertical Stepper', slug: 'vertical-stepper', level: 2 },
  { title: 'Stepper with Content', slug: 'stepper-with-content', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Stepper Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen stepper yang dibuat dengan React dan Tailwind CSS. Termasuk stepper horizontal, vertikal, dengan ikon, dan konten.',
  keywords: ['react stepper', 'tailwind css stepper', 'progress steps', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Stepper Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen stepper yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function StepperPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Stepper</span>
        </nav>

        <h1 id="stepper" className="scroll-mt-20 text-4xl font-bold">
          Stepper
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen stepper untuk menunjukkan kemajuan pengguna melalui serangkaian langkah atau tahapan.</p>
        <StepperClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}