'use client';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const basicToggleCode = `<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-slate-900 dark:text-slate-300">Toggle me</span>
</label>`;

const disabledToggleCode = `<label class="inline-flex items-center cursor-not-allowed">
  <input type="checkbox" value="" class="sr-only peer" disabled>
  <div class="relative w-11 h-6 bg-slate-200 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-slate-400 dark:text-slate-500">Disabled toggle</span>
</label>`;

const toggleWithIconCode = `<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="relative w-14 h-7 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-slate-900 dark:text-slate-300">With Icon</span>
</label>`;

const differentSizesCode = `<div class="flex flex-col items-start gap-4">
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer">
    <div class="relative w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
    <span class="ms-3 text-sm font-medium text-slate-900 dark:text-slate-300">Small</span>
  </label>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer">
    <div class="relative w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
    <span class="ms-3 text-sm font-medium text-slate-900 dark:text-slate-300">Medium</span>
  </label>
  <label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer">
    <div class="relative w-14 h-7 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
    <span class="ms-3 text-sm font-medium text-slate-900 dark:text-slate-300">Large</span>
  </label>
</div>`;

export default function ToggleClientComponent() {
  return (
    <>
      <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Basic Usage
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari komponen toggle switch.</p>
      <CodePreview code={basicToggleCode}>
        <div dangerouslySetInnerHTML={{ __html: basicToggleCode }} />
      </CodePreview>

      <h2 id="disabled-state" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Disabled State
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan atribut `disabled` untuk membuat toggle tidak dapat diubah.</p>
      <CodePreview code={disabledToggleCode}>
        <div dangerouslySetInnerHTML={{ __html: disabledToggleCode }} />
      </CodePreview>

      <h2 id="toggle-with-icon" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Toggle with Icon
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Anda dapat menambahkan ikon di dalam toggle, meskipun ini memerlukan kustomisasi CSS tambahan untuk memposisikan ikon dengan benar saat status berubah.</p>
      <CodePreview code={toggleWithIconCode}>
        <div dangerouslySetInnerHTML={{ __html: toggleWithIconCode }} />
      </CodePreview>

      <h2 id="different-sizes" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Different Sizes
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Ubah ukuran toggle dengan menyesuaikan kelas utilitas lebar dan tinggi dari Tailwind CSS.</p>
      <CodePreview code={differentSizesCode}>
        <div dangerouslySetInnerHTML={{ __html: differentSizesCode }} />
      </CodePreview>
    </>
  );
}