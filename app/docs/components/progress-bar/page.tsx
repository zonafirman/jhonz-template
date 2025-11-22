'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Progress Bar', slug: 'progress-bar', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'With Label', slug: 'with-label', level: 2 },
  { title: 'Different Colors', slug: 'different-colors', level: 2 },
  { title: 'Different Sizes', slug: 'different-sizes', level: 2 },
];

const basicUsageCode = `<div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
  <div class="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100" style="width: 45%"> 45%</div>
</div>`;

const withLabelCode = `<div>
  <div class="mb-1 flex justify-between">
    <span class="text-base font-medium text-blue-700 dark:text-white">Progress</span>
    <span class="text-sm font-medium text-blue-700 dark:text-white">75%</span>
  </div>
  <div class="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-2.5 rounded-full bg-blue-600" style="width: 75%"></div>
  </div>
</div>`;

const differentColorsCode = `<div class="space-y-4">
  <div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-2.5 rounded-full bg-blue-600" style="width: 45%"></div>
  </div>
  <div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-2.5 rounded-full bg-red-600 dark:bg-red-500" style="width: 55%"></div>
  </div>
  <div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-2.5 rounded-full bg-green-600 dark:bg-green-500" style="width: 65%"></div>
  </div>
  <div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-2.5 rounded-full bg-yellow-400" style="width: 75%"></div>
  </div>
  <div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500" style="width: 85%"></div>
  </div>
</div>`;

const differentSizesCode = `<div class="space-y-4">
  <div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-1.5 rounded-full bg-blue-600" style="width: 45%"></div>
  </div>
  <div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-2.5 rounded-full bg-blue-600" style="width: 55%"></div>
  </div>
  <div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-4 rounded-full bg-blue-600" style="width: 65%"></div>
  </div>
  <div class="w-full rounded-full bg-slate-200 dark:bg-slate-700">
    <div class="h-6 rounded-full bg-blue-600" style="width: 75%"></div>
  </div>
</div>`;

export default function ProgressBarPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Progress Bar</span>
        </nav>

        <h1 id="progress-bar" className="scroll-mt-20 text-4xl font-bold">
          Progress Bar
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Gunakan komponen progress bar untuk menampilkan kemajuan suatu proses atau tugas kepada pengguna secara visual.
        </p>

        <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Basic Usage
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Contoh paling dasar dari progress bar. Lebar dari progress bar diatur menggunakan inline style `width`.
        </p>
        <CodePreview code={basicUsageCode}>
          <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700">
            <div className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100" style={{ width: '45%' }}> 45%</div>
          </div>
        </CodePreview>

        <h2 id="with-label" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Label
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Anda dapat menambahkan label di luar progress bar untuk memberikan konteks tambahan mengenai kemajuan yang ditampilkan.
        </p>
        <CodePreview code={withLabelCode}>
          <div>
            <div className="mb-1 flex justify-between">
              <span className="text-base font-medium text-blue-700 dark:text-white">Progress</span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">75%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-2.5 rounded-full bg-blue-600" style={{ width: '75%' }}></div>
            </div>
          </div>
        </CodePreview>

        <h2 id="different-colors" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Different Colors
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Gunakan warna yang berbeda untuk menandakan status yang berbeda, seperti sukses (hijau), peringatan (kuning), atau kesalahan (merah).
        </p>
        <CodePreview code={differentColorsCode}>
          <div className="space-y-4">
            <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-2.5 rounded-full bg-blue-600" style={{ width: '45%' }}></div>
            </div>
            <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-2.5 rounded-full bg-red-600 dark:bg-red-500" style={{ width: '55%' }}></div>
            </div>
            <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-2.5 rounded-full bg-green-600 dark:bg-green-500" style={{ width: '65%' }}></div>
            </div>
            <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-2.5 rounded-full bg-yellow-400" style={{ width: '75%' }}></div>
            </div>
            <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700">
              <div className="h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500" style={{ width: '85%' }}></div>
            </div>
          </div>
        </CodePreview>

        <h2 id="different-sizes" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Different Sizes
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Sesuaikan ukuran tinggi progress bar menggunakan kelas utilitas tinggi dari Tailwind CSS, seperti `h-1.5`, `h-2.5`, `h-4`, atau `h-6`.
        </p>
        <CodePreview code={differentSizesCode}>
          <div className="space-y-4">
            <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-1.5 rounded-full bg-blue-600" style={{ width: '45%' }}></div></div>
            <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-2.5 rounded-full bg-blue-600" style={{ width: '55%' }}></div></div>
            <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-4 rounded-full bg-blue-600" style={{ width: '65%' }}></div></div>
            <div className="w-full rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-6 rounded-full bg-blue-600" style={{ width: '75%' }}></div></div>
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}