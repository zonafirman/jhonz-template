'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React, { useState } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Input', slug: 'input', level: 1 },
  { title: 'Basic Inputs', slug: 'basic-inputs', level: 2 },
  { title: 'Simple', slug: 'simple', level: 3 },
  { title: 'With Label', slug: 'with-label', level: 3 },
  { title: 'With Helper Text', slug: 'with-helper-text', level: 3 },
  { title: 'Disabled', slug: 'disabled', level: 3 },
  { title: 'Input with Icons', slug: 'input-with-icons', level: 2 },
  { title: 'Leading Icon', slug: 'leading-icon', level: 3 },
  { title: 'Trailing Icon', slug: 'trailing-icon', level: 3 },
  { title: 'Validation States', slug: 'validation-states', level: 2 },
  { title: 'Success State', slug: 'success-state', level: 3 },
  { title: 'Error State', slug: 'error-state', level: 3 },
  { title: 'Advanced Inputs', slug: 'advanced-inputs', level: 2 },
  { title: 'Floating Label', slug: 'floating-label', level: 3 },
  { title: 'Input with Add-on', slug: 'input-with-addon', level: 3 },
  { title: 'Search Input', slug: 'search-input', level: 3 },
  { title: 'Password Input', slug: 'password-input', level: 3 },
  { title: 'Animated Underline', slug: 'animated-underline', level: 3 },
  { title: 'Verification Code (OTP)', slug: 'otp-input', level: 3 },
  { title: 'Spotlight Input', slug: 'spotlight-input', level: 3 },
  { title: 'File Upload', slug: 'file-upload', level: 3 },
  { title: 'AI-Enhanced Input', slug: 'ai-enhanced-input', level: 3 },
  { title: 'Gradient Border', slug: 'gradient-border-input', level: 3 },
  { title: 'Particle Input', slug: 'particle-input', level: 3 },
];

const simpleInputCode = `<input type="text" placeholder="Type here..." class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />`;

const withLabelCode = `<div class="w-full">
  <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
  <input type="email" id="email" class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" placeholder="you@example.com" />
</div>`;

const withHelperTextCode = `<div class="w-full">
  <label for="username" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Username</label>
  <input type="text" id="username" class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" placeholder="john.doe" />
  <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">Your username will be public.</p>
</div>`;

const disabledInputCode = `<input type="text" placeholder="Disabled input" disabled class="w-full cursor-not-allowed rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400" />`;

const leadingIconCode = `<div class="relative w-full">
  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-slate-400 dark:text-slate-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  </div>
  <input type="email" placeholder="Email" class="w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
</div>`;

const trailingIconCode = `<div class="relative w-full">
  <input type="text" placeholder="Amount" class="w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-slate-400 dark:text-slate-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  </div>
</div>`;

const successStateCode = `<div class="relative w-full">
  <input type="text" placeholder="Success" value="johndoe" class="w-full rounded-md border border-emerald-500 bg-white px-3 py-2 text-slate-900 ring-1 ring-emerald-500/50 focus:outline-none dark:border-emerald-500 dark:bg-slate-800 dark:text-white" />
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-emerald-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  </div>
</div>`;

const errorStateCode = `<div class="w-full">
  <label for="email-error" class="block text-sm font-medium text-red-600 dark:text-red-500">Email</label>
  <div class="relative mt-1">
    <input type="email" id="email-error" value="invalid-email" class="w-full rounded-md border border-red-500 bg-white px-3 py-2 text-slate-900 placeholder-red-400 ring-1 ring-red-500/50 focus:outline-none dark:border-red-500 dark:bg-slate-800 dark:text-white" />
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-red-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    </div>
  </div>
  <p class="mt-1 text-xs text-red-600 dark:text-red-500">Please enter a valid email address.</p>
</div>`;

