import RightSidebar from '@/components/docs/RightSideBar'; 
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ButtonClientComponent from './ButtonClientComponent';

export const metadata: Metadata = {
  title: 'React Button Component - Tailwind CSS | Jhonz Template',
  description: 'Dokumentasi dan contoh penggunaan untuk komponen tombol yang dibuat dengan React dan Tailwind CSS. Termasuk berbagai gaya seperti solid, outline, gradient, dan animasi interaktif.',
  keywords: ['react button', 'tailwind css button', 'button component', 'interactive button', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React Button Component - Tailwind CSS | Jhonz Template',
    description: 'Berbagai contoh komponen tombol yang modern, interaktif, dan dapat disesuaikan, dibuat dengan React dan Tailwind CSS.',
  },
};

const pageHeadings = [
  { title: 'Button', slug: 'button', level: 1 },
  { title: 'Solid', slug: 'solid', level: 2 },
  { title: 'Outline', slug: 'outline', level: 2 },
  { title: 'Ghost', slug: 'ghost', level: 2 },
  { title: 'Link', slug: 'link', level: 2 },
  { title: 'With Icon', slug: 'with-icon', level: 2 },
  { title: 'Sizes', slug: 'sizes', level: 2 },
  { title: 'Disabled State', slug: 'disabled-state', level: 2 },
  { title: 'Gradient', slug: 'gradient', level: 2 },
  { title: 'Glassmorphism', slug: 'glassmorphism', level: 2 },
  { title: 'Animated', slug: 'animated', level: 2 },
  { title: 'Wave Animation', slug: 'wave-animation', level: 2 },
  { title: 'Fill Animation', slug: 'fill-animation', level: 2 },
  { title: 'Pushable', slug: 'pushable', level: 2 },
  { title: 'Expanding Icon', slug: 'expanding-icon', level: 2 },
  { title: 'Shine Effect', slug: 'shine', level: 2 },
  { title: 'Circular Text', slug: 'circular-text', level: 2 },
  { title: 'Spotlight', slug: 'spotlight', level: 2 },
  { title: 'Aurora Effect', slug: 'aurora-effect', level: 2 },
  { title: 'Magnetic', slug: 'magnetic', level: 2 },
  { title: 'Neon', slug: 'neon', level: 2 },
  { title: 'Bubbly', slug: 'bubbly', level: 2 },
  { title: 'Gooey', slug: 'gooey', level: 2 },
  { title: 'Parallax Tilt', slug: 'parallax-tilt', level: 2 },
  { title: 'Border Animation', slug: 'border-animation', level: 2 },
  { title: 'Shimmer', slug: 'shimmer', level: 2 },
  { title: 'Dock Effect', slug: 'dock-effect', level: 2 },
  { title: 'Cyberpunk', slug: 'cyberpunk', level: 2 },
  { title: 'AI Action Button', slug: 'ai-action', level: 2 },
  { title: 'Retro Shadow', slug: 'retro-shadow', level: 2 },
  { title: '3D Flip', slug: '3d-flip', level: 2 },
  { title: 'Draw-in Border', slug: 'draw-in-border', level: 2 },
  { title: 'Gradient Follow', slug: 'gradient-follow', level: 2 },
];

export default function ButtonsPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center space-x-2 text-sm text-slate-500"
        >
          <Link
            href="/docs"
            className="block transition hover:text-slate-700"
          >
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Button</span>
        </nav>

        <h1 id="button" className="scroll-mt-20 text-4xl font-bold">
          Button
        </h1>

        <p className="mt-4 text-slate-600">
          Buttons are a fundamental component of any user interface, enabling
          users to take actions and make choices. This documentation showcases
          the various button styles and variants available in the Jhonz
          template. Each button is designed with clarity, accessibility, and
          ease of customization in mind, ensuring a seamless integration into
          your projects.
        </p>
        <ButtonClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}
