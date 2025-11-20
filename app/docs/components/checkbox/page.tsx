'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React, { useState } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

// Define headings for the right sidebar
const pageHeadings = [
  { title: 'Checkbox', slug: 'checkbox', level: 1 },
  { title: 'Simple', slug: 'simple-checkbox', level: 2 },
  { title: 'With Label', slug: 'checkbox-with-label', level: 2 },
  { title: 'Disabled', slug: 'disabled-checkbox', level: 2 },
  { title: 'Custom Color', slug: 'custom-color-checkbox', level: 2 },
  { title: 'With Description', slug: 'checkbox-with-description', level: 2 },
  { title: 'Card Style', slug: 'card-style-checkbox', level: 2 },
];

// Code snippets for each example
const simpleCheckboxCode = `<input type="checkbox" class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-slate-900" />`;

const withLabelCheckboxCode = `<div class="flex items-center">
  <input id="comments" type="checkbox" class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-slate-900" />
  <label for="comments" class="ml-2 text-sm font-medium text-slate-700 dark:text-slate-300">Comments</label>
</div>`;

const disabledCheckboxCode = `<div class="flex items-center space-x-4">
  <div class="flex items-center">
    <input type="checkbox" disabled class="h-4 w-4 rounded border-slate-300 text-slate-400 focus:ring-slate-400 dark:border-slate-700 dark:bg-slate-800" />
    <label class="ml-2 text-sm text-slate-400 dark:text-slate-500">Unchecked Disabled</label>
  </div>
  <div class="flex items-center">
    <input type="checkbox" checked disabled class="h-4 w-4 rounded border-slate-300 text-slate-400 focus:ring-slate-400 dark:border-slate-700 dark:bg-slate-800" />
    <label class="ml-2 text-sm text-slate-400 dark:text-slate-500">Checked Disabled</label>
  </div>
</div>`;

const customColorCheckboxCode = `<div class="flex items-center space-x-4">
  <input type="checkbox" checked class="h-4 w-4 rounded border-slate-300 text-pink-600 focus:ring-pink-600" />
  <input type="checkbox" checked class="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-600" />
  <input type="checkbox" checked class="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-600" />
</div>`;

const withDescriptionCheckboxCode = `<div class="relative flex items-start">
  <div class="flex h-6 items-center">
    <input id="offers" type="checkbox" class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
  </div>
  <div class="ml-3 text-sm leading-6">
    <label for="offers" class="font-medium text-slate-900 dark:text-white">Special Offers</label>
    <p class="text-slate-500 dark:text-slate-400">Get notified about new promotions and discounts.</p>
  </div>
</div>`;

const cardStyleCheckboxCode = `<label class="group relative flex cursor-pointer items-start rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:bg-slate-50 has-checked:border-indigo-600 has-checked:bg-indigo-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800/50 dark:has-checked:border-indigo-500 dark:has-checked:bg-indigo-900/20">
  <div class="flex h-6 items-center">
    <input type="checkbox" class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
  </div>
  <div class="ml-3 text-sm">
    <span class="font-medium text-slate-900 dark:text-white">Enable Notifications</span>
    <p class="text-slate-500 dark:text-slate-400">Receive updates directly to your inbox.</p>
  </div>
  <span class="pointer-events-none absolute top-4 right-4 text-indigo-600 opacity-0 transition-opacity group-has-checked:opacity-100">
    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
    </svg>
  </span>
</label>`;

