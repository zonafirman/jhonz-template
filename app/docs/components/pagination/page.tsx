'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Pagination', slug: 'pagination', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'With Icons', slug: 'with-icons', level: 2 },
  { title: 'Previous and Next Only', slug: 'prev-next-only', level: 2 },
  { title: 'Modern Pagination', slug: 'modern-pagination', level: 2 },
  { title: 'Advanced Pagination', slug: 'advanced-pagination', level: 2 },
  { title: 'Minimalist Pagination', slug: 'minimalist-pagination', level: 2 },
];

const basicUsageCode = `<nav aria-label="Page navigation">
  <ul class="inline-flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex h-10 items-center justify-center rounded-l-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex h-10 items-center justify-center rounded-r-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>`;

const withIconsCode = `<nav aria-label="Page navigation">
  <ul class="inline-flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex h-10 items-center justify-center rounded-l-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-700 dark:text-white">2</a>
    </li>
    <li>
      <a href="#" class="flex h-10 items-center justify-center rounded-r-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg>
      </a>
    </li>
  </ul>
</nav>`;

const prevNextOnlyCode = `<div class="flex items-center justify-between">
  <a href="#" class="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
    Previous
  </a>
  <a href="#" class="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
    Next
  </a>
</div>`;

const modernPaginationCode = `<nav aria-label="Page navigation example">
  <ul class="flex h-10 items-center -space-x-px text-base">
    <li>
      <a href="#" class="ms-0 flex h-10 items-center justify-center rounded-l-lg border border-e-0 border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
        </svg>
      </a>
    </li>
    <li><a href="#" class="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a></li>
    <li><a href="#" class="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">2</a></li>
    <li><a href="#" aria-current="page" class="z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-700 dark:text-white">3</a></li>
    <li>
      <a href="#" class="flex h-10 items-center justify-center rounded-r-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        </svg>
      </a>
    </li>
  </ul>
</nav>`;

const advancedPaginationCode = `<nav aria-label="Advanced page navigation">
  <ul class="flex items-center space-x-2 text-sm">
    <li>
      <a href="#" class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <span class="sr-only">First</span>
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"/></svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    <li><a href="#" class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white px-3.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a></li>
    <li><a href="#" aria-current="page" class="z-10 flex h-9 w-9 items-center justify-center rounded-full border border-blue-500 bg-blue-500 px-3.5 font-medium text-white dark:border-blue-400 dark:bg-blue-600">2</a></li>
    <li><a href="#" class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white px-3.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">3</a></li>
    <li><span class="flex h-9 w-9 items-center justify-center px-3.5 text-slate-500 dark:text-slate-400">...</span></li>
    <li><a href="#" class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white px-3.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">10</a></li>
    <li>
      <a href="#" class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
        <span class="sr-only">Last</span>
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414zm6 0a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293z"/></svg>
      </a>
    </li>
  </ul>
</nav>`;

const minimalistPaginationCode = `<nav aria-label="Minimalist page navigation">
  <ul class="flex items-center -space-x-1 text-sm">
    <li>
      <a href="#" class="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">
        <span class="sr-only">Previous</span>
        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </a>
    </li>
    <li><a href="#" class="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">1</a></li>
    <li><a href="#" aria-current="page" class="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white shadow-md">2</a></li>
    <li><a href="#" class="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">3</a></li>
    <li>
      <a href="#" class="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">
        <span class="sr-only">Next</span>
        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </li>
  </ul>
</nav>`;

