import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import IconClientComponent from './IconClientComponent';

const pageHeadings = [
  { title: 'Icon', slug: 'icon', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Sizing', slug: 'sizing', level: 2 },
  { title: 'Coloring', slug: 'coloring', level: 2 },
  { title: 'As a Button', slug: 'icon-as-button', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Icon Component - Tailwind CSS | Jhonz Template',
  description: 'Documentation and examples for using icons with React and Tailwind CSS. Includes examples for sizing, coloring, and using icons as buttons.',
  keywords: ['react icon', 'tailwind css icon', 'svg icon component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Icon Component - Tailwind CSS | Jhonz Template',
    description: 'Learn how to effectively use SVG icons in your React projects with Tailwind CSS, with examples for customization and interactivity.',
  },
};

export default function IconPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Icon</span>
        </nav>

        <h1 id="icon" className="scroll-mt-20 text-4xl font-bold">
          Icon
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Icons are visual elements used to represent actions, objects, or ideas. Consistent use of icons can improve the usability and aesthetics of your interface.
        </p>
        <IconClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}