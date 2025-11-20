'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React, { useState } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Date Picker', slug: 'date-picker', level: 1 },
  { title: 'Simple', slug: 'simple-date-picker', level: 2 },
  { title: 'With Icon', slug: 'with-icon', level: 2 },
  { title: 'Date Range', slug: 'date-range', level: 2 },
];

const simpleDatePickerCode = `<div class="relative max-w-sm">
  <input
    type="date"
    class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    placeholder="Select date"
  />
</div>`;

const withIconDatePickerCode = `<div class="relative max-w-sm">
  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
    <svg class="h-4 w-4 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input
    type="date"
    class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    placeholder="Select date"
  />
</div>`;

const dateRangePickerCode = `<div class="flex items-center">
  <div class="relative">
    <input name="start" type="date" class="block w-full rounded-l-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date start">
  </div>
  <span class="mx-4 text-slate-500">to</span>
  <div class="relative">
    <input name="end" type="date" class="block w-full rounded-r-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date end">
  </div>
</div>`;

export default function DatePickerPage() {
  const [date, setDate] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Date Picker</span>
        </nav>

        <h1 id="date-picker" className="scroll-mt-20 text-4xl font-bold">
          Date Picker
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Komponen pemilih tanggal (date picker) memungkinkan pengguna untuk memilih tanggal dari kalender. Ini adalah elemen input standar HTML yang gayanya disesuaikan dengan Tailwind CSS.
        </p>

        <h2 id="simple-date-picker" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Simple Date Picker
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Pemilih tanggal dasar yang memungkinkan pengguna memilih satu tanggal.
        </p>
        <CodePreview code={simpleDatePickerCode}>
          <div className="relative max-w-sm">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date" />
          </div>
        </CodePreview>

        <h2 id="with-icon" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Icon
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Tambahkan ikon di dalam input tanggal untuk memberikan konteks visual.
        </p>
        <CodePreview code={withIconDatePickerCode}>
          <div className="relative max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
              <svg className="h-4 w-4 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date" />
          </div>
        </CodePreview>

        <h2 id="date-range" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Date Range
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Gunakan dua pemilih tanggal untuk memilih rentang tanggal (tanggal mulai dan tanggal akhir).
        </p>
        <CodePreview code={dateRangePickerCode}>
          <div className="flex items-center">
            <div className="relative">
              <input name="start" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="block w-full rounded-l-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date start" />
            </div>
            <span className="mx-4 text-slate-500">to</span>
            <div className="relative">
              <input name="end" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="block w-full rounded-r-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date end" />
            </div>
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}