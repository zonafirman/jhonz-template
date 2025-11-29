'use client';

import Image from 'next/image';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const simpleCenterCode = `<section class="bg-white dark:bg-slate-900">
    <div class="py-8 px-4 mx-auto text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 dark:text-slate-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="py-3 px-5 sm:ms-4 text-base font-medium text-center text-slate-900 rounded-lg border border-slate-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                Learn more
            </a>  
        </div>
    </div>
</section>`;

const withImageCode = `<section class="bg-white dark:bg-slate-900">
    <div class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p class="max-w-2xl mb-6 font-light text-slate-500 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
        </div>                
    </div>
</section>`;

const withBackgroundImageCode = `<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-slate-700 bg-blend-multiply">
    <div class="px-4 mx-auto text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-slate-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>`;

const modernHero2025Code = `<section class="bg-slate-900">
    <div class="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Building Digital Products & Brands.</h1>
            <p class="max-w-2xl mb-6 font-light text-slate-400 lg:mb-8 md:text-lg lg:text-xl">This is a modern and professional hero section for 2025. It uses a dark background, a two-column layout, and a subtle gradient on the call-to-action button.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-800">
                Speak to Sales
            </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup.png" alt="mockup">
        </div>                
    </div>
</section>`;

const gradientHeroCode = `<section class="bg-white dark:bg-slate-900">
    <div class="py-8 px-4 mx-auto max-w-7xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">Revolutionize Your Workflow</h1>
        <p class="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 dark:text-slate-400">A modern hero section with a subtle background gradient and a prominent call-to-action. Designed to capture attention and drive conversions.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
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
                        <input type="email" id="email" class="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white" placeholder="name@company.com" required>
                    </div>
                    <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                    <p class="mt-4 text-sm text-center text-slate-500 dark:text-slate-400">
                        By signing up, you agree to our <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Terms of Service</a>.
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
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
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
    <div class="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/red-shoes.png" alt="red shoes">
        </div>
        <div class="mr-auto place-self-center lg:col-span-7 lg:pl-12">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The Ultimate Comfort & Style</h1>
            <p class="max-w-2xl mb-6 font-light text-slate-500 lg:mb-8 md:text-lg lg:text-xl dark:text-slate-400">Experience the perfect blend of design and comfort. Built for the modern lifestyle.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Shop Now
            </a>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                Explore Collection
            </a> 
        </div>               
    </div>
</section>`;

const portfolioHeroCode = `<section class="bg-white dark:bg-slate-900">
    <div class="py-8 px-4 mx-auto max-w-7xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-900 md:text-5xl lg:text-6xl dark:text-white">I'm a Digital Product Designer</h1>
        <p class="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 dark:text-slate-400">Crafting intuitive and beautiful digital experiences. Based in New York City.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                View My Work
            </a>
        </div>
    </div>
</section>`;

const saasHeroCode = `<section class="bg-linear-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
    <div class="py-8 px-4 mx-auto max-w-7xl lg:py-16">
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8 md:p-12 mb-8">
            <h1 class="text-slate-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">The all-in-one platform for your business</h1>
            <p class="text-lg font-normal text-slate-500 dark:text-slate-400 mb-6">Stop juggling between tools. Manage your sales, marketing, and operations from a single dashboard.</p>
            <a href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Get a free demo</a>
        </div>
    </div>
</section>`;

