'use client';

import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const basicUsageCode = `<label for="countries" class="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Select an option</label>
<select id="countries" class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>`;

const disabledStateCode = `<label for="disabled-select" class="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Disabled select</label>
<select id="disabled-select" class="block w-full rounded-lg border border-slate-300 bg-slate-100 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white" disabled>
  <option selected>Choose a country</option>
  <option value="US">United States</option>
</select>`;

const withHelperTextCode = `<label for="countries-helper" class="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Select your country</label>
<select id="countries-helper" class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
</select>
<p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Please select your country of residence.</p>`;

const differentSizesCode = `<select class="mb-4 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-xs text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
  <option selected>Choose a country</option>
</select>
<select class="mb-4 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
  <option selected>Choose a country</option>
</select>
<select class="block w-full rounded-lg border border-slate-300 bg-slate-50 p-4 text-base text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
  <option selected>Choose a country</option>
</select>`;

export default function SelectClientComponent() {
  return (
    <>
      <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Basic Usage
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari komponen select. Gunakan elemen `<select> </select>` standar dengan kelas utilitas Tailwind CSS.</p>
      <CodePreview code={basicUsageCode}>
        <label htmlFor="countries" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Select an option</label>
        <select id="countries" className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
          <option>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </CodePreview>

      <h2 id="disabled-state" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Disabled State
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan atribut `disabled` untuk menonaktifkan input select.</p>
      <CodePreview code={disabledStateCode}>
        <label htmlFor="disabled-select" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Disabled select</label>
        <select id="disabled-select" className="block w-full rounded-lg border border-slate-300 bg-slate-100 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white" disabled>
          <option>Choose a country</option>
          <option value="US">United States</option>
        </select>
      </CodePreview>

      <h2 id="with-helper-text" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Helper Text
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tambahkan teks bantuan di bawah input select untuk memberikan konteks tambahan.</p>
      <CodePreview code={withHelperTextCode}>
        <label htmlFor="countries-helper" className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">Select your country</label>
        <select id="countries-helper" className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
          <option>Choose a country</option>
          <option value="US">United States</option>
        </select>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Please select your country of residence.</p>
      </CodePreview>

      <h2 id="different-sizes" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Different Sizes
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Sesuaikan ukuran input select menggunakan kelas utilitas padding dan font-size dari Tailwind CSS.</p>
      <CodePreview code={differentSizesCode}>
        <select className="mb-4 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-xs text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
          <option>Choose a country</option>
        </select>
        <select className="mb-4 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
          <option>Choose a country</option>
        </select>
        <select className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-4 text-base text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
          <option>Choose a country</option>
        </select>
      </CodePreview>
    </>
  );
}