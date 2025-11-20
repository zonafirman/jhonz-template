'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React, { useState } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Chip', slug: 'chip', level: 1 },
  { title: 'Basic', slug: 'basic-chips', level: 2 },
  { title: 'Colors', slug: 'colored-chips', level: 2 },
  { title: 'Outline', slug: 'outline-chips', level: 2 },
  { title: 'With Icon', slug: 'chips-with-icon', level: 2 },
  { title: 'With Avatar', slug: 'chips-with-avatar', level: 2 },
  { title: 'Removable', slug: 'removable-chips', level: 2 },
  { title: 'Sizes', slug: 'chip-sizes', level: 2 },
];

const basicChipsCode = `<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Default</span>
  <span class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Another Chip</span>
</div>`;

const coloredChipsCode = `<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">Blue</span>
  <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">Green</span>
  <span class="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Yellow</span>
  <span class="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-200">Red</span>
  <span class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">Indigo</span>
</div>`;

const outlineChipsCode = `<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/30 dark:text-blue-400 dark:ring-blue-400/30">Blue</span>
  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/30 dark:text-green-400 dark:ring-green-400/30">Green</span>
  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/30 dark:text-yellow-400 dark:ring-yellow-400/30">Yellow</span>
  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/30 dark:text-red-400 dark:ring-red-400/30">Red</span>
  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/30 dark:text-indigo-400 dark:ring-indigo-400/30">Indigo</span>
</div>`;

const chipsWithIconCode = `<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center gap-x-1.5 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
    <svg class="h-4 w-4" ...>...</svg>
    Processing
  </span>
  <span class="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
    <svg class="h-4 w-4" ...>...</svg>
    Completed
  </span>
</div>`;

const chipsWithAvatarCode = `<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center gap-x-2 rounded-full bg-slate-100 px-2 py-1 pr-3 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
    <img class="h-6 w-6 rounded-full object-cover" src="https://via.placeholder.com/24" alt="avatar">
    John Doe
  </span>
  <span class="inline-flex items-center gap-x-2 rounded-full bg-indigo-100 pl-2 pr-3 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-300 text-xs font-bold text-indigo-700">JD</span>
    Jane Doe
  </span>
</div>`;

const removableChipsCode = `<div class="flex flex-wrap gap-2">
  <span class="inline-flex items-center gap-x-1 rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
    React
    <button type="button" class="group rounded-full p-0.5 hover:bg-blue-200 dark:hover:bg-blue-800">
      <svg class="h-3 w-3 text-blue-600 group-hover:text-blue-800 dark:text-blue-400 dark:group-hover:text-blue-200" ...>...</svg>
    </button>
  </span>
</div>`;

const chipSizesCode = `<div class="flex flex-wrap items-center gap-3">
  <span class="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Small</span>
  <span class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Medium</span>
  <span class="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-base font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Large</span>
</div>`;

export default function ChipPage() {
  const [visibleChips, setVisibleChips] = useState(['React', 'Tailwind CSS', 'Next.js']);

  const handleRemoveChip = (chipToRemove: string) => {
    setVisibleChips(visibleChips.filter(chip => chip !== chipToRemove));
  };

  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Chip</span>
        </nav>

        <h1 id="chip" className="scroll-mt-20 text-4xl font-bold">
          Chip
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Chips are compact elements that represent an input, attribute, or action. They allow users to make selections, filter content, or trigger actions.
        </p>

        <h2 id="basic-chips" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Basic Chips
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The most basic form of a chip, typically used for displaying simple labels or categories.
        </p>
        <CodePreview code={basicChipsCode}>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Default</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Another Chip</span>
          </div>
        </CodePreview>

        <h2 id="colored-chips" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Colored Chips
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Use colors to categorize chips or indicate status. This helps users quickly identify different types of information.
        </p>
        <CodePreview code={coloredChipsCode}>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">Blue</span>
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">Green</span>
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Yellow</span>
            <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-200">Red</span>
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">Indigo</span>
          </div>
        </CodePreview>

        <h2 id="outline-chips" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Outline Chips
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Outline chips have a more subtle appearance, making them suitable for secondary information or when a less prominent style is needed.
        </p>
        <CodePreview code={outlineChipsCode}>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/30 dark:text-blue-400 dark:ring-blue-400/30">Blue</span>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/30 dark:text-green-400 dark:ring-green-400/30">Green</span>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/30 dark:text-yellow-400 dark:ring-yellow-400/30">Yellow</span>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/30 dark:text-red-400 dark:ring-red-400/30">Red</span>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/30 dark:text-indigo-400 dark:ring-indigo-400/30">Indigo</span>
          </div>
        </CodePreview>

        <h2 id="chips-with-icon" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Chips with Icon
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Including an icon can provide extra context and improve visual recognition.
        </p>
        <CodePreview code={chipsWithIconCode}>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
              <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Processing
            </span>
            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Completed
            </span>
          </div>
        </CodePreview>

        <h2 id="chips-with-avatar" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Chips with Avatar
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Chips can include avatars or images, which is useful for representing people or entities.
        </p>
        <CodePreview code={chipsWithAvatarCode}>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-x-2 rounded-full bg-slate-100 py-1 pl-2 pr-3 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
              <img className="h-6 w-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop" alt="avatar" />
              John Doe
            </span>
            <span className="inline-flex items-center gap-x-2 rounded-full bg-indigo-100 py-1 pl-2 pr-3 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-300 text-xs font-bold text-indigo-700">JD</span>
              Jane Doe
            </span>
          </div>
        </CodePreview>

        <h2 id="removable-chips" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Removable Chips
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Add a remove button to allow users to dismiss chips. This is common in filter systems or for managing tags.
        </p>
        <CodePreview code={removableChipsCode}>
          <div className="flex flex-wrap gap-2">
            {visibleChips.map(chip => (
              <span key={chip} className="inline-flex items-center gap-x-1 rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {chip}
                <button type="button" onClick={() => handleRemoveChip(chip)} className="group rounded-full p-0.5 hover:bg-blue-200 dark:hover:bg-blue-800">
                  <span className="sr-only">Remove</span>
                  <svg className="h-3 w-3 text-blue-600 group-hover:text-blue-800 dark:text-blue-400 dark:group-hover:text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </span>
            ))}
          </div>
        </CodePreview>

        <h2 id="chip-sizes" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Sizes
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Chips can be rendered in different sizes to fit various layouts and contexts.
        </p>
        <CodePreview code={chipSizesCode}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Small</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Medium</span>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-base font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">Large</span>
          </div>
        </CodePreview>

      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}