'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';
import Image from 'next/image';

const pageHeadings = [
  { title: 'Image', slug: 'image', level: 1 },
  { title: 'Basic Usage', slug: 'basic-usage', level: 2 },
  { title: 'Sizing', slug: 'sizing', level: 2 },
  { title: 'Radius', slug: 'radius', level: 2 },
  { title: 'Object Fit', slug: 'object-fit', level: 2 },
];

const basicUsageCode = `<Image
  src="https://picsum.photos/seed/1/400/300"
  alt="Random image"
  width={400}
  height={300}
  className="rounded-lg"
/>`;

const sizingCode = `<div class="flex items-start gap-4">
  {/* Small */}
  <Image
    src="https://picsum.photos/seed/2/400/300"
    alt="Small image"
    width={128}
    height={96}
    className="h-24 w-32 rounded-lg object-cover"
  />
  {/* Medium */}
  <Image
    src="https://picsum.photos/seed/3/400/300"
    alt="Medium image"
    width={192}
    height={144}
    className="h-36 w-48 rounded-lg object-cover"
  />
  {/* Large */}
  <Image
    src="https://picsum.photos/seed/4/400/300"
    alt="Large image"
    width={256}
    height={192}
    className="h-48 w-64 rounded-lg object-cover"
  />
</div>`;

const radiusCode = `<div class="flex items-center gap-4">
  <Image
    src="https://picsum.photos/seed/5/200/200"
    alt="Rounded image"
    width={100}
    height={100}
    className="rounded-lg"
  />
  <Image
    src="https://picsum.photos/seed/6/200/200"
    alt="Fully rounded image"
    width={100}
    height={100}
    className="rounded-full"
  />
</div>`;

const objectFitCode = `<div class="flex items-center gap-4">
  {/* Object Cover */}
  <Image
    src="https://picsum.photos/seed/7/400/300"
    alt="Object cover"
    width={150}
    height={150}
    className="rounded-lg bg-slate-200 object-cover"
  />
  {/* Object Contain */}
  <Image
    src="https://picsum.photos/seed/8/400/300"
    alt="Object contain"
    width={150}
    height={150}
    className="rounded-lg bg-slate-200 object-contain"
  />
</div>`;

export default function ImagePage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Image</span>
        </nav>

        <h1 id="image" className="scroll-mt-20 text-4xl font-bold">
          Image
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Images are crucial for conveying information and enhancing the visual appeal of a website. This guide shows how to use the Next.js Image component with Tailwind CSS.</p>

        <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Basic Usage
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Use the `Image` component from `next/image` for automatic image optimization. You must provide `width`, `height`, and `alt` props.</p>
        <CodePreview code={basicUsageCode}>
          <Image src="https://picsum.photos/seed/1/400/300" alt="Random image" width={400} height={300} className="rounded-lg" />
        </CodePreview>

        <h2 id="sizing" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Sizing
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Control the display size of images using Tailwind CSS width (`w-*`) and height (`h-*`) utilities. The `width` and `height` props should reflect the original image aspect ratio to prevent layout shift.
        </p>
        <CodePreview code={sizingCode}>
          <div className="flex items-start gap-4">
            {/* Small */}
            <Image src="https://picsum.photos/seed/2/400/300" alt="Small image" width={128} height={96} className="h-24 w-32 rounded-lg object-cover" />
            {/* Medium */}
            <Image src="https://picsum.photos/seed/3/400/300" alt="Medium image" width={192} height={144} className="h-36 w-48 rounded-lg object-cover" />
            {/* Large */}
            <Image src="https://picsum.photos/seed/4/400/300" alt="Large image" width={256} height={192} className="h-48 w-64 rounded-lg object-cover" />
          </div>
        </CodePreview>

        <h2 id="radius" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Radius
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Apply border-radius to images using Tailwind&apos;s `rounded-*` utility classes, such as `rounded-lg` or `rounded-full`.</p>
        <CodePreview code={radiusCode}>
          <div className="flex items-center gap-4">
            <Image src="https://picsum.photos/seed/5/200/200" alt="Rounded image" width={100} height={100} className="rounded-lg" />
            <Image src="https://picsum.photos/seed/6/200/200" alt="Fully rounded image" width={100} height={100} className="rounded-full" />
          </div>
        </CodePreview>

        <h2 id="object-fit" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Object Fit
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Use `object-cover` or `object-contain` to control how an image&apos;s content should be resized to fit its container.</p>
        <CodePreview code={objectFitCode}>
          <div className="flex items-center gap-4">
            {/* Object Cover */}
            <Image src="https://picsum.photos/seed/7/400/300" alt="Object cover" width={150} height={150} className="rounded-lg bg-slate-200 object-cover" />
            {/* Object Contain */}
            <Image src="https://picsum.photos/seed/8/400/300" alt="Object contain" width={150} height={150} className="rounded-lg bg-slate-200 object-contain" />
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}