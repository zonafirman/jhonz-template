'use client';

import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const basicUsageCode = `<div>
  <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300">
    Email
  </label>
  <input
    type="email"
    id="email"
    class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
  />
</div>`;

const requiredIndicatorCode = `<div>
  <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300">
    Name <span class="text-red-500">*</span>
  </label>
  <input
    type="text"
    id="name"
    class="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
  />
</div>`;

const disabledStateCode = `<div>
  <label for="username" class="block text-sm font-medium text-slate-400 dark:text-slate-500">
    Username
  </label>
  <input
    type="text"
    id="username"
    disabled
    class="mt-1 block w-full rounded-md border-slate-200 bg-slate-50 shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"
  />
</div>`;

export default function LabelClientComponent() {
  return (
    <>
      <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Basic Usage
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan elemen `&lt;label&gt;` yang terhubung dengan sebuah input melalui atribut `for`. Ini adalah praktik standar untuk form yang aksesibel.</p>
      <CodePreview code={basicUsageCode}>
        <div className="w-full max-w-xs">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input type="email" id="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
        </div>
      </CodePreview>

      <h2 id="required-indicator" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Required Indicator
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tambahkan indikator, seperti tanda bintang, untuk memberitahu pengguna bahwa sebuah field wajib diisi.</p>
      <CodePreview code={requiredIndicatorCode}>
        <div className="w-full max-w-xs">
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white" />
        </div>
      </CodePreview>

      <h2 id="disabled-state" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Disabled State
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gaya label secara berbeda saat input terkait dinonaktifkan untuk memberikan umpan balik visual yang jelas.</p>
      <CodePreview code={disabledStateCode}>
        <div className="w-full max-w-xs">
          <label htmlFor="username" className="block text-sm font-medium text-slate-400 dark:text-slate-500">
            Username
          </label>
          <input type="text" id="username" disabled className="mt-1 block w-full rounded-md border-slate-200 bg-slate-50 shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400" />
        </div>
      </CodePreview>
    </>
  );
}