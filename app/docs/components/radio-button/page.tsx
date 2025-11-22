'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Radio Button', slug: 'radio-button', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Disabled State', slug: 'disabled-state', level: 2 },
  { title: 'Radio Group', slug: 'radio-group', level: 2 },
  { title: 'With Description', slug: 'with-description', level: 2 },
  { title: 'As a Card', slug: 'as-a-card', level: 2 },
];

const basicUsageCode = `<div class="flex items-center">
  <input id="default-radio" type="radio" value="" name="default-radio" class="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-blue-600">
  <label for="default-radio" class="ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">Default radio</label>
</div>`;

const disabledStateCode = `<div class="flex items-center">
  <input disabled id="disabled-radio" type="radio" value="" name="disabled-radio" class="h-4 w-4 cursor-not-allowed border-slate-300 bg-slate-100 text-blue-600 dark:border-slate-600 dark:bg-slate-700">
  <label for="disabled-radio" class="ml-2 text-sm font-medium text-slate-400 dark:text-slate-500">Disabled radio</label>
</div>`;

const radioGroupCode = `<fieldset>
  <legend class="sr-only">Countries</legend>
  <div class="flex items-center mb-4">
    <input id="country-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-blue-600" checked>
    <label for="country-1" class="ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">United States</label>
  </div>
  <div class="flex items-center">
    <input id="country-2" type="radio" name="countries" value="Germany" class="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-blue-600">
    <label for="country-2" class="ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">Germany</label>
  </div>
</fieldset>`;

const withDescriptionCode = `<div class="flex items-start">
  <div class="flex h-5 items-center">
    <input id="with-description" type="radio" value="" name="with-description" class="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-blue-600">
  </div>
  <div class="ml-2 text-sm">
    <label for="with-description" class="font-medium text-slate-900 dark:text-slate-300">Social media</label>
    <p class="text-xs font-normal text-slate-500 dark:text-slate-400">For notifications about mentions and replies.</p>
  </div>
</div>`;

const asCardCode = `<h3 class="mb-4 font-semibold text-slate-900 dark:text-white">Technology</h3>
<ul class="w-full max-w-md rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
    <li class="w-full rounded-t-lg border-b border-slate-200 dark:border-slate-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-license" type="radio" value="" name="list-radio" class="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-blue-600">
            <label for="list-radio-license" class="ml-2 w-full py-3 text-sm font-medium text-slate-900 dark:text-slate-300">MIT License</label>
        </div>
    </li>
    <li class="w-full border-b border-slate-200 dark:border-slate-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-id" type="radio" value="" name="list-radio" class="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-blue-600">
            <label for="list-radio-id" class="ml-2 w-full py-3 text-sm font-medium text-slate-900 dark:text-slate-300">Apache 2.0</label>
        </div>
    </li>
    <li class="w-full rounded-b-lg">
        <div class="flex items-center pl-3">
            <input id="list-radio-millitary" type="radio" value="" name="list-radio" class="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-blue-600">
            <label for="list-radio-millitary" class="ml-2 w-full py-3 text-sm font-medium text-slate-900 dark:text-slate-300">GNU GPL v3</label>
        </div>
    </li>
</ul>`;

