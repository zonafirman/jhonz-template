import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import DividerClientComponent from './DividerClientComponent';

export const metadata: Metadata = {
  title: 'React Divider Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen divider (pemisah) yang dibuat dengan React dan Tailwind CSS. Termasuk gaya horizontal, vertikal, dengan teks, dan ikon.',
  keywords: ['react divider', 'tailwind css divider', 'divider component', 'hr component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Divider Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen divider yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};
const pageHeadings = [
  { title: 'Divider', slug: 'divider', level: 1 },
  { title: 'Simple', slug: 'simple-divider', level: 2 },
  { title: 'With Text', slug: 'divider-with-text', level: 2 },
  { title: 'With Icon', slug: 'divider-with-icon', level: 2 },
  { title: 'Vertical', slug: 'vertical-divider', level: 2 },
  { title: 'Styled', slug: 'styled-divider', level: 2 },
];

export default function DividerPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Divider</span>
        </nav>

        <h1 id="divider" className="scroll-mt-20 text-4xl font-bold">
          Divider
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A divider is a thin line that groups content in lists and layouts. It helps to visually separate elements and improve organization.
        </p>
        <DividerClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}