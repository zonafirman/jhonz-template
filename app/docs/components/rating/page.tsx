'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Rating', slug: 'rating', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Rating with Text', slug: 'rating-with-text', level: 2 },
  { title: 'Advanced Rating', slug: 'advanced-rating', level: 2 },
  { title: 'Different Sizes', slug: 'different-sizes', level: 2 },
];

const StarIcon = ({ className, isFilled = true }: { className: string; isFilled?: boolean }) => (
  <svg className={className} fill={isFilled ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
  </svg>
);

const basicUsageCode = `<div class="flex items-center">
  <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
  <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
  <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
  <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
  <svg class="h-5 w-5 text-slate-300 dark:text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>`;

const withTextCode = `<div class="flex items-center">
  <!-- Stars -->
  <p class="ml-2 text-sm font-medium text-slate-500 dark:text-slate-400">4.95 out of 5</p>
</div>`;

const advancedRatingCode = `<div class="flex items-center">
  <!-- Stars -->
  <p class="ml-2 text-sm font-bold text-slate-900 dark:text-white">4.95</p>
  <span class="mx-1.5 h-1 w-1 rounded-full bg-slate-500 dark:bg-slate-400"></span>
  <a href="#" class="text-sm font-medium text-slate-900 underline hover:no-underline dark:text-white">73 reviews</a>
</div>`;

const differentSizesCode = `<div class="flex flex-col items-start space-y-4">
  <div class="flex items-center"><!-- 4 stars h-4 w-4 --></div>
  <div class="flex items-center"><!-- 4 stars h-6 w-6 --></div>
  <div class="flex items-center"><!-- 4 stars h-8 w-8 --></div>
</div>`;

export default function RatingPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Rating</span>
        </nav>

        <h1 id="rating" className="scroll-mt-20 text-4xl font-bold">
          Rating
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen rating untuk menampilkan penilaian atau ulasan dari pengguna, biasanya dalam bentuk bintang.</p>

        <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Basic Usage
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari komponen rating bintang. Gunakan SVG dan warnai dengan kelas utilitas Tailwind CSS.</p>
        <CodePreview code={basicUsageCode}>
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400" />)}
            <StarIcon className="h-5 w-5 text-slate-300 dark:text-slate-500" />
          </div>
        </CodePreview>

        <h2 id="rating-with-text" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Rating with Text
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Tambahkan teks di sebelah bintang untuk memberikan informasi numerik yang jelas tentang rating.</p>
        <CodePreview code={withTextCode}>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400" />)}
            <p className="ml-2 text-sm font-medium text-slate-500 dark:text-slate-400">4.95 out of 5</p>
          </div>
        </CodePreview>

        <h2 id="advanced-rating" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Advanced Rating
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Kombinasikan rating bintang dengan nilai numerik dan jumlah ulasan untuk memberikan konteks yang lebih lengkap.</p>
        <CodePreview code={advancedRatingCode}>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-400" />)}
            <p className="ml-2 text-sm font-bold text-slate-900 dark:text-white">4.95</p>
            <span className="mx-1.5 h-1 w-1 rounded-full bg-slate-500 dark:bg-slate-400"></span>
            <a href="#" className="text-sm font-medium text-slate-900 underline hover:no-underline dark:text-white">
              73 reviews
            </a>
          </div>
        </CodePreview>

        <h2 id="different-sizes" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Different Sizes
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Sesuaikan ukuran bintang rating menggunakan kelas utilitas tinggi dan lebar dari Tailwind CSS.</p>
        <CodePreview code={differentSizesCode}>
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => <StarIcon key={i} className="h-4 w-4 text-yellow-400" />)}
              <StarIcon className="h-4 w-4 text-slate-300 dark:text-slate-500" />
            </div>
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => <StarIcon key={i} className="h-6 w-6 text-yellow-400" />)}
              <StarIcon className="h-6 w-6 text-slate-300 dark:text-slate-500" />
            </div>
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => <StarIcon key={i} className="h-8 w-8 text-yellow-400" />)}
              <StarIcon className="h-8 w-8 text-slate-300 dark:text-slate-500" />
            </div>
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}