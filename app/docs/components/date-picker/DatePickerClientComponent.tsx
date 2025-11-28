'use client';

import React, { useState } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

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

export default function DatePickerClientComponent() {
  const [date, setDate] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const datePickerSections = [
    {
      id: 'simple-date-picker',
      title: 'Simple Date Picker',
      description: 'A basic date picker that allows users to select a single date.',
      code: simpleDatePickerCode,
      content: (
        <div className="relative max-w-sm">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date" />
        </div>
      ),
    },
    {
      id: 'with-icon',
      title: 'With Icon',
      description: 'Add an icon inside the date input to provide visual context.',
      code: withIconDatePickerCode,
      content: (
        <div className="relative max-w-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <svg className="h-4 w-4 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 pl-10 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date" />
        </div>
      ),
    },
    {
      id: 'date-range',
      title: 'Date Range',
      description: 'Use two date pickers to select a date range (start date and end date).',
      code: dateRangePickerCode,
      content: (
        <div className="flex items-center">
          <div className="relative">
            <input name="start" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="block w-full rounded-l-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date start" />
          </div>
          <span className="mx-4 text-slate-500">to</span>
          <div className="relative">
            <input name="end" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="block w-full rounded-r-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Select date end" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {datePickerSections.map(section => (
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