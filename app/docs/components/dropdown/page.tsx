import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import DropdownClientComponent from './DropdownClientComponent';

export const metadata: Metadata = {
  title: 'React Dropdown Component - Tailwind CSS | Jhonz Template',
  description: 'Documentation and examples for dropdown components built with React and Tailwind CSS. Includes simple, with dividers, headers, icons, and modern styles.',
  keywords: ['react dropdown', 'tailwind css dropdown', 'dropdown menu component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Dropdown Component - Tailwind CSS | Jhonz Template',
    description: 'A variety of modern and customizable dropdown components built with React and Tailwind CSS, including examples with icons, dividers, and headers.',
  },
};

const pageHeadings = [
  { title: 'Dropdown', slug: 'dropdown', level: 1 },
  { title: 'Simple Dropdown', slug: 'simple-dropdown', level: 2 },
  { title: 'With Divider', slug: 'with-divider', level: 2 },
  { title: 'With Header', slug: 'with-header', level: 2 },
  { title: 'With Icon', slug: 'with-icon', level: 2 },
  { title: 'Modern Dropdown', slug: 'modern-dropdown', level: 2 },
];

export default function DropdownPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Dropdown</span>
        </nav>

        <h1 id="dropdown" className="scroll-mt-20 text-4xl font-bold">
          Dropdown
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Dropdowns are used to display a list of options when a user clicks on a button or another element.</p>
        <DropdownClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}