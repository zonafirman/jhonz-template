import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import AlertClientComponent from './AlertClientComponent';

export const metadata: Metadata = {
  title: 'React Alert Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen alert yang interaktif dan mudah diakses, dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, modern, dan bento grid.',
  keywords: ['react alert', 'tailwind css alert', 'alert component', 'notification component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Alert Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen alert yang interaktif dan modern dibuat dengan React dan Tailwind CSS.',
  },
};

const pageHeadings = [
  { title: 'Alert', slug: 'alert', level: 1 },
  { title: 'Basic Alerts', slug: 'basic-alerts', level: 2 },
  { title: 'Simple', slug: 'simple', level: 3 },
  { title: 'With Icon', slug: 'with-icon', level: 3 },
  { title: 'With Title & Description', slug: 'with-title-description', level: 3 },
  { title: 'With Dismiss Button', slug: 'with-dismiss-button', level: 3 },
  { title: 'Color Variants', slug: 'color-variants', level: 3 },
  { title: 'Advanced Alerts', slug: 'advanced-alerts', level: 2 },
  { title: 'Modern Accent', slug: 'modern-accent', level: 3 },
  { title: 'Floating Alert', slug: 'floating-alert', level: 3 },
  { title: 'Interactive with Actions', slug: 'interactive-alert-actions', level: 3 },
  { title: 'Spotlight Alert', slug: 'spotlight-alert', level: 3 },
  { title: 'Gradient Icon Alert', slug: 'gradient-icon-alert', level: 3 },
  { title: 'Meteoric Alert', slug: 'meteoric-alert', level: 3 },
  { title: 'Bento Grid Alert', slug: 'bento-grid-alert', level: 3 },
];
export default function AlertPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Alert</span>
        </nav>

        <h1 id="alert" className="scroll-mt-20 text-4xl font-bold">
          Alert
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Alerts are used to display contextual messages to users. This component comes in various color variants and can include icons, titles, and close buttons. It&apos;s particularly useful for providing feedback, such as success messages, warnings, or errors.
        </p>
        <AlertClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}