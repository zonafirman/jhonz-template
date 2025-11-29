import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TestimonialSectionsClientComponent from './TestimonialSectionsClientComponent';

export const metadata: Metadata = {
  title: 'React Testimonial Section - Tailwind CSS | Jhonz Template',
  description: 'Documentation and examples for testimonial sections built with React and Tailwind CSS. Includes simple and grid layouts.',
  keywords: ['react testimonial section', 'tailwind css testimonial', 'social proof component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Testimonial Section - Tailwind CSS | Jhonz Template',
    description: 'A variety of modern and customizable testimonial sections built with React and Tailwind CSS.',
  },
};

export default function TestimonialSectionsPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1">
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
        <p className="mt-4 text-slate-600 dark:text-slate-400">The testimonial section is used to display feedback from customers to build trust and credibility.</p>
        <TestimonialSectionsClientComponent />
      </article>
    </div>
  );
}