export default function PaginationPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Pagination</span>
        </nav>

        <h1 id="pagination" className="scroll-mt-20 text-4xl font-bold">
          Pagination
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Komponen pagination digunakan untuk membagi konten menjadi beberapa halaman, memungkinkan pengguna untuk menavigasi antar halaman dengan mudah.
        </p>

        <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Basic Usage
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Contoh dasar pagination dengan tombol Previous/Next dan nomor halaman. Gunakan `aria-current=&quot;page&quot;` untuk menandai halaman yang aktif.
        </p>
        <CodePreview code={basicUsageCode}>
          <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm">
              <li><a href="#" className="flex h-10 items-center justify-center rounded-l-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">Previous</a></li>
              <li><a href="#" className="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a></li>
              <li><a href="#" className="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">2</a></li>
              <li><a href="#" aria-current="page" className="z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-700 dark:text-white">3</a></li>
              <li><a href="#" className="flex h-10 items-center justify-center rounded-r-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">Next</a></li>
            </ul>
          </nav>
        </CodePreview>

        <h2 id="with-icons" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Icons
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Gunakan ikon untuk tombol Previous dan Next untuk tampilan yang lebih ringkas. Pastikan untuk menyertakan teks `sr-only` untuk aksesibilitas.
        </p>
        <CodePreview code={withIconsCode}>
          <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a href="#" className="flex h-10 items-center justify-center rounded-l-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                  </svg>
                </a>
              </li>
              <li><a href="#" className="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a></li>
              <li><a href="#" aria-current="page" className="z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-700 dark:text-white">2</a></li>
              <li>
                <a href="#" className="flex h-10 items-center justify-center rounded-r-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </CodePreview>

        <h2 id="prev-next-only" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Previous and Next Only
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Untuk navigasi yang lebih sederhana, Anda bisa hanya menampilkan tombol Previous dan Next.
        </p>
        <CodePreview code={prevNextOnlyCode}>
          <div className="flex w-full max-w-xs items-center justify-between">
            <a href="#" className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">Previous</a>
            <a href="#" className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">Next</a>
          </div>
        </CodePreview>

        <h2 id="modern-pagination" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Modern Pagination
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Contoh pagination dengan gaya yang lebih modern, menggunakan sudut yang membulat dan efek transisi yang halus untuk pengalaman pengguna yang lebih baik.
        </p>
        <CodePreview code={modernPaginationCode}>
          <nav aria-label="Page navigation example">
            <ul className="flex h-10 items-center -space-x-px text-base">
              <li>
                <a href="#" className="ms-0 flex h-10 items-center justify-center rounded-l-lg border border-e-0 border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" /></svg>
                </a>
              </li>
              <li><a href="#" className="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a></li>
              <li><a href="#" className="flex h-10 items-center justify-center border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">2</a></li>
              <li><a href="#" aria-current="page" className="z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-700 dark:text-white">3</a></li>
              <li>
                <a href="#" className="flex h-10 items-center justify-center rounded-r-lg border border-slate-300 bg-white px-4 leading-tight text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /></svg>
                </a>
              </li>
            </ul>
          </nav>
        </CodePreview>

        <h2 id="advanced-pagination" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Advanced Pagination
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Untuk set data yang besar, gunakan pagination canggih dengan tombol halaman pertama/terakhir dan elipsis. Gaya ini menggunakan tombol bulat untuk tampilan yang lebih modern dan profesional.
        </p>
        <CodePreview code={advancedPaginationCode}>
          <nav aria-label="Advanced page navigation">
            <ul className="flex items-center space-x-2 text-sm">
              <li>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                  <span className="sr-only">First</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"/></svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                  <span className="sr-only">Previous</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </a>
              </li>
              <li><a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white px-3.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">1</a></li>
              <li><a href="#" aria-current="page" className="z-10 flex h-9 w-9 items-center justify-center rounded-full border border-blue-500 bg-blue-500 px-3.5 font-medium text-white dark:border-blue-400 dark:bg-blue-600">2</a></li>
              <li><a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white px-3.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">3</a></li>
              <li><span className="flex h-9 w-9 items-center justify-center px-3.5 text-slate-500 dark:text-slate-400">...</span></li>
              <li><a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white px-3.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">10</a></li>
              <li>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                  <span className="sr-only">Next</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white">
                  <span className="sr-only">Last</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414zm6 0a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293z"/></svg>
                </a>
              </li>
            </ul>
          </nav>
        </CodePreview>

        <h2 id="minimalist-pagination" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Minimalist Pagination
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Gaya pagination yang bersih dan minimalis tanpa border. Halaman aktif ditandai dengan latar belakang berwarna dan bayangan lembut, menciptakan tampilan yang modern dan profesional untuk 2025.
        </p>
        <CodePreview code={minimalistPaginationCode}>
          <nav aria-label="Minimalist page navigation">
            <ul className="flex items-center -space-x-1 text-sm">
              <li>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </a>
              </li>
              <li><a href="#" className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">1</a></li>
              <li><a href="#" aria-current="page" className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white shadow-md">2</a></li>
              <li><a href="#" className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">3</a></li>
              <li>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}