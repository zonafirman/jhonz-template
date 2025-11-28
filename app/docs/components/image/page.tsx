import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ImageClientComponent from './ImageClientComponent';

const pageHeadings = [
  { title: 'Image', slug: 'image', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Sizing', slug: 'sizing', level: 2 },
  { title: 'Radius', slug: 'radius', level: 2 },
  { title: 'Object Fit', slug: 'object-fit', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Image Component - Tailwind CSS | Jhonz Template',
  description: 'Documentation and examples for using the Next.js Image component with Tailwind CSS for optimized and responsive images.',
  keywords: ['react image', 'next.js image', 'tailwind css image', 'image optimization', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Image Component - Tailwind CSS | Jhonz Template',
    description: 'Learn how to use the Next.js Image component with Tailwind CSS for optimized, responsive, and styled images in your projects.',
  },
};

export default function ImagePage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Image</span>
        </nav>

        <h1 id="image" className="scroll-mt-20 text-4xl font-bold">
          Image
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Images are crucial for conveying information and enhancing the visual appeal of a website. This guide shows how to use the Next.js Image component with Tailwind CSS.</p>
        <ImageClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}