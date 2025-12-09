import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import HeroSectionsClientComponent from './HeroSectionsClientComponent';

export const metadata: Metadata = {
  title: 'React Hero Section - Tailwind CSS | Jhonz Template',
  description: 'Documentation and examples for hero sections built with React and Tailwind CSS. Includes a variety of styles like simple, with image, background image, and modern, interactive layouts for 2025.',
  keywords: ['react hero section', 'tailwind css hero', 'interactive hero section', 'modern hero 2025', 'landing page component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Hero Section - Tailwind CSS | Jhonz Template',
    description: 'A variety of modern, interactive, and customizable hero sections built with React and Tailwind CSS.',
  },
};

export default function HeroSectionsPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Hero Section</span>
        </nav>

        <h1 id="hero-section" className="scroll-mt-20 text-4xl font-bold">
          Hero Section
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The hero section is the first thing users see on a webpage. It should be visually appealing and clearly communicate the main message or value proposition. Below are various styles of hero sections you can use in your
          projects.
        </p>
        <HeroSectionsClientComponent />
      </article>
    </div>
  );
}