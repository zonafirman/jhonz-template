'use client';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const basicToastCode = `<div id="toast-simple" class="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-slate-500 bg-white divide-x rtl:divide-x-reverse divide-slate-200 rounded-lg shadow dark:text-slate-400 dark:divide-slate-700 space-x dark:bg-slate-800" role="alert">
    <div class="text-sm font-normal">Message sent successfully.</div>
</div>`;

const toastWithActionCode = `<div id="toast-undo" class="flex items-center w-full max-w-xs p-4 text-slate-500 bg-white rounded-lg shadow dark:text-slate-400 dark:bg-slate-800" role="alert">
    <div class="text-sm font-normal">Conversation archived.</div>
    <div class="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
        <a class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-slate-700" href="#">Undo</a>
    </div>
</div>`;

const toastWithIconCode = `<div class="flex flex-col gap-4">
    <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-slate-500 bg-white rounded-lg shadow dark:text-slate-400 dark:bg-slate-800" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/></svg>
        </div>
        <div class="ms-3 text-sm font-normal">Item moved successfully.</div>
    </div>
    <div id="toast-danger" class="flex items-center w-full max-w-xs p-4 mb-4 text-slate-500 bg-white rounded-lg shadow dark:text-slate-400 dark:bg-slate-800" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/></svg>
        </div>
        <div class="ms-3 text-sm font-normal">Item has been deleted.</div>
    </div>
</div>`;

const positioningToastCode = `<div class="fixed top-5 right-5">
  <div id="toast-positioned" class="flex items-center w-full max-w-xs p-4 text-slate-500 bg-white rounded-lg shadow dark:text-slate-400 dark:bg-slate-800" role="alert">
      <div class="text-sm font-normal">Toast notification</div>
  </div>
</div>`;

export default function ToastClientComponent() {
  return (
    <>
      <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Basic Usage
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari komponen toast. Anda memerlukan JavaScript untuk menampilkan dan menyembunyikan toast.</p>
      <CodePreview code={basicToastCode}>
        <div dangerouslySetInnerHTML={{ __html: basicToastCode }} />
      </CodePreview>

      <h2 id="toast-with-action" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Toast with Action
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tambahkan tombol aksi seperti &quot;Undo&quot; di dalam toast untuk memungkinkan interaksi pengguna.</p>
      <CodePreview code={toastWithActionCode}>
        <div dangerouslySetInnerHTML={{ __html: toastWithActionCode }} />
      </CodePreview>

      <h2 id="toast-with-icon" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Toast with Icon
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan ikon untuk memberikan indikasi visual status pesan, seperti sukses atau gagal.</p>
      <CodePreview code={toastWithIconCode}>
        <div dangerouslySetInnerHTML={{ __html: toastWithIconCode }} />
      </CodePreview>

      <h2 id="positioning" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Positioning
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan kelas utilitas positioning dari Tailwind CSS untuk menempatkan toast di layar, misalnya di pojok kanan atas.</p>
      <CodePreview code={positioningToastCode}>
        <div className="relative h-24 w-full rounded-lg bg-slate-100 dark:bg-slate-800">
          <div dangerouslySetInnerHTML={{ __html: positioningToastCode }} />
        </div>
      </CodePreview>
    </>
  );
}