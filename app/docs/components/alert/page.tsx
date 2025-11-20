'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Alert', slug: 'alert', level: 1 },
  { title: 'Basic Alerts', slug: 'basic-alerts', level: 2 },
  { title: 'Simple', slug: 'simple', level: 3 },
  { title: 'With Icon', slug: 'with-icon', level: 3 },
  { title: 'With Title & Description', slug: 'with-title-description', level: 3 },
  { title: 'With Dismiss Button', slug: 'with-dismiss-button', level: 3 },
  { title: 'Color Variants', slug: 'color-variants', level: 3 },
  { title: 'Advanced Alerts', slug: 'advanced-alerts', level: 2 },
  { title: 'Modern Accent', slug: 'modern-accent', level: 3 },
  { title: 'Floating Alert', slug: 'floating-alert', level: 3 },
  { title: 'Interactive with Actions', slug: 'interactive-alert-actions', level: 3 },
  { title: 'Spotlight Alert', slug: 'spotlight-alert', level: 3 },
  { title: 'Gradient Icon Alert', slug: 'gradient-icon-alert', level: 3 },
  { title: 'Meteoric Alert', slug: 'meteoric-alert', level: 3 },
];
pageHeadings.push({ title: 'Bento Grid Alert', slug: 'bento-grid-alert', level: 3 });
const meteoricAlertId = 'meteoric-alert';
const bentoAlertId = 'bento-grid-alert';

const simpleAlertCode = `<div class="rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
  A simple info alert—check it out!
</div>`;

const withIconCode = `<div class="flex items-center rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 h-5 w-5 shrink-0">
    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
  A simple info alert with an icon.
</div>`;

const withTitleDescriptionCode = `<div class="rounded-md bg-green-50 p-4 dark:bg-green-950/50">
  <h4 class="text-lg font-semibold text-green-800 dark:text-green-300">Order Completed</h4>
  <div class="mt-2 text-sm text-green-700 dark:text-green-400">
    <p>Your order has been successfully processed. You can view your order history for more details.</p>
  </div>
</div>`;

const withDismissButtonCode = `<div id="dismiss-alert" class="flex items-center justify-between rounded-md bg-yellow-50 p-4 text-sm text-yellow-700 transition-opacity duration-300 dark:bg-yellow-950/50 dark:text-yellow-300">
  <p><span class="font-semibold">Warning:</span> Your trial period is about to expire.</p>
  <button onclick="document.getElementById('dismiss-alert').style.display='none'" class="-my-1.5 -mr-1.5 ml-4 rounded-md p-1.5 hover:bg-yellow-100 dark:hover:bg-yellow-900">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>`;

const colorVariantsCode = `<div class="space-y-4">
  {/* Info */}
  <div class="rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
    This is an <span class="font-semibold">info</span> alert.
  </div>
  {/* Success */}
  <div class="rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-950/50 dark:text-green-300">
    This is a <span class="font-semibold">success</span> alert.
  </div>
  {/* Warning */}
  <div class="rounded-md bg-yellow-50 p-4 text-sm text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300">
    This is a <span class="font-semibold">warning</span> alert.
  </div>
  {/* Danger */}
  <div class="rounded-md bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
    This is a <span class="font-semibold">danger</span> alert.
  </div>
</div>`;

const modernAccentCode = `<div id="modern-alert-preview" role="alert" class="relative rounded-lg border border-slate-200 bg-white p-4 pr-12 shadow-sm transition-opacity duration-300 dark:border-slate-800 dark:bg-slate-900">
  <div class="absolute left-0 top-0 h-full w-1.5 rounded-l-lg bg-indigo-500"></div>
  <div class="flex items-start">
    <div class="ml-4 mr-3 shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-indigo-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 15l.813-.904L12 16.5l3.187-3.404L16 14l-4 4-2.187-2.096Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </div>
    <div>
      <h5 class="font-semibold text-slate-800 dark:text-white">Update Successful</h5>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">Your profile information has been updated successfully.</p>
    </div>
  </div>
  <button onclick="document.getElementById('modern-alert-preview').style.display='none'" class="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
</div>`;

