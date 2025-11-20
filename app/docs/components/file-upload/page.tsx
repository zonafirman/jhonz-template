'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React, { useState, useCallback } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

const pageHeadings = [
  { title: 'File Upload', slug: 'file-upload', level: 1 },
  { title: 'Simple', slug: 'simple-upload', level: 2 },
  { title: 'Drag and Drop', slug: 'drag-and-drop', level: 2 },
  { title: 'With Preview', slug: 'with-preview', level: 2 },
];

const simpleUploadCode = `<label class="block">
  <span class="sr-only">Choose profile photo</span>
  <input type="file" class="block w-full text-sm text-slate-500
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0
    file:text-sm file:font-semibold
    file:bg-violet-50 file:text-violet-700
    hover:file:bg-violet-100
    dark:file:bg-violet-900/50 dark:file:text-violet-300 dark:hover:file:bg-violet-900
  "/>
</label>`;

const dragAndDropCode = `<div class="flex w-full items-center justify-center">
  <label for="dropzone-file" class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-600">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <svg class="mb-4 h-8 w-8 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
      </svg>
      <p class="mb-2 text-sm text-slate-500 dark:text-slate-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
      <p class="text-xs text-slate-500 dark:text-slate-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input id="dropzone-file" type="file" class="hidden" />
  </label>
</div>`;

const withPreviewCode = `<div class="flex w-full items-center justify-center">
  <label class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-600">
    {/* Preview or Upload UI */}
  </label>
</div>`;

export default function FileUploadPage() {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } });

  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">File Upload</span>
        </nav>

        <h1 id="file-upload" className="scroll-mt-20 text-4xl font-bold">
          File Upload
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Komponen unggah file memungkinkan pengguna untuk memilih satu atau lebih file dari perangkat mereka untuk diunggah ke server.
        </p>

        <h2 id="simple-upload" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Simple Upload
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Gunakan input file standar yang telah disesuaikan gayanya untuk kasus penggunaan dasar.
        </p>
        <CodePreview code={simpleUploadCode}>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-900/50 dark:file:text-violet-300 dark:hover:file:bg-violet-900" />
          </label>
        </CodePreview>

        <h2 id="drag-and-drop" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Drag and Drop
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Buat zona jatuhkan (dropzone) untuk memungkinkan pengguna mengunggah file dengan cara menyeret dan melepaskannya.
        </p>
        <CodePreview code={dragAndDropCode}>
          <div className="flex w-full items-center justify-center">
            <label htmlFor="dropzone-file" className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="mb-4 h-8 w-8 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-slate-500 dark:text-slate-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </CodePreview>

        <h2 id="with-preview" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Preview
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Tampilkan pratinjau gambar setelah pengguna memilih file. Contoh ini menggunakan `react-dropzone` untuk fungsionalitas drag-and-drop dan pratinjau.
        </p>
        <CodePreview code={withPreviewCode}>
          <div {...getRootProps()} className="flex w-full items-center justify-center">
            <input {...getInputProps()} />
            <label className={`flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${isDragActive ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' : 'border-slate-300 bg-slate-50 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-600'}`}>
              {preview ? (
                <Image src={preview} alt="Preview" width={256} height={256} className="h-full w-full object-contain" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className={`mb-4 h-8 w-8 ${isDragActive ? 'text-indigo-600' : 'text-slate-500 dark:text-slate-400'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" /></svg>
                  <p className="mb-2 text-sm text-slate-500 dark:text-slate-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Image files only</p>
                </div>
              )}
            </label>
          </div>
        </CodePreview>

      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}