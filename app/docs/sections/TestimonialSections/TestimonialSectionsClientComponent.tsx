'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const simpleTestimonialCode = `<section class="bg-white dark:bg-slate-900">
    <div class="max-w-7xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure class="max-w-3xl mx-auto">
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
    <div class="max-w-7xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-3xl mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white">Testimonials from our users</h2>
            <p class="text-slate-500 sm:text-xl dark:text-slate-400">Hear from our satisfied customers about their experience with our products and services.</p>
        </div>
        <div class="grid gap-8 md:grid-cols-2">
            <figure class="flex flex-col p-8 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700">
                <blockquote class="grow">
                    <p class="text-lg font-medium text-slate-900 dark:text-white">"The attention to detail in this template is incredible. It's modern, clean, and highly performant. I highly recommend it to any developer."</p>
                </blockquote>
                <figcaption class="flex items-center mt-6 space-x-3">
                    <Image width={24} height={24} class="rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                    <div class="font-medium dark:text-white">Bonnie Green</div>
                </figcaption>
            </figure>
            <figure class="flex flex-col p-8 bg-slate-50 border border-slate-200 rounded-lg dark:bg-slate-800 dark:border-slate-700">
                <blockquote class="grow">
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

const modernTestimonial2025Code = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Customers Say</h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">A modern and professional testimonial section for 2025, featuring a dark theme and star ratings.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <figure class="flex flex-col rounded-xl bg-slate-800/50 p-8">
                <blockquote class="grow text-white">
                    <p>"The design is clean, modern, and the code is top-notch. It's the perfect starting point for any project."</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                    <img class="h-10 w-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="profile picture" width="40" height="40" />
                    <div>
                        <div class="font-semibold text-white">Thomas Lean</div>
                        <div class="text-slate-400">Lead Developer at Open AI</div>
                    </div>
                </figcaption>
                <div class="mt-4 flex items-center gap-x-1">
                    <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z"/></svg>
                    <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z"/></svg>
                    <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z"/></svg>
                    <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z"/></svg>
                    <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z"/></svg>
                </div>
            </figure>
        </div>
    </div>
</section>`;

const testimonialWithLogosCode = `<section class="bg-white dark:bg-slate-900">
    <div class="py-8 px-4 mx-auto max-w-7xl text-center lg:py-16 lg:px-6">
        <figure class="max-w-5xl mx-auto">
            <svg class="h-12 mx-auto mb-3 text-slate-400 dark:text-slate-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" fill="currentColor"/>
            </svg> 
            <blockquote>
                <p class="text-2xl font-medium text-slate-900 dark:text-white">"Jhonz Template has been a huge asset for our team. The modern design and clean code allowed us to launch our new website faster than ever before."</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture">
                <div class="flex items-center divide-x-2 divide-slate-500 dark:divide-slate-700">
                    <div class="pr-3 font-medium text-slate-900 dark:text-white">Joseph McFall</div>
                    <div class="pl-3 text-sm font-light text-slate-500 dark:text-slate-400">CTO at Vercel</div>
                </div>
            </figcaption>
        </figure>
        <div class="mt-12 text-center">
            <h3 class="mb-6 text-lg font-semibold text-slate-500 dark:text-slate-400 uppercase">Trusted by leading companies</h3>
            <div class="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
                <span class="text-2xl font-bold text-slate-500 dark:text-slate-400">Logo1</span><span class="text-2xl font-bold text-slate-500 dark:text-slate-400">Logo2</span><span class="text-2xl font-bold text-slate-500 dark:text-slate-400">Logo3</span><span class="text-2xl font-bold text-slate-500 dark:text-slate-400">Logo4</span>
            </div>
        </div>
    </div>