const floatingAlertCode = `<div id="floating-alert-preview" role="alert" class="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-white shadow-2xl shadow-black/50 backdrop-blur-lg transition-opacity duration-300">
  <div class="absolute -inset-px z-0 opacity-20" style="background: radial-gradient(400px circle at 10% 20%, #818cf8, transparent 40%), radial-gradient(300px circle at 90% 80%, #a78bfa, transparent 40%);"></div>
  <div class="relative z-10 flex items-start">
    <div class="mr-4 shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 text-purple-400">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </div>
    <div class="flex-1">
      <h5 class="font-bold text-lg text-purple-300">System Update</h5>
      <p class="mt-1 text-slate-300">A new version of the software is available. Please update for the latest features and security enhancements.</p>
      <div class="mt-4 flex gap-4">
        <button class="rounded-md bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/20">Update Now</button>
        <button class="rounded-md px-3 py-1 text-sm font-semibold text-slate-400 hover:text-white">Later</button>
      </div>
    </div>
    <button onclick="document.getElementById('floating-alert-preview').style.display='none'" class="ml-4 rounded-full p-1.5 text-slate-500 transition-colors hover:bg-white/10 hover:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
  </div>
</div>`;

const interactiveAlertActionsCode = `<div id="interactive-alert-preview" role="alert" class="flex w-full max-w-2xl items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-md dark:border-slate-800 dark:bg-slate-900">
  <div class="flex items-center">
    <div class="shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-blue-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    </div>
    <div class="ml-4">
      <h5 class="font-semibold text-slate-800 dark:text-white">New Login Detected</h5>
      <p class="text-sm text-slate-600 dark:text-slate-400">A new device has logged into your account. Was this you?</p>
    </div>
  </div>
  <div class="flex shrink-0 gap-2">
    <button class="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">Dismiss</button>
    <button class="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700">Check Activity</button>
  </div>
</div>`;
const spotlightAlertCode = `<div class="spotlight-alert group relative max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-4">
  <div class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: radial-gradient(400px circle at var(--x) var(--y), rgba(99, 102, 241, 0.15), transparent 80%);"></div>
  <div class="flex items-center">
    <div class="shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-indigo-400">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    </div>
    <div class="ml-4 flex-1">
      <h5 class="font-semibold text-white">Attention Required</h5>
      <p class="text-sm text-slate-400">Your account settings need to be updated for new security policies.</p>
    </div>
    <button class="ml-4 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700">Review</button>
  </div>
</div>

<!-- Script to handle the spotlight effect -->
<script>
  document.querySelectorAll('.spotlight-alert').forEach(alertEl => {
    alertEl.addEventListener('mousemove', (e) => {
      const rect = alertEl.getBoundingClientRect();
      alertEl.style.setProperty('--x', e.clientX - rect.left + 'px');
      alertEl.style.setProperty('--y', e.clientY - rect.top + 'px');
    });
  });
</script>`;

const gradientIconAlertCode = `<div class="relative w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
  <div class="flex items-start">
    <div class="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-teal-500 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </div>
    <div class="flex-1">
      <h5 class="text-lg font-bold text-slate-800 dark:text-white">Payment Successful</h5>
      <p class="mt-1 text-slate-600 dark:text-slate-400">Your payment has been processed successfully. A confirmation email has been sent to your inbox.</p>
    </div>
    <button class="ml-4 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
    </button>
  </div>
</div>`;

const meteoricAlertCode = `<!-- Add this animation to your global CSS:
@keyframes meteor-effect {
  0% { transform: rotate(215deg) translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
}
-->
<div class="relative w-full max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
  <div class="pointer-events-none absolute inset-0">
    <span class="absolute top-0 left-1/4 h-80 w-0.5 -translate-x-1/2 rotate-215 animate-[meteor-effect_3s_linear_infinite] bg-linear-to-b from-slate-500/30 to-transparent"></span>
    <span class="absolute top-0 left-1/2 h-60 w-0.5 -translate-x-1/2 rotate-215 animate-[meteor-effect_5s_linear_2s_infinite] bg-linear-to-b from-slate-500/30 to-transparent"></span>
    <span class="absolute top-0 left-3/4 h-72 w-px -translate-x-1/2 rotate-215 animate-[meteor-effect_4s_linear_1s_infinite] bg-linear-to-b from-slate-500/30 to-transparent"></span>
  </div>
  <div class="relative z-10 flex items-center">
    <div class="shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-cyan-400"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg></div>
    <div class="ml-4 flex-1">
      <h5 class="font-semibold text-white">New Feature Deployed</h5>
      <p class="text-sm text-slate-400">Our new AI-powered search has been successfully launched.</p>
    </div>
  </div>
</div>`;

