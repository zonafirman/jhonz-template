import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import AvatarClientComponent from './AvatarClientComponent';

export const metadata: Metadata = {
  title: 'React Avatar Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen avatar yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai ukuran, bentuk, indikator, dan grup.',
  keywords: ['react avatar', 'tailwind css avatar', 'avatar component', 'profile picture component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Avatar Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen avatar yang modern dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

const pageHeadings = [
  { title: 'Avatar', slug: 'avatar', level: 1 },
  { title: 'Simple', slug: 'simple', level: 2 },
  { title: 'Sizes', slug: 'sizes', level: 2 },
  { title: 'Shapes', slug: 'shapes', level: 2 },
  { title: 'With Indicator', slug: 'with-indicator', level: 2 },
  { title: 'With Placeholder', slug: 'with-placeholder', level: 2 },
  { title: 'Group', slug: 'group', level: 2 },
  { title: 'Stacked', slug: 'stacked', level: 2 },
  { title: 'With Ring', slug: 'with-ring', level: 2 },
  { title: 'With Tooltip', slug: 'with-tooltip', level: 2 },
];

export default function AvatarPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Avatar</span>
        </nav>

        <h1 id="avatar" className="scroll-mt-20 text-4xl font-bold">
          Avatar
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Avatars are used to represent a user or a brand. They can be displayed in various shapes, sizes, and with additional elements like status indicators or tooltips.
        </p>
        <AvatarClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}