</section>`;

const testimonialCardWithGradientCode = `<section class="relative bg-slate-900 py-16 sm:py-24">
    <div class="absolute inset-0 bg-grid-slate-800 mask-[linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Loved by Developers Worldwide</h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">A standout testimonial card with a glowing gradient border, perfect for highlighting a key customer story.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl">
            <div class="relative rounded-2xl bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <figure class="rounded-xl bg-slate-900 p-8">
                    <blockquote class="text-xl font-semibold leading-8 text-white">
                        <p>"This is the template I've been dreaming of. The code quality is exceptional, the design is stunning, and the developer experience is second to none. It's saved me weeks of work."</p>
                    </blockquote>
                    <figcaption class="mt-8 flex items-center gap-x-4">
                        <img class="h-12 w-12 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png" alt="profile picture" width="48" height="48">
                        <div class="text-sm leading-6"><div class="font-semibold text-white">Lana Byrd</div><div class="text-slate-400">@lanabyrd</div></div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</section>`;

const interactiveTestimonialCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">A Wall of Love from Our Users</h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">An interactive and unique testimonial layout for 2025. Click on an avatar to see their story.</p>
        </div>
        <div class="mt-16 flow-root">
            <div class="-m-2">
                <div class="flex flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-x-6">
                    <!-- Avatars for selection -->
                    <button class="h-12 w-12 rounded-full overflow-hidden ring-2 ring-offset-4 ring-offset-slate-900 ring-indigo-500">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sarah Dayan" class="h-full w-full object-cover">
                    </button>
                    <button class="h-12 w-12 rounded-full overflow-hidden ring-2 ring-slate-700 hover:ring-indigo-500">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas" class="h-full w-full object-cover">
                    </button>
                    <button class="h-12 w-12 rounded-full overflow-hidden ring-2 ring-slate-700 hover:ring-indigo-500">
                        <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Lindsay Walton" class="h-full w-full object-cover">
                    </button>
                </div>
            </div>
        </div>
        <div class="mt-12">
            <figure class="mx-auto max-w-2xl">
                <blockquote class="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                    <p>"The interactivity and modern design are exactly what we were looking for. This template is a leap into the future of web design. Truly impressive!"</p>
                </blockquote>
                <figcaption class="mt-8 text-center">
                    <div class="text-base text-white">
                        <div class="font-semibold">Sarah Dayan</div>
                        <div class="mt-1 text-slate-400">Staff Engineer, Algolia</div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
</section>`;

const carouselTestimonialCode = `<section class="bg-white dark:bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Stories from Our Community</h2>
            <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">A modern, interactive carousel layout to showcase multiple testimonials in a compact and elegant way for 2025.</p>
        </div>
        <div class="mt-16 flow-root">
            <div class="-mx-4 sm:-mx-6 lg:-mx-8">
                <div class="flex overflow-x-auto space-x-8 px-4 sm:px-6 lg:px-8">
                    <figure class="flex-none w-full max-w-sm rounded-2xl bg-slate-50 dark:bg-slate-800 p-8">
                        <blockquote class="text-slate-900 dark:text-white">
                            <p>"The seamless integration and beautiful design have made our workflow so much more efficient. A truly top-tier product."</p>
                        </blockquote>
                        <figcaption class="mt-6 flex items-center gap-x-4">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Michael Foster">
                            <div>
                                <div class="font-semibold text-slate-900 dark:text-white">Michael Foster</div>
                                <div class="text-slate-600 dark:text-slate-400">Co-Founder / CTO</div>
                            </div>
                        </figcaption>
                    </figure>
                    <!-- More testimonials... -->
                </div>
            </div>
        </div>
    </div>
</section>`;

