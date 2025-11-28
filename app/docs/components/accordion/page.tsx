import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import AccordionClientComponent from './AccordionClientComponent';

export const metadata: Metadata = {
  title: 'React Accordion Component - Tailwind CSS | Jhonz Template',
  description: 'Documentation and usage examples for interactive and accessible accordion components built with React and Tailwind CSS. Includes simple, flush, modern, timeline, bento grid, and other styles.',
  keywords: ['react accordion', 'tailwind css accordion', 'accordion component', 'interactive accordion', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona FIrman', url: 'zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Accordion Component - Tailwind CSS | Jhonz Template',
    description: 'A variety of interactive and modern accordion component examples built with React and Tailwind CSS.',
  },
};

const pageHeadings = [
  { title: 'Accordion', slug: 'accordion', level: 1 },
  { title: 'Simple', slug: 'simple-accordion', level: 2 },
  { title: 'Always Open', slug: 'always-open', level: 2 },
  { title: 'Flush', slug: 'flush-accordion', level: 2 },
  { title: 'With Icons', slug: 'accordion-with-icons', level: 2 },
  { title: 'Styled', slug: 'styled-accordion', level: 2 },
  { title: 'Modern', slug: 'modern-accordion', level: 2 },
  { title: 'Gradient Accent', slug: 'gradient-accent-accordion', level: 2 },
  { title: 'Spotlight', slug: 'spotlight-accordion', level: 2 },
  { title: 'Timeline', slug: 'timeline-accordion', level: 2 },
  { title: 'Kinetic', slug: 'kinetic-accordion', level: 2 },
  { title: 'Bento Grid', slug: 'bento-grid-accordion', level: 2 },
  { title: 'Frosted Glass', slug: 'frosted-glass-accordion', level: 2 },
  { title: 'Inset', slug: 'inset-accordion', level: 2 },
];

export default function AccordionPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Accordion</span>
        </nav>

        <h1 id="accordion" className="scroll-mt-20 text-4xl font-bold">
          Accordion
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          An accordion is a user interface component that allows you to show and hide sections of content. It&apos;s particularly useful for FAQ sections, feature lists, or whenever you need to present a lot of information in a limited space.
        </p>
        <AccordionClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}