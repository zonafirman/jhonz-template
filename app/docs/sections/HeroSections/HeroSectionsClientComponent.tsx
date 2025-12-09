'use client';

import Image from 'next/image';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const simpleCenterCode = `<section class="bg-white dark:bg-slate-900">
    <div class="py-8 px-4 mx-auto text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 dark:text-slate-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="py-3 px-5 sm:ms-4 text-base font-medium text-center text-slate-900 rounded-lg border border-slate-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800 transition-all duration-300 transform hover:-translate-y-1">
                Learn more
            </a>  
        </div>
    </div>
</section>`;

const withImageCode = `<section class="bg-white dark:bg-slate-900">
    <div class="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-16 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-slate-500 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800 transition-all duration-300 transform hover:-translate-y-1">
                Speak to Sales
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" width="263" height="544" class="transition-transform duration-500 hover:scale-105">
        </div>                
    </div>
</section>`;

const withBackgroundImageCode = `<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-slate-700 bg-blend-multiply">
    <div class="px-4 mx-auto text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-slate-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>`;

const modernHero2025Code = `<section class="bg-slate-900">
    <div class="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Building Digital Products & Brands.</h1>
            <p class="max-w-2xl mb-6 font-light text-slate-400 lg:mb-8 md:text-lg lg:text-xl">This is a modern and professional hero section for 2025. It uses a dark background, a two-column layout, and interactive elements for a better user experience.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-800 transition-all duration-300 transform hover:-translate-y-1">
                Speak to Sales
            </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup.png" alt="mockup" width="482" height="422" class="transition-transform duration-500 hover:scale-105">
        </div>                
    </div>
</section>`;

const gradientHeroCode = `<section class="bg-linear-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
    <div class="py-8 px-4 mx-auto max-w-7xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">Revolutionize Your Workflow</h1>
        <p class="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 dark:text-slate-400">A modern hero section with a subtle background gradient and a prominent call-to-action. Designed to capture attention and drive conversions.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Start Free Trial
            </a>
        </div>
    </div>
</section>`;

const heroWithSignupFormCode = `<section class="bg-white dark:bg-slate-900">
    <div class="grid max-w-7xl px-4 py-8 mx-auto lg:gap-16 lg:py-16 lg:grid-cols-2">
        <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">Get early access to our new platform</h1>
            <p class="mb-8 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-400">Join our mailing list to be the first to know when we launch. A new layout for 2025 focusing on lead generation.</p>
        </div>
        <div>
            <div class="w-full p-6 bg-slate-100 rounded-lg shadow-md lg:p-8 dark:bg-slate-800">
                <h2 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Sign up for updates</h2>
                <form action="#">
                    <div class="mb-4">
                        <label for="email" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white" placeholder="name@company.com" required>
                    </div>
                    <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Subscribe</button>
                    <p class="mt-4 text-sm text-center text-slate-500 dark:text-slate-400">
                        By signing up, you agree to our <a href="#" class="font-medium text-slate-600 dark:text-slate-500 hover:underline">Terms of Service</a>.
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>`;

const heroWithSocialProofCode = `<section class="bg-white dark:bg-slate-900">
    <div class="py-8 px-4 mx-auto max-w-7xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">Trusted by the world's best companies</h1>
        <p class="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 dark:text-slate-400">A modern hero section layout for 2025 that builds trust by showcasing customer logos and ratings prominently.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
            </a>
            <a href="#" class="py-3 px-5 sm:ms-4 text-base font-medium text-center text-slate-900 rounded-lg border border-slate-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                Learn more
            </a>  
        </div>
        <div class="px-4 mx-auto text-center md:max-w-3xl lg:max-w-5xl lg:px-36 mt-12">
            <span class="font-semibold text-slate-400 uppercase">FEATURED IN</span>
            <div class="flex flex-wrap justify-center items-center mt-8 text-slate-500 sm:justify-between">
                <span class="text-2xl font-bold dark:text-white">Logo1</span>
                <span class="text-2xl font-bold dark:text-white">Logo2</span>
                <span class="text-2xl font-bold dark:text-white">Logo3</span>
                <span class="text-2xl font-bold dark:text-white">Logo4</span>
            </div>
        </div> 
    </div>
</section>`;

const ecommerceHeroCode = `<section class="bg-white dark:bg-slate-900">
    <div class="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-16 lg:py-16 lg:grid-cols-12 items-center">
        <div class="lg:col-span-5">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ab?auto=format&fit=crop&w=442&q=80" alt="Red Nike Shoe" width="442" height="442" class="w-full h-auto rounded-lg shadow-xl transition-transform duration-500 hover:scale-105">
        </div>
        <div class="lg:col-span-7 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The Ultimate Comfort & Style</h1>
            <p class="max-w-2xl mb-6 font-light text-slate-500 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-400">Experience the perfect blend of design and comfort. Built for the modern lifestyle.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Shop Now
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800 transition-all duration-300 transform hover:-translate-y-1 mt-4 sm:mt-0">
                Explore Collection
            </a> 
        </div>               
    </div>
</section>`;

const portfolioHeroCode = `<section class="bg-linear-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
    <div class="py-16 px-4 mx-auto max-w-7xl text-center lg:py-24">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">I'm a Digital Product Designer</h1>
        <p class="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 dark:text-slate-400">Crafting intuitive and beautiful digital experiences. Based in New York City.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                View My Work
            </a>
        </div>
        <div class="mt-10 flex justify-center items-center space-x-6">
            <a href="#" class="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.838 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" /></svg>
            </a>
            <a href="#" class="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4zm-1-8c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V8zm-3 4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2zm10-1c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2z"/></svg>
            </a>
            <a href="#" class="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.35 14.35c-.23.36-.6.55-1 .55H6.65c-.4 0-.77-.19-1-.55-.23-.36-.28-.81-.13-1.22l1.8-4.8c.2-.53.73-.88 1.31-.88h4.74c.58 0 1.11.35 1.31.88l1.8 4.8c.15.41.1.86-.13 1.22zM12 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" clip-rule="evenodd" /></svg>
            </a>
        </div>
    </div>
</section>`;

