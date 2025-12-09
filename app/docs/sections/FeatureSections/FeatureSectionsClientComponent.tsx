'use client';

import React, { useState } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Image from 'next/image';

const simpleCenteredCode = `<section class="bg-white dark:bg-slate-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white">Designed for business teams like yours</h2>
            <p class="text-slate-500 sm:text-xl dark:text-slate-400">Here at Jhonz, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div class="transition-transform duration-300 hover:scale-105">
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    {/* SVG Icon */}
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Marketing</h3>
                <p class="text-slate-500 dark:text-slate-400">Plan and execute campaigns that resonate with your audience and drive engagement.</p>
            </div>
            <div class="transition-transform duration-300 hover:scale-105">
                <h3 class="mb-2 text-xl font-bold dark:text-white">Legal</h3>
                <p class="text-slate-500 dark:text-slate-400">Manage legal documents and compliance with our secure and easy-to-use platform.</p>
            </div>
            <div class="transition-transform duration-300 hover:scale-105">
                <h3 class="mb-2 text-xl font-bold dark:text-white">Business</h3>
                <p class="text-slate-500 dark:text-slate-400">Streamline your operations and scale your business with our integrated solutions.</p>
            </div>
        </div>
    </div>
</section>`;

const simpleCenteredFeatures = [
  {
    title: 'Marketing',
    description: 'Plan and execute campaigns that resonate with your audience and drive engagement.',
    icon: <svg className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 000-2H4a1 1 0 00-1-1H3zm1 2v5h10V5H4zm11 8H4a1 1 0 100 2h11a1 1 0 100-2z" clipRule="evenodd"></path></svg>,
  },
  {
    title: 'Legal',
    description: 'Manage legal documents and compliance with our secure and easy-to-use platform.',
    icon: <svg className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>,
  },
  {
    title: 'Business',
    description: 'Streamline your operations and scale your business with our integrated solutions.',
    icon: <svg className="h-5 w-5 text-primary-600 dark:text-primary-300 lg:h-6 lg:w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a1 1 0 011-1h2a1 1 0 011 1v1h2a1 1 0 011 1v3.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 10.586V7a1 1 0 011-1h2V5H7a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M5.293 13.293A1 1 0 016.707 12l4 4a1 1 0 01-1.414 1.414L5.293 13.293zM9 10a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path></svg>,
  },
];

const featureGridCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to deploy your app</h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">A powerful feature section with a grid layout, perfect for showcasing key benefits.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                <div class="flex flex-col">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                            {/* SVG Icon */}
                        </div>
                        Push to deploy
                    </dt>
                    <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-400">
                        <p class="flex-auto">Deploy your app in seconds. Connect your Git repository and we'll handle the rest.</p>
                    </dd>
                </div>
                <div class="flex flex-col">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                            {/* SVG Icon */}
                        </div>
                        SSL certificates
                    </dt>
                    <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-400">
                        <p class="flex-auto">Free SSL certificates for all your domains. We'll even renew them for you.</p>
                    </dd>
                </div>
                <div class="flex flex-col">
                    <dt class="text-base font-semibold leading-7 text-white">
                        <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                            {/* SVG Icon */}
                        </div>
                        Database backups
                    </dt>
                    <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-400">
                        <p class="flex-auto">We automatically back up your database, so you can sleep soundly.</p>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</section>`;

const featureWithImageCode = `<section class="bg-white dark:bg-slate-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" width={588} height={434} />
        <Image class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" width={588} height={434} />
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
            <p class="mb-6 font-light text-slate-500 md:text-lg dark:text-slate-400">Jhonz helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
            <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>`;

const modernFeatureCardsCode = `<section class="bg-white dark:bg-slate-900 py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Deploy Faster</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Next-Gen Development Platform
            </p>
            <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Experience the future of development with tools designed for performance, security, and scalability.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div class="flex flex-col p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 hover:ring-indigo-500 dark:hover:ring-indigo-400 transition">
                    {/* SVG Icon */}
                    <h3 class="mt-6 text-xl font-semibold text-slate-900 dark:text-white">Advanced Security</h3>
                    <p class="mt-2 text-base text-slate-600 dark:text-slate-400">Your data is safe with us. We provide enterprise-grade security features out of the box.</p>
                </div>
                {/* Add more feature cards here */}
            </div>
        </div>
    </div>