const futuristicGridHeroCode = `<section class="relative bg-slate-900 text-white py-20 sm:py-24">
    <div class="absolute inset-0 bg-grid-slate-800 mask-[linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div class="flex flex-col justify-center text-center lg:text-left lg:col-span-2">
                <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Pioneering the Next Wave of Digital Innovation
                </h1>
                <p class="mt-6 max-w-2xl text-lg text-slate-400 mx-auto lg:mx-0">
                    A complex and futuristic grid layout for 2025. Combining a main content area with feature cards, creating an information-rich and ultra-modern look.
                </p>
                <div class="mt-8 flex justify-center lg:justify-start gap-4">
                    <a href="#" class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                        Request a Demo
                    </a>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="rounded-xl bg-slate-800/50 p-6 text-center">
                    <div class="text-4xl font-bold text-blue-400">40%</div>
                    <p class="mt-2 text-sm font-medium text-slate-400">Faster Integration</p>
                </div>
                <div class="rounded-xl bg-slate-800/50 p-6 text-center">
                    <div class="text-4xl font-bold text-blue-400">99.9%</div>
                    <p class="mt-2 text-sm font-medium text-slate-400">Uptime SLA</p>
                </div>
                <div class="col-span-2 rounded-xl bg-slate-800/50 p-6 text-center">
                    <p class="text-lg font-semibold">Powered by AI</p>
                </div>
            </div>
        </div>
    </div>
</section>`;

const asymmetricSplitHeroCode = `<section class="overflow-hidden bg-white dark:bg-slate-900">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div class="flex flex-col justify-center">
                <span class="mb-2 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">Modern Solutions</span>
                <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Where Creativity Meets Technology
                </h1>
                <p class="mt-6 text-xl text-slate-600 dark:text-slate-400">
                    An asymmetric layout that breaks the grid for a dynamic and engaging user experience. Perfect for showcasing a product or app with a strong visual identity.
                </p>
                <div class="mt-8">
                    <a href="#" class="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:hover:bg-slate-700">
                        Explore Features
                    </a>
                </div>
            </div>
            <div class="mt-12 lg:mt-0">
                <div class="relative -mx-4 lg:mx-0">
                    <img class="w-full lg:w-auto lg:max-w-none lg:absolute lg:left-1/2 lg:-translate-x-1/4 rounded-2xl" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg" alt="Dashboard mockup">
                </div>
            </div>
        </div>
    </div>
</section>`;

