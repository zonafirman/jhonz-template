import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SkeletonClientComponent from './SkeletonClientComponent';

const pageHeadings = [
  { title: 'Skeleton', slug: 'skeleton', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Image Skeleton', slug: 'image-skeleton', level: 2 },
  { title: 'Text Skeleton', slug: 'text-skeleton', level: 2 },
  { title: 'Card Skeleton', slug: 'card-skeleton', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Skeleton Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen skeleton yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, gambar, teks, dan kartu.',
  keywords: ['react skeleton', 'tailwind css skeleton', 'loading skeleton', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Skeleton Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen skeleton yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function SkeletonPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Skeleton</span>
        </nav>

        <h1 id="skeleton" className="scroll-mt-20 text-4xl font-bold">
          Skeleton
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen skeleton untuk menampilkan placeholder visual dari antarmuka pengguna saat data sedang dimuat.</p>
        <SkeletonClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}