</section>
`;

const bentoGridFeatureCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-base font-semibold leading-7 text-indigo-400">A Better Workflow</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The ultimate toolkit for modern teams
            </p>
            <p class="mt-6 text-lg leading-8 text-slate-400">
                An interactive bento grid layout to showcase features in a modern and engaging way. Hover over the cards to see the effect.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <div class="lg:col-span-2 rounded-2xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800">
                    {/* SVG Icon */}
                    <h3 class="mt-4 text-xl font-semibold text-white">Collaborative Inbox</h3>
                    <p class="mt-2 text-base text-slate-400">Share and manage emails with your team, assign tasks, and keep conversations organized.</p>
                </div>
                <div class="rounded-2xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800">
                    {/* SVG Icon */}
                    <h3 class="mt-4 text-xl font-semibold text-white">Real-time Analytics</h3>
                    <p class="mt-2 text-base text-slate-400">Get instant insights into your performance.</p>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const alternatingFeatureWithImageCode = `<section class="bg-white dark:bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                A better way to build
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                Detail your product's features with text and accompanying images, alternating for visual interest.
            </p>
        </div>
        <div class="mt-16 space-y-16">
            <div class="grid gap-8 items-center md:grid-cols-2">
                <div>
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Intuitive Dashboard</h3>
                    <p class="mt-4 text-slate-600 dark:text-slate-400">Our dashboard is designed for ease of use. Manage all your projects, deployments, and settings from a single, intuitive interface. Get insights at a glance and take action quickly.</p>
                </div>
                <div class="lg:order-first">
                    <Image class="w-full rounded-lg shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup.svg" alt="Intuitive Dashboard" width={520} height={390} />
                </div>
            </div>
            <div class="grid gap-8 items-center md:grid-cols-2">
                <div>
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Seamless Collaboration</h3>
                    <p class="mt-4 text-slate-600 dark:text-slate-400">Invite your team and collaborate in real-time. With shared environments and granular permissions, you can work together securely and efficiently, no matter where you are.</p>
                </div>
                <div>
                    <Image class="w-full rounded-lg shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-long-2.png" alt="Seamless Collaboration" width={520} height={390} />
                </div>
            </div>
        </div>
    </div>
</section>`;

const interactiveFeatureTabsCode = `<section class="bg-white dark:bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Everything You Need, All in One Place
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                An interactive tabbed layout to elegantly showcase your product's core features. Click on a feature to learn more.
            </p>
        </div>
        <div class="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-3 lg:gap-16">
            <div class="flex flex-col gap-4">
                {/* Feature Tab Buttons */}
                <button class="text-left p-4 rounded-lg bg-slate-100 dark:bg-slate-800 ring-2 ring-indigo-500">
                    <h3 class="font-semibold text-slate-900 dark:text-white">Real-time Collaboration</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Work together with your team in real-time.</p>
                </button>
                <button class="text-left p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <h3 class="font-semibold text-slate-900 dark:text-white">AI-Powered Insights</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Leverage AI to get smarter insights.</p>
                </button>
            </div>
            <div class="lg:col-span-2">
                {/* Active Tab Content */}
                <div class="rounded-xl bg-slate-100 dark:bg-slate-800/50 p-4">
                    <Image class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-long-2.png" alt="Feature image" width={600} height={400} />
                </div>
            </div>
        </div>
    </div>
