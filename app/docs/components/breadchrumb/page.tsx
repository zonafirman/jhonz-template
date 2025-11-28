import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import BreadcrumbClientComponent from './BreadcrumbClientComponent';

export const metadata: Metadata = {
  title: 'React Breadcrumb Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen breadcrumb yang dibuat dengan React dan Tailwind CSS. Termasuk gaya sederhana, dengan ikon, dan modern.',
  keywords: ['react breadcrumb', 'tailwind css breadcrumb', 'breadcrumb component', 'navigation component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Breadcrumb Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen breadcrumb yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

const pageHeadings = [
  { title: 'Breadcrumb', slug: 'breadcrumb', level: 1 },
  { title: 'Simple', slug: 'simple', level: 2 },
  { title: 'With Icons', slug: 'with-icons', level: 2 },
  { title: 'Custom Separator', slug: 'custom-separator', level: 2 },
  { title: 'Modern Style', slug: 'modern-style', level: 2 },
];

export default function BreadcrumbPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Breadcrumb</span>
        </nav>

        <h1 id="breadcrumb" className="scroll-mt-20 text-4xl font-bold">
          Breadcrumb
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Breadcrumbs are a navigational aid that helps users understand their location within a website or application. They provide a trail of links from the current page back to the homepage.
        </p>
        <BreadcrumbClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}