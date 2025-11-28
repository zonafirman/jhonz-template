import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import InputClientComponent from './InputClientComponent';

const pageHeadings = [
  { title: 'Input', slug: 'input', level: 1 },
  { title: 'Basic Inputs', slug: 'basic-inputs', level: 2 },
  { title: 'Simple', slug: 'simple', level: 3 },
  { title: 'With Label', slug: 'with-label', level: 3 },
  { title: 'With Helper Text', slug: 'with-helper-text', level: 3 },
  { title: 'Disabled', slug: 'disabled', level: 3 },
  { title: 'Input with Icons', slug: 'input-with-icons', level: 2 },
  { title: 'Leading Icon', slug: 'leading-icon', level: 3 },
  { title: 'Trailing Icon', slug: 'trailing-icon', level: 3 },
  { title: 'Validation States', slug: 'validation-states', level: 2 },
  { title: 'Success State', slug: 'success-state', level: 3 },
  { title: 'Error State', slug: 'error-state', level: 3 },
  { title: 'Advanced Inputs', slug: 'advanced-inputs', level: 2 },
  { title: 'Floating Label', slug: 'floating-label', level: 3 },
  { title: 'Input with Add-on', slug: 'input-with-addon', level: 3 },
  { title: 'Search Input', slug: 'search-input', level: 3 },
  { title: 'Password Input', slug: 'password-input', level: 3 },
  { title: 'Animated Underline', slug: 'animated-underline', level: 3 },
  { title: 'Verification Code (OTP)', slug: 'otp-input', level: 3 },
  { title: 'Spotlight Input', slug: 'spotlight-input', level: 3 },
  { title: 'File Upload', slug: 'file-upload', level: 3 },
  { title: 'AI-Enhanced Input', slug: 'ai-enhanced-input', level: 3 },
  { title: 'Gradient Border', slug: 'gradient-border-input', level: 3 },
  { title: 'Particle Input', slug: 'particle-input', level: 3 },
];

export const metadata: Metadata = {
  title: 'React Input Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen input yang dibuat dengan React dan Tailwind CSS. Termasuk gaya dasar, dengan ikon, status validasi, dan input lanjutan seperti floating label dan AI-enhanced.',
  keywords: ['react input', 'tailwind css input', 'input component', 'form input', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Input Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen input yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS, termasuk input dengan efek visual dan fungsionalitas canggih.',
  },
};

export default function InputPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Input</span>
        </nav>

        <h1 id="input" className="scroll-mt-20 text-4xl font-bold">
          Input
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Input components are used to collect data from users via forms. They are available in various styles and states to meet your interface needs.
        </p>
        <InputClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}