</section>`;

const featureTabsCodeWithAnimation = interactiveFeatureTabsCode.replace(
  '<Image class="w-full rounded-lg"',
  '<Image class="w-full rounded-lg animate-fade-in"'
);

const featureTabsData = [
  {
    id: 1,
    title: 'Real-time Collaboration',
    description: 'Work together with your team in real-time, with shared cursors, comments, and version history.',
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-long-2.png',
  },
  {
    id: 2,
    title: 'AI-Powered Insights',
    description: 'Leverage AI to get smarter insights from your data. Identify trends, predict outcomes, and make better decisions.',
    image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg',
  },
];

const featureAccordionCode = `<section class="bg-white dark:bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl lg:text-center">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Unlock Your Full Potential
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                An interactive accordion layout to detail your features. Click each item to expand and learn more.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-3xl">
            <div class="space-y-4">
                {/* Accordion Item 1 (Active) */}
                <div class="rounded-lg border border-slate-200 dark:border-slate-700">
                    <button class="flex w-full items-center justify-between p-6">
                        <span class="font-semibold text-slate-900 dark:text-white">Seamless Integration</span>
                        {/* Minus Icon */}
                    </button>
                    <div class="overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="p-6 pt-0">
                            <p class="text-slate-600 dark:text-slate-400">Connect all your tools and workflows in one place. Our platform integrates with hundreds of popular apps to streamline your process and boost productivity.</p>
                        </div>
                    </div>
                </div>
                {/* Accordion Item 2 (Inactive) */}
                <div class="rounded-lg border border-slate-200 dark:border-slate-700">
                    <button class="flex w-full items-center justify-between p-6">
                        <span class="font-semibold text-slate-900 dark:text-white">Advanced Analytics</span>
                        {/* Plus Icon */}
                    </button>
                    <div class="overflow-hidden transition-all duration-300 ease-in-out h-0">
                        {/* Content is hidden */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;

const accordionData = [
  {
    id: 1,
    title: 'Seamless Integration',
    description: 'Connect all your tools and workflows in one place. Our platform integrates with hundreds of popular apps to streamline your process and boost productivity.',
  },
  {
    id: 2,
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your performance with our advanced analytics dashboard. Track key metrics, visualize data, and make informed decisions to drive growth.',
  },
  {
    id: 3,
    title: 'Automated Workflows',
    description: 'Save time and reduce manual effort with powerful automation. Create custom workflows that trigger actions, send notifications, and keep your team in sync.',
  },
];

const spotlightGridFeatureCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Focus on What Matters
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">
                An interactive spotlight grid. Hover over a feature to bring it into focus, highlighting its benefits while dimming the others.
            </p>
        </div>
        <div class="group mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div class="rounded-2xl bg-white/5 p-8 transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-105">
                {/* SVG Icon */}
                <h3 class="mt-6 font-semibold text-white">Custom Domains</h3>
                <p class="mt-2 text-sm text-slate-400">Use your own domain name for a professional look and feel.</p>
            </div>
            <div class="rounded-2xl bg-white/5 p-8 transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-105">
                {/* SVG Icon */}
                <h3 class="mt-6 font-semibold text-white">Global CDN</h3>
                <p class="mt-2 text-sm text-slate-400">Serve your content from anywhere in the world with our fast and reliable CDN.</p>
            </div>
            <div class="rounded-2xl bg-white/5 p-8 transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-105">
                {/* SVG Icon */}
                <h3 class="mt-6 font-semibold text-white">Automated Backups</h3>
                <p class="mt-2 text-sm text-slate-400">We automatically back up your data, so you can rest easy.</p>
            </div>
        </div>
    </div>
</section>
`;

const interactiveTimelineCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Streamline Your Workflow
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">
                An interactive timeline to guide users through your process. Hover over each step to see it come to life.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-3xl">
            <div class="space-y-8">
                <div class="group relative flex items-start">
                    <div class="absolute left-3 top-0 h-full w-px bg-slate-700 transition-colors duration-300 group-hover:bg-blue-500"></div>
                    <div class="absolute -left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-white transition-colors duration-300 group-hover:bg-blue-500">1</div>
                    <div class="ml-12 flex-grow rounded-lg bg-slate-800/50 p-6 transition-all duration-300 group-hover:bg-slate-800 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                        <h3 class="font-semibold text-white">Sign Up & Configure</h3>
                        <p class="mt-2 text-slate-400">Create your account in seconds and configure your project settings.</p>
                    </div>
                </div>
                {/* More steps... */}
            </div>
        </div>
    </div>
</section>`;

const timelineData = [
  {
    id: 1,
    title: 'Sign Up & Configure',
    description: 'Create your account in seconds and configure your project settings to match your workflow.',
  },
  {
    id: 2,
    title: 'Connect Your Data',
    description: 'Integrate with your favorite tools and data sources with our one-click integrations.',
  },
  {
    id: 3,
    title: 'Launch & Grow',
    description: 'Deploy your project to a global audience and watch your business grow with our powerful analytics.',
  },
];

const scrollingCardsFeatureCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built for the Future
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">
                An interactive scrolling card section for 2025. As you scroll, the cards move at different speeds, creating a parallax effect.
            </p>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {/* This effect is best achieved with a library like Framer Motion for smooth scroll-linked animations. The code below is a static representation. */}
            <div class="flex flex-col space-y-10">
                <div class="rounded-2xl bg-white/5 p-8">
                    <h3 class="font-semibold text-white">Unmatched Performance</h3>
                    <p class="mt-2 text-sm text-slate-400">Engineered for speed and reliability at scale.</p>
                </div>
                <div class="rounded-2xl bg-white/5 p-8">
                    <h3 class="font-semibold text-white">Developer-First</h3>
                    <p class="mt-2 text-sm text-slate-400">An intuitive API and clear documentation.</p>
                </div>
            </div>
            <div class="flex flex-col space-y-10 mt-10 sm:mt-0">
                {/* This column would scroll faster */}
            </div>
            <div class="flex flex-col space-y-10 mt-20 sm:mt-0">
                {/* This column would scroll even faster */}
            </div>
        </div>
    </div>
</section>
`;

const auroraGridFeatureCode = `<section class="relative bg-slate-900 py-16 sm:py-24 overflow-hidden">
    <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <div class="w-160 h-160 bg-gradient-to-tr from-violet-600 to-blue-600 rounded-full animate-spin-slow opacity-30 blur-3xl"></div>
    </div>
    <div class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
        <div class="w-160 h-160 bg-gradient-to-tr from-cyan-400 to-emerald-400 rounded-full animate-spin-slow-reverse opacity-30 blur-3xl"></div>
    </div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Experience the Future
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-300">
                A unique feature grid for 2025 with a dynamic aurora background. This layout creates a futuristic and professional atmosphere.
            </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            <div class="rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 class="text-lg font-semibold text-white">AI-Powered Analytics</h3>
                <p class="mt-2 text-sm text-slate-400">Gain deep insights with our intelligent analytics platform.</p>
            </div>
            <div class="rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 class="text-lg font-semibold text-white">Seamless Integration</h3>
                <p class="mt-2 text-sm text-slate-400">Connect all your tools and workflows in one place.</p>
            </div>
            <div class="rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 class="text-lg font-semibold text-white">Automated Workflows</h3>
                <p class="mt-2 text-sm text-slate-400">Save time and reduce manual effort with powerful automation.</p>
            </div>
        </div>
    </div>
</section>
<!-- Add to tailwind.config.js:
animation: { 'spin-slow': 'spin 8s linear infinite', 'spin-slow-reverse': 'spin 8s linear infinite reverse' },
width: { 160: '40rem' }, height: { 160: '40rem' } -->`;

const threeDCardFeatureCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A New Dimension of Features
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">
                An interactive 3D card grid for 2025. Hover over the cards to see them come to life with a subtle perspective shift.
            </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 [perspective:1000px]">
            <div class="rounded-2xl bg-white/5 p-8 transition-all duration-500 hover:[transform:rotateX(15deg)_rotateY(-10deg)]">
                {/* SVG Icon */}
                <h3 class="mt-6 font-semibold text-white">Global Scale</h3>
                <p class="mt-2 text-sm text-slate-400">Deploy your applications worldwide with our global infrastructure.</p>
            </div>
            <div class="rounded-2xl bg-white/5 p-8 transition-all duration-500 hover:[transform:rotateX(15deg)_rotateY(-10deg)]">
                {/* SVG Icon */}
                <h3 class="mt-6 font-semibold text-white">AI-Powered</h3>
                <p class="mt-2 text-sm text-slate-400">Leverage the power of AI to build smarter applications.</p>
            </div>
            <div class="rounded-2xl bg-white/5 p-8 transition-all duration-500 hover:[transform:rotateX(15deg)_rotateY(-10deg)]">
                {/* SVG Icon */}
                <h3 class="mt-6 font-semibold text-white">Unmatched Security</h3>
                <p class="mt-2 text-sm text-slate-400">Your data is safe with our enterprise-grade security.</p>
            </div>
        </div>
    </div>
</section>`;

const animatedBorderGridCode = `<section class="bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Engineered for Excellence
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-400">
                A modern grid for 2025 with animated gradient borders. Hover over the cards to see the subtle, professional animation.
            </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div class="group relative rounded-2xl p-px bg-gradient-to-b from-white/10 to-transparent transition-all duration-300 hover:bg-white/20">
                <div class="rounded-[15px] bg-slate-900 p-8 h-full">
                    <h3 class="text-lg font-semibold text-white">Edge Network</h3>
                    <p class="mt-2 text-sm text-slate-400">Deploy your content to the edge, close to your users, for unbeatable performance.</p>
                </div>
            </div>
            <div class="group relative rounded-2xl p-px bg-gradient-to-b from-white/10 to-transparent transition-all duration-300 hover:bg-white/20">
                <div class="rounded-[15px] bg-slate-900 p-8 h-full">
                    <h3 class="text-lg font-semibold text-white">Serverless Functions</h3>
                    <p class="mt-2 text-sm text-slate-400">Run your backend code without managing servers. Scale automatically.</p>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const featureListWithIconsCode = `<section class="bg-white dark:bg-slate-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Powerful Features, Simple Interface
            </h2>
            <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
                A detailed list of features with icons to clearly communicate the value of your product.
            </p>
        </div>
        <div class="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24">
            <dl class="space-y-10">
                <div class="relative flex items-start">
                    <dt class="flex-shrink-0">
                        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white">
                            {/* SVG Icon */}
                        </div>
                    </dt>
                    <dd class="ml-6">
                        <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Customizable Workflows</h3>
                        <p class="mt-2 text-base text-slate-600 dark:text-slate-400">Tailor your processes to fit your team's needs. Create, automate, and optimize workflows with an easy-to-use drag-and-drop interface.</p>
                    </dd>
                </div>
                {/* More features... */}
            </dl>
        </div>
    </div>
</section>`;

export default function FeatureSectionsClientComponent() {
  const [activeTab, setActiveTab] = useState(featureTabsData[0]);
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  return (
    <>
      <h2 id="simple-centered" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Simple Centered
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A clean and centered feature section, ideal for highlighting the main benefits of your product or service.</p>
      <CodePreview code={simpleCenteredCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
            <div className="mb-8 max-w-screen-md lg:mb-16">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Designed for business teams like yours</h2>
              <p className="text-slate-500 sm:text-xl dark:text-slate-400">Here at Jhonz, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              {simpleCenteredFeatures.map((feature, index) => (
                <div key={index} className="transform-gpu transition-transform duration-300 hover:scale-105">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">{feature.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="feature-grid" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Feature Grid
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A powerful feature section with a grid layout, perfect for showcasing key benefits with icons and short descriptions.</p>
      <CodePreview code={featureGridCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to deploy your app</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">A powerful feature section with a grid layout, perfect for showcasing key benefits.</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>
                    </div>
                    Push to deploy
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    <p className="flex-auto">Deploy your app in seconds. Connect your Git repository and we&apos;ll handle the rest.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                    </div>
                    SSL certificates
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    <p className="flex-auto">Free SSL certificates for all your domains. We&apos;ll even renew them for you.</p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                    </div>
                    Database backups
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    <p className="flex-auto">We automatically back up your database, so you can sleep soundly.</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="feature-with-image" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Feature with Image
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Combine persuasive text with relevant images to visually explain your products features.</p>
      <CodePreview code={featureWithImageCode}>
        <section className="bg-white dark:bg-slate-900">
          <div className="mx-auto grid max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid-cols-2 lg:px-6 xl:gap-16">
            <Image className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" width={588} height={434} />
            <Image className="hidden w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" width={588} height={434} />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Let&apos;s create more tools and ideas that brings us together.</h2>
              <p className="mb-6 font-light text-slate-500 dark:text-slate-400 md:text-lg">Jhonz helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
              <a href="#" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="modern-feature-cards" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Modern Feature Cards
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern feature section with cards that have a hover effect and a clean design to highlight key features.</p>
      <CodePreview code={modernFeatureCardsCode}>
        <section className="bg-white py-12 dark:bg-slate-900 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Deploy Faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Next-Gen Development Platform</p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">Experience the future of development with tools designed for performance, security, and scalability.</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200 transition hover:ring-indigo-500 dark:bg-slate-800/50 dark:ring-slate-800 dark:hover:ring-indigo-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">Advanced Security</h3>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Your data is safe with us. We provide enterprise-grade security features out of the box.</p>
                </div>
                <div className="flex flex-col rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200 transition hover:ring-indigo-500 dark:bg-slate-800/50 dark:ring-slate-800 dark:hover:ring-indigo-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">Powerful API</h3>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Automate your workflow with our powerful and easy to use API. Integrate with your existing tools.</p>
                </div>
                <div className="flex flex-col rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-200 transition hover:ring-indigo-500 dark:bg-slate-800/50 dark:ring-slate-800 dark:hover:ring-indigo-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">24/7 Support</h3>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Our team is here to help you with any questions or issues. We are available 24/7 via chat and email.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="bento-grid-feature" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Bento Grid Feature Section
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">An interactive Bento Grid layout to visually display multiple features or messages. Each box responds on hover, creating a dynamic and modern experience.</p>
      <CodePreview code={bentoGridFeatureCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">A Better Workflow</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">The ultimate toolkit for modern teams</p>
              <p className="mt-6 text-lg leading-8 text-slate-400">An interactive bento grid layout to showcase features in a modern and engaging way. Hover over the cards to see the effect.</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <div className="rounded-2xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800 lg:col-span-2">
                  <svg className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                  <h3 className="mt-4 text-xl font-semibold text-white">Collaborative Inbox</h3>
                  <p className="mt-2 text-base text-slate-400">Share and manage emails with your team, assign tasks, and keep conversations organized.</p>
                </div>
                <div className="rounded-2xl bg-slate-800/50 p-8 transition-transform duration-300 hover:scale-105 hover:bg-slate-800">
                  <svg className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>
                  <h3 className="mt-4 text-xl font-semibold text-white">Real-time Analytics</h3>
                  <p className="mt-2 text-base text-slate-400">Get instant insights into your performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="alternating-feature-with-image" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Alternating Feature with Image
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Detail your products features with text and supporting images, with an alternating layout to maintain visual interest and break up monotony.</p>
      <CodePreview code={alternatingFeatureWithImageCode}>
        <section className="bg-white py-16 dark:bg-slate-900 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">A better way to build</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">Detail your product&apos;s features with text and accompanying images, alternating for visual interest.</p>
            </div>
            <div className="mt-16 space-y-16">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Intuitive Dashboard</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">Our dashboard is designed for ease of use. Manage all your projects, deployments, and settings from a single, intuitive interface. Get insights at a glance and take action quickly.</p>
                </div>
                <div className="lg:order-first">
                  <Image className="w-full rounded-lg shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup.svg" alt="Intuitive Dashboard" width={520} height={390} />
                </div>
              </div>
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Seamless Collaboration</h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">Invite your team and collaborate in real-time. With shared environments and granular permissions, you can work together securely and efficiently, no matter where you are.</p>
                </div>
                <div>
                  <Image className="w-full rounded-lg shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-long-2.png" alt="Seamless Collaboration" width={520} height={390} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="interactive-feature-tabs" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Interactive Feature Tabs
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">An interactive tab layout to elegantly display your products core features. Click on a feature to see relevant content and images.</p>
      <CodePreview code={featureTabsCodeWithAnimation}>
        <section className="bg-white py-16 dark:bg-slate-900 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Everything You Need, All in One Place</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">An interactive tabbed layout to elegantly showcase your product&apos;s core features. Click on a feature to learn more.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="flex flex-col gap-4">
                {featureTabsData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`transform rounded-lg p-4 text-left transition-all duration-300 ${
                      activeTab.id === tab.id ? 'bg-slate-100 dark:bg-slate-800 ring-2 ring-indigo-500 scale-105' : 'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <h3 className="font-semibold text-slate-900 dark:text-white">{tab.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{tab.description}</p>
                  </button>
                ))}
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800/50">
                  <div key={activeTab.id} className="animate-fade-in">
                    <Image
                      className="w-full rounded-lg"
                      src={activeTab.image}
                      alt={activeTab.title}
                      width={600}
                      height={400}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="feature-list-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Feature List with Accordion
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">An interactive accordion layout to detail your features. Click each item to see its full description, keeping the interface clean and organized.</p>
      <CodePreview code={featureAccordionCode}>
        <section className="bg-white py-16 dark:bg-slate-900 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Unlock Your Full Potential</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">An interactive accordion layout to detail your features. Click each item to expand and learn more.</p>
            </div>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="space-y-4">
                {accordionData.map((item) => (
                  <div key={item.id} className="rounded-lg border border-slate-200 dark:border-slate-700">
                    <button onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)} className="flex w-full items-center justify-between p-6">
                      <span className="font-semibold text-slate-900 dark:text-white">{item.title}</span>
                      {openAccordion === item.id ? (
                        <svg className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" /></svg>
                      ) : (
                        <svg className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      )}
                    </button>
                    <div
                      className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out dark:text-slate-400 ${
                        openAccordion === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-6 pt-0">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="spotlight-grid-feature" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Spotlight Grid Feature Section
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">An interactive grid with a spotlight effect. Hover over a feature to bring it into focus, highlighting its benefits while dimming the others.</p>
      <CodePreview code={spotlightGridFeatureCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Focus on What Matters</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">An interactive spotlight grid. Hover over a feature to bring it into focus, highlighting its benefits while dimming the others.</p>
            </div>
            <div className="group mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-8 transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500"><svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" /></svg></div>
                <h3 className="mt-6 font-semibold text-white">Custom Domains</h3>
                <p className="mt-2 text-sm text-slate-400">Use your own domain name for a professional look and feel.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500"><svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg></div>
                <h3 className="mt-6 font-semibold text-white">Global CDN</h3>
                <p className="mt-2 text-sm text-slate-400">Serve your content from anywhere in the world with our fast and reliable CDN.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-105">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500"><svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg></div>
                <h3 className="mt-6 font-semibold text-white">Automated Backups</h3>
                <p className="mt-2 text-sm text-slate-400">We automatically back up your data, so you can rest easy.</p>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="interactive-timeline-feature" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Interactive Timeline/Process Section
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Use an interactive timeline to guide users through your process or workflow. Each step is highlighted on hover, creating an engaging and informative experience.</p>
      <CodePreview code={interactiveTimelineCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Streamline Your Workflow</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">An interactive timeline to guide users through your process. Hover over each step to see it come to life.</p>
            </div>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="space-y-8">
                {timelineData.map((item) => (
                  <div key={item.id} className="group relative flex items-start">
                    <div className="absolute left-3 top-0 h-full w-px bg-slate-700 transition-colors duration-300 group-hover:bg-blue-500"></div>
                    <div className="absolute -left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-sm font-bold text-white transition-colors duration-300 group-hover:bg-blue-500">{item.id}</div>
                    <div className="ml-12 flex-grow rounded-lg bg-slate-800/50 p-6 transition-all duration-300 group-hover:bg-slate-800 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-slate-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="scrolling-cards-feature" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Scrolling Cards Feature Section
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">An interactive card section for 2025. As you scroll, the cards move at different speeds, creating a visually appealing parallax effect.</p>
      <CodePreview code={scrollingCardsFeatureCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Built for the Future</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">An interactive scrolling card section for 2025. As you scroll, the cards move at different speeds, creating a parallax effect.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              <div className="flex flex-col space-y-10">
                <div className="rounded-2xl bg-white/5 p-8"><h3 className="font-semibold text-white">Unmatched Performance</h3><p className="mt-2 text-sm text-slate-400">Engineered for speed and reliability at scale.</p></div>
                <div className="rounded-2xl bg-white/5 p-8"><h3 className="font-semibold text-white">Developer-First</h3><p className="mt-2 text-sm text-slate-400">An intuitive API and clear documentation.</p></div>
              </div>
              <div className="flex flex-col space-y-10 sm:mt-10">
                <div className="rounded-2xl bg-white/5 p-8"><h3 className="font-semibold text-white">Global Network</h3><p className="mt-2 text-sm text-slate-400">Deploy your content close to your users.</p></div>
                <div className="rounded-2xl bg-white/5 p-8"><h3 className="font-semibold text-white">Ironclad Security</h3><p className="mt-2 text-sm text-slate-400">Protect your data with enterprise-grade security.</p></div>
              </div>
              <div className="hidden flex-col space-y-10 sm:mt-20 lg:flex">
                <div className="rounded-2xl bg-white/5 p-8"><h3 className="font-semibold text-white">Smart Caching</h3><p className="mt-2 text-sm text-slate-400">Serve content faster with intelligent caching.</p></div>
                <div className="rounded-2xl bg-white/5 p-8"><h3 className="font-semibold text-white">24/7 Support</h3><p className="mt-2 text-sm text-slate-400">Our team is always here to help you succeed.</p></div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="aurora-grid-feature" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Aurora Background Feature Grid
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A unique feature grid for 2025 with a dynamic aurora background. This layout creates a futuristic and professional atmosphere.</p>
      <CodePreview code={auroraGridFeatureCode}>
        <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24">
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="h-160 w-160 animate-spin-slow rounded-full bg-gradient-to-tr from-violet-600 to-blue-600 opacity-30 blur-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
            <div className="h-160 w-160 animate-spin-slow-reverse rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 opacity-30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Experience the Future</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">A unique feature grid for 2025 with a dynamic aurora background. This layout creates a futuristic and professional atmosphere.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 className="text-lg font-semibold text-white">AI-Powered Analytics</h3><p className="mt-2 text-sm text-slate-400">Gain deep insights with our intelligent analytics platform.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 className="text-lg font-semibold text-white">Seamless Integration</h3><p className="mt-2 text-sm text-slate-400">Connect all your tools and workflows in one place.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                <h3 className="text-lg font-semibold text-white">Automated Workflows</h3><p className="mt-2 text-sm text-slate-400">Save time and reduce manual effort with powerful automation.</p>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="3d-card-feature" className="mt-12 scroll-mt-20 text-3xl font-bold">
        3D Interactive Card Grid
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">An interactive 3D card grid for 2025. Hover over the cards to see them come to life with a subtle perspective shift, creating an illusion of depth.</p>
      <CodePreview code={threeDCardFeatureCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">A New Dimension of Features</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">An interactive 3D card grid for 2025. Hover over the cards to see them come to life with a subtle perspective shift.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 [perspective:1000px]">
              <div className="rounded-2xl bg-white/5 p-8 transition-all duration-500 hover:[transform:rotateX(15deg)_rotateY(-10deg)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500"><svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" /></svg></div>
                <h3 className="mt-6 font-semibold text-white">Global Scale</h3>
                <p className="mt-2 text-sm text-slate-400">Deploy your applications worldwide with our global infrastructure.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 transition-all duration-500 hover:[transform:rotateX(15deg)_rotateY(-10deg)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500"><svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg></div>
                <h3 className="mt-6 font-semibold text-white">AI-Powered</h3>
                <p className="mt-2 text-sm text-slate-400">Leverage the power of AI to build smarter applications.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-8 transition-all duration-500 hover:[transform:rotateX(15deg)_rotateY(-10deg)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500"><svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg></div>
                <h3 className="mt-6 font-semibold text-white">Unmatched Security</h3>
                <p className="mt-2 text-sm text-slate-400">Your data is safe with our enterprise-grade security.</p>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="animated-border-grid" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Grid with Animated Gradient Borders
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern grid for 2025 with animated gradient borders. Hover over the cards to see the subtle and professional animation, giving it a premium touch.</p>
      <CodePreview code={animatedBorderGridCode}>
        <section className="bg-slate-900 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Engineered for Excellence</h2>
              <p className="mt-4 text-lg leading-8 text-slate-400">A modern grid for 2025 with animated gradient borders. Hover over the cards to see the subtle, professional animation.</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="group relative rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-px transition-all duration-300 hover:bg-white/20">
                <div className="flex h-full flex-col rounded-[15px] bg-slate-900 p-8"><h3 className="text-lg font-semibold text-white">Edge Network</h3><p className="mt-2 text-sm text-slate-400">Deploy your content to the edge, close to your users, for unbeatable performance.</p></div>
              </div>
              <div className="group relative rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-px transition-all duration-300 hover:bg-white/20">
                <div className="flex h-full flex-col rounded-[15px] bg-slate-900 p-8"><h3 className="text-lg font-semibold text-white">Serverless Functions</h3><p className="mt-2 text-sm text-slate-400">Run your backend code without managing servers. Scale automatically.</p></div>
              </div>
              <div className="group relative rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-px transition-all duration-300 hover:bg-white/20">
                <div className="flex h-full flex-col rounded-[15px] bg-slate-900 p-8"><h3 className="text-lg font-semibold text-white">Automatic Failover</h3><p className="mt-2 text-sm text-slate-400">Ensure high availability with our automatic failover system.</p></div>
              </div>
            </div>
          </div>
        </section>
      </CodePreview>

      <h2 id="feature-list-with-icons" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Feature List with Icons
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A detailed list of features with icons to clearly communicate the value of your product. Each feature is presented with a title and description.</p>
      <CodePreview code={featureListWithIconsCode}>
        <section className="bg-white py-16 dark:bg-slate-900 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Powerful Features, Simple Interface</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">A detailed list of features with icons to clearly communicate the value of your product.</p>
            </div>
            <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24">
              <dl className="space-y-10">
                <div className="relative flex items-start">
                  <dt className="flex-shrink-0"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg></div></dt>
                  <dd className="ml-6"><h3 className="text-lg font-semibold text-slate-900 dark:text-white">Customizable Workflows</h3><p className="mt-2 text-base text-slate-600 dark:text-slate-400">Tailor your processes to fit your teams needs. Create, automate, and optimize workflows with an easy-to-use drag-and-drop interface.</p></dd>
                </div>
                <div className="relative flex items-start">
                  <dt className="flex-shrink-0"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg></div></dt>
                  <dd className="ml-6"><h3 className="text-lg font-semibold text-slate-900 dark:text-white">Team Collaboration</h3><p className="mt-2 text-base text-slate-600 dark:text-slate-400">Work together seamlessly with real-time comments, shared inboxes, and task assignments. Keep everyone on the same page, no matter where they are.</p></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </CodePreview>
    </>
  );
}
