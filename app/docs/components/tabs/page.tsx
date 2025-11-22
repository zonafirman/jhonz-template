'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React, { useState } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Tabs', slug: 'tabs', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Tabs with Icons', slug: 'tabs-with-icons', level: 2 },
  { title: 'Tabs with Underline', slug: 'tabs-with-underline', level: 2 },
  { title: 'Pills Tabs', slug: 'pills-tabs', level: 2 },
  { title: 'Full Width Tabs', slug: 'full-width-tabs', level: 2 },
];

const basicTabsCode = `<div class="mb-4 border-b border-slate-200 dark:border-slate-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" type="button" role="tab" aria-selected="true">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-600 hover:border-slate-300 dark:hover:text-slate-300" type="button" role="tab" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-600 hover:border-slate-300 dark:hover:text-slate-300" type="button" role="tab" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 text-slate-400 cursor-not-allowed dark:text-slate-500" type="button" role="tab" aria-selected="false" disabled>Contacts</button>
        </li>
    </ul>
</div>`;

const tabsWithIconsCode = `<div class="mb-4 border-b border-slate-200 dark:border-slate-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg" type="button" role="tab" aria-selected="true">
                <svg class="w-4 h-4 me-2 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.5 3.5 0 0 1 9 15h2a3.5 3.5 0 0 1 3.951 1.512A8.949 8.949 0 0 1 10 18Z"/></svg>
                Profile
            </button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-600 hover:border-slate-300 dark:hover:text-slate-300" type="button" role="tab" aria-selected="false">
                <svg class="w-4 h-4 me-2 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
                Dashboard
            </button>
        </li>
    </ul>
</div>`;

const tabsWithUnderlineCode = `<div class="text-sm font-medium text-center text-slate-500 border-b border-slate-200 dark:text-slate-400 dark:border-slate-700">
    <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
            <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Profile</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-600 hover:border-slate-300 dark:hover:text-slate-300">Dashboard</a>
        </li>
    </ul>
</div>`;

const pillsTabsCode = `<ul class="flex flex-wrap text-sm font-medium text-center text-slate-500 dark:text-slate-400">
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">Profile</a>
    </li>
    <li class="me-2">
        <a href="#" class="inline-block px-4 py-3 rounded-lg hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white">Dashboard</a>
    </li>
</ul>`;

const fullWidthTabsCode = `<ul class="hidden text-sm font-medium text-center text-slate-500 rounded-lg shadow sm:flex dark:divide-slate-700 dark:text-slate-400">
    <li class="w-full">
        <a href="#" class="inline-block w-full p-4 text-slate-900 bg-slate-100 border-r border-slate-200 dark:border-slate-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-slate-700 dark:text-white" aria-current="page">Profile</a>
    </li>
    <li class="w-full">
        <a href="#" class="inline-block w-full p-4 bg-white border-r border-slate-200 dark:border-slate-700 hover:text-slate-700 hover:bg-slate-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700">Dashboard</a>
    </li>
</ul>`;

export default function TabsPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Tabs</span>
        </nav>

        <h1 id="tabs" className="scroll-mt-20 text-4xl font-bold">
          Tabs
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen tab untuk mengatur konten ke dalam beberapa bagian yang dapat ditampilkan satu per satu.</p>

        <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Basic Usage
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari komponen tab untuk navigasi konten.</p>
        <CodePreview code={basicTabsCode}>
          <div dangerouslySetInnerHTML={{ __html: basicTabsCode }} />
        </CodePreview>

        <h2 id="tabs-with-icons" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Tabs with Icons
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Tambahkan ikon di samping teks untuk representasi visual yang lebih baik.</p>
        <CodePreview code={tabsWithIconsCode}>
          <div dangerouslySetInnerHTML={{ __html: tabsWithIconsCode }} />
        </CodePreview>

        <h2 id="tabs-with-underline" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Tabs with Underline
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan gaya garis bawah untuk menyorot tab yang aktif.</p>
        <CodePreview code={tabsWithUnderlineCode}>
          <div dangerouslySetInnerHTML={{ __html: tabsWithUnderlineCode }} />
        </CodePreview>

        <h2 id="pills-tabs" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Pills Tabs
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan gaya pil untuk tab, cocok untuk navigasi sekunder.</p>
        <CodePreview code={pillsTabsCode}>
          <div dangerouslySetInnerHTML={{ __html: pillsTabsCode }} />
        </CodePreview>

        <h2 id="full-width-tabs" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Full Width Tabs
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Buat tab yang membentang selebar kontainernya.</p>
        <CodePreview code={fullWidthTabsCode}>
          <div dangerouslySetInnerHTML={{ __html: fullWidthTabsCode }} />
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}