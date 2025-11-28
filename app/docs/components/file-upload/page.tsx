import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import FileUploadClientComponent from './FileUploadClientComponent';

const pageHeadings = [
  { title: 'File Upload', slug: 'file-upload', level: 1 },
  { title: 'Simple', slug: 'simple-upload', level: 2 },
  { title: 'Drag and Drop', slug: 'drag-and-drop', level: 2 },
  { title: 'With Preview', slug: 'with-preview', level: 2 },
];

export const metadata: Metadata = {
  title: 'React File Upload Component - Tailwind CSS | Jhonz Template',
  description: 'Documentation and examples for file upload components built with React and Tailwind CSS. Includes simple, drag-and-drop, and with preview styles.',
  keywords: ['react file upload', 'tailwind css file upload', 'drag and drop component', 'ui component', 'jhonz template'],
  authors: [{ name: 'Zona Firman', url: 'https://zona-firman.vercel.app' }],
  openGraph: {
    title: 'React File Upload Component - Tailwind CSS | Jhonz Template',
    description: 'A variety of modern and customizable file upload components built with React and Tailwind CSS, including examples for drag-and-drop and image previews.',
  },
};

export default function FileUploadPage() {
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
          The file upload component allows users to select one or more files from their device to upload to the server.
        </p>
        <FileUploadClientComponent />
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}