'use client';

import React, { useState, useCallback } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

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

export default function FileUploadClientComponent() {
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

  const fileUploadSections = [
    {
      id: 'simple-upload',
      title: 'Simple Upload',
      description: 'Use a standard file input that has been styled for basic use cases.',
      code: simpleUploadCode,
      content: (
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-900/50 dark:file:text-violet-300 dark:hover:file:bg-violet-900" />
        </label>
      ),
    },
    {
      id: 'drag-and-drop',
      title: 'Drag and Drop',
      description: 'Create a dropzone to allow users to upload files by dragging and dropping them.',
      code: dragAndDropCode,
      content: (
        <div className="flex w-full items-center justify-center">
          <label htmlFor="dropzone-file-demo" className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="mb-4 h-8 w-8 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" /></svg>
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file-demo" type="file" className="hidden" />
          </label>
        </div>
      ),
    },
    {
      id: 'with-preview',
      title: 'With Preview',
      description: 'Show a preview of the uploaded image before submitting the form. This example uses react-dropzone for drag-and-drop functionality and displays an image preview.',
      code: withPreviewCode,
      content: (
        <div {...getRootProps()} className="flex w-full items-center justify-center">
          <label
            htmlFor="dropzone-file-preview"
            className="relative flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-slate-500 dark:hover:bg-slate-600"
          >
            {preview ? (
              <Image src={preview} alt="Preview" layout="fill" objectFit="contain" className="rounded-lg" />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="mb-4 h-8 w-8 text-slate-500 dark:text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                {isDragActive ? (
                  <p className="text-sm text-slate-500 dark:text-slate-400">Drop the files here ...</p>
                ) : (
                  <>
                    <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </>
                )}
              </div>
            )}
            <input {...getInputProps()} id="dropzone-file-preview" className="hidden" />
          </label>
        </div>
      ),
    },
  ];

  return (
    <>
      {fileUploadSections.map(section => (
        <div key={section.id}>
          <h2 id={section.id} className="mt-12 scroll-mt-20 text-3xl font-bold">{section.title}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{section.description}</p>
          <CodePreview code={section.code}>{section.content}</CodePreview>
        </div>
      ))}
    </>
  );
}