'use client';

import React, { useState, MouseEvent, useCallback } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

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
    <svg xmlns="http://wwws.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
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

export default function AlertClientComponent() {
  const [visibleAlerts, setVisibleAlerts] = useState<Record<string, boolean>>({
    'dismiss-alert-preview': true,
    'modern-alert-preview': true,
    'floating-alert-preview': true,
    'interactive-alert-preview': true,
    'gradient-icon-alert-preview': true,
    'bento-alert-preview': true,
  });

  const handleDismiss = useCallback((id: string) => {
    setVisibleAlerts(prev => ({ ...prev, [id]: false }));
  }, []);

  const handleSpotlightMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    item.style.setProperty('--x', `${x}px`);
    item.style.setProperty('--y', `${y}px`);
  }, []);

  const alertSections = [
    {
      id: 'basic-alerts',
      title: 'Basic Alerts',
      isMainSection: true,
      items: [
        {
          id: 'simple',
          title: 'Simple',
          description: 'The most basic alert that only contains a short message.',
          code: simpleAlertCode,
          content: <div className="rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">A simple info alert—check it out!</div>,
        },
        {
          id: 'with-icon',
          title: 'With Icon',
          description: 'Add an icon to provide stronger visual context to your message.',
          code: withIconCode,
          content: (
            <div className="flex items-center rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-5 w-5 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              A simple info alert with an icon.
            </div>
          ),
        },
        {
          id: 'with-title-description',
          title: 'With Title & Description',
          description: 'Use a title and description for a more structured and informative message.',
          code: withTitleDescriptionCode,
          content: (
            <div className="rounded-md bg-green-50 p-4 dark:bg-green-950/50">
              <h4 className="text-lg font-semibold text-green-800 dark:text-green-300">Order Completed</h4>
              <div className="mt-2 text-sm text-green-700 dark:text-green-400">
                <p>Your order has been successfully processed. You can view your order history for more details.</p>
              </div>
            </div>
          ),
        },
        {
          id: 'with-dismiss-button',
          title: 'With Dismiss Button',
          description: 'Add a button to allow users to close the alert.',
          code: withDismissButtonCode,
          content: visibleAlerts['dismiss-alert-preview'] && (
            <div id="dismiss-alert-preview" className="flex items-center justify-between rounded-md bg-yellow-50 p-4 text-sm text-yellow-700 transition-opacity duration-300 dark:bg-yellow-950/50 dark:text-yellow-300">
              <p><span className="font-semibold">Warning:</span> Your trial period is about to expire.</p>
              <button onClick={() => handleDismiss('dismiss-alert-preview')} className="-my-1.5 -mr-1.5 ml-4 rounded-md p-1.5 hover:bg-yellow-100 dark:hover:bg-yellow-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ),
        },
        {
          id: 'color-variants',
          title: 'Color Variants',
          description: 'Use different colors to signify different types of messages such as info, success, warning, or danger.',
          code: colorVariantsCode,
          content: (
            <div className="space-y-4">
              <div className="rounded-md bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">This is an <span className="font-semibold">info</span> alert.</div>
              <div className="rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-950/50 dark:text-green-300">This is a <span className="font-semibold">success</span> alert.</div>
              <div className="rounded-md bg-yellow-50 p-4 text-sm text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-300">This is a <span className="font-semibold">warning</span> alert.</div>
              <div className="rounded-md bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">This is a <span className="font-semibold">danger</span> alert.</div>
            </div>
          ),
        },
      ],
    },
    {
      id: 'advanced-alerts',
      title: 'Advanced Alerts',
      isMainSection: true,
      items: [
        {
          id: 'modern-accent',
          title: 'Modern Accent',
          description: 'A modern alert with a vertical accent line, icon, and close button. This design provides a clean, professional look and is well-suited for contemporary web applications.',
          code: modernAccentCode,
          content: visibleAlerts['modern-alert-preview'] && (
            <div id="modern-alert-preview" role="alert" className="relative rounded-lg border border-slate-200 bg-white p-4 pr-12 shadow-sm transition-opacity duration-300 dark:border-slate-800 dark:bg-slate-900">
              <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-lg bg-indigo-500"></div>
              <div className="flex items-start">
                <div className="ml-4 mr-3 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-indigo-500"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 15l.813-.904L12 16.5l3.187-3.404L16 14l-4 4-2.187-2.096Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-white">Update Successful</h5>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Your profile information has been updated successfully.</p>
                </div>
              </div>
              <button onClick={() => handleDismiss('modern-alert-preview')} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          ),
        },
        {
          id: 'floating-alert',
          title: 'Floating Alert',
          description: 'The "Floating Alert" is a modern design for 2025, combining a *glassmorphism* effect with a subtle aurora background. This design gives a floating and premium feel, suitable for important notifications that require attention without disrupting the user\'s workflow. It comes with action buttons for direct interaction.',
          code: floatingAlertCode,
          content: visibleAlerts['floating-alert-preview'] && (
            <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-8">
              <div id="floating-alert-preview" role="alert" className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-white shadow-2xl shadow-black/50 backdrop-blur-lg transition-opacity duration-300">
                <div className="absolute -inset-px z-0 opacity-20" style={{ background: 'radial-gradient(400px circle at 10% 20%, #818cf8, transparent 40%), radial-gradient(300px circle at 90% 80%, #a78bfa, transparent 40%)' }}></div>
                <div className="relative z-10 flex items-start">
                  <div className="mr-4 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-purple-400"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-purple-300">System Update</h5>
                    <p className="mt-1 text-slate-300">A new version of the software is available. Please update for the latest features and security enhancements.</p>
                    <div className="mt-4 flex gap-4">
                      <button className="rounded-md bg-white/10 px-3 py-1 text-sm font-semibold text-white hover:bg-white/20">Update Now</button>
                      <button className="rounded-md px-3 py-1 text-sm font-semibold text-slate-400 hover:text-white">Later</button>
                    </div>
                  </div>
                  <button onClick={() => handleDismiss('floating-alert-preview')} className="ml-4 rounded-full p-1.5 text-slate-500 transition-colors hover:bg-white/10 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 'interactive-alert-actions',
          title: 'Interactive with Actions',
          description: 'This alert not only informs but also provides direct actions for the user. With a clear icon, concise message, and primary & secondary action buttons, this design is highly effective for situations requiring user decisions, such as security confirmations or quick navigation.',
          code: interactiveAlertActionsCode,
          content: visibleAlerts['interactive-alert-preview'] && (
            <div id="interactive-alert-preview" role="alert" className="flex w-full max-w-2xl items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center">
                <div className="shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg></div>
                <div className="ml-4">
                  <h5 className="font-semibold text-slate-800 dark:text-white">New Login Detected</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">A new device has logged into your account. Was this you?</p>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <button onClick={() => handleDismiss('interactive-alert-preview')} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">Dismiss</button>
                <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700">Check Activity</button>
              </div>
            </div>
          ),
        },
        {
          id: 'spotlight-alert',
          title: 'Spotlight Alert',
          description: 'The "Spotlight" alert uses a light effect that follows the cursor to draw attention to important messages. This effect provides a modern and premium feel, perfect for notifications that require user focus without being too intrusive.',
          code: spotlightAlertCode,
          content: (
            <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-8">
              <div className="group relative max-w-lg cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-4" onMouseMove={handleSpotlightMove}>
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
          ),
        },
        {
          id: 'gradient-icon-alert',
          title: 'Gradient Icon Alert',
          description: 'This alert design combines a prominent icon with a gradient background, a bold title, and a clear description. This premium and modern look is perfect for important notifications that require visual attention.',
          code: gradientIconAlertCode,
          content: visibleAlerts['gradient-icon-alert-preview'] && (
            <div className="flex w-full items-center justify-center rounded-lg bg-slate-100 p-8 dark:bg-slate-950">
              <div id="gradient-icon-alert-preview" className="relative w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-teal-500 text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-slate-800 dark:text-white">Payment Successful</h5>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Your payment has been processed successfully. A confirmation email has been sent to your inbox.</p>
                  </div>
                  <button onClick={() => handleDismiss('gradient-icon-alert-preview')} className="ml-4 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                    <svg xmlns="http://wwws.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 'meteoric-alert',
          title: 'Meteoric Alert',
          description: 'The "Meteoric Alert" features an animated background effect of meteors streaking across the notification. Created purely with CSS, this effect provides a dynamic, modern, and slightly magical feel, perfect for notifications that aim to capture attention in a subtle yet elegant way.',
          code: meteoricAlertCode,
          content: (
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
          ),
        },
        {
          id: 'bento-grid-alert',
          title: 'Bento Grid Alert',
          description: 'Inspired by the trending bento layout, the "Bento Grid Alert" presents information in a structured grid format. This design breaks down the notification into several parts—the main message, key metrics, and action buttons—in separate yet cohesive containers. It is highly effective for displaying multi-part data or messages in a clean, modern, and organized way.',
          code: bentoAlertCode,
          content: visibleAlerts['bento-alert-preview'] && (
            <div className="flex w-full items-center justify-center rounded-lg bg-slate-200 p-8 dark:bg-slate-950">
              <div id="bento-alert-preview" className="grid w-full max-w-2xl grid-cols-3 grid-rows-2 gap-3 rounded-2xl bg-slate-100 p-4 dark:bg-slate-900">
                <div className="col-span-2 row-span-2 flex flex-col justify-center rounded-lg bg-white p-4 dark:bg-slate-800">
                  <div className="flex items-center">
                    <div className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></div>
                    <h5 className="text-base font-semibold text-slate-800 dark:text-white">Critical Alert</h5>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">A critical security vulnerability has been detected. Immediate action is required.</p>
                </div>
                <div className="col-span-1 row-span-1 flex items-center justify-center rounded-lg bg-white text-center dark:bg-slate-800"><div><p className="text-xs font-medium text-slate-500 dark:text-slate-400">Severity</p><p className="text-lg font-bold text-red-600 dark:text-red-500">High</p></div></div>
                <div className="col-span-1 row-span-1 flex items-center justify-center rounded-lg bg-white text-center dark:bg-slate-800"><button onClick={() => handleDismiss('bento-alert-preview')} className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">View Details</button></div>
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <>
      {alertSections.map(section => (
        <div key={section.id}>
          {section.isMainSection && (
            <h2 id={section.id} className="mt-16 scroll-mt-20 border-b border-slate-200 pb-2 text-3xl font-bold dark:border-slate-800">
              {section.title}
            </h2>
          )}
          {section.items.map(item => (
            <div key={item.id}>
              <h3 id={item.id} className="mt-12 scroll-mt-20 text-2xl font-bold">
                {item.title}
              </h3>
              <p className="mt-4 text-slate-600 dark:text-slate-400">{item.description}</p>
              <CodePreview code={item.code}>{item.content}</CodePreview>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}