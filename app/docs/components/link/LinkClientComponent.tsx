'use client';

import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const basicUsageCode = `<Link href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
  Read more
</Link>`;

const withoutUnderlineCode = `<Link href="#" class="font-medium text-blue-600 dark:text-blue-500">
  Link without underline
</Link>`;

const withIconCode = `<Link href="#" class="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500">
  Read more
  <svg class="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</Link>`;

const asButtonCode = `<Link href="#" class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
  Get started
</Link>`;

export default function LinkClientComponent() {
  return (
    <>
      <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Basic Usage
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh paling dasar dari sebuah link dengan garis bawah saat di-hover. Gunakan kelas `text-blue-600` untuk warna standar dan `hover:underline` untuk efeknya.</p>
      <CodePreview code={basicUsageCode}>
        <Link href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
          Read more
        </Link>
      </CodePreview>

      <h2 id="without-underline" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Without Underline
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Untuk beberapa kasus desain, Anda mungkin tidak menginginkan garis bawah. Cukup hapus kelas `hover:underline`.</p>
      <CodePreview code={withoutUnderlineCode}>
        <Link href="#" className="font-medium text-blue-600 dark:text-blue-500">
          Link without underline
        </Link>
      </CodePreview>

      <h2 id="with-icon" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Icon
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tambahkan ikon di sebelah teks untuk memberikan konteks visual tambahan. Gunakan `inline-flex` dan `items-center` untuk penyelarasan yang tepat.</p>
      <CodePreview code={withIconCode}>
        <Link href="#" className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500">
          Read more
          <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </CodePreview>

      <h2 id="as-a-button" className="mt-12 scroll-mt-20 text-3xl font-bold">
        As a Button
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Anda dapat mengubah tampilan link agar terlihat seperti tombol. Ini berguna untuk aksi utama yang mengarahkan pengguna ke halaman lain.</p>
      <CodePreview code={asButtonCode}>
        <Link href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
          Get started
        </Link>
      </CodePreview>
    </>
  );
}