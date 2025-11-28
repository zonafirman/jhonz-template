'use client';

import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Image from 'next/image';

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

export default function ImageClientComponent() {
  const imageSections = [
    { id: 'basic-usage', title: 'Basic Usage', description: 'Use the `Image` component from `next/image` for automatic image optimization. You must provide `width`, `height`, and `alt` props.', code: basicUsageCode, content: <Image src="https://picsum.photos/seed/1/400/300" alt="Random image" width={400} height={300} className="rounded-lg" /> },
    { id: 'sizing', title: 'Sizing', description: 'Control the display size of images using Tailwind CSS width (`w-*`) and height (`h-*`) utilities. The `width` and `height` props should reflect the original image aspect ratio to prevent layout shift.', code: sizingCode, content: <div className="flex items-start gap-4"><Image src="https://picsum.photos/seed/2/400/300" alt="Small image" width={128} height={96} className="h-24 w-32 rounded-lg object-cover" /><Image src="https://picsum.photos/seed/3/400/300" alt="Medium image" width={192} height={144} className="h-36 w-48 rounded-lg object-cover" /><Image src="https://picsum.photos/seed/4/400/300" alt="Large image" width={256} height={192} className="h-48 w-64 rounded-lg object-cover" /></div> },
    { id: 'radius', title: 'Radius', description: "Apply border-radius to images using Tailwind's `rounded-*` utility classes, such as `rounded-lg` or `rounded-full`.", code: radiusCode, content: <div className="flex items-center gap-4"><Image src="https://picsum.photos/seed/5/200/200" alt="Rounded image" width={100} height={100} className="rounded-lg" /><Image src="https://picsum.photos/seed/6/200/200" alt="Fully rounded image" width={100} height={100} className="rounded-full" /></div> },
    { id: 'object-fit', title: 'Object Fit', description: "Use `object-cover` or `object-contain` to control how an image's content should be resized to fit its container.", code: objectFitCode, content: <div className="flex items-center gap-4"><Image src="https://picsum.photos/seed/7/400/300" alt="Object cover" width={150} height={150} className="rounded-lg bg-slate-200 object-cover" /><Image src="https://picsum.photos/seed/8/400/300" alt="Object contain" width={150} height={150} className="rounded-lg bg-slate-200 object-contain" /></div> },
  ];

  return (
    <>
      {imageSections.map(section => (
        <div key={section.id}>
          <h2 id={section.id} className="mt-12 scroll-mt-20 text-3xl font-bold">
            {section.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{section.description}</p>
          <CodePreview code={section.code}>{section.content}</CodePreview>
        </div>
      ))}
    </>
  );
}