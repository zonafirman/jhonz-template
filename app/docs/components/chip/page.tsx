import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ChipClientComponent from './ChipClientComponent';

export const metadata: Metadata = {
  title: 'React Chip Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen chip (atau tag) yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, berwarna, outline, dan dapat dilepas.',
  keywords: ['react chip', 'tailwind css chip', 'chip component', 'tag component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Chip Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen chip yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

const pageHeadings = [
  { title: 'Chip', slug: 'chip', level: 1 },
  { title: 'Basic', slug: 'basic-chips', level: 2 },
  { title: 'Colors', slug: 'colored-chips', level: 2 },
  { title: 'Outline', slug: 'outline-chips', level: 2 },
  { title: 'With Icon', slug: 'chips-with-icon', level: 2 },
  { title: 'With Avatar', slug: 'chips-with-avatar', level: 2 },
  { title: 'Removable', slug: 'removable-chips', level: 2 },
  { title: 'Sizes', slug: 'chip-sizes', level: 2 },
];

export default function ChipPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Chip</span>
        </nav>

        <h1 id="chip" className="scroll-mt-20 text-4xl font-bold">
          Chip
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Chips are compact elements that represent an input, attribute, or action. They allow users to make selections, filter content, or trigger actions.
        </p>
        <ChipClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}