import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SliderClientComponent from './SliderClientComponent';

const pageHeadings = [
  { title: 'Slider', slug: 'slider', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Slider with Controls', slug: 'slider-with-controls', level: 2 },
  { title: 'Slider with Indicators', slug: 'slider-with-indicators', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Slider Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen slider (carousel) yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, dengan kontrol, dan dengan indikator.',
  keywords: ['react slider', 'tailwind css slider', 'carousel component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Slider Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen slider yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function SliderPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Slider</span>
        </nav>

        <h1 id="slider" className="scroll-mt-20 text-4xl font-bold">
          Slider
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen slider untuk menampilkan gambar atau konten lain dalam format carousel.</p>
        <SliderClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}