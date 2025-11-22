'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Tooltip', slug: 'tooltip', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Positioning', slug: 'positioning', level: 2 },
  { title: 'Triggering', slug: 'triggering', level: 2 },
  { title: 'Styling', slug: 'styling', level: 2 },
];

const basicTooltipCode = `<div class="relative inline-block">
  <button class="group rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
    Hover over me
    <div class="tooltip invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 dark:bg-slate-700">
      Tooltip content
      <div class="tooltip-arrow absolute" data-popper-arrow></div>
    </div>
  </button>
</div>`;

const positioningTooltipCode = `<div class="flex flex-wrap gap-4">
  <!-- Tooltip Top -->
  <div class="relative inline-block">
    <button class="group rounded-lg bg-slate-200 px-4 py-2 text-sm text-slate-700">
      Top
      <div class="tooltip invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm text-white opacity-0 group-hover:visible group-hover:opacity-100">...</div>
    </button>
  </div>
  <!-- Tooltip Right -->
  <div class="relative inline-block">
    <button class="group rounded-lg bg-slate-200 px-4 py-2 text-sm text-slate-700">
      Right
      <div class="tooltip invisible absolute left-full top-1/2 z-10 ms-2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm text-white opacity-0 group-hover:visible group-hover:opacity-100">...</div>
    </button>
  </div>
  <!-- Tooltip Bottom -->
  <div class="relative inline-block">
    <button class="group rounded-lg bg-slate-200 px-4 py-2 text-sm text-slate-700">
      Bottom
      <div class="tooltip invisible absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm text-white opacity-0 group-hover:visible group-hover:opacity-100">...</div>
    </button>
  </div>
  <!-- Tooltip Left -->
  <div class="relative inline-block">
    <button class="group rounded-lg bg-slate-200 px-4 py-2 text-sm text-slate-700">
      Left
      <div class="tooltip invisible absolute right-full top-1/2 z-10 me-2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm text-white opacity-0 group-hover:visible group-hover:opacity-100">...</div>
    </button>
  </div>
</div>`;

const triggeringTooltipCode = `<div class="relative inline-block">
  <button class="group rounded-lg border border-slate-300 px-5 py-2.5 text-center text-sm font-medium text-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:text-white">
    Focus me
    <div class="tooltip invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity group-focus:visible group-focus:opacity-100 dark:bg-slate-700">
      Tooltip on focus
    </div>
  </button>
</div>`;

const stylingTooltipCode = `<div class="relative inline-block">
  <button class="group rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700">
    Styled Tooltip
    <div class="tooltip invisible absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-red-100 px-3 py-2 text-sm font-medium text-red-900 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
      Custom styled tooltip
    </div>
  </button>
</div>`;

export default function TooltipPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Tooltip</span>
        </nav>

        <h1 id="tooltip" className="scroll-mt-20 text-4xl font-bold">
          Tooltip
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen tooltip untuk menampilkan informasi tambahan saat pengguna mengarahkan kursor atau fokus pada sebuah elemen.</p>

        <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Basic Usage
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari tooltip yang muncul saat hover. Gunakan kelas `group` pada elemen pemicu dan `group-hover` pada elemen tooltip.</p>
        <CodePreview code={basicTooltipCode}>
          <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: basicTooltipCode }} />
        </CodePreview>

        <h2 id="positioning" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Positioning
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Atur posisi tooltip (atas, kanan, bawah, atau kiri) menggunakan kelas utilitas positioning dari Tailwind CSS.</p>
        <CodePreview code={positioningTooltipCode.replace(/\.\.\./g, 'Tooltip content')}>
          <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: positioningTooltipCode.replace(/\.\.\./g, 'Tooltip content') }} />
        </CodePreview>

        <h2 id="triggering" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Triggering
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Tooltip juga dapat dipicu oleh event lain seperti fokus, menggunakan kelas `group-focus`.</p>
        <CodePreview code={triggeringTooltipCode}>
          <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: triggeringTooltipCode }} />
        </CodePreview>

        <h2 id="styling" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Styling
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Sesuaikan tampilan tooltip, seperti warna latar dan teks, menggunakan kelas utilitas dari Tailwind CSS.</p>
        <CodePreview code={stylingTooltipCode}>
          <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: stylingTooltipCode }} />
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}