'use client';

import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const basicUsageCode = `<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-48 mb-4"></div>
    <div class="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-slate-200 rounded-full dark:bg-slate-700 mb-2.5"></div>
    <div class="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>`;

const imageSkeletonCode = `<div role="status" class="flex items-center justify-center h-56 max-w-sm bg-slate-300 rounded-lg animate-pulse dark:bg-slate-700">
    <svg class="w-10 h-10 text-slate-200 dark:text-slate-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>`;

const textSkeletonCode = `<div role="status" class="max-w-lg animate-pulse space-y-2.5">
  <div class="flex items-center w-full">
      <div class="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-32"></div>
      <div class="h-2.5 ms-2 bg-slate-300 rounded-full dark:bg-slate-600 w-24"></div>
      <div class="h-2.5 ms-2 bg-slate-300 rounded-full dark:bg-slate-600 w-full"></div>
  </div>
  <div class="flex items-center w-full max-w-[480px]">
      <div class="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-full"></div>
      <div class="h-2.5 ms-2 bg-slate-300 rounded-full dark:bg-slate-600 w-full"></div>
      <div class="h-2.5 ms-2 bg-slate-300 rounded-full dark:bg-slate-600 w-24"></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>`;

const cardSkeletonCode = `<div role="status" class="max-w-sm p-4 border border-slate-200 rounded shadow animate-pulse md:p-6 dark:border-slate-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-slate-300 rounded dark:bg-slate-700">
        <svg class="w-10 h-10 text-slate-200 dark:text-slate-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-48 mb-4"></div>
    <div class="h-2 bg-slate-200 rounded-full dark:bg-slate-700 mb-2.5"></div>
    <div class="h-2 bg-slate-200 rounded-full dark:bg-slate-700 mb-2.5"></div>
    <div class="h-2 bg-slate-200 rounded-full dark:bg-slate-700"></div>
    <span class="sr-only">Loading...</span>
</div>`;

export default function SkeletonClientComponent() {
  return (
    <>
      <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Basic Usage
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari komponen skeleton. Gunakan kelas `animate-pulse` dari Tailwind CSS untuk membuat efek pemuatan.</p>
      <CodePreview code={basicUsageCode}>
        <div dangerouslySetInnerHTML={{ __html: basicUsageCode }} />
      </CodePreview>
      <h2 id="image-skeleton" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Image Skeleton
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan placeholder skeleton untuk gambar atau media visual lainnya.</p>
      <CodePreview code={imageSkeletonCode}>
        <div dangerouslySetInnerHTML={{ __html: imageSkeletonCode }} />
      </CodePreview>
      <h2 id="text-skeleton" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Text Skeleton
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Buat placeholder untuk beberapa baris teks, seperti dalam sebuah paragraf atau daftar.</p>
      <CodePreview code={textSkeletonCode}>
        <div dangerouslySetInnerHTML={{ __html: textSkeletonCode }} />
      </CodePreview>
      <h2 id="card-skeleton" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Card Skeleton
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Kombinasikan beberapa elemen skeleton untuk membuat placeholder untuk komponen yang lebih kompleks seperti kartu.</p>
      <CodePreview code={cardSkeletonCode}>
        <div dangerouslySetInnerHTML={{ __html: cardSkeletonCode }} />
      </CodePreview>
    </>
  );
}