const bentoAlertCode = `<div id="bento-alert-preview" class="grid w-full max-w-2xl grid-cols-3 grid-rows-2 gap-3 rounded-2xl bg-slate-100 p-4 dark:bg-slate-900">
  <div class="col-span-2 row-span-2 flex flex-col justify-center rounded-lg bg-white p-4 dark:bg-slate-800">
    <div class="flex items-center">
      <div class="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
      </div>
      <h5 class="text-base font-semibold text-slate-800 dark:text-white">Critical Alert</h5>
    </div>
    <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">A critical security vulnerability has been detected. Immediate action is required.</p>
  </div>
  <div class="col-span-1 row-span-1 flex items-center justify-center rounded-lg bg-white text-center dark:bg-slate-800">
    <div>
      <p class="text-xs font-medium text-slate-500 dark:text-slate-400">Severity</p>
      <p class="text-lg font-bold text-red-600 dark:text-red-500">High</p>
    </div>
  </div>
  <div class="col-span-1 row-span-1 flex items-center justify-center rounded-lg bg-white text-center dark:bg-slate-800">
    <button class="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">View Details</button>
  </div> 
</div>`;
export default function AlertsPage() {
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Alerts</span>
        </nav>

        <h1 id="alert" className="scroll-mt-20 text-4xl font-bold">
          Alert
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Alerts are used to display contextual messages to users. This component comes in various color variants and can include icons, titles, and close buttons.
        </p>

        {/* Basic Alerts */}
        <h2 id="basic-alerts" className="mt-16 scroll-mt-20 border-b border-slate-200 pb-2 text-3xl font-bold dark:border-slate-800">
          Basic Alerts
        </h2>

        {/* Simple Alert */}
        <h3 id="simple" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Simple
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The most basic alert that only contains a short message.
        </p>
        <CodePreview code={simpleAlertCode}>
          <div className="rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            A simple info alert—check it out!
          </div>
        </CodePreview>

        {/* With Icon */}
        <h3 id="with-icon" className="mt-12 scroll-mt-20 text-2xl font-bold">
          With Icon
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Add an icon to provide stronger visual context to your message.
        </p>
        <CodePreview code={withIconCode}>
          <div className="flex items-center rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-5 w-5 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            A simple info alert with an icon.
          </div>
        </CodePreview>

        {/* With Title & Description */}
        <h3 id="with-title-description" className="mt-12 scroll-mt-20 text-2xl font-bold">
          With Title & Description
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Use a title and description for a more structured and informative message.
        </p>
        <CodePreview code={withTitleDescriptionCode}>
          <div className="rounded-md bg-green-50 p-4 dark:bg-green-950/50">
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-300">Order Completed</h4>
            <div className="mt-2 text-sm text-green-700 dark:text-green-400">
              <p>Your order has been successfully processed. You can view your order history for more details.</p>
            </div>
          </div>
        </CodePreview>

        {/* With Dismiss Button */}
        <h3 id="with-dismiss-button" className="mt-12 scroll-mt-20 text-2xl font-bold">
          With Dismiss Button
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Add a button to allow users to close the alert.
        </p>
        <CodePreview code={withDismissButtonCode}>
          <div id="dismiss-alert-preview" className="flex items-center justify-between rounded-md bg-yellow-50 p-4 text-sm text-yellow-700 transition-opacity duration-300 dark:bg-yellow-950/50 dark:text-yellow-300">
            <p><span className="font-semibold">Warning:</span> Your trial period is about to expire.</p>
            <button onClick={() => { const el = document.getElementById('dismiss-alert-preview'); if (el) el.style.display = 'none'; }} className="-my-1.5 -mr-1.5 ml-4 rounded-md p-1.5 hover:bg-yellow-100 dark:hover:bg-yellow-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </CodePreview>

        {/* Color Variants */}
        <h3 id="color-variants" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Color Variants
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Use different colors to signify different types of messages such as info, success, warning, or danger.
        </p>
        <CodePreview code={colorVariantsCode}>
          <div className="space-y-4">
            <div className="rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              This is an <span className="font-semibold">info</span> alert.
            </div>
            <div className="rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-950/50 dark:text-green-300">
              This is a <span className="font-semibold">success</span> alert.
            </div>
            <div className="rounded-md bg-yellow-50 p-4 text-sm text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300">
              This is a <span className="font-semibold">warning</span> alert.
            </div>
            <div className="rounded-md bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
              This is a <span className="font-semibold">danger</span> alert.
            </div>
          </div>
        </CodePreview>

        {/* Advanced Alerts */}
        <h2 id="advanced-alerts" className="mt-16 scroll-mt-20 border-b border-slate-200 pb-2 text-3xl font-bold dark:border-slate-800">
          Advanced Alerts
        </h2>

        {/* Modern Accent */}
        <h3 id="modern-accent" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Modern Accent
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A modern alert with a vertical accent line, icon, and close button. This design provides a clean, professional look and is well-suited for contemporary web applications.
        </p>
        <CodePreview code={modernAccentCode}>
          <div id="modern-alert-preview-2" role="alert" className="relative rounded-lg border border-slate-200 bg-white p-4 pr-12 shadow-sm transition-opacity duration-300 dark:border-slate-800 dark:bg-slate-900">
            <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-lg bg-indigo-500"></div>
            <div className="flex items-start">
              <div className="ml-4 mr-3 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 15l.813-.904L12 16.5l3.187-3.404L16 14l-4 4-2.187-2.096Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-slate-800 dark:text-white">Update Successful</h5>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Your profile information has been updated successfully.</p>
              </div>
            </div>
            <button onClick={() => { const el = document.getElementById('modern-alert-preview-2'); if (el) el.style.display = 'none'; }} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </CodePreview>

        {/* Floating Alert */}
        <h3 id="floating-alert" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Floating Alert
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;Floating Alert&quot; is a modern design for 2025, combining a *glassmorphism* effect with a subtle aurora background. This design gives a floating and premium feel, suitable for important notifications that require attention without disrupting the user&apos;s workflow. It comes with action buttons for direct interaction.
        </p>
        <CodePreview code={floatingAlertCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-8">
            <div id="floating-alert-preview-2" role="alert" className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-white shadow-2xl shadow-black/50 backdrop-blur-lg transition-opacity duration-300">
              <div className="absolute -inset-px z-0 opacity-20" style={{ background: 'radial-gradient(400px circle at 10% 20%, #818cf8, transparent 40%), radial-gradient(300px circle at 90% 80%, #a78bfa, transparent 40%)' }}></div>
              <div className="relative z-10 flex items-start">
                <div className="mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-purple-300">System Update</h5>
                  <p className="mt-1 text-slate-300">A new version of the software is available. Please update for the latest features and security enhancements.</p>
                  <div className="mt-4 flex gap-4">
                    <button className="rounded-md bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/20">Update Now</button>
                    <button className="rounded-md px-3 py-1 text-sm font-semibold text-slate-400 hover:text-white">Later</button>
                  </div>
                </div>
                <button onClick={() => { const el = document.getElementById('floating-alert-preview-2'); if (el) el.style.display = 'none'; }} className="ml-4 rounded-full p-1.5 text-slate-500 transition-colors hover:bg-white/10 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Interactive Alert with Actions */}
        <h3 id="interactive-alert-actions" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Interactive with Actions
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          This alert not only informs but also provides direct actions for the user. With a clear icon, concise message, and primary & secondary action buttons, this design is highly effective for situations requiring user decisions, such as security confirmations or quick navigation.
        </p>
        <CodePreview code={interactiveAlertActionsCode}>
          <div id="interactive-alert-preview-2" role="alert" className="flex w-full max-w-2xl items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center">
              <div className="shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
              </div>
              <div className="ml-4">
                <h5 className="font-semibold text-slate-800 dark:text-white">New Login Detected</h5>
                <p className="text-sm text-slate-600 dark:text-slate-400">A new device has logged into your account. Was this you?</p>
              </div>
            </div>
            <div className="flex shrink-0 gap-2">
              <button onClick={() => { const el = document.getElementById('interactive-alert-preview-2'); if (el) el.style.display = 'none'; }} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">Dismiss</button>
              <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700">Check Activity</button>
            </div>
          </div>
        </CodePreview>

        {/* Spotlight Alert */}
        <h3 id="spotlight-alert" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Spotlight Alert
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;Spotlight&quot; alert uses a light effect that follows the cursor to draw attention to important messages. This effect provides a modern and premium feel, perfect for notifications that require user focus without being too intrusive.
        </p>
        <CodePreview code={spotlightAlertCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-8">
            <div className="group relative max-w-lg cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-4" onMouseMove={(e) => { const el = e.currentTarget; const rect = el.getBoundingClientRect(); el.style.setProperty('--x', `${e.clientX - rect.left}px`); el.style.setProperty('--y', `${e.clientY - rect.top}px`); }}>
              <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(99, 102, 241, 0.15), transparent 80%)' }}></div>
              <div className="flex items-center">
                <div className="shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-indigo-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg></div>
                <div className="ml-4 flex-1">
                  <h5 className="font-semibold text-white">Attention Required</h5>
                  <p className="text-sm text-slate-400">Your account settings need to be updated for new security policies.</p>
                </div>
                <button className="ml-4 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700">Review</button>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Gradient Icon Alert */}
        <h3 id="gradient-icon-alert" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Gradient Icon Alert
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          This alert design combines a prominent icon with a gradient background, a bold title, and a clear description. This premium and modern look is perfect for important notifications that require visual attention.
        </p>
        <CodePreview code={gradientIconAlertCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-100 p-8 dark:bg-slate-950">
            <div id="gradient-icon-alert-preview" className="relative w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start">
                <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-teal-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
                <div className="flex-1">
                  <h5 className="text-lg font-bold text-slate-800 dark:text-white">Payment Successful</h5>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">Your payment has been processed successfully. A confirmation email has been sent to your inbox.</p>
                </div>
                <button onClick={() => { const el = document.getElementById('gradient-icon-alert-preview'); if (el) el.style.display = 'none'; }} className="ml-4 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Meteoric Alert */}
        <h3 id={meteoricAlertId} className="mt-12 scroll-mt-20 text-2xl font-bold">
          Meteoric Alert
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;Meteoric Alert&quot; features an animated background effect of meteors streaking across the notification. Created purely with CSS, this effect provides a dynamic, modern, and slightly magical feel, perfect for notifications that aim to capture attention in a subtle yet elegant way.
        </p>
        <CodePreview code={meteoricAlertCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-8">
            <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
              <div className="pointer-events-none absolute inset-0">
                <span className="absolute top-0 left-1/4 h-80 w-0.5 -translate-x-1/2 rotate-215 animate-[meteor-effect_3s_linear_infinite] bg-linear-to-b from-slate-500/30 to-transparent"></span>
                <span className="absolute top-0 left-1/2 h-60 w-0.5 -translate-x-1/2 rotate-215 animate-[meteor-effect_5s_linear_2s_infinite] bg-linear-to-b from-slate-500/30 to-transparent"></span>
                <span className="absolute top-0 left-3/4 h-72 w-px -translate-x-1/2 rotate-215 animate-[meteor-effect_4s_linear_1s_infinite] bg-linear-to-b from-slate-500/30 to-transparent"></span>
              </div>
              <div className="relative z-10 flex items-center">
                <div className="shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg></div>
                <div className="ml-4 flex-1">
                  <h5 className="font-semibold text-white">New Feature Deployed</h5>
                  <p className="text-sm text-slate-400">Our new AI-powered search has been successfully launched.</p>
                </div>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Bento Grid Alert */}
        <h3 id={bentoAlertId} className="mt-12 scroll-mt-20 text-2xl font-bold">
          Bento Grid Alert
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Inspired by the trending bento layout, the &quot;Bento Grid Alert&quot; presents information in a structured grid format. This design breaks down the notification into several parts—the main message, key metrics, and action buttons—in separate yet cohesive containers. It is highly effective for displaying multi-part data or messages in a clean, modern, and organized way.
        </p>
        <CodePreview code={bentoAlertCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-200 p-8 dark:bg-slate-950">
            <div id="bento-alert-preview-2" className="grid w-full max-w-2xl grid-cols-3 grid-rows-2 gap-3 rounded-2xl bg-slate-100 p-4 dark:bg-slate-900">
              <div className="col-span-2 row-span-2 flex flex-col justify-center rounded-lg bg-white p-4 dark:bg-slate-800">
                <div className="flex items-center">
                  <div className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></div>
                  <h5 className="text-base font-semibold text-slate-800 dark:text-white">Critical Alert</h5>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">A critical security vulnerability has been detected. Immediate action is required.</p>
              </div>
              <div className="col-span-1 row-span-1 flex items-center justify-center rounded-lg bg-white text-center dark:bg-slate-800"><div><p className="text-xs font-medium text-slate-500 dark:text-slate-400">Severity</p><p className="text-lg font-bold text-red-600 dark:text-red-500">High</p></div></div>
              <div className="col-span-1 row-span-1 flex items-center justify-center rounded-lg bg-white text-center dark:bg-slate-800"><button className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">View Details</button></div>
            </div>
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}