const floatingLabelCode = `<div class="relative w-full">
  <input type="text" id="floating-label-input" class="peer w-full rounded-md border border-slate-300 bg-transparent px-3 py-2.5 text-slate-900 placeholder-transparent focus:border-indigo-500 focus:outline-none focus:ring-0 dark:border-slate-700 dark:text-white dark:focus:border-indigo-500" placeholder="Email address" />
  <label for="floating-label-input" class="pointer-events-none absolute left-3 top-2.5 origin-left -translate-y-5 scale-75 text-slate-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-indigo-600 dark:text-slate-400 dark:peer-focus:text-indigo-400">
    Email address
  </label>
</div>`;

const inputWithAddonCode = `<div class="flex w-full">
  <span class="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-slate-100 px-3 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">https://</span>
  <input type="text" placeholder="mysite" class="w-full rounded-r-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
</div>`;

const searchInputCode = `<div class="relative w-full">
  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-slate-400 dark:text-slate-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  </div>
  <input type="search" placeholder="Search..." class="w-full rounded-full border border-slate-300 bg-white py-2 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
</div>`;

const passwordInputCode = `<div class="relative w-full">
  <input type="password" id="password-input" placeholder="Password" class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
  <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
    {/* Show icon */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639l4.433-7.447A1 1 0 0 1 7.48 4h9.04a1 1 0 0 1 .994.883l4.433 7.447a1.012 1.012 0 0 1 0 .639l-4.433 7.447A1 1 0 0 1 16.52 20h-9.04a1 1 0 0 1-.994-.883l-4.433-7.447Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
    {/* Hide icon (add logic to toggle) */}
    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.243 4.243-4.243-4.243" /></svg> */}
  </button>
</div>`;

const animatedUnderlineInputCode = `<div class="relative w-full">
  <input 
    type="text" 
    id="animated-underline-input" 
    class="peer w-full border-0 border-b-2 border-slate-300 bg-transparent px-0 py-2 text-slate-900 placeholder-transparent focus:border-indigo-600 focus:outline-none dark:border-slate-700 dark:text-white dark:focus:border-indigo-500" 
    placeholder="Your Name" 
  />
  <label for="animated-underline-input" class="pointer-events-none absolute left-0 top-2 -translate-y-6 scale-75 text-sm text-slate-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600 dark:text-slate-400 dark:peer-focus:text-indigo-400">Your Name</label>
</div>`;

const otpInputCode = `<div class="flex w-full max-w-sm justify-center space-x-2">
  <input type="text" maxlength="1" class="h-12 w-12 rounded-md border border-slate-300 bg-white text-center text-2xl font-bold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
  <input type="text" maxlength="1" class="h-12 w-12 rounded-md border border-slate-300 bg-white text-center text-2xl font-bold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
  <input type="text" maxlength="1" class="h-12 w-12 rounded-md border border-slate-300 bg-white text-center text-2xl font-bold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
  <input type="text" maxlength="1" class="h-12 w-12 rounded-md border border-slate-300 bg-white text-center text-2xl font-bold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
  <input type="text" maxlength="1" class="h-12 w-12 rounded-md border border-slate-300 bg-white text-center text-2xl font-bold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
  <input type="text" maxlength="1" class="h-12 w-12 rounded-md border border-slate-300 bg-white text-center text-2xl font-bold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
</div>

<!-- Script to handle auto-focus to next input -->
<script>
  // Add logic to move focus automatically
</script>`;

const spotlightInputCode = `<div class="group relative w-full">
  <div 
    class="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" 
    style="background: radial-gradient(400px circle at var(--x) var(--y), rgba(168, 85, 247, 0.1), transparent 80%);"
  ></div>
  <input 
    type="text" 
    placeholder="Your Email Address" 
    class="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" 
  />
</div>`;