const saasHeroCode = `<section class="bg-linear-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
    <div class="py-8 px-4 mx-auto max-w-7xl lg:py-16">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8 md:p-12 mb-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h1 class="text-slate-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">The all-in-one platform for your business</h1>
            <p class="text-lg font-normal text-slate-500 dark:text-slate-400 mb-6">Stop juggling between tools. Manage your sales, marketing, and operations from a single dashboard.</p>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Get a free demo
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>`;

const futuristicGridHeroCode = `<section class="relative bg-slate-900 text-white py-20 sm:py-24 overflow-hidden">
    <div class="absolute inset-0 bg-grid-slate-800/50 mask-[linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(100,116,139,0.15),transparent_40%)]"></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div class="flex flex-col justify-center text-center lg:text-left lg:col-span-2 order-last lg:order-first">
                <h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    Pioneering the Next Wave of Digital Innovation
                </h1>
                <p class="mt-6 max-w-2xl mx-auto text-base text-slate-300 sm:text-lg lg:mx-0">
                    A complex and futuristic grid layout for 2025. Combining a main content area with feature cards, creating an information-rich and ultra-modern look.
                </p>
                <div class="mt-8 flex justify-center lg:justify-start gap-4">
                    <a href="#" class="inline-flex items-center justify-center rounded-lg bg-slate-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 sm:px-5 sm:py-3 sm:text-base">
                        Request a Demo
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4 sm:gap-6 order-first lg:order-last">
                <div class="rounded-xl bg-slate-800/50 p-4 sm:p-6 text-center transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/20">
                    <div class="text-3xl sm:text-4xl font-bold text-slate-400">40%</div>
                    <p class="mt-2 text-sm font-medium text-slate-400">Faster Integration</p>
                </div>
                <div class="rounded-xl bg-slate-800/50 p-4 sm:p-6 text-center transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/20">
                    <div class="text-3xl sm:text-4xl font-bold text-slate-400">99.9%</div>
                    <p class="mt-2 text-sm font-medium text-slate-400">Uptime SLA</p>
                </div>
                <div class="col-span-2 rounded-xl bg-slate-800/50 p-4 sm:p-6 text-center transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/20">
                    <p class="text-lg font-semibold">Powered by AI</p>
                </div>
            </div>
        </div>
    </div>
</section>`;

const asymmetricSplitHeroCode = `<section class="overflow-hidden bg-white dark:bg-slate-900/75 dark:bg-blend-multiply">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div class="flex flex-col justify-center transition-all duration-300 ease-out hover:-translate-y-1">
                <span class="mb-2 inline-block text-sm font-semibold text-slate-600 dark:text-slate-400">Modern Solutions</span>
                <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Where Creativity Meets Technology
                </h1>
                <p class="mt-6 text-xl text-slate-600 dark:text-slate-400">
                    An asymmetric layout that breaks the grid for a dynamic and engaging user experience. Perfect for showcasing a product or app with a strong visual identity.
                </p>
                <div class="mt-8">
                    <a href="#" class="inline-flex items-center justify-center rounded-lg bg-slate-700 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-500/50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                        Explore Features
                    </a>
                </div>
            </div>
            <div class="mt-12 lg:mt-0">
                <div class="relative -mx-4 lg:mx-0">
                    <img class="w-full lg:w-auto lg:max-w-none lg:absolute lg:left-1/2 lg:-translate-x-1/4 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/30 dark:hover:shadow-slate-400/20" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg" alt="Dashboard mockup" width="1024" height="683">
                </div>
            </div>
        </div>
    </div>
</section>`;

const layeredContentHeroCode = `<section class="relative bg-slate-900 py-20 sm:py-32">
    <div class="absolute inset-0">
        <img src="https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg" alt="Background" class="h-full w-full object-cover opacity-20">
        <div class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60"></div>
    </div>
    <div class="relative mx-auto max-w-4xl text-center px-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transform Your Vision into Reality
        </h1>
        <p class="mt-6 text-xl leading-8 text-slate-300">
            This hero section uses layered elements to create depth and a premium feel. The combination of a background image, a gradient overlay, and centered content makes for a powerful visual statement.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get Started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
        </div>
    </div>
</section>`;

const videoHeroCode = `<section class="relative bg-slate-900 text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div class="flex flex-col justify-center lg:col-span-6">
            <span class="mb-4 inline-block rounded-full bg-slate-600/10 px-3 py-1 text-sm font-semibold text-slate-400 w-fit">New for 2025</span>
            <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Dynamic Video Showcase
            </h1>
            <p class="mt-6 text-lg text-slate-400">
                Engage your audience from the first second with a stunning video background. This layout is perfect for product demos, brand stories, or any dynamic content.
            </p>
            <div class="mt-8 flex gap-4">
                <a href="#" class="inline-flex items-center justify-center rounded-lg bg-slate-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">Watch Demo</a>
            </div>
        </div>
        <div class="relative mt-12 lg:col-span-6 lg:mt-0"><div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-2xl"><video class="w-full h-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-video.mp4" autoPlay loop muted></video></div></div>
    </div>
</section>`;

