'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Divider', slug: 'divider', level: 1 },
  { title: 'Simple', slug: 'simple-divider', level: 2 },
  { title: 'With Text', slug: 'divider-with-text', level: 2 },
  { title: 'With Icon', slug: 'divider-with-icon', level: 2 },
  { title: 'Vertical', slug: 'vertical-divider', level: 2 },
  { title: 'Styled', slug: 'styled-divider', level: 2 },
];

const simpleDividerCode = `<div class="w-full max-w-md">
  <p class="text-slate-600 dark:text-slate-400">Some content above the divider.</p>
  <hr class="my-4 border-slate-200 dark:border-slate-800" />
  <p class="text-slate-600 dark:text-slate-400">Some content below the divider.</p>
</div>`;

const withTextDividerCode = `<div class="relative flex items-center py-5">
  <div class="grow border-t border-slate-300 dark:border-slate-700"></div>
  <span class="mx-4 shrink text-sm font-semibold text-slate-500 dark:text-slate-400">OR</span>
  <div class="grow border-t border-slate-300 dark:border-slate-700"></div>
</div>`;

const withIconDividerCode = `<div class="relative flex items-center py-5">
  <div class="grow border-t border-slate-300 dark:border-slate-700"></div>
  <span class="mx-4 shrink text-slate-500 dark:text-slate-400">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  </span>
  <div class="grow border-t border-slate-300 dark:border-slate-700"></div>
</div>`;

const verticalDividerCode = `<div class="flex h-24 items-center justify-center space-x-4 rounded-lg bg-white p-4 dark:bg-slate-900">
  <span class="text-slate-600 dark:text-slate-400">Left</span>
  <div class="h-full w-px bg-slate-200 dark:bg-slate-800"></div>
  <span class="text-slate-600 dark:text-slate-400">Right</span>
</div>`;

const styledDividerCode = `<div class="w-full max-w-md">
  <p class="text-slate-600 dark:text-slate-400">Content</p>
  <hr class="my-4 h-1 rounded border-0 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />
  <p class="text-slate-600 dark:text-slate-400">Content</p>
</div>`;

export default function DividerPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Divider</span>
        </nav>

        <h1 id="divider" className="scroll-mt-20 text-4xl font-bold">
          Divider
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A divider is a thin line that groups content in lists and layouts. It helps to visually separate elements and improve organization.
        </p>

        <h2 id="simple-divider" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Simple Divider
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The most basic divider is a horizontal rule (`&lt;hr&gt;`) used to separate content vertically.
        </p>
        <CodePreview code={simpleDividerCode}>
          <div className="w-full max-w-md">
            <p className="text-slate-600 dark:text-slate-400">Some content above the divider.</p>
            <hr className="my-4 border-slate-200 dark:border-slate-800" />
            <p className="text-slate-600 dark:text-slate-400">Some content below the divider.</p>
          </div>
        </CodePreview>

        <h2 id="divider-with-text" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Text
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          You can embed text within a divider to create a labeled separator, which is useful for forms or alternative action sections.
        </p>
        <CodePreview code={withTextDividerCode}>
          <div className="w-full max-w-md">
            <div className="relative flex items-center py-5">
              <div className="grow border-t border-slate-300 dark:border-slate-700"></div>
              <span className="mx-4 shrink text-sm font-semibold text-slate-500 dark:text-slate-400">OR</span>
              <div className="grow border-t border-slate-300 dark:border-slate-700"></div>
            </div>
          </div>
        </CodePreview>

        <h2 id="divider-with-icon" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Icon
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Similarly, an icon can be placed in the middle of the divider for added visual flair and context.
        </p>
        <CodePreview code={withIconDividerCode}>
          <div className="w-full max-w-md">
            <div className="relative flex items-center py-5">
              <div className="grow border-t border-slate-300 dark:border-slate-700"></div>
              <span className="mx-4 shrink text-slate-500 dark:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
              </span>
              <div className="grow border-t border-slate-300 dark:border-slate-700"></div>
            </div>
          </div>
        </CodePreview>

        <h2 id="vertical-divider" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Vertical Divider
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Use a vertical divider to separate content horizontally, such as in a toolbar or a multi-column layout.
        </p>
        <CodePreview code={verticalDividerCode}>
          <div className="flex h-24 items-center justify-center space-x-4 rounded-lg bg-white p-4 dark:bg-slate-900">
            <span className="text-slate-600 dark:text-slate-400">Left</span>
            <div className="h-full w-px bg-slate-200 dark:bg-slate-800"></div>
            <span className="text-slate-600 dark:text-slate-400">Right</span>
          </div>
        </CodePreview>

        <h2 id="styled-divider" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Styled Divider
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Dividers can be styled with different colors, thicknesses, or even gradients to match your application&apos;s design system.
        </p>
        <CodePreview code={styledDividerCode}>
          <div className="w-full max-w-md">
            <p className="text-slate-600 dark:text-slate-400">Content</p>
            <hr className="my-4 h-1 rounded border-0 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <p className="text-slate-600 dark:text-slate-400">Content</p>
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}