const fileUploadInputCode = `<div class="w-full max-w-sm">
  <label for="file-upload" class="relative block w-full cursor-pointer rounded-lg border-2 border-dashed border-slate-300 p-6 text-center hover:border-indigo-500 dark:border-slate-700 dark:hover:border-indigo-500">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto h-10 w-10 text-slate-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l-3 3m3-3l3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
    </svg>
    <span class="mt-2 block text-sm font-semibold text-slate-600 dark:text-slate-300">Drag & drop files here</span>
    <span class="mt-1 block text-xs text-slate-500 dark:text-slate-400">or click to browse</span>
  </label>
  <input id="file-upload" type="file" class="sr-only" />
  {/* File preview section (add JS logic) */}
  <div class="mt-4 text-sm text-slate-500 dark:text-slate-400">
    {/* Example preview: */}
    {/* <div class="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 p-2 dark:border-slate-700 dark:bg-slate-800">
      <span>document.pdf</span>
      <button>Remove</button>
    </div> */}
  </div>
</div>`;

const aiEnhancedInputCode = `<div class="relative w-full max-w-sm">
  <input 
    type="text" 
    placeholder="Ask AI to write anything..." 
    class="w-full rounded-full border border-slate-300 bg-white py-2.5 pl-4 pr-12 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
  />
  <button class="group absolute inset-y-0 right-0 flex items-center rounded-r-full bg-indigo-600 px-3 text-white transition-all duration-300 hover:bg-indigo-700">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5 transition-transform duration-300 group-hover:rotate-12">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  </button>
</div>`;

const gradientBorderInputCode = `<div class="group relative w-full">
  <div class="absolute -inset-0.5 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"></div>
  <input 
    type="text" 
    placeholder="Enter your email" 
    class="relative w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-0" 
  />
</div>`;

const particleInputCode = `<div class="particle-input-container relative w-full max-w-sm">
  <input 
    type="text" 
    placeholder="Type to see magic..." 
    class="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
  />
  <div class="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
    <!-- Particles will be generated here by script -->
  </div>
</div>`;

