import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import RatingClientComponent from './RatingClientComponent';

const pageHeadings = [
  { title: 'Rating', slug: 'rating', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Rating with Text', slug: 'rating-with-text', level: 2 },
  { title: 'Advanced Rating', slug: 'advanced-rating', level: 2 },
  { title: 'Different Sizes', slug: 'different-sizes', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Rating Component - Tailwind CSS | Jhonz Template',
  description: 'Documentation and examples for rating components built with React and Tailwind CSS, commonly used for displaying user reviews with stars.',
  keywords: ['react rating', 'tailwind css rating', 'star rating component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Rating Component - Tailwind CSS | Jhonz Template',
    description: 'A variety of modern and customizable rating components built with React and Tailwind CSS, including examples with text and different sizes.',
  },
};

export default function RatingPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Rating</span>
        </nav>

        <h1 id="rating" className="scroll-mt-20 text-4xl font-bold">
          Rating
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen rating untuk menampilkan penilaian atau ulasan dari pengguna, biasanya dalam bentuk bintang.</p>
        <RatingClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}