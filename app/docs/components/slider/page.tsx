'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Slider', slug: 'slider', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Slider with Controls', slug: 'slider-with-controls', level: 2 },
  { title: 'Slider with Indicators', slug: 'slider-with-indicators', level: 2 },
];

const basicSliderCode = `<div class="slider-container relative w-full overflow-hidden rounded-lg">
  <div class="slider-track flex transition-transform duration-500 ease-in-out">
    <div class="slider-item min-w-full">
      <img src="https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Slide+1" class="w-full" alt="Slide 1">
    </div>
    <div class="slider-item min-w-full">
      <img src="https://via.placeholder.com/800x400/10B981/FFFFFF?text=Slide+2" class="w-full" alt="Slide 2">
    </div>
    <div class="slider-item min-w-full">
      <img src="https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Slide+3" class="w-full" alt="Slide 3">
    </div>
  </div>
</div>`;

const sliderWithControlsCode = `<div class="carousel-wrapper relative w-full" data-carousel="slide">
    <div class="carousel-slides relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Slide 1 -->
        <div class="carousel-item duration-700 ease-in-out">
            <img src="https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Slide+1" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1">
        </div>
        <!-- Add other slides here -->
    </div>
    <!-- Tombol Navigasi -->
    <button type="button" class="carousel-prev-btn absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/30 group-hover:bg-slate-800/60 focus:ring-4 focus:ring-white">
            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="carousel-next-btn absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/30 group-hover:bg-slate-800/60 focus:ring-4 focus:ring-white">
            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>`;

const sliderWithIndicatorsCode = `<div id="carousel-with-indicators" class="relative w-full" data-carousel="slide">
    <div class="carousel-inner relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Slide 1 -->
         <div class="carousel-item-active duration-700 ease-in-out">
            <img src="https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Slide+1" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1">
        </div>
        <!-- Add other slides here -->
    </div>
    <!-- Indikator Slide -->
    <div class="carousel-indicators absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-slate-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
</div>`;

export default function SliderPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Slider</span>
        </nav>

        <h1 id="slider" className="scroll-mt-20 text-4xl font-bold">
          Slider
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan komponen slider untuk menampilkan gambar atau konten lain dalam format carousel.</p>

        <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Basic Usage
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari komponen slider. Anda memerlukan JavaScript untuk mengontrol perpindahan slide.</p>
        <CodePreview code={basicSliderCode}>
          <div dangerouslySetInnerHTML={{ __html: basicSliderCode }} />
        </CodePreview>

        <h2 id="slider-with-controls" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Slider with Controls
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Tambahkan tombol &ldquo;sebelumnya&rdquo; dan &ldquo;berikutnya&rdquo; untuk navigasi manual antar slide.
        </p>
        <CodePreview code={sliderWithControlsCode}>
          <div dangerouslySetInnerHTML={{ __html: sliderWithControlsCode }} />
        </CodePreview>

        <h2 id="slider-with-indicators" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Slider with Indicators
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan indikator untuk menunjukkan jumlah total slide dan slide mana yang sedang aktif.</p>
        <CodePreview code={sliderWithIndicatorsCode}>
          <div dangerouslySetInnerHTML={{ __html: sliderWithIndicatorsCode }} />
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}