const videoBackgroundHeroCode = `<section class="relative h-screen flex items-center justify-center overflow-hidden">
    <video
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-video.mp4"
        class="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        autoPlay
        loop
        muted
    ></video>
    <div class="absolute inset-0 bg-black/50 z-10"></div>
    <div class="relative z-20 px-4 mx-auto text-center">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Immersive Video Background</h1>
        <p class="mb-8 text-lg font-normal text-slate-300 lg:text-xl sm:px-16 lg:px-48">A stunning hero section for 2025 that uses a video background to create an immersive and dynamic first impression.</p>
        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
            Watch Full Video
        </a>
    </div>
</section>`;

const featureListHeroCode = `<section class="bg-white dark:bg-slate-900">
    <div class="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-16 lg:py-16 lg:grid-cols-12">
        <div class="flex flex-col justify-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The platform for modern product teams</h1>
            <p class="max-w-2xl mb-6 font-light text-slate-500 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-400">A new layout for 2025. This hero combines a strong headline with a feature list and a product screenshot, perfect for SaaS and app landing pages.</p>
            <ul class="mb-8 space-y-4 text-left text-slate-500 dark:text-slate-400">
                <li class="flex items-center space-x-3">
                    <svg class="shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Real-time collaboration</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>AI-powered insights</span>
                </li>
            </ul>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900 w-fit">Get started</a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/app-mockup.png" alt="App mockup" width="362" height="720">
        </div>                
    </div>
</section>`;

const interactiveCardStackHeroCode = `<section class="relative bg-slate-900 text-white overflow-hidden py-20 sm:py-32">
    <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-linear-to-tr from-slate-600 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-center lg:text-left">
                <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Unlock Your Potential with Interactive Cards
                </h1>
                <p class="mt-6 text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">
                    A unique and interactive hero section for 2025. Hover over the cards to see them come to life. This layout is perfect for showcasing multiple features or services in a visually compelling way.
                </p>
                <div class="mt-8 flex justify-center lg:justify-start">
                    <a href="#" class="inline-flex items-center justify-center rounded-lg bg-slate-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">
                        Explore Now
                    </a>
                </div>
            </div>
            <div class="relative h-96 flex items-center justify-center group">
                <div class="absolute w-64 h-80 bg-slate-800 rounded-xl shadow-2xl transition-all duration-300 group-hover:-translate-x-24 group-hover:-rotate-12"></div>
                <div class="absolute w-64 h-80 bg-slate-700 rounded-xl shadow-2xl transition-all duration-300 group-hover:translate-x-24 group-hover:rotate-12"></div>
                <div class="relative w-64 h-80 bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 flex flex-col justify-center items-center text-center transition-all duration-300 group-hover:scale-110"><h3 class="text-2xl font-bold text-slate-900 dark:text-white">Feature One</h3><p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Animate on hover to reveal more content.</p></div>
            </div>
        </div>
    </div>
</section>`;

const interactiveBentoHeroCode = `<section class="bg-slate-900 py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                The Future of Web Interaction is Here
            </h1>
            <p class="mt-6 text-lg leading-8 text-slate-300">
                An interactive bento grid layout to showcase features in a modern and engaging way. Hover over the cards to see the effect.
            </p>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
            <div class="group relative col-span-1 rounded-xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800 md:col-span-2">
                <h3 class="text-xl font-semibold text-white">Blazing Fast Performance</h3>
                <p class="mt-2 text-slate-400">Optimized for speed and efficiency.</p>
            </div>
            <div class="group relative rounded-xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800">
                <h3 class="text-xl font-semibold text-white">Fully Responsive</h3>
            </div>
            <div class="group relative rounded-xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800">
                <h3 class="text-xl font-semibold text-white">Dark Mode Ready</h3>
            </div>
        </div>
    </div>
</section>`;

const interactiveSpotlightHeroCode = `<section class="relative bg-slate-900 py-20 sm:py-32">
    <div class="absolute inset-0 bg-grid-slate-800 mask-[linear-gradient(to_bottom,white_10%,transparent_100%)]"></div>
    <div class="relative group">
        <div class="absolute -inset-0.5 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div class="relative mx-auto max-w-4xl text-center px-4">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Illuminate Your Ideas
            </h1>
            <p class="mt-6 text-xl leading-8 text-slate-300">
                A unique hero for 2025 with an interactive spotlight effect. The glowing border animates on its own and intensifies on hover, drawing attention to the central message.
            </p>
        </div>
    </div>
</section>`;

const gradientSpotlightHeroCode = `<section class="relative bg-slate-900 text-white py-20 sm:py-32">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-radial-at-center from-slate-500/10 to-transparent to-70%"></div>
    </div>
    <div class="relative mx-auto max-w-4xl text-center px-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Experience the Future of UI
        </h1>
        <p class="mt-6 text-xl leading-8 text-slate-300">
            A modern hero for 2025 with an interactive gradient spotlight that follows your cursor, creating a dynamic and engaging visual experience.
        </p>
    </div>
</section>
`;

const auroraHeroCode = `<section class="relative bg-slate-900 py-20 sm:py-32 overflow-hidden">
    <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <div class="w-160 h-160 bg-linear-to-tr from-violet-600 to-slate-600 rounded-full animate-spin-slow opacity-30 blur-3xl"></div>
    </div>
    <div class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
        <div class="w-160 h-160 bg-linear-to-tr from-cyan-400 to-slate-400 rounded-full animate-spin-slow-reverse opacity-30 blur-3xl"></div>
    </div>
    <div class="relative mx-auto max-w-4xl text-center px-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Innovate. Create. Inspire.
        </h1>
        <p class="mt-6 text-xl leading-8 text-slate-300">
            A unique and rarely seen hero section for 2025, featuring a dynamic aurora background effect. This layout creates a futuristic and professional atmosphere.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white backdrop-blur-sm">
                Discover More
            </a>
        </div>
    </div>
</section>`;

