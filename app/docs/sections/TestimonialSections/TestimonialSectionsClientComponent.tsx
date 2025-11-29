'use client';

import Image from 'next/image';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const simpleTestimonialCode = `<section class="bg-white dark:bg-slate-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure class="max-w-screen-md mx-auto">
            <svg class="h-12 mx-auto mb-3 text-slate-400 dark:text-slate-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" fill="currentColor"/>
            </svg> 
            <blockquote>
                <p class="text-2xl font-medium text-slate-900 dark:text-white">"This template is a game-changer. The components are well-designed and easy to customize. It has saved me countless hours of development time."</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <Image width={24} height={24} class="rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                <div class="flex items-center divide-x-2 divide-slate-500 dark:divide-slate-700">
                    <div class="pr-3 font-medium text-slate-900 dark:text-white">Micheal Gough</div>
                    <div class="pl-3 text-sm font-light text-slate-500 dark:text-slate-400">CEO at Google</div>
                </div>
            </figcaption>
        </figure>
    </div>
</section>`;

const gridTestimonialCode = `<section class="bg-white dark:bg-slate-900">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white">Testimonials from our users</h2>
            <p class="text-slate-500 sm:text-xl dark:text-slate-400">Hear from our satisfied customers about their experience with our products and services.</p>
        </div>
        <div class="grid gap-8 md:grid-cols-2">
            <figure class="flex flex-col p-8 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700">
                <blockquote class="flex-grow">
                    <p class="text-lg font-medium text-slate-900 dark:text-white">"The attention to detail in this template is incredible. It's modern, clean, and highly performant. I highly recommend it to any developer."</p>
                </blockquote>
                <figcaption class="flex items-center mt-6 space-x-3">
                    <Image width={24} height={24} class="rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                    <div class="font-medium dark:text-white">Bonnie Green</div>
                </figcaption>
            </figure>
            <figure class="flex flex-col p-8 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700">
                <blockquote class="flex-grow">
                    <p class="text-lg font-medium text-slate-900 dark:text-white">"As a designer, I appreciate the aesthetic and usability. The components are not only functional but also beautiful."</p>
                </blockquote>
                <figcaption class="flex items-center mt-6 space-x-3">
                    <Image width={24} height={24} class="rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                    <div class="font-medium dark:text-white">Jese Leos</div>
                </figcaption>
            </figure>
        </div>
    </div>
</section>`;

export default function TestimonialSectionsClientComponent() {
  return (
    <>
      <h2 id="simple-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Simple Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A clean and focused testimonial section with a quote, author, and title.</p>
      <CodePreview code={simpleTestimonialCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
            <figure className="mx-auto max-w-screen-md">
              <svg className="mx-auto mb-3 h-12 text-slate-400 dark:text-slate-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" fill="currentColor" />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-slate-900 dark:text-white">&quot;This template is a game-changer. The components are well-designed and easy to customize. It has saved me countless hours of development time.&quot;</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Image width={24} height={24} className="rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-slate-500 dark:divide-slate-700">
                  <div className="pr-3 font-medium text-slate-900 dark:text-white">Micheal Gough</div>
                  <div className="pl-3 text-sm font-light text-slate-500 dark:text-slate-400">CEO at Google</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </CodePreview>

      <h2 id="grid-layout" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Grid Layout
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Display multiple testimonials in a modern grid layout to showcase social proof effectively.</p>
      <CodePreview code={gridTestimonialCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mb-8 max-w-screen-md lg:mb-16">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Testimonials from our users</h2>
              <p className="text-slate-500 sm:text-xl dark:text-slate-400">Hear from our satisfied customers about their experience with our products and services.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <figure className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800">
                <blockquote className="flex-grow">
                  <p className="text-lg font-medium text-slate-900 dark:text-white">&quot;The attention to detail in this template is incredible. It&apos;s modern, clean, and highly performant. I highly recommend it to any developer.&quot;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center space-x-3">
                  <Image width={24} height={24} className="rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                  <div className="font-medium dark:text-white">Bonnie Green</div>
                </figcaption>
              </figure>
              <figure className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800">
                <blockquote className="flex-grow">
                  <p className="text-lg font-medium text-slate-900 dark:text-white">&quot;As a designer, I appreciate the aesthetic and usability. The components are not only functional but also beautiful.&quot;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center space-x-3">
                  <Image width={24} height={24} className="rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                  <div className="font-medium dark:text-white">Jese Leos</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </CodePreview>
    </>
  );
}