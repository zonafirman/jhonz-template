'use client';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Image from 'next/image';

const simpleAvatarCode = `<div class="relative inline-block h-12 w-12">
  <img class="h-full w-full rounded-full object-cover" src="/path/to/avatar.jpg" alt="User avatar" />
</div>`;

const sizesAvatarCode = `<div class="flex items-center space-x-4">
  {/* Extra Small */}
  <img class="h-8 w-8 rounded-full object-cover" src="..." alt="User avatar" />
  {/* Small */}
  <img class="h-10 w-10 rounded-full object-cover" src="..." alt="User avatar" />
  {/* Medium (Default) */}
  <img class="h-12 w-12 rounded-full object-cover" src="..." alt="User avatar" />
  {/* Large */}
  <img class="h-16 w-16 rounded-full object-cover" src="..." alt="User avatar" />
  {/* Extra Large */}
  <img class="h-20 w-20 rounded-full object-cover" src="..." alt="User avatar" />
</div>`;

const shapesAvatarCode = `<div class="flex items-center space-x-4">
  {/* Rounded (Default) */}
  <img class="h-12 w-12 rounded-full object-cover" src="..." alt="User avatar" />
  {/* Square */}
  <img class="h-12 w-12 rounded-md object-cover" src="..." alt="User avatar" />
</div>`;

const indicatorAvatarCode = `<div class="relative inline-block h-12 w-12">
  <img class="h-full w-full rounded-full object-cover" src="..." alt="User avatar" />
  <span class="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
</div>`;

const placeholderAvatarCode = `<div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
  <span class="text-lg font-semibold">JD</span>
</div>`;

const groupAvatarCode = `<div class="flex items-center space-x-2">
  <img class="h-10 w-10 rounded-full object-cover" src="..." />
  <img class="h-10 w-10 rounded-full object-cover" src="..." />
  <img class="h-10 w-10 rounded-full object-cover" src="..." />
</div>`;

const stackedAvatarCode = `<div class="flex -space-x-4">
  <img class="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-slate-900" src="..." />
  <img class="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-slate-900" src="..." />
  <img class="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-slate-900" src="..." />
  <a class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-300 dark:border-slate-900 dark:bg-slate-700 dark:text-slate-300" href="#">+5</a>
</div>`;

const ringAvatarCode = `<div class="flex items-center space-x-4">
  {/* Blue Ring */}
  <img class="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900" src="..." />
  {/* Green Ring */}
  <img class="h-12 w-12 rounded-full object-cover ring-2 ring-green-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900" src="..." />
</div>`;

const tooltipAvatarCode = `<div class="group relative">
  <img class="h-12 w-12 rounded-full object-cover" src="..." />
  <div class="absolute bottom-full mb-2 hidden w-max -translate-x-1/2 transform rounded-md bg-slate-800 px-2 py-1 text-xs text-white group-hover:block left-1/2">
    John Doe
  </div>
</div>`;

export default function AvatarClientComponent() {
  return (
    <>
      <h2 id="simple" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Simple
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A basic circular avatar with an image.</p>
      <CodePreview code={simpleAvatarCode}>
        <div className="relative inline-block h-12 w-12">
          <Image className="h-full w-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User avatar" width={48} height={48} />
        </div>
      </CodePreview>

      <h2 id="sizes" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Sizes
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Avatars can be rendered in different sizes.</p>
      <CodePreview code={sizesAvatarCode}>
        <div className="flex flex-wrap items-center gap-4">
          <Image className="h-8 w-8 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" width={32} height={32} />
          <Image className="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" width={40} height={40} />
          <Image className="h-12 w-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" width={48} height={48} />
          <Image className="h-16 w-16 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" width={64} height={64} />
          <Image className="h-20 w-20 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" width={80} height={80} />
        </div>
      </CodePreview>

      <h2 id="shapes" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Shapes
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Avatars can be circular (default) or square.</p>
      <CodePreview code={shapesAvatarCode}>
        <div className="flex items-center space-x-4">
          <Image className="h-12 w-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User avatar" width={48} height={48} />
          <Image className="h-12 w-12 rounded-md object-cover" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User avatar" width={48} height={48} />
        </div>
      </CodePreview>

      <h2 id="with-indicator" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Indicator
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Add a status indicator to show user presence (e.g., online, offline, busy).</p>
      <CodePreview code={indicatorAvatarCode}>
        <div className="flex items-center space-x-4">
          <div className="relative inline-block h-12 w-12">
            <Image className="h-full w-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026707d" alt="User avatar" width={48} height={48} />
            <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500 dark:border-slate-900"></span>
          </div>
          <div className="relative inline-block h-12 w-12">
            <Image className="h-full w-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026707d" alt="User avatar" width={48} height={48} />
            <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full border-2 border-white bg-slate-400 dark:border-slate-900"></span>
          </div>
          <div className="relative inline-block h-12 w-12">
            <Image className="h-full w-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026707d" alt="User avatar" width={48} height={48} />
            <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500 dark:border-slate-900"></span>
          </div>
        </div>
      </CodePreview>

      <h2 id="with-placeholder" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Placeholder
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">If an image is not available, you can use initials as a placeholder.</p>
      <CodePreview code={placeholderAvatarCode}>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
          <span className="text-lg font-semibold">JD</span>
        </div>
      </CodePreview>

      <h2 id="group" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Group
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Group multiple avatars together to represent a team or a group of users.</p>
      <CodePreview code={groupAvatarCode}>
        <div className="flex items-center space-x-2">
          <Image className="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User avatar" width={40} height={40} />
          <Image className="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" width={40} height={40} />
          <Image className="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User avatar" width={40} height={40} />
        </div>
      </CodePreview>

      <h2 id="stacked" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Stacked
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Use negative margins to stack avatars. This is useful for showing a larger group with a count of additional members.</p>
      <CodePreview code={stackedAvatarCode}>
        <div className="flex -space-x-4">
          <Image className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-slate-900" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User avatar" width={40} height={40} />
          <Image className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-slate-900" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User avatar" width={40} height={40} />
          <Image className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-slate-900" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" alt="User avatar" width={40} height={40} />
          <a className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-300 dark:border-slate-900 dark:bg-slate-700 dark:text-slate-300" href="#">
            +5
          </a>
        </div>
      </CodePreview>

      <h2 id="with-ring" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Ring
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Add a ring around the avatar to highlight it, often used to indicate an active story or status.</p>
      <CodePreview code={ringAvatarCode}>
        <div className="flex items-center space-x-6">
          <Image className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900" src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="User avatar" width={48} height={48} />
          <Image className="h-12 w-12 rounded-full object-cover ring-2 ring-green-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900" src="https://i.pravatar.cc/150?u=a042581f4e29026702d" alt="User avatar" width={48} height={48} />
          <Image className="h-12 w-12 rounded-full object-cover ring-2 ring-pink-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900" src="https://i.pravatar.cc/150?u=a042581f4e29026702d" alt="User avatar" width={48} height={48} />
        </div>
      </CodePreview>

      <h2 id="with-tooltip" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Tooltip
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Show a tooltip with the user&apos;s name on hover. This requires a small amount of CSS or utility classes.</p>
      <CodePreview code={tooltipAvatarCode}>
        <div className="group relative">
          <Image className="h-12 w-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026708c" alt="User avatar" width={48} height={48} />
          <div className="pointer-events-none absolute bottom-full mb-2 hidden w-max -translate-x-1/2 transform rounded-md bg-slate-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-hover:block left-1/2">
            John Doe
          </div>
        </div>
      </CodePreview>
    </>
  );
}