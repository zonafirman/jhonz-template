'use client';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const basicStepperCode = `<ol class="flex items-center w-full text-sm font-medium text-center text-slate-500 dark:text-slate-400 sm:text-base">
    <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-slate-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-slate-700">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-slate-200 dark:after:text-slate-500">
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    </li>
    <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-slate-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-slate-700">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-slate-200 dark:after:text-slate-500">
            <span class="me-2">2</span>
            Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    </li>
    <li class="flex items-center">
        <span class="me-2">3</span>
        Confirmation
    </li>
</ol>`;

const stepperWithIconsCode = `<ol class="flex items-center w-full">
    <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg class="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16"><path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023Z M16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/></svg>
        </span>
    </li>
    <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-slate-100 after:border-4 after:inline-block dark:after:border-slate-700">
        <span class="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full lg:h-12 lg:w-12 dark:bg-slate-700 shrink-0">
            <svg class="w-4 h-4 text-slate-500 lg:w-6 lg:h-6 dark:text-slate-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14"><path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z M2 4V2h16v2H2Z"/></svg>
        </span>
    </li>
    <li class="flex items-center w-full">
        <span class="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full lg:h-12 lg:w-12 dark:bg-slate-700 shrink-0">
            <svg class="w-4 h-4 text-slate-500 lg:w-6 lg:h-6 dark:text-slate-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"><path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.992 1.992 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z"/></svg>
        </span>
    </li>
</ol>`;

const verticalStepperCode = `<ol class="relative text-slate-500 border-s border-slate-200 dark:border-slate-700 dark:text-slate-400">
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-slate-900 dark:bg-green-900">
            <svg class="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/></svg>
        </span>
        <h3 class="font-medium leading-tight">Personal Info</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="mb-10 ms-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-slate-100 rounded-full -start-4 ring-4 ring-white dark:ring-slate-900 dark:bg-slate-700">
            <svg class="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16"><path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023Z M16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/></svg>
        </span>
        <h3 class="font-medium leading-tight">Account Info</h3>
        <p class="text-sm">Step details here</p>
    </li>
    <li class="ms-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-slate-100 rounded-full -start-4 ring-4 ring-white dark:ring-slate-900 dark:bg-slate-700">
            <svg class="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"><path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.992 1.992 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z"/></svg>
        </span>
        <h3 class="font-medium leading-tight">Confirmation</h3>
        <p class="text-sm">Step details here</p>
    </li>
</ol>`;

const stepperWithContentCode = `<ol class="space-y-4 w-full">
    <li>
        <div class="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-slate-800 dark:border-green-800 dark:text-green-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">User info</span>
                <h3 class="font-medium">1. User info</h3>
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/></svg>
            </div>
        </div>
    </li>
    <li>
        <div class="w-full p-4 text-slate-900 bg-slate-100 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Company info</span>
                <h3 class="font-medium">2. Company info</h3>
            </div>
        </div>
    </li>
    <li>
        <div class="w-full p-4 text-slate-900 bg-slate-100 border border-slate-300 rounded-lg dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400" role="alert">
            <div class="flex items-center justify-between">
                <span class="sr-only">Payment details</span>
                <h3 class="font-medium">3. Payment details</h3>
            </div>
        </div>
    </li>
</ol>`;

export default function StepperClientComponent() {
  return (
    <>
      <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Basic Usage
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari komponen stepper horizontal untuk memandu pengguna melalui suatu proses.</p>
      <CodePreview code={basicStepperCode}>
        <div dangerouslySetInnerHTML={{ __html: basicStepperCode }} />
      </CodePreview>

      <h2 id="stepper-with-icons" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Stepper with Icons
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan ikon untuk representasi visual dari setiap langkah dalam stepper.</p>
      <CodePreview code={stepperWithIconsCode}>
        <div dangerouslySetInnerHTML={{ __html: stepperWithIconsCode.replace(/考え/g, 'a1 1 0 0 1') }} />
      </CodePreview>

      <h2 id="vertical-stepper" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Vertical Stepper
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tampilkan langkah-langkah dalam format vertikal, cocok untuk daftar tugas atau alur kerja yang lebih panjang.</p>
      <CodePreview code={verticalStepperCode}>
        <div dangerouslySetInnerHTML={{ __html: verticalStepperCode }} />
      </CodePreview>

      <h2 id="stepper-with-content" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Stepper with Content
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Integrasikan konten atau formulir dalam setiap langkah untuk pengalaman pengguna yang lebih interaktif.</p>
      <CodePreview code={stepperWithContentCode}>
        <div dangerouslySetInnerHTML={{ __html: stepperWithContentCode }} />
      </CodePreview>
    </>
  );
}