const carouselTestimonialsData = [
  {
    quote: 'The seamless integration and beautiful design have made our workflow so much more efficient. A truly top-tier product.',
    name: 'Michael Foster',
    title: 'Co-Founder / CTO',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    quote: "I'm blown away by the level of detail and the thought that went into this. It's not just a tool, it's a partner in our creative process.",
    name: 'Dries Vincent',
    title: 'Business Relations',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    quote: 'This has completely revolutionized how we approach our projects. The interactivity and user experience are unparalleled.',
    name: 'Lindsay Walton',
    title: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const featuredGridTestimonialCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Future of Design is Here</h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">A unique and interactive featured grid layout for 2025. Click a card to feature it.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <!-- Featured Testimonial -->
            <figure class="flex flex-col rounded-2xl bg-white/5 p-8 text-white lg:col-span-2">
                <blockquote class="flex-auto text-lg font-semibold leading-8">
                    <p>"This isn't just a template; it's a complete design system. The interactivity and modern aesthetics have elevated our projects to a new level. It's the most impressive and intuitive tool I've used in years."</p>
                </blockquote>
                <figcaption class="mt-8 flex items-center gap-x-4">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Tom Cook">
                    <div>
                        <div class="font-semibold">Tom Cook</div>
                        <div class="text-slate-400">Director of Product, Meta</div>
                    </div>
                </figcaption>
            </figure>
            <!-- Small Testimonials -->
            <div class="space-y-8">
                <figure class="flex flex-col rounded-2xl bg-white/5 p-8 text-white">
                    <blockquote class="flex-auto text-base leading-7">
                        <p>"The unique layout options are a breath of fresh air. So much potential for creativity."</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Lindsay Walton">
                        <div class="text-sm"><div class="font-semibold">Lindsay Walton</div></div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</section>`;

const featuredGridTestimonials = [
  {
    id: 1,
    quote: "This isn't just a template; it's a complete design system. The interactivity and modern aesthetics have elevated our projects to a new level. It's the most impressive and intuitive tool I've used in years.",
    name: 'Tom Cook',
    title: 'Director of Product, Meta',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    quote: 'The unique layout options are a breath of fresh air. So much potential for creativity and making our brand stand out. The developer experience is fantastic.',
    name: 'Lindsay Walton',
    title: 'Frontend Developer, Vercel',
    avatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const masonryTestimonialCode = `<section class="bg-white dark:bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">From the Community Voice</h2>
            <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">A dynamic masonry grid layout for 2025, perfect for showcasing authentic feedback of all sizes.</p>
        </div>
        <div class="mx-auto mt-16 flow-root">
            <div class="sm:columns-2 lg:columns-3 gap-8 space-y-8">
                <figure class="rounded-2xl bg-slate-50 dark:bg-slate-800 p-8 break-inside-avoid">
                    <blockquote class="text-slate-900 dark:text-white">
                        <p>"The flexibility of this template is unmatched. I could build a unique-looking site in just a few hours. A must-have for any developer's toolkit."</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                        <img class="h-10 w-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Gough">
                        <div><div class="font-semibold text-slate-900 dark:text-white">Michael Gough</div></div>
                    </figcaption>
                </figure>
                <!-- More testimonials... -->
            </div>
        </div>
    </div>
</section>`;

const masonryTestimonialsData = [
  {
    quote: "The flexibility of this template is unmatched. I could build a unique-looking site in just a few hours. A must-have for any developer's toolkit.",
    name: 'Michael Gough',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
  },
  {
    quote: "I'm impressed by the modern design and the sheer number of components available. It has significantly sped up our development process.",
    name: 'Bonnie Green',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
  },
  {
    quote: 'This is a dream for designers. The components are aesthetically pleasing and follow best practices for UI/UX. The interactivity is the cherry on top.',
    name: 'Jese Leos',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
  },
  {
    quote: 'The code is clean, well-documented, and easy to customize. As a backend developer, I found it incredibly easy to integrate with our systems.',
    name: 'Joseph McFall',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
  },
  {
    quote: 'The attention to detail is what sets this apart. Every interaction, every component, feels polished and professional. Our users love the new look.',
    name: 'Lana Byrd',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png',
  },
  {
    quote: 'A fantastic starting point for any new project. It saved us countless hours of design and development. Highly recommended!',
    name: 'Thomas Lean',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png',
  },
];

const scrollingTickerTestimonialCode = `<section class="relative w-full overflow-hidden bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">A Constant Stream of Praise</h2>
        <p class="mt-4 text-lg leading-8 text-slate-400">An auto-scrolling ticker layout for 2025, showcasing a continuous flow of customer feedback.</p>
    </div>
    <div class="mt-16 flex w-max animate-marquee gap-8 animation-duration-[40s] hover:paused">
        <!-- First set of testimonials -->
        <figure class="flex-none w-full max-w-sm rounded-2xl bg-slate-800 p-6">
            <blockquote class="text-white"><p>"The scrolling feature is mesmerizing! It's a modern and engaging way to display feedback."</p></blockquote>
            <figcaption class="mt-4 flex items-center gap-x-3"><img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas"><div><div class="font-semibold text-white">Roberta Casas</div></div></figcaption>
        </figure>
        <!-- ... more testimonials -->
        <!-- Second set of testimonials (for seamless loop) -->
        <figure class="flex-none w-full max-w-sm rounded-2xl bg-slate-800 p-6">
            <blockquote class="text-white"><p>"The scrolling feature is mesmerizing! It's a modern and engaging way to display feedback."</p></blockquote>
            <figcaption class="mt-4 flex items-center gap-x-3"><img class="h-8 w-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Roberta Casas"><div><div class="font-semibold text-white">Roberta Casas</div></div></figcaption>
        </figure>
        <!-- ... more testimonials -->
    </div>
</section>

<!-- Add this to your tailwind.config.js -->
<!-- 
keyframes: {
  marquee: {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-50%)' },
  },
},
animation: {
  marquee: 'marquee linear infinite',
},
-->`;

const scrollingTestimonialsData = [
  { quote: "The scrolling feature is mesmerizing! It's a modern and engaging way to display feedback.", name: 'Roberta Casas', avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png' },
  { quote: 'This template continues to impress with its unique and interactive layouts. The ticker is a fantastic addition.', name: 'Joseph McFall', avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png' },
  { quote: 'A continuous stream of positivity. This is a brilliant way to build trust with new visitors.', name: 'Lana Byrd', avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png' },
  { quote: 'I love how it pauses on hover, allowing me to read the testimonials that catch my eye. Very user-friendly.', name: 'Michael Gough', avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png' },
];

const testimonial3DCardCode = `<section class="bg-slate-900 text-white py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">A New Perspective on Feedback</h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">An interactive 3D card testimonial for 2025. Hover over the card to experience a unique perspective shift.</p>
        </div>
        <div class="mt-16 flex justify-center">
            <div class="perspective-midrange">
                <figure class="group relative h-auto min-h-80 w-full max-w-lg rounded-xl bg-slate-800 p-8 shadow-2xl transition-transform duration-500 transform-3d hover:transform-[rotateY(15deg)_rotateX(-5deg)]">
                    <blockquote class="text-lg font-semibold leading-7 text-white">
                        <p>"The 3D effect on this testimonial card is mind-blowing. It's a creative and memorable way to showcase customer feedback. Jhonz Template continues to push the boundaries of web design."</p>
                    </blockquote>
                    <figcaption class="mt-6 flex items-center gap-x-4">
                        <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width="48" height="48">
                        <div><div class="font-semibold">Courtney Henry</div><div class="text-slate-400">Designer at Webflow</div></div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</section>`;

const bentoGridTestimonialCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Community is Building</h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">An interactive bento grid layout for 2025. Hover over the cards to see them scale.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
            <figure class="rounded-2xl bg-white/5 p-8 text-white transition-transform duration-300 hover:scale-105 lg:col-span-2">
                <blockquote class="text-lg font-semibold leading-8">
                    <p>"The bento grid layout is a fantastic way to showcase multiple testimonials. It's modern, clean, and highly engaging. This template is a must-have for any developer."</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width="48" height="48">
                    <div><div class="font-semibold">Brennan</div><div class="text-slate-400">CEO of Acme Inc.</div></div>
                </figcaption>
            </figure>
            <figure class="rounded-2xl bg-white/5 p-8 text-white transition-transform duration-300 hover:scale-105">
                <blockquote class="text-base leading-7"><p>"Short, sweet, and to the point. Love the aesthetic."</p></blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width="40" height="40">
                    <div class="text-sm"><div class="font-semibold">Leslie Alexander</div></div>
                </figcaption>
            </figure>
            <figure class="rounded-2xl bg-white/5 p-8 text-white transition-transform duration-300 hover:scale-105">
                <blockquote class="text-base leading-7"><p>"The interactivity is top-notch. Really makes the page feel alive."</p></blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4"><img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width="40" height="40"><div class="text-sm"><div class="font-semibold">Leonard Krasner</div></div></figcaption>
            </figure>
        </div>
    </div>
</section>`;

const socialProofWallCode = `<section class="bg-white dark:bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Straight from the Source</h2>
            <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">A social proof wall for 2025, presenting testimonials in a familiar social media format to build authenticity and trust.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article class="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
                <div class="flex items-center gap-x-4">
                    <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width="48" height="48">
                    <div>
                        <div class="font-semibold text-slate-900 dark:text-white">Whitney Francis</div>
                        <div class="text-slate-500 dark:text-slate-400">@whitneyfrancis</div>
                    </div>
                </div>
                <p class="mt-4 text-base text-slate-600 dark:text-slate-300">"The social media style is brilliant. It makes the feedback feel so much more genuine and relatable. Another great addition to an already amazing template."</p>
            </article>
        </div>
    </div>
</section>`;

const socialProofWallData = [
  {
    name: 'Whitney Francis',
    handle: '@whitneyfrancis',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: "The social media style is brilliant. It makes the feedback feel so much more genuine and relatable. Another great addition to an already amazing template.",
  },
  // You can add more testimonials here
];

const videoTestimonialCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Hear Directly From Our Users</h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">An engaging video testimonial section for 2025. Click play to watch their stories.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col rounded-2xl bg-white/5 p-6">
                <div class="relative aspect-video w-full overflow-hidden rounded-lg">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Customer thumbnail" class="h-full w-full object-cover">
                    <button class="absolute inset-0 flex items-center justify-center bg-black/40">
                        <svg class="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                    </button>
                </div>
                <blockquote class="mt-4 flex-grow text-white">
                    <p>"Seeing is believing. This template has transformed our projects."</p>
                </blockquote>
                <figcaption class="mt-4 flex items-center gap-x-3">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" alt="profile picture" width="32" height="32">
                    <div class="text-sm text-white"><div class="font-semibold">Evelyn Reed</div></div>
                </figcaption>
            </div>
        </div>
    </div>
</section>`;

const videoTestimonialsData = [
  { name: 'Evelyn Reed', quote: 'Seeing is believing. This template has transformed our projects.', thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80' },
  // Add more video testimonials here
];

const auroraTestimonialCode = `<section class="relative bg-slate-900 py-20 sm:py-32 overflow-hidden">
    <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <div class="w-160 h-160 bg-linear-to-tr from-violet-600 to-blue-600 rounded-full animate-spin-slow opacity-30 blur-3xl"></div>
    </div>
    <div class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
        <div class="w-160 h-160 bg-gradient-to-tr from-cyan-400 to-emerald-400 rounded-full animate-spin-slow-reverse opacity-30 blur-3xl"></div>
    </div>
    <div class="relative mx-auto max-w-4xl text-center px-4">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Voices of Innovation</h2>
        <p class="mt-4 text-lg leading-8 text-slate-300">A unique and rarely seen testimonial section for 2025, featuring a dynamic aurora background effect.</p>
        <figure class="mt-10">
            <blockquote class="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>"The aurora background is absolutely stunning. It gives our testimonials a futuristic and premium feel that we haven't seen anywhere else. A true standout feature for 2025."</p>
            </blockquote>
            <figcaption class="mt-10 flex items-center justify-center gap-x-4">
                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width="48" height="48">
                <div class="text-base text-left"><div class="font-semibold text-white">Leslie Alexander</div><div class="mt-1 text-slate-400">Co-Founder, Workcation</div></div>
            </figcaption>
        </figure>
    </div>
</section>`;

const interactiveTestimonials = [
  {
    id: 1,
    name: 'Sarah Dayan',
    company: 'Staff Engineer, Algolia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'The interactivity and modern design are exactly what we were looking for. This template is a leap into the future of web design. Truly impressive!',
  },
  {
    id: 2,
    name: 'Roberta Casas',
    company: 'Lead Designer, Dropbox',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png',
    quote: 'This is a game-changer for presenting social proof. The unique layout is both beautiful and highly engaging for our users. I highly recommend it!',
  },
  {
    id: 3,
    name: 'Lindsay Walton',
    company: 'Frontend Developer, Vercel',
    avatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'As a developer, I appreciate the clean code and how easy it was to integrate this interactive component. It looks amazing and works flawlessly.',
  },
];

export default function TestimonialSectionsClientComponent() {
  const [activeTestimonial, setActiveTestimonial] = useState(interactiveTestimonials[0]);
  const [featuredTestimonial, setFeaturedTestimonial] = useState(featuredGridTestimonials[0]);
  return (
    <>
      <h2 id="simple-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Simple Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A clean and focused testimonial section with a quote, author, and title.</p>
      <CodePreview code={simpleTestimonialCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:px-6 lg:py-16">
            <figure className="mx-auto max-w-3xl">
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
          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mb-8 max-w-3xl lg:mb-16">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Testimonials from our users</h2>
              <p className="text-slate-500 sm:text-xl dark:text-slate-400">Hear from our satisfied customers about their experience with our products and services.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <figure className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800">
                <blockquote className="grow">
                  <p className="text-lg font-medium text-slate-900 dark:text-white">&quot;The attention to detail in this template is incredible. It&apos;s modern, clean, and highly performant. I highly recommend it to any developer.&quot;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center space-x-3">
                  <Image width={24} height={24} className="rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                  <div className="font-medium dark:text-white">Bonnie Green</div>
                </figcaption>
              </figure>
              <figure className="flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-800">
                <blockquote className="grow">
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

      <h2 id="modern-testimonial-2025" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Modern Testimonial 2025
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Bagian testimoni yang modern dan profesional untuk tahun 2025, menampilkan tema gelap dan peringkat bintang untuk membangun kepercayaan.</p>
      <CodePreview code={modernTestimonial2025Code}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Customers Say</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">A modern and professional testimonial section for 2025, featuring a dark theme and star ratings.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <figure className="flex flex-col rounded-xl bg-slate-800/50 p-8">
                <blockquote className="grow text-white">
                  <p>&quot;The design is clean, modern, and the code is top-notch. It&apos;s the perfect starting point for any project.&quot;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image width={40} height={40} className="h-10 w-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="profile picture" />
                  <div>
                    <div className="font-semibold text-white">Thomas Lean</div>
                    <div className="text-slate-400">Lead Developer at Open AI</div>
                  </div>
                </figcaption>
                <div className="mt-4 flex items-center gap-x-1">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.91l6.572-.955L10 1l2.817 5.955 6.572.955-4.756 3.635 1.123 6.545z" /></svg>
                </div>
              </figure>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="testimonial-with-logos" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Testimonial with Logos
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Kombinasikan kutipan testimoni yang kuat dengan deretan logo perusahaan untuk membangun kepercayaan dan kredibilitas secara maksimal.</p>
      <CodePreview code={testimonialWithLogosCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:px-6 lg:py-16">
            <figure className="mx-auto max-w-5xl">
              <svg className="mx-auto mb-3 h-12 text-slate-400 dark:text-slate-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H10V18H0Z" fill="currentColor" />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-slate-900 dark:text-white">&quot;Jhonz Template has been a huge asset for our team. The modern design and clean code allowed us to launch our new website faster than ever before.&quot;</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Image width={24} height={24} className="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-slate-500 dark:divide-slate-700">
                  <div className="pr-3 font-medium text-slate-900 dark:text-white">Joseph McFall</div>
                  <div className="pl-3 text-sm font-light text-slate-500 dark:text-slate-400">CTO at Vercel</div>
                </div>
              </figcaption>
            </figure>
            <div className="mt-12 text-center">
              <h3 className="mb-6 text-lg font-semibold uppercase text-slate-500 dark:text-slate-400">Trusted by leading companies</h3>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"><span className="text-2xl font-bold text-slate-500 dark:text-slate-400">Logo1</span><span className="text-2xl font-bold text-slate-500 dark:text-slate-400">Logo2</span><span className="text-2xl font-bold text-slate-500 dark:text-slate-400">Logo3</span><span className="text-2xl font-bold text-slate-500 dark:text-slate-400">Logo4</span></div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="testimonial-card-with-gradient" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Testimonial Card with Gradient Border
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Kartu testimoni yang menonjol dengan batas gradien bercahaya, sempurna untuk menyoroti kisah pelanggan utama dengan gaya modern 2025.</p>
      <CodePreview code={testimonialCardWithGradientCode}>
        <section className="relative bg-slate-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-grid-slate-800 mask-[linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Loved by Developers Worldwide</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">A standout testimonial card with a glowing gradient border, perfect for highlighting a key customer story.</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <div className="relative rounded-2xl bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <figure className="rounded-xl bg-slate-900 p-8">
                  <blockquote className="text-xl font-semibold leading-8 text-white"><p>&quot;This is the template I&apos;ve been dreaming of. The code quality is exceptional, the design is stunning, and the developer experience is second to none. It&apos;s saved me weeks of work.&quot;</p></blockquote>
                  <figcaption className="mt-8 flex items-center gap-x-4">
                    <Image className="h-12 w-12 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png" alt="profile picture" width="48" height="48" />
                    <div className="text-sm leading-6"><div className="font-semibold text-white">Lana Byrd</div><div className="text-slate-400">@lanabyrd</div></div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="interactive-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Interactive Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak testimoni yang interaktif dan unik untuk tahun 2025. Klik pada avatar untuk melihat cerita mereka dan memberikan pengalaman yang menarik.</p>
      <CodePreview code={interactiveTestimonialCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">A Wall of Love from Our Users</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">An interactive and unique testimonial layout for 2025. Click on an avatar to see their story.</p>
            </div>
            <div className="mt-16 flow-root">
              <div className="-m-2">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-x-6">
                  {interactiveTestimonials.map((testimonial) => (
                    <button key={testimonial.id} onClick={() => setActiveTestimonial(testimonial)} className={`h-12 w-12 overflow-hidden rounded-full ring-2 ring-offset-4 ring-offset-slate-900 transition-all duration-300 ${activeTestimonial.id === testimonial.id ? 'ring-indigo-500' : 'ring-slate-700 hover:ring-indigo-500'}`}>
                      <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12">
              <figure className="mx-auto max-w-2xl">
                <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>&quot;{activeTestimonial.quote}&quot;</p>
                </blockquote>
                <figcaption className="mt-8 text-center">
                  <div className="text-base text-white">
                    <div className="font-semibold">{activeTestimonial.name}</div>
                    <div className="mt-1 text-slate-400">{activeTestimonial.company}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="carousel-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Carousel Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak carousel yang modern dan interaktif untuk menampilkan beberapa testimoni secara ringkas dan elegan untuk tahun 2025.</p>
      <CodePreview code={carouselTestimonialCode}>
        <section className="bg-white py-16 dark:bg-slate-900 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Stories from Our Community</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">A modern, interactive carousel layout to showcase multiple testimonials in a compact and elegant way for 2025.</p>
            </div>
            <div className="mt-16 flow-root">
              <div className="-mx-4 sm:-mx-6 lg:-mx-8">
                <div className="flex space-x-8 overflow-x-auto px-4 sm:px-6 lg:px-8">
                  {carouselTestimonialsData.map((testimonial, index) => (
                    <figure key={index} className="w-full max-w-sm flex-none rounded-2xl bg-slate-50 p-8 dark:bg-slate-800">
                      <blockquote className="text-slate-900 dark:text-white">
                        <p>&quot;{testimonial.quote}&quot;</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image className="h-10 w-10 rounded-full" src={testimonial.avatar} alt={testimonial.name} width={40} height={40} />
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                          <div className="text-slate-600 dark:text-slate-400">{testimonial.title}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="featured-grid-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Featured Grid Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak grid yang unik dan interaktif untuk tahun 2025. Menampilkan satu testimoni utama dengan opsi untuk menyorot testimoni lain dengan sekali klik.</p>
      <CodePreview code={featuredGridTestimonialCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Future of Design is Here</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">A unique and interactive featured grid layout for 2025. Click a card to feature it.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Featured Testimonial */}
              <figure className="flex flex-col rounded-2xl bg-white/5 p-8 text-white lg:col-span-2">
                <blockquote className="flex-auto text-lg font-semibold leading-8">
                  <p>&quot;{featuredTestimonial.quote}&quot;</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-x-4">
                  <Image className="h-12 w-12 rounded-full" src={featuredTestimonial.avatar} alt={featuredTestimonial.name} width={48} height={48} />
                  <div>
                    <div className="font-semibold">{featuredTestimonial.name}</div>
                    <div className="text-slate-400">{featuredTestimonial.title}</div>
                  </div>
                </figcaption>
              </figure>
              {/* Small Testimonials */}
              <div className="space-y-8">
                {featuredGridTestimonials
                  .filter((t) => t.id !== featuredTestimonial.id)
                  .map((testimonial) => (
                    <button key={testimonial.id} onClick={() => setFeaturedTestimonial(testimonial)} className="block w-full transform rounded-2xl bg-white/5 p-8 text-left text-white transition-transform hover:scale-105">
                      <blockquote className="flex-auto text-base leading-7"><p>&quot;{testimonial.quote.substring(0, 100)}...&quot;</p></blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4"><Image className="h-10 w-10 rounded-full" src={testimonial.avatar} alt={testimonial.name} width={40} height={40} /><div className="text-sm"><div className="font-semibold">{testimonial.name}</div></div></figcaption>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="masonry-grid-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Masonry Grid Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak grid masonry yang dinamis untuk tahun 2025, sempurna untuk menampilkan umpan balik otentik dari semua ukuran dengan cara yang menarik secara visual.</p>
      <CodePreview code={masonryTestimonialCode}>
        <section className="bg-white py-16 dark:bg-slate-900 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">From the Community Voice</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">A dynamic masonry grid layout for 2025, perfect for showcasing authentic feedback of all sizes.</p>
            </div>
            <div className="mx-auto mt-16 flow-root">
              <div className="gap-8 space-y-8 sm:columns-2 lg:columns-3">
                {masonryTestimonialsData.map((testimonial, index) => (
                  <figure key={index} className="break-inside-avoid rounded-2xl bg-slate-50 p-8 dark:bg-slate-800">
                    <blockquote className="text-slate-900 dark:text-white">
                      <p>&quot;{testimonial.quote}&quot;</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image className="h-10 w-10 rounded-full" src={testimonial.avatar} alt={testimonial.name} width={40} height={40} />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="scrolling-ticker-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Scrolling Ticker Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak ticker yang bergulir otomatis untuk tahun 2025, menampilkan aliran umpan balik pelanggan yang berkelanjutan dengan cara yang dinamis dan hemat ruang.</p>
      <CodePreview code={scrollingTickerTestimonialCode}>
        <section className="relative w-full overflow-hidden bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">A Constant Stream of Praise</h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">An auto-scrolling ticker layout for 2025, showcasing a continuous flow of customer feedback.</p>
          </div>
          <div className="mt-16 flex w-max animate-marquee gap-8 animation-duration-[40s] hover:paused">
            {[...scrollingTestimonialsData, ...scrollingTestimonialsData].map((testimonial, index) => (
              <figure key={index} className="w-full max-w-sm flex-none rounded-2xl bg-slate-800 p-6">
                <blockquote className="text-white">
                  <p>&quot;{testimonial.quote}&quot;</p>
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-x-3">
                  <Image className="h-8 w-8 rounded-full" src={testimonial.avatar} alt={testimonial.name} width={32} height={32} />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </CodePreview>

      <h2 id="3d-card-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        3D Card Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Sebuah testimoni kartu 3D yang interaktif untuk tahun 2025. Arahkan kursor ke kartu untuk merasakan pergeseran perspektif yang unik dan modern.</p>
      <CodePreview code={testimonial3DCardCode}>
        <section className="bg-slate-900 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">A New Perspective on Feedback</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">An interactive 3D card testimonial for 2025. Hover over the card to experience a unique perspective shift.</p>
            </div>
            <div className="mt-16 flex justify-center">
              <div className="perspective-midrange">
                <figure className="group relative h-auto min-h-80 w-full max-w-lg rounded-xl bg-slate-800 p-8 shadow-2xl transition-transform duration-500 transform-3d hover:transform-[rotateY(15deg)_rotateX(-5deg)]">
                  <blockquote className="text-lg font-semibold leading-7 text-white">
                    <p>&quot;The 3D effect on this testimonial card is mind-blowing. It&apos;s a creative and memorable way to showcase customer feedback. Jhonz Template continues to push the boundaries of web design.&quot;</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width={48} height={48} />
                    <div><div className="font-semibold">Courtney Henry</div><div className="text-slate-400">Designer at Webflow</div></div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="bento-grid-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Bento Grid Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak &quot;Bento Grid&quot; yang interaktif untuk tahun 2025. Arahkan kursor ke kartu untuk melihatnya membesar, menciptakan pengalaman yang modern dan menarik.</p>
      <CodePreview code={bentoGridTestimonialCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Our Community is Building</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">An interactive bento grid layout for 2025. Hover over the cards to see them scale.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
              <figure className="rounded-2xl bg-white/5 p-8 text-white transition-transform duration-300 hover:scale-105 lg:col-span-2">
                <blockquote className="text-lg font-semibold leading-8">
                  <p>&quot;The bento grid layout is a fantastic way to showcase multiple testimonials. It&apos;s modern, clean, and highly engaging. This template is a must-have for any developer.&quot;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width="48" height="48" />
                  <div><div className="font-semibold">Brennan</div><div className="text-slate-400">CEO of Acme Inc.</div></div>
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-white/5 p-8 text-white transition-transform duration-300 hover:scale-105">
                <blockquote className="text-base leading-7"><p>&quot;Short, sweet, and to the point. Love the aesthetic.&quot;</p></blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <Image className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width="40" height="40" />
                  <div className="text-sm"><div className="font-semibold">Leslie Alexander</div></div>
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-white/5 p-8 text-white transition-transform duration-300 hover:scale-105">
                <blockquote className="text-base leading-7"><p>&quot;The interactivity is top-notch. Really makes the page feel alive.&quot;</p></blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4"><Image className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width="40" height="40" /><div className="text-sm"><div className="font-semibold">Leonard Krasner</div></div></figcaption>
              </figure>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="social-proof-wall" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Social Proof Wall
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Dinding bukti sosial untuk tahun 2025, menyajikan testimoni dalam format media sosial yang akrab untuk membangun keaslian dan kepercayaan.</p>
      <CodePreview code={socialProofWallCode}>
        <section className="bg-white py-16 dark:bg-slate-900 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Straight from the Source</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">A social proof wall for 2025, presenting testimonials in a familiar social media format to build authenticity and trust.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {socialProofWallData.map((testimonial, index) => (
                <article key={index} className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
                  <div className="flex items-center gap-x-4">
                    <Image className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} width={48} height={48} />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-slate-500 dark:text-slate-400">{testimonial.handle}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-slate-600 dark:text-slate-300">&quot;{testimonial.quote}&quot;</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="video-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Video Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Bagian testimoni video yang menarik untuk tahun 2025. Klik tombol putar untuk mendengar langsung dari pengguna kami tentang kisah sukses mereka.</p>
      <CodePreview code={videoTestimonialCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Hear Directly From Our Users</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">An engaging video testimonial section for 2025. Click play to watch their stories.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {videoTestimonialsData.map((testimonial, index) => (
                <div key={index} className="flex flex-col rounded-2xl bg-white/5 p-6">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image src={testimonial.thumbnail} alt="Customer thumbnail" layout="fill" className="h-full w-full object-cover" />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 hover:opacity-80">
                      <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                    </button>
                  </div>
                  <blockquote className="mt-4 grow text-white">
                    <p>&quot;{testimonial.quote}&quot;</p>
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-x-3">
                    <Image className="h-8 w-8 rounded-full" src={testimonial.avatar} alt={testimonial.name} width={32} height={32} />
                    <div className="text-sm text-white"><div className="font-semibold">{testimonial.name}</div></div>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="aurora-testimonial" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Aurora Testimonial
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Bagian testimoni yang unik dan jarang terlihat untuk tahun 2025, menampilkan efek latar belakang aurora yang dinamis. Desain ini menciptakan suasana futuristik dan profesional.</p>
      <CodePreview code={auroraTestimonialCode}>
        <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-32">
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="h-160 w-160 animate-spin-slow rounded-full bg-linear-to-tr from-violet-600 to-blue-600 opacity-30 blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
            <div className="h-160 w-160 animate-spin-slow-reverse rounded-full bg-linear-to-tr from-cyan-400 to-emerald-400 opacity-30 blur-3xl"></div>
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Voices of Innovation</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">A unique and rarely seen testimonial section for 2025, featuring a dynamic aurora background effect.</p>
            <figure className="mt-10">
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>&quot;The aurora background is absolutely stunning. It gives our testimonials a futuristic and premium feel that we haven&apos;t seen anywhere else. A true standout feature for 2025.&quot;</p>
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-center gap-x-4">
                <Image className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="profile picture" width={48} height={48} />
                <div className="text-left text-base"><div className="font-semibold text-white">Leslie Alexander</div><div className="mt-1 text-slate-400">Co-Founder, Workcation</div></div>
              </figcaption>
            </figure>
          </div>
        </section>
      </CodePreview>
    </>
  );
}