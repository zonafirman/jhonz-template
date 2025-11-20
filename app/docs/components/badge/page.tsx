'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Badge', slug: 'badge', level: 1 },
  { title: 'Simple Badges', slug: 'simple-badges', level: 2 },
  { title: 'Pill Badges', slug: 'pill-badges', level: 2 },
  { title: 'Outline Badges', slug: 'outline-badges', level: 2 },
  { title: 'Badges with Icons', slug: 'badges-with-icons', level: 2 },
  { title: 'Notification Badge', slug: 'notification-badge', level: 2 },
  { title: 'Glowing Badge', slug: 'glowing-badge', level: 2 },
];

const simpleBadgesCode = `<div class="flex flex-wrap items-center gap-2">
  <span class="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Blue</span>
  <span class="rounded bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-300">Default</span>
  <span class="rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">Red</span>
  <span class="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">Green</span>
  <span class="rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
  <span class="rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">Indigo</span>
</div>`;

const pillBadgesCode = `<div class="flex flex-wrap items-center gap-2">
  <span class="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Blue</span>
  <span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-300">Default</span>
  <span class="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">Red</span>
  <span class="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">Green</span>
</div>`;

const outlineBadgesCode = `<div class="flex flex-wrap items-center gap-2">
  <span class="rounded-full px-2.5 py-0.5 text-xs font-medium text-blue-800 ring-1 ring-inset ring-blue-600/20 dark:text-blue-400 dark:ring-blue-400/20">Blue</span>
  <span class="rounded-full px-2.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 dark:text-red-400 dark:ring-red-400/20">Red</span>
  <span class="rounded-full px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:text-green-400 dark:ring-green-400/20">Green</span>
  <span class="rounded-full px-2.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 dark:text-yellow-400 dark:ring-yellow-400/20">Yellow</span>
</div>`;

const iconBadgesCode = `<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
    <svg class="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3" /></svg>
    Online
  </span>
  <span class="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
    <svg class="h-1.5 w-1.5 fill-red-500" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3" /></svg>
    Offline
  </span>
</div>`;

const notificationBadgeCode = `<div class="flex items-center gap-6">
  <button type="button" class="relative rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
    <span class="absolute -top-1 -right-1 flex h-3 w-3">
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
      <span class="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
    </span>
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
  </button>
</div>`;

const glowingBadgeCode = `<div class="flex flex-wrap items-center gap-4">
  <span class="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
    <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      In Progress
    </span>
  </span>
  <span class="relative inline-flex overflow-hidden rounded-full p-[1px]">
    <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#059669_50%,#A7F3D0_100%)]"></span>
    <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      Completed
    </span>
  </span>
</div>`;

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

        <h2 id="simple-badges" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Simple Badges
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Basic badges with solid background colors to draw attention to an element.
        </p>
        <CodePreview code={simpleBadgesCode}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Blue</span>
            <span className="rounded bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-300">Default</span>
            <span className="rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">Red</span>
            <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">Green</span>
            <span className="rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
            <span className="rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">Indigo</span>
          </div>
        </CodePreview>

        <h2 id="pill-badges" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Pill Badges
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Use the `rounded-full` utility to create pill-shaped badges.
        </p>
        <CodePreview code={pillBadgesCode}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">Blue</span>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-300">Default</span>
            <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">Red</span>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">Green</span>
          </div>
        </CodePreview>

        <h2 id="outline-badges" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Outline Badges
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Badges with a transparent background and a colored border for a more subtle appearance.
        </p>
        <CodePreview code={outlineBadgesCode}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full px-2.5 py-0.5 text-xs font-medium text-blue-800 ring-1 ring-inset ring-blue-600/20 dark:text-blue-400 dark:ring-blue-400/20">Blue</span>
            <span className="rounded-full px-2.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 dark:text-red-400 dark:ring-red-400/20">Red</span>
            <span className="rounded-full px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:text-green-400 dark:ring-green-400/20">Green</span>
            <span className="rounded-full px-2.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 dark:text-yellow-400 dark:ring-yellow-400/20">Yellow</span>
          </div>
        </CodePreview>

        <h2 id="badges-with-icons" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Badges with Icons
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Include an icon within a badge to provide additional context, such as a status indicator.
        </p>
        <CodePreview code={iconBadgesCode}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-x-1.5 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
              <svg className="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3" /></svg>
              Online
            </span>
            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
              <svg className="h-1.5 w-1.5 fill-red-500" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3" /></svg>
              Offline
            </span>
          </div>
        </CodePreview>

        <h2 id="notification-badge" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Notification Badge
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A modern badge for notifications, featuring a ping animation to draw the user&apos;s attention to new updates.
        </p>
        <CodePreview code={notificationBadgeCode}>
          <div className="flex items-center gap-6">
            <button type="button" className="relative rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
              </span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
            </button>
          </div>
        </CodePreview>

        <h2 id="glowing-badge" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Glowing Badge
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A modern, animated badge with a glowing effect created by a spinning conic gradient. Ideal for dark mode interfaces to highlight a status in a visually striking way.
        </p>
        <CodePreview code={glowingBadgeCode}>
          <div className="flex flex-wrap items-center gap-4">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                In Progress
              </span>
            </span>
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#059669_50%,#A7F3D0_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Completed
              </span>
            </span>
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}