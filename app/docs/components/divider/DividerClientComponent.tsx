'use client';

import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

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

export default function DividerClientComponent() {
  const dividerSections = [
    {
      id: 'simple-divider',
      title: 'Simple Divider',
      description: 'The most basic divider is a horizontal rule (`<hr>`) used to separate content vertically.',
      code: simpleDividerCode,
      content: (
        <div className="w-full max-w-md">
          <p className="text-slate-600 dark:text-slate-400">Some content above the divider.</p>
          <hr className="my-4 border-slate-200 dark:border-slate-800" />
          <p className="text-slate-600 dark:text-slate-400">Some content below the divider.</p>
        </div>
      ),
    },
    {
      id: 'divider-with-text',
      title: 'With Text',
      description: 'You can embed text within a divider to create a labeled separator, which is useful for forms or alternative action sections.',
      code: withTextDividerCode,
      content: (
        <div className="w-full max-w-md">
          <div className="relative flex items-center py-5">
            <div className="grow border-t border-slate-300 dark:border-slate-700"></div>
            <span className="mx-4 shrink text-sm font-semibold text-slate-500 dark:text-slate-400">OR</span>
            <div className="grow border-t border-slate-300 dark:border-slate-700"></div>
          </div>
        </div>
      ),
    },
    {
      id: 'divider-with-icon',
      title: 'With Icon',
      description: 'Similarly, an icon can be placed in the middle of the divider for added visual flair and context.',
      code: withIconDividerCode,
      content: (
        <div className="w-full max-w-md">
          <div className="relative flex items-center py-5">
            <div className="grow border-t border-slate-300 dark:border-slate-700"></div>
            <span className="mx-4 shrink text-slate-500 dark:text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" /></svg>
            </span>
            <div className="grow border-t border-slate-300 dark:border-slate-700"></div>
          </div>
        </div>
      ),
    },
    {
      id: 'vertical-divider',
      title: 'Vertical Divider',
      description: 'Use a vertical divider to separate content horizontally, such as in a toolbar or a multi-column layout.',
      code: verticalDividerCode,
      content: (
        <div className="flex h-24 items-center justify-center space-x-4 rounded-lg bg-white p-4 dark:bg-slate-900">
          <span className="text-slate-600 dark:text-slate-400">Left</span>
          <div className="h-full w-px bg-slate-200 dark:bg-slate-800"></div>
          <span className="text-slate-600 dark:text-slate-400">Right</span>
        </div>
      ),
    },
    {
      id: 'styled-divider',
      title: 'Styled Divider',
      description: "Dividers can be styled with different colors, thicknesses, or even gradients to match your application's design system.",
      code: styledDividerCode,
      content: (
        <div className="w-full max-w-md">
          <p className="text-slate-600 dark:text-slate-400">Content</p>
          <hr className="my-4 h-1 rounded border-0 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <p className="text-slate-600 dark:text-slate-400">Content</p>
        </div>
      ),
    },
  ];

  return (
    <>
      {dividerSections.map(section => (
        <div key={section.id}>
          <h2 id={section.id} className="mt-12 scroll-mt-20 text-3xl font-bold">
            {section.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {section.description}
          </p>
          <CodePreview code={section.code}>
            {section.content}
          </CodePreview>
        </div>
      ))}
    </>
  );
}