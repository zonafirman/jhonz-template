import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TestimonialSectionsClientComponent from './TestimonialSectionsClientComponent';

export const metadata: Metadata = {
  title: 'React Testimonial Section - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk bagian testimoni yang dibuat dengan React dan Tailwind CSS. Termasuk tata letak ticker bergulir, masonry, grid unggulan, carousel, modern, dan interaktif untuk 2025.',
  keywords: ['react testimonial section', 'tailwind css testimonial', 'social proof component', 'ui component', 'jhonz template', 'modern testimonial 2025', 'interactive testimonial', 'carousel testimonial', 'featured grid testimonial', 'masonry testimonial', 'scrolling ticker testimonial', 'aurora testimonial'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Testimonial Section - Tailwind CSS | Jhonz Template',
    description: 'Berbagai bagian testimoni yang modern, interaktif, dan dapat disesuaikan yang dibuat dengan React dan Tailwind CSS, termasuk tata letak ticker bergulir, masonry, grid unggulan, dan carousel.',
  },
};

export default function TestimonialSectionsPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-3">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Testimonial Section</span>
        </nav>

        <h1 id="testimonial-section" className="scroll-mt-20 text-4xl font-bold">
          Testimonial Section
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Bagian testimoni digunakan untuk menampilkan umpan balik dari pelanggan untuk membangun kepercayaan dan kredibilitas. Di bawah ini adalah berbagai gaya yang dapat Anda gunakan.</p>
        <TestimonialSectionsClientComponent />
      </article>
    </div>
  );
}