const hero3DCardCode = `<section class="bg-slate-900 text-white py-20 sm:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div class="text-center lg:text-left">
                <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    The Future is 3D.
                </h1>
                <p class="mt-6 text-xl text-slate-400">
                    An interactive 3D card hero section for 2025. Hover over the card to experience a unique perspective shift. This modern layout is designed to be visually striking and memorable.
                </p>
                <div class="mt-8 flex justify-center lg:justify-start">
                    <a href="#" class="inline-flex items-center justify-center rounded-lg bg-slate-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">
                        Get Started
                    </a>
                </div>
            </div>
            <div class="mt-12 lg:mt-0 flex justify-center items-center perspective-midrange">
                <div class="group relative h-80 w-64 transition-transform duration-500 transform-3d hover:transform-[rotateY(20deg)_rotateX(-10deg)]"><div class="absolute inset-0 rounded-xl bg-slate-800 shadow-2xl"></div><div class="absolute inset-4 rounded-lg bg-slate-700 p-6 transform-[translateZ(40px)]"><h3 class="text-2xl font-bold">Interactive Card</h3><p class="mt-2 text-sm text-slate-400">Hover to see the magic.</p></div></div>
            </div>
        </div>
    </div>
</section>`;

const interactiveGridHoverCode = `<section class="relative bg-slate-900 text-white py-20 sm:py-32 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 bg-grid-slate-800/50 mask-[linear-gradient(to_bottom,white_10%,transparent_50%)]"></div>
    </div>
    <div class="relative mx-auto max-w-4xl text-center px-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connect the Dots of Innovation
        </h1>
        <p class="mt-6 text-xl leading-8 text-slate-300">
            A unique and interactive hero for 2025. The background grid lights up as you move your cursor, creating a dynamic and engaging experience that's rarely seen.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-slate-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">
                Explore Network
            </a>
        </div>
    </div>
</section>`;

const animatedGridHeroCode = `<section class="relative bg-slate-900 text-white py-20 sm:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-grid-slate-800/50 mask-[linear-gradient(to_bottom,white_10%,transparent_50%)]"></div>
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,116,139,0.1),transparent_40%)]"></div>
        <div class="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2">
            <div class="absolute inset-0 animate-grid-pulse mask-[radial-gradient(500px_circle_at_center,white,transparent)]">
                <div class="absolute inset-0 bg-linear-to-r from-slate-500/30 to-transparent opacity-50 animate-grid-ray-1"></div>
                <div class="absolute inset-0 bg-linear-to-r from-slate-500/30 to-transparent opacity-50 animate-grid-ray-2"></div>
                <div class="absolute inset-0 bg-linear-to-r from-slate-500/30 to-transparent opacity-50 animate-grid-ray-3"></div>
            </div>
        </div>
    </div>
    <div class="relative mx-auto max-w-4xl text-center px-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Weaving the Future of Digital</h1>
        <p class="mt-6 text-xl leading-8 text-slate-300">A unique hero for 2025 with an animated grid pattern. Beams of light randomly traverse the background, creating a high-tech and dynamic atmosphere that is rarely seen.</p>
    </div>
</section>`;

const textParticleHeroCode = `<section class="relative bg-slate-900 text-white py-20 sm:py-32 overflow-hidden">
    <div class="absolute inset-0 bg-grid-slate-800/50 mask-[linear-gradient(to_bottom,white_1%,transparent_50%)]"></div>
    <div class="relative mx-auto max-w-4xl text-center px-4">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Deconstructing Digital Barriers
        </h1>
        <p class="mt-6 text-xl leading-8 text-slate-300">
            A unique and interactive hero for 2025. Hover over the title to see the text deconstruct into particles. This effect is built with React and CSS, creating a memorable and futuristic experience.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-slate-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">
                Get Started
            </a>
        </div>
    </div>
</section>
`;

