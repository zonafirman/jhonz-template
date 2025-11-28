import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import BadgeClientComponent from './BadgeClientComponent';

export const metadata: Metadata = {
  title: 'React Badge Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen badge yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti simple, pill, outline, dan glowing.',
  keywords: ['react badge', 'tailwind css badge', 'badge component', 'label component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Badge Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen badge yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

const pageHeadings = [
  { title: 'Badge', slug: 'badge', level: 1 },
  { title: 'Simple Badges', slug: 'simple-badges', level: 2 },
  { title: 'Pill Badges', slug: 'pill-badges', level: 2 },
  { title: 'Outline Badges', slug: 'outline-badges', level: 2 },
  { title: 'Badges with Icons', slug: 'badges-with-icons', level: 2 },
  { title: 'Notification Badge', slug: 'notification-badge', level: 2 },
  { title: 'Glowing Badge', slug: 'glowing-badge', level: 2 },
];

export default function BadgePage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Badge</span>
        </nav>

        <h1 id="badge" className="scroll-mt-20 text-4xl font-bold">
          Badge
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Badges are small count and labeling components used to highlight status, notifications, or short pieces of information.
        </p>
        <BadgeClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}