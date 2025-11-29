import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ToastClientComponent from './ToastClientComponent';

const pageHeadings = [
  { title: 'Toast', slug: 'toast', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Toast with Action', slug: 'toast-with-action', level: 2 },
  { title: 'Toast with Icon', slug: 'toast-with-icon', level: 2 },
  { title: 'Positioning', slug: 'positioning', level: 2 },
];

export const metadata: Metadata = {
  title: 'React Toast Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh untuk komponen toast (notifikasi) yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti dasar, dengan aksi, dan dengan ikon.',
  keywords: ['react toast', 'tailwind css toast', 'notification component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Toast Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen toast yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

export default function ToastPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Toast</span>
        </nav>

        <h1 id="toast" className="scroll-mt-20 text-4xl font-bold">
          Toast
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen toast untuk menampilkan notifikasi singkat yang tidak mengganggu kepada pengguna.</p>
        <ToastClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}