export default function CheckboxPage() {
  const [checkedState, setCheckedState] = useState({
    simple: true,
    label: false,
    color1: true,
    color2: true,
    color3: true,
    description: false,
    card: true,
  });

  const handleToggle = (key: keyof typeof checkedState) => {
    setCheckedState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs/introduction" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Checkbox</span>
        </nav>

        <h1 id="checkbox" className="scroll-mt-20 text-4xl font-bold">
          Checkbox
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Checkboxes allow users to select one or more options from a set. They are ideal for forms, settings, and lists where multiple selections are possible.
        </p>

        <h2 id="simple-checkbox" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Simple Checkbox
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A basic, unstyled checkbox. Use this for the simplest use cases.
        </p>
        <CodePreview code={simpleCheckboxCode}>
          <input type="checkbox" checked={checkedState.simple} onChange={() => handleToggle('simple')} className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-slate-900" />
        </CodePreview>

        <h2 id="checkbox-with-label" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Label
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Always include a `label` for accessibility. Linking the `label` to the `input` with the `for` and `id` attributes allows users to click the label to toggle the checkbox.
        </p>
        <CodePreview code={withLabelCheckboxCode}>
          <div className="flex items-center">
            <input id="comments" type="checkbox" checked={checkedState.label} onChange={() => handleToggle('label')} className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-slate-900" />
            <label htmlFor="comments" className="ml-2 text-sm font-medium text-slate-700 dark:text-slate-300">Comments</label>
          </div>
        </CodePreview>

        <h2 id="disabled-checkbox" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Disabled
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Use the `disabled` attribute to prevent users from interacting with the checkbox.
        </p>
        <CodePreview code={disabledCheckboxCode}>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input type="checkbox" disabled className="h-4 w-4 rounded border-slate-300 text-slate-400 focus:ring-slate-400 dark:border-slate-700 dark:bg-slate-800" />
              <label className="ml-2 text-sm text-slate-400 dark:text-slate-500">Unchecked Disabled</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" checked disabled className="h-4 w-4 rounded border-slate-300 text-slate-400 focus:ring-slate-400 dark:border-slate-700 dark:bg-slate-800" />
              <label className="ml-2 text-sm text-slate-400 dark:text-slate-500">Checked Disabled</label>
            </div>
          </div>
        </CodePreview>

        <h2 id="custom-color-checkbox" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Custom Color
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          You can easily change the color of the checkbox by using Tailwind&apos;s `text-{'{color}'}` and `focus:ring-{'{color}'}` utility classes.
        </p>
        <CodePreview code={customColorCheckboxCode}>
          <div className="flex items-center space-x-4">
            <input type="checkbox" checked={checkedState.color1} onChange={() => handleToggle('color1')} className="h-4 w-4 rounded border-slate-300 text-pink-600 focus:ring-pink-600" />
            <input type="checkbox" checked={checkedState.color2} onChange={() => handleToggle('color2')} className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-600" />
            <input type="checkbox" checked={checkedState.color3} onChange={() => handleToggle('color3')} className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-600" />
          </div>
        </CodePreview>

        <h2 id="checkbox-with-description" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Description
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Add a description below the label to provide more context for the user.
        </p>
        <CodePreview code={withDescriptionCheckboxCode}>
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input id="offers" type="checkbox" checked={checkedState.description} onChange={() => handleToggle('description')} className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="offers" className="font-medium text-slate-900 dark:text-white">Special Offers</label>
              <p className="text-slate-500 dark:text-slate-400">Get notified about new promotions and discounts.</p>
            </div>
          </div>
        </CodePreview>

        <h2 id="card-style-checkbox" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Card Style
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          For a more modern and visually engaging selection, you can style the entire label as a clickable card. The state is managed by a hidden checkbox, ensuring full accessibility.
        </p>
        <CodePreview code={cardStyleCheckboxCode}>
          <label className="group relative flex w-full max-w-md cursor-pointer items-start rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:bg-slate-50 has-checked:border-indigo-600 has-checked:bg-indigo-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800/50 dark:has-checked:border-indigo-500 dark:has-checked:bg-indigo-900/20">
            <div className="flex h-6 items-center">
              <input type="checkbox" checked={checkedState.card} onChange={() => handleToggle('card')} className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
            </div>
            <div className="ml-3 text-sm">
              <span className="font-medium text-slate-900 dark:text-white">Enable Notifications</span>
              <p className="text-slate-500 dark:text-slate-400">Receive updates directly to your inbox.</p>
            </div>
            <span className="pointer-events-none absolute top-4 right-4 text-indigo-600 opacity-0 transition-opacity group-has-checked:opacity-100">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
          </label>
        </CodePreview>

      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}