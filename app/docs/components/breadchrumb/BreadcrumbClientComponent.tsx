'use client';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const simpleBreadcrumbCode = `<nav aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
    <li>
      <a href="#" class="block transition hover:text-slate-700 dark:hover:text-slate-300">Home</a>
    </li>
    <li>
      <span class="select-none text-slate-400">/</span>
    </li>
    <li>
      <a href="#" class="block transition hover:text-slate-700 dark:hover:text-slate-300">Components</a>
    </li>
    <li>
      <span class="select-none text-slate-400">/</span>
    </li>
    <li>
      <span class="font-semibold text-slate-700 dark:text-slate-200">Breadcrumb</span>
    </li>
  </ol>
</nav>`;

const withIconsBreadcrumbCode = `<nav aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
    <li>
      <a href="#" class="flex items-center gap-2 transition hover:text-slate-700 dark:hover:text-slate-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span>Home</span>
      </a>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
    </li>
    <li>
      <a href="#" class="flex items-center gap-2 transition hover:text-slate-700 dark:hover:text-slate-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
        <span>Components</span>
      </a>
    </li>
  </ol>
</nav>`;

const customSeparatorBreadcrumbCode = `<nav aria-label="Breadcrumb">
  <ol class="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
    <li><a href="#" class="hover:underline">Home</a></li>
    <li><span class="select-none">&gt;</span></li>
    <li><a href="#" class="hover:underline">Settings</a></li>
    <li><span class="select-none">&gt;</span></li>
    <li><span class="font-semibold text-slate-700 dark:text-slate-200">Profile</span></li>
  </ol>
</nav>`;

const modernStyleBreadcrumbCode = `<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center rounded-md p-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">Home</a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <a href="#" class="ms-1 rounded-md p-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        <span class="ms-1 text-sm font-semibold text-slate-500 dark:text-slate-400">Flowbite</span>
      </div>
    </li>
  </ol>
</nav>`;

export default function BreadcrumbClientComponent() {
  return (
    <>
      <h2 id="simple" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Simple
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A basic breadcrumb with slash separators. The last item is not a link as it represents the current page.</p>
      <CodePreview code={simpleBreadcrumbCode}>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="#" className="block transition hover:text-slate-700 dark:hover:text-slate-300">Home</a></li>
            <li><span className="select-none text-slate-400">/</span></li>
            <li><a href="#" className="block transition hover:text-slate-700 dark:hover:text-slate-300">Components</a></li>
            <li><span className="select-none text-slate-400">/</span></li>
            <li><span className="font-semibold text-slate-700 dark:text-slate-200">Breadcrumb</span></li>
          </ol>
        </nav>
      </CodePreview>

      <h2 id="with-icons" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Icons
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Add icons to your breadcrumb items for better visual context. This example uses chevron icons as separators.</p>
      <CodePreview code={withIconsBreadcrumbCode}>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="#" className="flex items-center gap-2 transition hover:text-slate-700 dark:hover:text-slate-300"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg><span>Home</span></a></li>
            <li><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></li>
            <li><a href="#" className="flex items-center gap-2 transition hover:text-slate-700 dark:hover:text-slate-300"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg><span>Components</span></a></li>
          </ol>
        </nav>
      </CodePreview>

      <h2 id="custom-separator" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Custom Separator
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">You can easily change the separator to any character or SVG icon. This example uses the `&gt;` character.</p>
      <CodePreview code={customSeparatorBreadcrumbCode}>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><span className="select-none">&gt;</span></li>
            <li><a href="#" className="hover:underline">Settings</a></li>
            <li><span className="select-none">&gt;</span></li>
            <li><span className="font-semibold text-slate-700 dark:text-slate-200">Profile</span></li>
          </ol>
        </nav>
      </CodePreview>

      <h2 id="modern-style" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Modern Style
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern breadcrumb design with chevron separators and hover effects on the links for a cleaner, more professional look.</p>
      <CodePreview code={modernStyleBreadcrumbCode}>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center"><a href="#" className="inline-flex items-center rounded-md p-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">Home</a></li>
            <li><div className="flex items-center"><svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg><a href="#" className="ms-1 rounded-md p-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">Projects</a></div></li>
            <li aria-current="page"><div className="flex items-center"><svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg><span className="ms-1 text-sm font-semibold text-slate-500 dark:text-slate-400">Flowbite</span></div></li>
          </ol>
        </nav>
      </CodePreview>
    </>
  );
}