import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import BackToTopButtonClientComponent from './BackToTopButtonClientComponent';

export const metadata: Metadata = {
  title: 'React Back to Top Button Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen tombol kembali ke atas (back to top) yang dibuat dengan React dan Tailwind CSS, termasuk variasi dengan progress scroll.',
  keywords: ['react back to top button', 'tailwind css scroll to top', 'scroll to top component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Back to Top Button Component - Tailwind CSS | Jhonz Template',
    description: 'Contoh komponen tombol kembali ke atas yang fungsional dan modern dengan React dan Tailwind CSS.',
  },
};

const pageHeadings = [
  { title: 'Back to Top Button', slug: 'back-to-top-button', level: 1 },
  { title: 'Simple', slug: 'simple', level: 2 },
  { title: 'With Text', slug: 'with-text', level: 2 },
  { title: 'Custom Style', slug: 'custom-style', level: 2 },
  { title: 'With Scroll Progress', slug: 'with-scroll-progress', level: 2 },
];

export default function BackToTopButtonPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Back to Top Button</span>
        </nav>

        <h1 id="back-to-top-button" className="scroll-mt-20 text-4xl font-bold">
          Back to Top Button
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">A button that appears when the user scrolls down the page, allowing them to quickly return to the top. This component requires client-side JavaScript to function.</p>
        <BackToTopButtonClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}