export default function HeroSectionsClientComponent() {
  return (
    <>
      <h2 id="simple-center" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Simple Center
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A basic hero section with centered text and call-to-action (CTA) buttons. Effective for clear and concise messages.</p>
      <CodePreview code={simpleCenterCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">We invest in the world&apos;s potential</h1>
            <p className="mb-8 text-lg font-normal text-slate-500 dark:text-slate-400 sm:px-16 lg:px-48 lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                Get started
                <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
              <a href="#" className="rounded-lg border border-slate-300 py-3 px-5 text-center text-base font-medium text-slate-900 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:ms-4">
                Learn more
              </a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="with-image" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Image
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Combine your message with a product image or illustration for stronger visual appeal.</p>
      <CodePreview code={withImageCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">Payments tool for software companies</h1>
              <p className="mb-6 max-w-2xl font-light text-slate-500 dark:text-slate-400 md:text-lg lg:mb-8 lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
              <a href="#" className="mr-3 inline-flex items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                Get started
                <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <Image width={263} height={544} src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="with-background-image" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Background Image
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Use a dramatic background image to create an atmosphere and attract visitors attention.</p>
      <CodePreview code={withBackgroundImageCode}>
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-slate-700 bg-blend-multiply">
          <div className="mx-auto max-w-7xl px-4 py-24 text-center lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
            <p className="mb-8 text-lg font-normal text-slate-300 sm:px-16 lg:px-48 lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                Get started
                <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="modern-hero-2025" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Modern Hero 2025
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A hero section with a modern and professional design for 2025. It uses a dark background, a two-column layout, and an elegant secondary CTA button for a premium look.</p>
      <CodePreview code={modernHero2025Code}>
        <section className="bg-slate-900">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">Building Digital Products & Brands.</h1>
              <p className="mb-6 max-w-2xl font-light text-slate-400 md:text-lg lg:mb-8 lg:text-xl">This is a modern and professional hero section for 2025. It uses a dark background, a two-column layout, and a subtle gradient on the call-to-action button.</p>
              <a href="#" className="mr-3 inline-flex items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                Get started
                <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 focus:ring-4 focus:ring-slate-800">Speak to Sales</a>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex"><Image width={482} height={422} src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup.png" alt="mockup" /></div>
          </div>
        </section>
      </CodePreview>

      <h2 id="gradient-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Gradient Background Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan gradien halus pada latar belakang untuk menciptakan tampilan yang dinamis dan modern. Fokus pada judul yang kuat dan satu tombol ajakan bertindak utama.</p>
      <CodePreview code={gradientHeroCode}>
        <section className="bg-linear-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">Revolutionize Your Workflow</h1>
            <p className="mb-8 text-lg font-normal text-slate-500 dark:text-slate-400 sm:px-16 lg:px-48 lg:text-xl">A modern hero section with a subtle background gradient and a prominent call-to-action. Designed to capture attention and drive conversions.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"><a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">Start Free Trial</a></div>
          </div>
        </section>
      </CodePreview>

      <h2 id="hero-with-signup" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Hero with Signup Form
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern layout that combines the main message with a signup form. Highly effective for landing pages aimed at collecting emails or user registrations.</p>
      <CodePreview code={heroWithSignupFormCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-16 lg:py-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">Get early access to our new platform</h1>
              <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-400">Join our mailing list to be the first to know when we launch. A new layout for 2025 focusing on lead generation.</p>
            </div>
            <div>
              <div className="w-full p-6 bg-slate-100 rounded-lg shadow-md lg:p-8 dark:bg-slate-800">
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Sign up for updates</h2>
                <form action="#"><div className="mb-4"><label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your email</label><input type="email" id="email" className="block w-full p-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:ring-slate-500 focus:border-slate-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white" placeholder="name@company.com" required /></div><button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Subscribe</button><p className="mt-4 text-sm text-center text-slate-500 dark:text-slate-400">By signing up, you agree to our <a href="#" className="font-medium text-slate-600 dark:text-slate-500 hover:underline">Terms of Service</a>.</p></form>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="hero-with-social-proof" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Hero with Social Proof
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern layout that builds trust by displaying customer logos or media features. Ideal for products or services with an existing user base.</p>
      <CodePreview code={heroWithSocialProofCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">Trusted by the world&apos;s best companies</h1>
            <p className="mb-8 text-lg font-normal text-slate-500 dark:text-slate-400 sm:px-16 lg:px-48 lg:text-xl">A modern hero section layout for 2025 that builds trust by showcasing customer logos and ratings prominently.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">Get started<svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
              </a>
              <a href="#" className="rounded-lg border border-slate-300 py-3 px-5 text-center text-base font-medium text-slate-900 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:ms-4">Learn more</a>
            </div>
            <div className="mx-auto mt-12 px-4 text-center md:max-w-3xl lg:max-w-5xl lg:px-36">
              <span className="font-semibold uppercase text-slate-400">FEATURED IN</span>
              <div className="mt-8 flex flex-wrap items-center justify-center text-slate-500 sm:justify-between"><span className="text-2xl font-bold dark:text-white">Logo1</span><span className="text-2xl font-bold dark:text-white">Logo2</span><span className="text-2xl font-bold dark:text-white">Logo3</span><span className="text-2xl font-bold dark:text-white">Logo4</span></div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="ecommerce-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        E-commerce Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak yang berfokus pada produk, cocok untuk situs e-commerce. Ini menampilkan gambar produk besar di satu sisi dan judul dengan tombol &quot;Shop Now&quot; di sisi lain.</p>
      <CodePreview code={ecommerceHeroCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 lg:grid-cols-12 lg:py-16 xl:gap-16">
            <div className="lg:col-span-5"><Image width={442} height={442} src="https://images.unsplash.com/photo-1542291026-7eec264c27ab?auto=format&fit=crop&w=442&q=80" alt="Red Nike Shoe" className="h-auto w-full rounded-lg shadow-xl transition-transform duration-500 hover:scale-105" /></div>
            <div className="mt-8 text-center lg:col-span-7 lg:mt-0 lg:pl-12 lg:text-left">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">The Ultimate Comfort & Style</h1>
              <p className="mx-auto mb-6 max-w-2xl font-light text-slate-500 dark:text-slate-400 md:text-lg lg:mx-0 lg:mb-8 lg:text-xl">Experience the perfect blend of design and comfort. Built for the modern lifestyle.</p>
              <a href="#" className="mr-3 inline-flex items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">Shop Now</a><a href="#" className="mt-4 inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-base font-medium text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 dark:focus:ring-slate-800 sm:mt-0">Jelajahi Koleksi</a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="portfolio-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Portfolio Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A minimalist, text-centric design, ideal for portfolio sites. It emphasizes professional expertise with a clear call-to-action to view work.</p>
      <CodePreview code={portfolioHeroCode}>
        <section className="bg-linear-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">I&apos;m a Digital Product Designer</h1>
            <p className="mb-8 text-lg font-normal text-slate-500 dark:text-slate-400 sm:px-16 lg:px-48 lg:text-xl">Crafting intuitive and beautiful digital experiences. Based in New York City.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"><a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">View My Work</a></div>
          </div>
        </section>
      </CodePreview>

      <h2 id="saas-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        SaaS Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak yang dirancang untuk situs SaaS, menyoroti proposisi nilai utama dalam kartu besar (gaya jumbotron) untuk menarik perhatian dan mendorong demo produk.</p>
      <CodePreview code={saasHeroCode}>
        <section className="bg-linear-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 lg:py-16">
            <div className="mb-8 rounded-lg border border-slate-200 bg-white p-8 shadow-md transition-shadow duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 md:p-12">
              <h1 className="mb-2 text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl">The all-in-one platform for your business</h1>
              <p className="mb-6 text-lg font-normal text-slate-500 dark:text-slate-400">Stop juggling between tools. Manage your sales, marketing, and operations from a single dashboard.</p>
              <a href="#" className="inline-flex transform items-center justify-center rounded-lg bg-slate-700 py-3 px-5 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                Get a free demo
                <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
              </a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="interactive-bento-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Interactive Bento Grid Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak &quot;Bento Grid&quot; interaktif untuk menampilkan beberapa fitur atau pesan secara visual. Setiap kotak merespons saat di-hover, menciptakan pengalaman yang dinamis dan modern.</p>
      <CodePreview code={interactiveBentoHeroCode}>
        <section className="bg-slate-900 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">The Future of Web Interaction is Here</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">An interactive bento grid layout to showcase features in a modern and engaging way. Hover over the cards to see the effect.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
              <div className="group relative col-span-1 rounded-xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800 md:col-span-2">
                <h3 className="text-xl font-semibold text-white">Blazing Fast Performance</h3><p className="mt-2 text-slate-400">Optimized for speed and efficiency.</p>
              </div>
              <div className="group relative rounded-xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800"><h3 className="text-xl font-semibold text-white">Fully Responsive</h3></div>
              <div className="group relative rounded-xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800"><h3 className="text-xl font-semibold text-white">Dark Mode Ready</h3></div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="futuristic-grid-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Futuristic Grid Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A complex and futuristic grid layout for 2025. It combines a main content area with stat or feature cards, creating an information-rich and ultra-modern look.</p>
      <div
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          const target = e.currentTarget as HTMLElement;
          const rect = target.getBoundingClientRect();
          target.style.setProperty('--x', `${e.clientX - rect.left}px`);
          target.style.setProperty('--y', `${e.clientY - rect.top}px`);
        }}
      >
        <CodePreview code={futuristicGridHeroCode}>
          <section className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-24">
            <div className="absolute inset-0 bg-grid-slate-800/50 mask-[linear-gradient(to_bottom,white_20%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(100,116,139,0.15),transparent_40%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <div className="order-last flex flex-col justify-center text-center lg:order-first lg:col-span-2 lg:text-left">
                  <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Pioneering the Next Wave of Digital Innovation</h1>
                  <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg lg:mx-0">A complex and futuristic grid layout for 2025. Combining a main content area with feature cards, creating an information-rich and ultra-modern look.</p>
                  <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                    <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 sm:px-5 sm:py-3 sm:text-base">
                      Request a Demo
                    </a>
                  </div>
                </div>
                <div className="order-first grid grid-cols-2 gap-4 sm:gap-6 lg:order-last">
                  <div className="rounded-xl bg-slate-800/50 p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-500/20 sm:p-6">
                    <div className="text-3xl font-bold text-slate-400 sm:text-4xl">40%</div>
                    <p className="mt-2 text-sm font-medium text-slate-400">Faster Integration</p>
                  </div>
                  <div className="rounded-xl bg-slate-800/50 p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-500/20 sm:p-6">
                    <div className="text-3xl font-bold text-slate-400 sm:text-4xl">99.9%</div>
                    <p className="mt-2 text-sm font-medium text-slate-400">Uptime SLA</p>
                  </div>
                  <div className="col-span-2 rounded-xl bg-slate-800/50 p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-500/20 sm:p-6">
                    <p className="text-lg font-semibold">Powered by AI</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CodePreview>
      </div>

      <h2 id="asymmetric-split-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Asymmetric Split Hero
      </h2>
      <p className="mt-4 text-slate-600 dark_text-slate-400">Tata letak asimetris yang &apos;mematahkan&apos; grid untuk pengalaman pengguna yang dinamis dan menarik. Sempurna untuk menampilkan produk atau aplikasi dengan identitas visual yang kuat.</p>
      <CodePreview code={asymmetricSplitHeroCode}>
        <section className="overflow-hidden bg-white dark:bg-slate-900/75 dark:bg-blend-multiply">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center transition-all duration-300 ease-out hover:-translate-y-1">
                <span className="mb-2 inline-block text-sm font-semibold text-slate-600 dark:text-slate-400">Modern Solutions</span>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Where Creativity Meets Technology</h1>
                <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">An asymmetric layout that breaks the grid for a dynamic and engaging user experience. Perfect for showcasing a product or app with a strong visual identity.</p>
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-500/50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Explore Features</a>
                </div>
              </div>
              <div className="relative mt-12 lg:mt-0">
                <div className="relative -mx-4 lg:mx-0"><Image width={1024} height={683} className="w-full rounded-2xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/30 lg:absolute lg:left-1/2 lg:w-auto lg:max-w-none lg:-translate-x-1/4 dark:hover:shadow-slate-400/20" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg" alt="Dashboard mockup" /></div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="layered-content-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Layered Content Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">This hero section uses layered elements to create depth and a premium feel. The combination of a background image, gradient overlay, and centered content makes for a powerful visual statement.</p>
      <CodePreview code={layeredContentHeroCode}>
        <section className="relative bg-slate-900 py-20 sm:py-32">
          <div className="absolute inset-0">
            <Image fill src="https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg" alt="Background" className="h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Transform Your Vision into Reality</h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">This hero section uses layered elements to create depth and a premium feel. The combination of a background image, a gradient overlay, and centered content makes for a powerful visual statement.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get Started</a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="hero-with-video" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Hero with Video
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern design for 2025 with a split-screen layout featuring a video on one side to grab attention, and the main message on the other to drive conversions.</p>
      <CodePreview code={videoHeroCode}>
        <section className="relative bg-slate-900 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-12 px-4 py-16 sm:px-6 lg:py-24">
            <div className="flex flex-col justify-center lg:col-span-6">
              <span className="mb-4 inline-block w-fit rounded-full bg-slate-600/10 px-3 py-1 text-sm font-semibold text-slate-400">New for 2025</span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Dynamic Video Showcase</h1>
              <p className="mt-6 text-lg text-slate-400">Engage your audience from the first second with a stunning video background. This layout is perfect for product demos, brand stories, or any dynamic content.</p>
              <div className="mt-8 flex gap-4"><a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">Watch Demo</a></div>
            </div>
            <div className="relative mt-12 lg:col-span-6 lg:mt-0"><div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-2xl"><video className="h-full w-full object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-video.mp4" autoPlay loop muted /></div></div>
          </div>
        </section>
      </CodePreview>

      <h2 id="hero-with-video-background" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Hero with Video Background
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A stunning layout for 2025 that uses a video background to create an immersive and dynamic first impression. Perfect for brand stories or product demos.</p>
      <CodePreview code={videoBackgroundHeroCode}>
        <section className="relative flex h-[60vh] items-center justify-center overflow-hidden">
          <video src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-video.mp4" className="absolute z-0 w-auto min-w-full min-h-full max-w-none" autoPlay loop muted></video>
          <div className="absolute inset-0 z-10 bg-black/50"></div>
          <div className="relative z-20 mx-auto max-w-7xl px-4 text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Immersive Video Background</h1>
            <p className="mb-8 text-lg font-normal text-slate-300 sm:px-16 lg:px-48 lg:text-xl">A stunning hero section for 2025 that uses a video background to create an immersive and dynamic first impression.</p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900"
            >
              Watch Full Video
            </a>
          </div>
        </section>
      </CodePreview>

      <h2 id="hero-with-feature-list" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Hero with Feature List
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern layout for 2025 that combines a strong headline with a feature list and a product screenshot. Ideal for SaaS or app landing pages.</p>
      <CodePreview code={featureListHeroCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-8 xl:gap-16 lg:py-16">
            <div className="flex flex-col justify-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">The platform for modern product teams</h1>
              <p className="mb-6 max-w-2xl font-light text-slate-500 dark:text-slate-400 md:text-lg lg:mb-8 lg:text-xl">A new layout for 2025. This hero combines a strong headline with a feature list and a product screenshot, perfect for SaaS and app landing pages.</p>
              <ul className="mb-8 space-y-4 text-left text-slate-500 dark:text-slate-400">
                <li className="flex items-center space-x-3">
                  <svg className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>Real-time collaboration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>AI-powered insights</span>
                </li>
              </ul>
              <a href="#" className="mr-3 inline-flex w-fit items-center justify-center rounded-lg bg-slate-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">Get started</a>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex"><Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/app-mockup.png" alt="App mockup" width="362" height="720" /></div>
          </div>
        </section>
      </CodePreview>

      <h2 id="interactive-card-stack-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Interactive Card Stack Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A unique and interactive layout for 2025. It features a stack of cards that respond on hover, creating a visually engaging experience to highlight key features.</p>
      <CodePreview code={interactiveCardStackHeroCode}>
        <section className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-32">
          <div className="absolute left-0 top-0 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-slate-600 to-purple-600 opacity-20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Unlock Your Potential with Interactive Cards</h1>
                <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400 lg:mx-0">A unique and interactive hero section for 2025. Hover over the cards to see them come to life. This layout is perfect for showcasing multiple features or services in a visually compelling way.</p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">Explore Now</a>
                </div>
              </div>
              <div className="group relative flex h-96 items-center justify-center">
                <div className="absolute h-80 w-64 rounded-xl bg-slate-800 shadow-2xl transition-all duration-300 group-hover:-translate-x-24 group-hover:-rotate-12" />
                <div className="absolute h-80 w-64 rounded-xl bg-slate-700 shadow-2xl transition-all duration-300 group-hover:translate-x-24 group-hover:rotate-12" />
                <div className="relative flex h-80 w-64 flex-col items-center justify-center rounded-xl bg-white/80 p-6 text-center shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 dark:bg-slate-800/80"><h3 className="text-2xl font-bold text-slate-900 dark:text-white">Feature One</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Animate on hover to reveal more content.</p></div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="interactive-spotlight-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Interactive Spotlight Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A unique layout for 2025 with an interactive spotlight effect. The glowing border animates on its own and intensifies on hover, drawing attention to the main message.</p>
      <CodePreview code={interactiveSpotlightHeroCode}>
        <section className="relative bg-slate-900 py-20 sm:py-32">
          <div className="absolute inset-0 bg-grid-slate-800 mask-[linear-gradient(to_bottom,white_10%,transparent_100%)]" />
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt" />
            <div className="relative mx-auto max-w-4xl text-center px-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Illuminate Your Ideas</h1>
              <p className="mt-6 text-xl leading-8 text-slate-300">
                A unique hero for 2025 with an interactive spotlight effect. The glowing border animates on its own and intensifies on hover, drawing attention to the central message.
              </p>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="gradient-spotlight-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Gradient Spotlight Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern layout for 2025 with an interactive gradient spotlight that follows your cursor, creating a dynamic and engaging visual experience.</p>
      <div
        className="[--x:50%] [--y:50%] dark"
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          const target = e.currentTarget as HTMLElement;
          const rect = target.getBoundingClientRect();
          target.style.setProperty('--x', `${e.clientX - rect.left}px`);
          target.style.setProperty('--y', `${e.clientY - rect.top}px`);
        }}
      >
        <CodePreview code={gradientSpotlightHeroCode}>
          <section className="relative bg-slate-900 py-20 text-white sm:py-32">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(100,116,139,0.15),transparent_80%)]" />
            </div>
            <div className="relative mx-auto max-w-4xl px-4 text-center"><h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Experience the Future of UI</h1><p className="mt-6 text-xl leading-8 text-slate-300">A modern hero for 2025 with an interactive gradient spotlight that follows your cursor, creating a dynamic and engaging visual experience.</p></div>
          </section>
        </CodePreview>
      </div>

      <h2 id="aurora-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Aurora Background Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A unique and rarely seen layout for 2025, featuring a dynamic aurora background effect. This design creates a futuristic and professional atmosphere.</p>
      <CodePreview code={auroraHeroCode}>
        <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-32">
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="h-160 w-160 animate-spin-slow rounded-full bg-linear-to-tr from-violet-600 to-slate-600 opacity-30 blur-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
            <div className="h-160 w-160 animate-spin-slow-reverse rounded-full bg-linear-to-tr from-cyan-400 to-slate-400 opacity-30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Innovate. Create. Inspire.</h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">A unique and rarely seen hero section for 2025, featuring a dynamic aurora background effect. This layout creates a futuristic and professional atmosphere.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Discover More
              </a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="hero-3d-card" className="mt-12 scroll-mt-20 text-3xl font-bold">
        3D Card Interactive Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern and interactive layout for 2025. It features a 3D card that responds on hover, creating a unique and visually engaging perspective shift effect.</p>
      <CodePreview code={hero3DCardCode}>
        <section className="bg-slate-900 py-20 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl items-center gap-16 lg:max-w-none lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">The Future is 3D.</h1>
                <p className="mt-6 text-xl text-slate-400">An interactive 3D card hero section for 2025. Hover over the card to experience a unique perspective shift. This modern layout is designed to be visually striking and memorable.</p>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="mt-12 flex items-center justify-center perspective-midrange lg:mt-0">
                <div className="group relative h-80 w-64 transition-transform duration-500 transform-3d hover:transform-[rotateY(20deg)_rotateX(-10deg)]"><div className="absolute inset-0 rounded-xl bg-slate-800 shadow-2xl" /><div className="absolute inset-4 rounded-lg bg-slate-700 p-6 transform-[translateZ(40px)]"><h3 className="text-2xl font-bold">Interactive Card</h3><p className="mt-2 text-sm text-slate-400">Hover to see the magic.</p></div></div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="interactive-grid-hover-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Interactive Grid Hover Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A unique and interactive layout for 2025. The background grid lights up as you move your cursor, creating a dynamic and engaging experience thats rarely seen.</p>
      <div
        className="[--grid-size:50px] [--grid-color:rgba(100,116,139,0.2)] [--dot-color:rgba(100,116,139,0.5)] [--dot-size:2px]"
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          const target = e.currentTarget as HTMLElement;
          const rect = target.getBoundingClientRect();
          target.style.setProperty('--x', `${e.clientX - rect.left}px`);
          target.style.setProperty('--y', `${e.clientY - rect.top}px`);
        }}
      >
        <CodePreview code={interactiveGridHoverCode}>
          <section className="relative bg-slate-900 py-20 text-white sm:py-32 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(100,116,139,0.15),transparent_20%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-size-[var(--grid-size)_var(--grid-size)] mask-[linear-gradient(to_bottom,white_10%,transparent_50%)]" />
            <div className="relative mx-auto max-w-4xl px-4 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Connect the Dots of Innovation</h1><p className="mt-6 text-xl leading-8 text-slate-300">A unique and interactive hero for 2025. The background grid lights up as you move your cursor, creating a dynamic and engaging experience that&apos;s rarely seen.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6"><a href="#" className="rounded-md bg-slate-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">Jelajahi Jaringan</a></div>
            </div>
          </section>
        </CodePreview>
      </div>

      <h2 id="animated-grid-pattern-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Animated Grid Pattern Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A unique layout for 2025 with an animated grid pattern. Beams of light randomly traverse the background, creating a high-tech and dynamic atmosphere that is rarely seen.</p>
      <CodePreview code={animatedGridHeroCode}>
        <section className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-32">
          <div className="absolute inset-0 bg-grid-slate-800/50 mask-[linear-gradient(to_bottom,white_10%,transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,116,139,0.1),transparent_40%)]" />
            <div className="absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 animate-grid-pulse mask-[radial-gradient(500px_circle_at_center,white,transparent)]">
                <div className="absolute inset-0 animate-grid-ray-1 bg-linear-to-r from-slate-500/30 to-transparent opacity-50" />
                <div className="absolute inset-0 animate-grid-ray-2 bg-linear-to-r from-slate-500/30 to-transparent opacity-50" />
                <div className="absolute inset-0 animate-grid-ray-3 bg-linear-to-r from-slate-500/30 to-transparent opacity-50" />
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center"><h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Weaving the Future of Digital</h1><p className="mt-6 text-xl leading-8 text-slate-300">A unique hero for 2025 with an animated grid pattern. Beams of light randomly traverse the background, creating a high-tech and dynamic atmosphere that is rarely seen.</p></div>
        </section>
      </CodePreview>

      <h2 id="text-particle-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Text Particle Effect Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A highly unique and interactive layout for 2025. Hover over the title to see the text deconstruct into particles. This effect creates a memorable and futuristic experience.</p>
      <CodePreview code={textParticleHeroCode}>
        <div className="relative w-full overflow-hidden bg-slate-900 py-20 text-white sm:py-32">
          <div className="absolute inset-0 bg-grid-slate-800/50 mask-[linear-gradient(to_bottom,white_1%,transparent_50%)]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Deconstructing Digital Barriers</h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              A unique and interactive hero for 2025. Hover over the title to see the text deconstruct into particles. This effect is built with React and CSS, creating a memorable and futuristic experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-slate-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </CodePreview>
    </>
  );
}