export default function RadioButtonPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Radio Button</span>
        </nav>

        <h1 id="radio-button" className="scroll-mt-20 text-4xl font-bold">
          Radio Button
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen radio button untuk memungkinkan pengguna memilih satu opsi dari beberapa pilihan yang tersedia.</p>

        <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Basic Usage
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari sebuah radio button. Pastikan setiap radio button dalam satu grup memiliki atribut `name` yang sama.</p>
        <CodePreview code={basicUsageCode}>
          <div className="flex items-center">
            <input id="default-radio" type="radio" value="" name="default-radio" className="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-blue-600" />
            <label htmlFor="default-radio" className="ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">Default radio</label>
          </div>
        </CodePreview>

        <h2 id="disabled-state" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Disabled State
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan atribut `disabled` untuk menonaktifkan radio button. Ini akan mencegah interaksi pengguna dan mengubah tampilannya.</p>
        <CodePreview code={disabledStateCode}>
          <div className="flex items-center">
            <input disabled id="disabled-radio" type="radio" value="" name="disabled-radio" className="h-4 w-4 cursor-not-allowed border-slate-300 bg-slate-100 text-blue-600 dark:border-slate-600 dark:bg-slate-700" />
            <label htmlFor="disabled-radio" className="ml-2 text-sm font-medium text-slate-400 dark:text-slate-500">Disabled radio</label>
          </div>
        </CodePreview>

        <h2 id="radio-group" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Radio Group
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Kelompokkan beberapa radio button dalam sebuah  untuk meningkatkan aksesibilitas dan struktur.</p>
        <CodePreview code={radioGroupCode}>
          <fieldset>
            <legend className="sr-only">Countries</legend>
            <div className="mb-4 flex items-center">
              <input id="country-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-blue-600" defaultChecked />
              <label htmlFor="country-1" className="ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">United States</label>
            </div>
            <div className="flex items-center">
              <input id="country-2" type="radio" name="countries" value="Germany" className="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-blue-600" />
              <label htmlFor="country-2" className="ml-2 text-sm font-medium text-slate-900 dark:text-slate-300">Germany</label>
            </div>
          </fieldset>
        </CodePreview>

        <h2 id="with-description" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Description
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Tambahkan teks deskripsi di bawah label untuk memberikan informasi tambahan kepada pengguna.</p>
        <CodePreview code={withDescriptionCode}>
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input id="with-description" type="radio" value="" name="with-description" className="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:ring-offset-slate-800 dark:focus:ring-blue-600" />
            </div>
            <div className="ml-2 text-sm">
              <label htmlFor="with-description" className="font-medium text-slate-900 dark:text-slate-300">Social media</label>
              <p className="text-xs font-normal text-slate-500 dark:text-slate-400">For notifications about mentions and replies.</p>
            </div>
          </div>
        </CodePreview>

        <h2 id="as-a-card" className="mt-12 scroll-mt-20 text-3xl font-bold">
          As a Card
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Anda dapat menata radio button agar terlihat seperti kartu atau item dalam daftar untuk integrasi yang lebih baik dengan desain Anda.</p>
        <CodePreview code={asCardCode}>
          <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">Technology</h3>
          <ul className="w-full max-w-md rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-900 dark:border-slate-600 dark:bg-slate-700 dark:text-white">
            <li className="w-full rounded-t-lg border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center pl-3">
                <input id="list-radio-license" type="radio" value="" name="list-radio" className="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-blue-600" />
                <label htmlFor="list-radio-license" className="ml-2 w-full py-3 text-sm font-medium text-slate-900 dark:text-slate-300">MIT License</label>
              </div>
            </li>
            <li className="w-full border-b border-slate-200 dark:border-slate-600">
              <div className="flex items-center pl-3">
                <input id="list-radio-id" type="radio" value="" name="list-radio" className="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-blue-600" />
                <label htmlFor="list-radio-id" className="ml-2 w-full py-3 text-sm font-medium text-slate-900 dark:text-slate-300">Apache 2.0</label>
              </div>
            </li>
            <li className="w-full rounded-b-lg">
              <div className="flex items-center pl-3">
                <input id="list-radio-millitary" type="radio" value="" name="list-radio" className="h-4 w-4 border-slate-300 bg-slate-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-500 dark:bg-slate-600 dark:ring-offset-slate-700 dark:focus:ring-blue-600" />
                <label htmlFor="list-radio-millitary" className="ml-2 w-full py-3 text-sm font-medium text-slate-900 dark:text-slate-300">GNU GPL v3</label>
              </div>
            </li>
          </ul>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}