export default function InputPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const otpInputs = React.useRef<(HTMLInputElement | null)[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const handleSpotlightMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const removeFile = () => setUploadedFile(null);

  const handleParticleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const container = input.parentElement;
    const particleContainer = container?.querySelector<HTMLDivElement>('.pointer-events-none');
    if (!particleContainer) return;

    // Create a particle
    const particle = document.createElement('div');
    particle.className = 'absolute rounded-full';
    const size = Math.random() * 3 + 2; // size between 2px and 5px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Position at the end of the text
    const text = input.value;
    const span = document.createElement('span');
    span.textContent = text;
    document.body.appendChild(span);
    const textWidth = span.getBoundingClientRect().width;
    document.body.removeChild(span);

    particle.style.left = `${Math.min(textWidth + 16, input.clientWidth - 16)}px`;
    particle.style.top = `${input.clientHeight / 2}px`;
    
    const colors = ['#a855f7', '#818cf8', '#ec4899'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    particleContainer.appendChild(particle);

    // Animate and remove
    particle.animate([
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      { transform: `translate(-50%, -50%) scale(0)`, opacity: 0, top: `${Math.random() * 100 - 50}%` }
    ], { duration: 800, easing: 'ease-out' }).onfinish = () => particle.remove();
  };

  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Input</span>
        </nav>

        <h1 id="input" className="scroll-mt-20 text-4xl font-bold">
          Input
        </h1>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Input components are used to collect data from users via forms. They are available in various styles and states to meet your interface needs.
        </p>

        {/* Basic Inputs */}
        <h2 id="basic-inputs" className="mt-16 scroll-mt-20 border-b border-slate-200 pb-2 text-3xl font-bold dark:border-slate-800">
          Basic Inputs
        </h2>

        <h3 id="simple" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Simple
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">A basic input with a placeholder. This is the simplest form of an input field.</p>
        <CodePreview code={simpleInputCode}>
          <input type="text" placeholder="Type here..." className="w-full max-w-sm rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
        </CodePreview>

        <h3 id="with-label" className="mt-12 scroll-mt-20 text-2xl font-bold">
          With Label
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Adding a label to an input is crucial for accessibility and clarity.</p>
        <CodePreview code={withLabelCode}>
          <div className="w-full max-w-sm">
            <label htmlFor="email-preview" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input type="email" id="email-preview" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" placeholder="you@example.com" />
          </div>
        </CodePreview>

        <h3 id="with-helper-text" className="mt-12 scroll-mt-20 text-2xl font-bold">
          With Helper Text
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Use helper text to provide additional information or instructions to the user.</p>
        <CodePreview code={withHelperTextCode}>
          <div className="w-full max-w-sm">
            <label htmlFor="username-preview" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Username</label>
            <input type="text" id="username-preview" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" placeholder="john.doe" />
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Your username will be public.</p>
          </div>
        </CodePreview>

        <h3 id="disabled" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Disabled
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Use the `disabled` attribute to prevent user interaction with the input.</p>
        <CodePreview code={disabledInputCode}>
          <input type="text" placeholder="Disabled input" disabled className="w-full max-w-sm cursor-not-allowed rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400" />
        </CodePreview>

        {/* Input with Icons */}
        <h2 id="input-with-icons" className="mt-16 scroll-mt-20 border-b border-slate-200 pb-2 text-3xl font-bold dark:border-slate-800">
          Input with Icons
        </h2>

        <h3 id="leading-icon" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Leading Icon
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Add an icon at the beginning of the input to provide visual context.</p>
        <CodePreview code={leadingIconCode}>
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-slate-400 dark:text-slate-500"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg></div>
            <input type="email" placeholder="Email" className="w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
          </div>
        </CodePreview>

        <h3 id="trailing-icon" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Trailing Icon
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Icons can also be placed at the end of the input, often used for actions or indicators.</p>
        <CodePreview code={trailingIconCode}>
          <div className="relative w-full max-w-sm">
            <input type="text" placeholder="Amount" className="w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-slate-400 dark:text-slate-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg></div>
          </div>
        </CodePreview>

        {/* Validation States */}
        <h2 id="validation-states" className="mt-16 scroll-mt-20 border-b border-slate-200 pb-2 text-3xl font-bold dark:border-slate-800">
          Validation States
        </h2>

        <h3 id="success-state" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Success State
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Use green colors to indicate that the input is valid.</p>
        <CodePreview code={successStateCode}>
          <div className="relative w-full max-w-sm">
            <input type="text" placeholder="Success" defaultValue="johndoe" className="w-full rounded-md border border-emerald-500 bg-white px-3 py-2 text-slate-900 ring-1 ring-emerald-500/50 focus:outline-none dark:border-emerald-500 dark:bg-slate-800 dark:text-white" />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-emerald-500"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>
          </div>
        </CodePreview>

        <h3 id="error-state" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Error State
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Use red colors and an error message to indicate an invalid input.</p>
        <CodePreview code={errorStateCode}>
          <div className="w-full max-w-sm">
            <label htmlFor="email-error-preview" className="block text-sm font-medium text-red-600 dark:text-red-500">Email</label>
            <div className="relative mt-1">
              <input type="email" id="email-error-preview" defaultValue="invalid-email" className="w-full rounded-md border border-red-500 bg-white px-3 py-2 text-slate-900 placeholder-red-400 ring-1 ring-red-500/50 focus:outline-none dark:border-red-500 dark:bg-slate-800 dark:text-white" />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-red-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg></div>
            </div>
            <p className="mt-1 text-xs text-red-600 dark:text-red-500">Please enter a valid email address.</p>
          </div>
        </CodePreview>

        {/* Advanced Inputs */}
        <h2 id="advanced-inputs" className="mt-16 scroll-mt-20 border-b border-slate-200 pb-2 text-3xl font-bold dark:border-slate-800">
          Advanced Inputs
        </h2>

        <h3 id="floating-label" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Floating Label
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">A label that &quot;floats&quot; from the placeholder to the top of the input when focused or filled. Created purely with CSS using the `peer` selector.</p>
        <CodePreview code={floatingLabelCode}>
          <div className="relative w-full max-w-sm">
            <input type="text" id="floating-label-preview" className="peer w-full rounded-md border border-slate-300 bg-transparent px-3 py-2.5 text-slate-900 placeholder-transparent focus:border-indigo-500 focus:outline-none focus:ring-0 dark:border-slate-700 dark:text-white dark:focus:border-indigo-500" placeholder="Email address" />
            <label htmlFor="floating-label-preview" className="pointer-events-none absolute left-3 top-2.5 origin-left -translate-y-5 scale-75 text-slate-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-indigo-600 dark:text-slate-400 dark:peer-focus:text-indigo-400">Email address</label>
          </div>
        </CodePreview>

        <h3 id="input-with-addon" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Input with Add-on
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">Add text or other elements as a prefix or suffix to the input.</p>
        <CodePreview code={inputWithAddonCode}>
          <div className="flex w-full max-w-sm">
            <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-300 bg-slate-100 px-3 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">https://</span>
            <input type="text" placeholder="mysite" className="w-full rounded-r-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
          </div>
        </CodePreview>

        <h3 id="search-input" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Search Input
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">An input specifically designed for search functionality, usually with a search icon and rounded corners.</p>
        <CodePreview code={searchInputCode}>
          <div className="relative w-full max-w-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-slate-400 dark:text-slate-500"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg></div>
            <input type="search" placeholder="Search..." className="w-full rounded-full border border-slate-300 bg-white py-2 pl-10 pr-4 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
          </div>
        </CodePreview>

        <h3 id="password-input" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Password Input
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">A password input with a button to show or hide its content.</p>
        <CodePreview code={passwordInputCode}>
          <div className="relative w-full max-w-sm">
            <input type={passwordVisible ? 'text' : 'password'} placeholder="Password" className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500" />
            <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
              {passwordVisible ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.243 4.243-4.243-4.243" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639l4.433-7.447A1 1 0 0 1 7.48 4h9.04a1 1 0 0 1 .994.883l4.433 7.447a1.012 1.012 0 0 1 0 .639l-4.433 7.447A1 1 0 0 1 16.52 20h-9.04a1 1 0 0 1-.994-.883l-4.433-7.447Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
              )}
            </button>
          </div>
        </CodePreview>

        {/* Animated Underline Input */}
        <h3 id="animated-underline" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Animated Underline
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;Animated Underline&quot; input is a minimalist and modern design perfect for 2025. This input combines a floating label effect with an animated underline on focus. It provides clean and elegant visual feedback without sacrificing functionality.
        </p>
        <CodePreview code={animatedUnderlineInputCode}>
          <div className="relative w-full max-w-sm">
            <input type="text" id="animated-underline-preview" className="peer w-full border-0 border-b-2 border-slate-300 bg-transparent px-0 py-2 text-slate-900 placeholder-transparent focus:border-indigo-600 focus:outline-none dark:border-slate-700 dark:text-white dark:focus:border-indigo-500" placeholder="Your Name" />
            <label htmlFor="animated-underline-preview" className="pointer-events-none absolute left-0 top-2 -translate-y-6 scale-75 text-sm text-slate-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600 dark:text-slate-400 dark:peer-focus:text-indigo-400">Your Name</label>
          </div>
        </CodePreview>

        {/* OTP Input */}
        <h3 id="otp-input" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Verification Code (OTP)
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          An input for verification codes or OTP (One-Time Password) is a crucial UI component for security. This design provides separate input fields for each digit, which automatically moves the focus to the next input after a digit is entered. This provides a seamless and modern user experience.
        </p>
        <CodePreview code={otpInputCode}>
          <div className="flex w-full max-w-sm justify-center space-x-2">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="h-12 w-12 rounded-md border border-slate-300 bg-white text-center text-2xl font-bold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            ))}
          </div>
        </CodePreview>

        {/* Spotlight Input */}
        <h3 id="spotlight-input" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Spotlight Input
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;Spotlight Input&quot; is a very modern component for 2025. When the user focuses on the input, a subtle spotlight appears and follows the cursor&apos;s movement within the input area. This effect provides sophisticated and premium visual feedback, enhancing the user experience on important forms.
        </p>
        <CodePreview code={spotlightInputCode}>
          <div className="flex w-full max-w-sm items-center justify-center rounded-lg bg-slate-950 p-8">
            <div className="group relative w-full" onMouseMove={handleSpotlightMove}>
              <div 
                className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" 
                style={{ background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(168, 85, 247, 0.1), transparent 80%)' }}
              ></div>
              <input type="text" placeholder="Your Email Address" className="w-full rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            </div>
          </div>
        </CodePreview>

        {/* File Upload Input */}
        <h3 id="file-upload" className="mt-12 scroll-mt-20 text-2xl font-bold">
          File Upload
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          This file upload input is a modern component that replaces the less attractive native file input. It provides a clear drag-and-drop area and displays a preview of the selected file with an option to remove it. This is a professional solution for forms that require file uploads.
        </p>
        <CodePreview code={fileUploadInputCode}>
          <div className="w-full max-w-sm">
            {!uploadedFile ? (
              <label htmlFor="file-upload-preview" className="relative block w-full cursor-pointer rounded-lg border-2 border-dashed border-slate-300 p-6 text-center hover:border-indigo-500 dark:border-slate-700 dark:hover:border-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto h-10 w-10 text-slate-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3 3m3-3l3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" /></svg>
                <span className="mt-2 block text-sm font-semibold text-slate-600 dark:text-slate-300">Drag & drop files here</span>
                <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">or click to browse</span>
                <input id="file-upload-preview" type="file" className="sr-only" onChange={handleFileChange} />
              </label>
            ) : (
              <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 p-2.5 dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 shrink-0 text-slate-500"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                    <span className="truncate text-slate-700 dark:text-slate-300">{uploadedFile.name}</span>
                  </div>
                  <button onClick={removeFile} className="shrink-0 rounded-md p-1 text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </CodePreview>

        {/* AI-Enhanced Input */}
        <h3 id="ai-enhanced-input" className="mt-12 scroll-mt-20 text-2xl font-bold">
          AI-Enhanced Input
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;AI-Enhanced Input&quot; is a highly relevant component for 2025, reflecting the trend of AI integration in user interfaces. This input has an action button with a distinctive &quot;sparkle&quot; icon, indicating that the action will be processed by AI. Its rounded and modern design makes it stand out as an input for commands or content generation.
        </p>
        <CodePreview code={aiEnhancedInputCode}>
          <div className="relative w-full max-w-sm">
            <input type="text" placeholder="Ask AI to write anything..." className="w-full rounded-full border border-slate-300 bg-white py-2.5 pl-4 pr-12 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500" />
            <button className="group absolute inset-y-0 right-0 flex items-center rounded-r-full bg-indigo-600 px-3 text-white transition-all duration-300 hover:bg-indigo-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
            </button>
          </div>
        </CodePreview>

        {/* Gradient Border Input */}
        <h3 id="gradient-border-input" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Gradient Border
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;Gradient Border&quot; input is an excellent choice for a clean and professional design. When the input is focused, a subtle gradient border appears, providing elegant visual feedback without being distracting. This effect is created purely with CSS, making it lightweight and easy to implement.
        </p>
        <CodePreview code={gradientBorderInputCode}>
          <div className="flex w-full max-w-sm items-center justify-center rounded-lg bg-slate-950 p-8">
            <div className="group relative w-full">
              <div className="absolute -inset-0.5 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100"></div>
              <input type="text" placeholder="Enter your email" className="relative w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-0" />
            </div>
          </div>
        </CodePreview>

        {/* Particle Input */}
        <h3 id="particle-input" className="mt-12 scroll-mt-20 text-2xl font-bold">
          Particle Input
        </h3>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;Particle Input&quot; is an interactive component that displays colorful particles each time the user types. This effect provides fun and dynamic visual feedback, turning a standard input into a more engaging experience. It&apos;s perfect for input fields you want to highlight, like a main search bar or a registration form.
        </p>
        <CodePreview code={particleInputCode}>
          <div className="flex w-full max-w-sm items-center justify-center rounded-lg bg-slate-950 p-8">
            <div className="particle-input-container relative w-full">
              <input type="text" placeholder="Type to see magic..." onKeyUp={handleParticleInput} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg"></div>
            </div>
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}