const layeredContentHeroCode = `<section class="relative bg-slate-900 py-20 sm:py-32">
    <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Background" class="h-full w-full object-cover opacity-20">
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

export default function HeroSectionsClientComponent() {
  return (
    <>
      <h2 id="simple-center" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Simple Center
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Hero section dasar dengan teks dan tombol ajakan bertindak (CTA) yang terpusat. Efektif untuk pesan yang jelas dan ringkas.</p>
      <CodePreview code={simpleCenterCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="px-4 py-8 text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
            <p className="mb-8 text-lg font-normal text-slate-500 dark:text-slate-400 sm:px-16 lg:px-48 lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
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
      <p className="mt-4 text-slate-600 dark:text-slate-400">Kombinasikan pesan Anda dengan gambar produk atau ilustrasi untuk daya tarik visual yang lebih kuat.</p>
      <CodePreview code={withImageCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="grid grid-cols-12 gap-8 px-4 py-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">Payments tool for software companies</h1>
              <p className="mb-6 max-w-2xl font-light text-slate-500 dark:text-slate-400 md:text-lg lg:mb-8 lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
              <a href="#" className="mr-3 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
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
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan gambar latar belakang yang dramatis untuk menciptakan suasana dan menarik perhatian pengunjung.</p>
      <CodePreview code={withBackgroundImageCode}>
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-slate-700 bg-blend-multiply">
          <div className="px-4 py-24 text-center lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
            <p className="mb-8 text-lg font-normal text-slate-300 sm:px-16 lg:px-48 lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="modern-hero-2025" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Modern Hero 2025
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Hero section dengan desain modern dan profesional untuk tahun 2025. Menggunakan latar belakang gelap, tata letak dua kolom, dan tombol CTA sekunder yang elegan untuk tampilan premium.</p>
      <CodePreview code={modernHero2025Code}>
        <section className="bg-slate-900">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">Building Digital Products & Brands.</h1>
              <p className="mb-6 max-w-2xl font-light text-slate-400 md:text-lg lg:mb-8 lg:text-xl">This is a modern and professional hero section for 2025. It uses a dark background, a two-column layout, and a subtle gradient on the call-to-action button.</p>
              <a href="#" className="mr-3 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
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
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"><a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Start Free Trial</a></div>
          </div>
        </section>
      </CodePreview>

      <h2 id="hero-with-signup" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Hero with Signup Form
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak modern yang menggabungkan pesan utama dengan formulir pendaftaran. Sangat efektif untuk halaman arahan yang bertujuan mengumpulkan email atau pendaftaran pengguna.</p>
      <CodePreview code={heroWithSignupFormCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-16 lg:py-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">Get early access to our new platform</h1>
              <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-400">Join our mailing list to be the first to know when we launch. A new layout for 2025 focusing on lead generation.</p>
            </div>
            <div>
              <div className="w-full p-6 bg-slate-100 rounded-lg shadow-md lg:p-8 dark:bg-slate-800">
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Sign up for updates</h2>
                <form action="#"><div className="mb-4"><label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your email</label><input type="email" id="email" className="block w-full p-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white" placeholder="name@company.com" required /></div><button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button><p className="mt-4 text-sm text-center text-slate-500 dark:text-slate-400">By signing up, you agree to our <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Terms of Service</a>.</p></form>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="hero-with-social-proof" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Hero with Social Proof
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak modern yang membangun kepercayaan dengan menampilkan logo pelanggan atau media yang telah meliput. Sangat cocok untuk produk atau layanan yang sudah memiliki basis pengguna.</p>
      <CodePreview code={heroWithSocialProofCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">Trusted by the world&apos;s best companies</h1>
            <p className="mb-8 text-lg font-normal text-slate-500 dark:text-slate-400 sm:px-16 lg:px-48 lg:text-xl">A modern hero section layout for 2025 that builds trust by showcasing customer logos and ratings prominently.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Get started<svg className="ms-2 h-3.5 w-3.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
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
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak yang berfokus pada produk, cocok untuk situs e-commerce. Menampilkan gambar produk yang besar di satu sisi dan judul serta tombol &quot;Shop Now&quot; di sisi lain.</p>
      <CodePreview code={ecommerceHeroCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="grid max-w-7xl grid-cols-12 gap-8 px-4 py-8 lg:py-16 xl:gap-0">
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex"><Image width={442} height={442} src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/red-shoes.png" alt="red shoes" /></div>
            <div className="mr-auto place-self-center lg:col-span-7 lg:pl-12">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">The Ultimate Comfort & Style</h1>
              <p className="mb-6 max-w-2xl font-light text-slate-500 dark:text-slate-400 md:text-lg lg:mb-8 lg:text-xl">Experience the perfect blend of design and comfort. Built for the modern lifestyle.</p>
              <a href="#" className="mr-3 inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Shop Now</a><a href="#" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-base font-medium text-slate-900 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700 dark:focus:ring-slate-800">Explore Collection</a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="portfolio-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Portfolio Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Desain minimalis dan berpusat pada teks, ideal untuk situs portofolio. Menekankan pada keahlian profesional dengan ajakan bertindak yang jelas untuk melihat karya.</p>
      <CodePreview code={portfolioHeroCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">I&apos;m a Digital Product Designer</h1>
            <p className="mb-8 text-lg font-normal text-slate-500 dark:text-slate-400 sm:px-16 lg:px-48 lg:text-xl">Crafting intuitive and beautiful digital experiences. Based in New York City.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"><a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">View My Work</a></div>
          </div>
        </section>
      </CodePreview>

      <h2 id="saas-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        SaaS Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak yang dirancang untuk situs SaaS, menyoroti proposisi nilai utama dalam sebuah kartu besar (jumbotron-style) untuk menarik perhatian dan mendorong demo produk.</p>
      <CodePreview code={saasHeroCode}>
        <section className="bg-linear-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-8 lg:py-16">
            <div className="mb-8 rounded-lg border border-slate-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-800 md:p-12">
              <h1 className="mb-2 text-3xl font-extrabold text-slate-900 dark:text-white md:text-5xl">The all-in-one platform for your business</h1>
              <p className="mb-6 text-lg font-normal text-slate-500 dark:text-slate-400">Stop juggling between tools. Manage your sales, marketing, and operations from a single dashboard.</p>
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-700 py-2.5 px-5 text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">Get a free demo</a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="interactive-bento-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Interactive Bento Grid Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak &quot;Bento Grid&quot; yang interaktif untuk menampilkan beberapa fitur atau pesan secara visual. Setiap kotak merespons saat kursor diarahkan, menciptakan pengalaman yang dinamis dan modern.</p>
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
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak grid yang kompleks dan futuristik untuk tahun 2025. Menggabungkan area konten utama dengan kartu-kartu statistik atau fitur, menciptakan tampilan yang kaya informasi dan sangat modern.</p>
      <CodePreview code={futuristicGridHeroCode}>
        <section className="relative bg-slate-900 py-20 text-white sm:py-24">
          <div className="absolute inset-0 bg-grid-slate-800 mask-[linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="flex flex-col justify-center text-center lg:col-span-2 lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Pioneering the Next Wave of Digital Innovation</h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 lg:mx-0">A complex and futuristic grid layout for 2025. Combining a main content area with feature cards, creating an information-rich and ultra-modern look.</p>
                <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                    Request a Demo
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-800/50 p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400">40%</div>
                  <p className="mt-2 text-sm font-medium text-slate-400">Faster Integration</p>
                </div>
                <div className="rounded-xl bg-slate-800/50 p-6 text-center">
                  <div className="text-4xl font-bold text-blue-400">99.9%</div>
                  <p className="mt-2 text-sm font-medium text-slate-400">Uptime SLA</p>
                </div>
                <div className="col-span-2 rounded-xl bg-slate-800/50 p-6 text-center">
                  <p className="text-lg font-semibold">Powered by AI</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="asymmetric-split-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Asymmetric Split Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tata letak asimetris yang &apos;mematahkan&apos; grid untuk pengalaman pengguna yang dinamis dan menarik. Sempurna untuk menampilkan produk atau aplikasi dengan identitas visual yang kuat.</p>
      <CodePreview code={asymmetricSplitHeroCode}>
        <section className="overflow-hidden bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center">
                <span className="mb-2 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">Modern Solutions</span>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Where Creativity Meets Technology</h1>
                <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">An asymmetric layout that breaks the grid for a dynamic and engaging user experience. Perfect for showcasing a product or app with a strong visual identity.</p>
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-800 dark:hover:bg-slate-700">Explore Features</a>
                </div>
              </div>
              <div className="relative mt-12 lg:mt-0">
                <div className="relative -mx-4 lg:mx-0"><Image width={1024} height={683} className="w-full rounded-2xl lg:absolute lg:left-1/2 lg:w-auto lg:max-w-none lg:-translate-x-1/4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg" alt="Dashboard mockup" /></div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="layered-content-hero" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Layered Content Hero
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Hero section ini menggunakan elemen berlapis untuk menciptakan kedalaman dan nuansa premium. Kombinasi gambar latar, overlay gradien, dan konten terpusat menghasilkan pernyataan visual yang kuat.</p>
      <CodePreview code={layeredContentHeroCode}>
        <section className="relative bg-slate-900 py-20 sm:py-32">
          <div className="absolute inset-0">
            <Image layout="fill" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Background" className="h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60"></div>
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Transform Your Vision into Reality</h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">This hero section uses layered elements to create depth and a premium feel. The combination of a background image, a gradient overlay, and centered content makes for a powerful visual statement.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get Started</a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </CodePreview>
    </>
  );
}