'use client';
import RightSidebar from '@/components/docs/RightSideBar'; 
import React, { MouseEvent } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Button', slug: 'button', level: 1 },
  { title: 'Solid', slug: 'solid', level: 2 },
  { title: 'Outline', slug: 'outline', level: 2 },
  { title: 'Ghost', slug: 'ghost', level: 2 },
  { title: 'Link', slug: 'link', level: 2 },
  { title: 'With Icon', slug: 'with-icon', level: 2 },
  { title: 'Sizes', slug: 'sizes', level: 2 },
  { title: 'Disabled State', slug: 'disabled-state', level: 2 },
  { title: 'Gradient', slug: 'gradient', level: 2 },
  { title: 'Glassmorphism', slug: 'glassmorphism', level: 2 },
  { title: 'Animated', slug: 'animated', level: 2 },
  { title: 'Wave Animation', slug: 'wave-animation', level: 2 },
  { title: 'Fill Animation', slug: 'fill-animation', level: 2 },
  { title: 'Pushable', slug: 'pushable', level: 2 },
  { title: 'Expanding Icon', slug: 'expanding-icon', level: 2 },
  { title: 'Shine Effect', slug: 'shine', level: 2 },
  { title: 'Circular Text', slug: 'circular-text', level: 2 },
  { title: 'Spotlight', slug: 'spotlight', level: 2 },
  { title: 'Aurora Effect', slug: 'aurora-effect', level: 2 },
  { title: 'Magnetic', slug: 'magnetic', level: 2 },
  { title: 'Neon', slug: 'neon', level: 2 },
  { title: 'Bubbly', slug: 'bubbly', level: 2 },
  { title: 'Gooey', slug: 'gooey', level: 2 },
  { title: 'Parallax Tilt', slug: 'parallax-tilt', level: 2 },
  { title: 'Border Animation', slug: 'border-animation', level: 2 },
  { title: 'Shimmer', slug: 'shimmer', level: 2 },
  { title: 'Dock Effect', slug: 'dock-effect', level: 2 },
  { title: 'Cyberpunk', slug: 'cyberpunk', level: 2 },
  { title: 'AI Action Button', slug: 'ai-action', level: 2 },
  { title: 'Retro Shadow', slug: 'retro-shadow', level: 2 },
  { title: '3D Flip', slug: '3d-flip', level: 2 },
  { title: 'Draw-in Border', slug: 'draw-in-border', level: 2 },
  { title: 'Gradient Follow', slug: 'gradient-follow', level: 2 },
];
const aiActionButtonId = 'ai-action';
const retroShadowButtonId = 'retro-shadow';

const bubblyButtonCode = `<button class="bubbly-button relative rounded-lg bg-rose-500 px-6 py-3 font-semibold text-white transition-transform duration-200 ease-in-out active:scale-95">  Bubbly Me!</button><!-- Add this CSS to your global stylesheet:@keyframes bubbly-animation {  0% {    transform: scale(1);    opacity: 1;  }  100% {    transform: scale(2.5);    opacity: 0;  }}.bubbly-button::before {  content: '';  position: absolute;  top: 0;  left: 0;  width: 100%;  height: 100%;  background-color: white;  border-radius: inherit;  opacity: 0;  transform: scale(1);}.bubbly-button:active::before {  animation: bubbly-animation 0.4s ease-out;  opacity: 0.2;}-->`;

const dockButtonCode = `<div class="dock-container flex items-end justify-center gap-2 rounded-lg bg-slate-100 p-4 dark:bg-slate-900">
  <button class="dock-btn flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition-transform duration-100 ease-out"></button>
  <button class="dock-btn flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white transition-transform duration-100 ease-out"></button>
  <button class="dock-btn flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white transition-transform duration-100 ease-out"></button>
  <button class="dock-btn flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white transition-transform duration-100 ease-out"></button>
  <button class="dock-btn flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white transition-transform duration-100 ease-out"></button>
</div>

<!-- Script to handle the dock effect -->
<script>
  const dockContainer = document.querySelector('.dock-container');
  const dockBtns = document.querySelectorAll('.dock-btn');

  dockContainer.addEventListener('mousemove', (e) => {
    const containerRect = dockContainer.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;

    dockBtns.forEach(button => {
      const buttonRect = button.getBoundingClientRect();
      const buttonCenterX = buttonRect.left - containerRect.left + buttonRect.width / 2;
      
      const distance = Math.abs(mouseX - buttonCenterX);
      const maxScale = 1.75;
      const effectRadius = 100; // Effect radius from the cursor

      let scale = 1;
      if (distance < effectRadius) {
        // Using a cosine function for a smoother effect
        scale = 1 + (maxScale - 1) * Math.cos((distance / effectRadius) * (Math.PI / 2));
      }

      button.style.transform = \`scale(\${scale})\`;
    });
  });

  dockContainer.addEventListener('mouseleave', () => {
    dockBtns.forEach(button => {
      button.style.transform = 'scale(1)';
    });
  });
</script>`;

const shimmerButtonCode = `<button class="shimmer-btn group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span class="absolute inset-0 h-full w-full bg-[radial-gradient(circle_400px_at_var(--x,0)_var(--y,0),rgba(255,255,255,0.2),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
  <span class="relative">Shimmer</span>
</button>

<!-- Script to handle the shimmer effect -->
<script>
  document.querySelectorAll('.shimmer-btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.setProperty('--x', \`\${x}px\`);
      button.style.setProperty('--y', \`\${y}px\`);
    });
  });
</script>`;

const borderAnimationCode = `<button class="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Animation
  </span>
</button>`;

const neonButtonCode = `<button class="rounded-lg border-2 border-cyan-400 bg-transparent px-4 py-2 font-semibold text-cyan-400 shadow-[0_0_2px_#06b6d4,inset_0_0_2px_#06b6d4,0_0_5px_#06b6d4,0_0_15px_#06b6d4] transition-all duration-300 ease-in-out hover:bg-cyan-400/20 hover:shadow-[0_0_5px_#06b6d4,inset_0_0_5px_#06b6d4,0_0_20px_#06b6d4,0_0_40px_#06b6d4]">  Neon Blue</button><button class="rounded-lg border-2 border-pink-500 bg-transparent px-4 py-2 font-semibold text-pink-500 shadow-[0_0_2px_#ec4899,inset_0_0_2px_#ec4899,0_0_5px_#ec4899,0_0_15px_#ec4899] transition-all duration-300 ease-in-out hover:bg-pink-500/20 hover:shadow-[0_0_5px_#ec4899,inset_0_0_5px_#ec4899,0_0_20px_#ec4899,0_0_40px_#ec4899]">  Neon Pink</button><button class="rounded-lg border-2 border-lime-400 bg-transparent px-4 py-2 font-semibold text-lime-400 shadow-[0_0_2px_#a3e635,inset_0_0_2px_#a3e635,0_0_5px_#a3e635,0_0_15px_#a3e635] transition-all duration-300 ease-in-out hover:bg-lime-400/20 hover:shadow-[0_0_5px_#a3e635,inset_0_0_5px_#a3e635,0_0_20px_#a3e635,0_0_40px_#a3e635]">  Neon Green</button>`;

const animatedCode = `<button class="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/50">  Animated</button>`;

const gradientCode = `<button class="rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-indigo-500/50">
  Primary
</button>
<button class="rounded-lg bg-linear-to-r from-emerald-500 to-teal-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-emerald-500/50">
  Success
</button>
<button class="rounded-lg bg-linear-to-r from-rose-500 to-pink-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-rose-500/50">
  Danger
</button>`;

const solidCode = `<button class="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-700 dark:bg-sky-500 dark:hover:bg-sky-400">
  Default
</button>
<button class="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
  Primary
</button>
<button class="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white hover:bg-emerald-600">
  Success
</button>
<button class="rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white hover:bg-rose-700">
  Danger
</button>`;

const outlineCode = `<button class="rounded-lg border border-slate-900 px-4 py-2 font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-800">
  Default
</button>
<button class="rounded-lg border border-indigo-600 px-4 py-2 font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-600/10">
  Primary
</button>
<button class="rounded-lg border border-emerald-500 px-4 py-2 font-semibold text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10">
  Success
</button>
<button class="rounded-lg border border-rose-600 px-4 py-2 font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-600/10">
  Danger
</button>`;

const ghostCode = `<button class="rounded-lg px-4 py-2 font-semibold text-slate-900 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
  Default
</button>
<button class="rounded-lg px-4 py-2 font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-600/10">
  Primary
</button>
<button class="rounded-lg px-4 py-2 font-semibold text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10">
  Success
</button>
<button class="rounded-lg px-4 py-2 font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-600/10">
  Danger
</button>`;

const linkCode = `<button class="px-4 py-2 font-semibold text-slate-900 hover:underline dark:text-slate-200">
  Default
</button>
<button class="px-4 py-2 font-semibold text-indigo-600 hover:underline">
  Primary
</button>
<button class="px-4 py-2 font-semibold text-emerald-500 hover:underline">
  Success
</button>
<button class="px-4 py-2 font-semibold text-rose-600 hover:underline">
  Danger
</button>`;

const withIconCode = `<button class="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
    <path fill-rule="evenodd" d="M12.154 2.346a.75.75 0 01.862 0l9.375 6.375a.75.75 0 01-.216 1.352L12.375 16.5 2.58 10.073a.75.75 0 01-.216-1.352l9.375-6.375zM12 17.625l9.375-6.375v6.375a.75.75 0 01-.862.71L12 15.492v-4.242l-8.138 5.523a.75.75 0 01-.862-.71v-6.375L12 17.625z" clip-rule="evenodd" />
  </svg>
  Next.js
</button>`;

const buttonSizesCode = `<button class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700">
  Small
</button>
<button class="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
  Medium (Default)
</button>
<button class="rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-700">
  Large
</button>`;

const disabledStateCode = `<button class="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white opacity-50 cursor-not-allowed">
  Solid
</button>
<button class="rounded-lg border border-slate-900 px-4 py-2 font-semibold text-slate-900 opacity-50 cursor-not-allowed dark:border-slate-200 dark:text-slate-200">
  Outline
</button>
<button class="rounded-lg px-4 py-2 font-semibold text-slate-900 opacity-50 cursor-not-allowed dark:text-slate-200">
  Ghost
</button>
`;

const glassmorphismCode = `<button class="rounded-lg border border-white/30 bg-white/20 px-4 py-2 font-semibold text-white shadow-lg backdrop-blur-lg hover:bg-white/30">
  Glassmorphism
</button>
`;
const waveCode = `<button class="wave-btn relative overflow-hidden rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/50">
  Wave Effect
</button>

<!-- Script to handle the ripple effect -->
<script>
  document.querySelectorAll('.wave-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const rect = button.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = \`\${diameter}px\`;
      circle.style.left = \`\${e.clientX - rect.left - radius}px\`;
      circle.style.top = \`\${e.clientY - rect.top - radius}px\`;
      
      // Make sure you have this class in your CSS
      // .wave-ripple {
      //   position: absolute;
      //   border-radius: 50%;
      //   transform: scale(0);
      //   animation: wave-animation 600ms linear;
      //   background-color: rgba(255, 255, 255, 0.7);
      // }
      // @keyframes wave-animation { to { transform: scale(4); opacity: 0; } }
      circle.classList.add('wave-ripple');

      const ripple = button.getElementsByClassName('wave-ripple')[0];
      if (ripple) {
        ripple.remove();
      }
      button.appendChild(circle);
    });
  });
</script>`;

const fillAnimationCode = `<button class="group relative h-10 w-32 overflow-hidden rounded-lg border border-slate-900 text-lg shadow">
  <div class="absolute inset-0 w-0 bg-slate-900 transition-all duration-350 ease-out group-hover:w-full"></div>
  <span class="relative flex h-full items-center justify-center text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white">
    <span class="block transition-transform duration-500 ease-in-out group-hover:-translate-y-8">Hover me</span>
    <span class="absolute block translate-y-8 transform transition-transform duration-500 ease-in-out group-hover:translate-y-0">More</span>
  </span>
</button>`;

const pushableCode = `<button class="rounded-lg border-b-4 border-indigo-800 bg-indigo-600 px-4 py-2 font-bold text-white transition-all duration-150 ease-in-out hover:bg-indigo-700 active:translate-y-1 active:border-b-2">
  Pushable
</button>`;

const expandingIconCode = `<button class="group flex h-12 w-12 items-center overflow-hidden rounded-full bg-black text-white shadow-lg transition-all duration-300 ease-in-out hover:w-40">
  <div class="flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-300 group-hover:rotate-90">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6 w-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
    </svg>
  </div>
  <span class="whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-hover:delay-200">
    I am hover
  </span>
</button>`;

const shineButtonCode = `<button class="group relative overflow-hidden rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-600/50">
  <span class="absolute inset-0 h-full w-full -translate-x-full transform bg-white/20 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0 group-hover:skew-x-[-15deg]"></span>
  <span class="relative">Shine</span>
</button>
<button class="group relative overflow-hidden rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-emerald-500/50">
  <span class="absolute inset-0 h-full w-full -translate-x-full transform bg-white/20 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0 group-hover:skew-x-[-15deg]"></span>
  <span class="relative">Shine</span>
</button>
<button class="group relative overflow-hidden rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-rose-600/50">
  <span class="absolute inset-0 h-full w-full -translate-x-full transform bg-white/20 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0 group-hover:skew-x-[-15deg]"></span>
  <span class="relative">Shine</span>
</button>
<button class="group relative overflow-hidden rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-900/50">
  <span class="absolute inset-0 h-full w-full -translate-x-full transform bg-white/20 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0 group-hover:skew-x-[-15deg]"></span>
  <span class="relative">Shine</span>
</button>
`;

const circularTextCode = `<button class="group relative flex h-32 w-32 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 ease-in-out hover:scale-105">
  <div class="absolute h-full w-full animate-spin-slow running group-hover:paused">
    <svg viewBox="0 0 100 100" class="h-full w-full">
      <defs>
        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
      </defs>
      <text font-size="10" class="fill-current tracking-wider">
        <textPath xlinkHref="#circle" textLength="232">
          JHONE DOE • JHONE DOE • JHONE DOE •
        </textPath>
      </text>
    </svg>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 transition-transform duration-300 group-hover:rotate-90">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
</button>`;

const spotlightCode = `<button class="spotlight-btn group relative rounded-lg border border-slate-800 bg-slate-900 px-8 py-4 text-lg font-bold text-white transition-colors duration-300 hover:border-white/30 hover:bg-slate-800">
  <span class="relative z-10">Spotlight</span>
  <span class="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: radial-gradient(400px circle at var(--x) var(--y), rgba(255, 255, 255, 0.1), transparent 40%);"></span>
</button>

<!-- Script to handle the spotlight effect -->
<script>
  document.querySelectorAll('.spotlight-btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.setProperty('--x', \`\${x}px\`);
      button.style.setProperty('--y', \`\${y}px\`);
    });
  });
</script>`;

const auroraCode = `<button class="group relative overflow-hidden rounded-lg bg-slate-900 px-6 py-3 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
  <div class="absolute -inset-full top-0 block h-full w-1/2 -skew-y-12 transform bg-linear-to-r from-transparent to-white/30 opacity-40 transition-all duration-500 group-hover:left-full group-hover:opacity-100"></div>
  <span class="relative">
    Aurora
  </span>
</button>
`;

const magneticCode = `<button class="magnetic-btn rounded-lg bg-slate-900 px-8 py-4 font-bold text-white transition-transform duration-200 ease-out dark:bg-indigo-600">
  Magnetic
</button>

<!-- Script to handle the magnetic effect -->
<script>
  document.querySelectorAll('.magnetic-btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      button.style.transform = \`translate(\${x * 0.2}px, \${y * 0.2}px)\`;
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
</script>
`;

const gooeyButtonCode = `<!-- Add this SVG filter to your layout, it can be hidden -->
<svg class="absolute -z-10 h-0 w-0">
  <defs>
    <filter id="gooey-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg>

<!-- You can add 'transition-timing-function: cubic-bezier(0.76, 0, 0.24, 1)' to your tailwind.config.js or global CSS -->
<button class="group relative overflow-hidden rounded-full bg-indigo-600 px-10 py-4 font-bold text-white" style="filter: url('#gooey-filter');">
  <span class="relative z-10 block h-full w-full">
    <span class="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">Gooey Effect</span>
    <span class="absolute inset-0 block translate-y-full transform transition-transform duration-500 ease-in-out group-hover:translate-y-0">Hello!</span>
  </span>
  <span class="pointer-events-none absolute left-0 top-0 h-1/2 w-1/2 scale-0 rounded-full bg-indigo-600 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></span>
  <span class="pointer-events-none absolute right-0 top-0 h-1/2 w-1/2 scale-0 rounded-full bg-indigo-600 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></span>
  <span class="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/2 scale-0 rounded-full bg-indigo-600 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></span>
  <span class="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 scale-0 rounded-full bg-indigo-600 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></span>
  <span class="pointer-events-none absolute left-1/4 top-1/4 h-3/4 w-3/4 scale-0 rounded-full bg-indigo-600 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-125"></span>
</button>
`;

const parallaxButtonCode = `<button class="parallax-btn relative h-12 w-40 rounded-lg bg-slate-800 text-lg font-bold text-white transition-transform duration-100 ease-out" style="transform-style: preserve-3d; transform: perspective(800px);">
  <span class="absolute inset-0 rounded-lg bg-blue-600" style="transform: translateZ(20px);"></span>
  <span class="relative block" style="transform: translateZ(40px);">Parallax</span>
</button>

<!-- Script to handle the parallax effect -->
<script>
  document.querySelectorAll('.parallax-btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y / height - 0.5) * -25; // Max rotation 12.5deg
      const rotateY = (x / width - 0.5) * 25;   // Max rotation 12.5deg

      button.style.transform = \`perspective(800px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    });
  });
</script>`;

const cyberpunkButtonCode = `<button class="cyber-btn group relative bg-slate-950 px-6 py-3 font-mono font-bold uppercase text-cyan-400">
  <span class="relative z-10">Cyberpunk</span>
  <span class="absolute inset-0 border-2 border-cyan-400 transition-all duration-200 ease-in-out group-hover:border-fuchsia-500"></span>
  <span class="absolute inset-0 transform-gpu transition-all duration-200 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2">
    <span class="absolute inset-0 border-2 border-fuchsia-500 transition-all duration-200 ease-in-out group-hover:border-cyan-400"></span>
  </span>
</button>
`;

const aiActionButtonCode = `
<button
  // Logic to change className based on state (idle, loading, success, error)
  className="relative flex min-w-[150px] items-center justify-center overflow-hidden rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
  // disabled={status === 'loading'}
>
  {/* Idle State */}
  <span className="flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.5 21.75l-.398-1.188a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.188-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.188a2.25 2.25 0 001.423 1.423l1.188.398-1.188.398a2.25 2.25 0 00-1.423 1.423z" /></svg>
    Generate
  </span>

  {/* Loading State */}
  {/* <span className="absolute inset-0 flex items-center justify-center bg-indigo-600">
    <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
    <span className="ml-2">Generating...</span>
  </span> */}

</button>
`;

const retroShadowButtonCode = `<button class="rounded-lg border-2 border-slate-900 bg-white px-6 py-3 font-bold text-slate-900 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0f172a] dark:bg-slate-900 dark:text-white dark:hover:shadow-[6px_6px_0px_#cbd5e1]">
  Retro Shadow
</button>
`;

const flipButtonCode = `<button class="group h-12 w-32 rounded-lg bg-slate-900 text-white [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
  <div class="absolute inset-0 flex items-center justify-center rounded-lg bg-blue-600">
    Hover Me
  </div>
  <div class="absolute inset-0 flex items-center justify-center rounded-lg bg-rose-600 [transform:rotateY(180deg)] [backface-visibility:hidden]">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6 w-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  </div>
</button>
`;

const drawInBorderButtonCode = `<!-- Add this CSS to your global stylesheet:
.draw-border-btn rect {
  stroke-dasharray: 420; /* Approx. perimeter for h-12 w-40 */
  stroke-dashoffset: 420;
  transition: stroke-dashoffset 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}
.draw-border-btn:hover rect {
  stroke-dashoffset: 0;
}
-->
<button class="draw-border-btn group relative h-12 w-40 rounded-lg bg-slate-900 text-white">
  <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><rect class="h-full w-full stroke-2 stroke-current" fill="none" rx="8" ry="8" /></svg>
  <span class="relative">Draw Border</span>
</button>`;

const gradientFollowButtonCode = `<button class="gradient-follow-btn relative rounded-lg border border-slate-800 bg-slate-900 px-8 py-4 text-lg font-bold text-white">
  <span class="relative z-10">Follow Me</span>
  <span class="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: radial-gradient(300px circle at var(--x) var(--y), #818cf8, transparent 40%);"></span>
</button>

<!-- Script to handle the gradient follow effect -->
<script>
  document.querySelectorAll('.gradient-follow-btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.setProperty('--x', \`\${x}px\`);
      button.style.setProperty('--y', \`\${y}px\`);
    });
  });
</script>`;


export default function ButtonsPage() {
  const handleWaveClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('wave-ripple');

    const ripple = button.getElementsByClassName('wave-ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  const handleSpotlightMove = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
  };

  const handleMagneticMove = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Move the button towards the cursor
    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMagneticLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    // Reset button position
    button.style.transform = 'translate(0, 0)';
  };

  const handleParallaxMove = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / height - 0.5) * -25; // Max rotation 12.5deg
    const rotateY = (x / width - 0.5) * 25;   // Max rotation 12.5deg

    button.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleParallaxLeave = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    button.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };

  const handleShimmerMove = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
  };

  const handleGradientFollowMove = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
  };

  const dockContainerRef = React.useRef<HTMLDivElement>(null);

  const handleDockMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const container = dockContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;

    const buttons = Array.from(container.children) as HTMLButtonElement[];

    buttons.forEach(button => {
      const buttonRect = button.getBoundingClientRect();
      const buttonCenterX = buttonRect.left - containerRect.left + buttonRect.width / 2;
      
      const distance = Math.abs(mouseX - buttonCenterX);
      const maxScale = 1.75;
      const effectRadius = 100;

      let scale = 1;
      if (distance < effectRadius) {
        scale = 1 + (maxScale - 1) * Math.cos((distance / effectRadius) * (Math.PI / 2));
      }

      button.style.transform = `scale(${scale})`;
    });
  };

  const handleDockMouseLeave = () => {
    const container = dockContainerRef.current;
    if (!container) return;
    const buttons = Array.from(container.children) as HTMLButtonElement[];
    buttons.forEach(button => {
      button.style.transform = 'scale(1)';
    });
  };

  type AiButtonStatus = 'idle' | 'loading' | 'success' | 'error';
  const [aiStatus, setAiStatus] = React.useState<AiButtonStatus>('idle');

  const handleAiAction = () => {
    if (aiStatus === 'loading') return;

    setAiStatus('loading');

    // Simulate an AI API call
    setTimeout(() => {
      // Simulate success or error randomly
      const isSuccess = Math.random() > 0.3;
      if (isSuccess) {
        setAiStatus('success');
        // Reset to idle after a short delay
        setTimeout(() => setAiStatus('idle'), 2000);
      } else {
        setAiStatus('error');
        // Reset to idle after a short delay
        setTimeout(() => setAiStatus('idle'), 2000);
      }
    }, 2500); // 2.5 second loading time
  };

  const getAiButtonContent = () => {
    switch (aiStatus) {
      case 'loading':
        return (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <span className="ml-2">Generating...</span>
          </span>
        );
      case 'success':
        return (
          <span className="absolute inset-0 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            Success
          </span>
        );
      case 'error':
        return (
          <span className="absolute inset-0 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            Error
          </span>
        );
      case 'idle':
      default:
        return (
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.5 21.75l-.398-1.188a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.188-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.188a2.25 2.25 0 001.423 1.423l1.188.398-1.188.398a2.25 2.25 0 00-1.423 1.423z" /></svg>
            Generate
          </span>
        );
    }
  };

  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center space-x-2 text-sm text-slate-500"
        >
          <Link
            href="/docs"
            className="block transition hover:text-slate-700"
          >
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Buttons</span>
        </nav>

        <h1 id="button" className="scroll-mt-20 text-4xl font-bold">
          Button
        </h1>

        <p className="mt-4 text-slate-600">
          Buttons are a fundamental component of any user interface, enabling
          users to take actions and make choices. This documentation showcases
          the various button styles and variants available in the Jhonz
          template. Each button is designed with clarity, accessibility, and
          ease of customization in mind, ensuring a seamless integration into
          your projects.
        </p>

        {/* Solid Buttons */}
        <h2 id="solid" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Solid
        </h2>
        <p className="mt-4 text-slate-600">
          Solid buttons are the most prominent style, characterized by a solid
          background color. They are designed to stand out and draw the
          user&apos;s attention, making them the ideal choice for primary
          actions, such as &quot;Submit&quot; or &quot;Confirm&quot;.
        </p>
        <CodePreview code={solidCode}>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-700 dark:bg-sky-500 dark:hover:bg-sky-400">
              Default
            </button>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
              Primary
            </button>
            <button className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white hover:bg-emerald-600">
              Success
            </button>
            <button className="rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white hover:bg-rose-700">
              Danger
            </button>
          </div>
        </CodePreview>

        {/* Outline Buttons */}
        <h2 id="outline" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Outline
        </h2>
        <p className="mt-4 text-slate-600">
          Outline buttons offer a medium emphasis. They have a transparent
          background with a colored border, making them less prominent than
          solid buttons. This style is perfect for secondary actions that
          should be available but not overpower the primary call-to-action,
          like a &quot;Learn More&quot; or &quot;Cancel&quot; button.
        </p>
        <CodePreview code={outlineCode}>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-lg border border-slate-900 px-4 py-2 font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-800">
              Default
            </button>
            <button className="rounded-lg border border-indigo-600 px-4 py-2 font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-600/10">
              Primary
            </button>
            <button className="rounded-lg border border-emerald-500 px-4 py-2 font-semibold text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10">
              Success
            </button>
            <button className="rounded-lg border border-rose-600 px-4 py-2 font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-600/10">
              Danger
            </button>
          </div>
        </CodePreview>

        {/* Ghost Buttons */}
        <h2 id="ghost" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Ghost
        </h2>
        <p className="mt-4 text-slate-600">
          Ghost buttons have the lowest visual prominence, appearing as
          text-only until hovered. They are designed for tertiary or less
          important actions, ensuring they don&apos;t distract from more
          critical tasks. Use them for actions like &apos;Cancel&apos; in a
          dialog or other minor operations.
        </p>
        <CodePreview code={ghostCode}>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-lg px-4 py-2 font-semibold text-slate-900 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
              Default
            </button>
            <button className="rounded-lg px-4 py-2 font-semibold text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-600/10">
              Primary
            </button>
            <button className="rounded-lg px-4 py-2 font-semibold text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10">
              Success
            </button>
            <button className="rounded-lg px-4 py-2 font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-600/10">
              Danger
            </button>
          </div>
        </CodePreview>

        {/* Link Buttons */}
        <h2 id="link" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Link
        </h2>
        <p className="mt-4 text-slate-600">
          Link buttons are designed to look like hyperlinks and are suitable for
          navigation or actions that are less critical. They have no background
          or border, relying on text color and an underline on hover to
          indicate interactivity.
        </p>
        <CodePreview code={linkCode}>
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-4 py-2 font-semibold text-slate-900 hover:underline dark:text-slate-200">
              Default
            </button>
            <button className="px-4 py-2 font-semibold text-indigo-600 hover:underline">
              Primary
            </button>
            <button className="px-4 py-2 font-semibold text-emerald-500 hover:underline">
              Success
            </button>
            <button className="px-4 py-2 font-semibold text-rose-600 hover:underline">
              Danger
            </button>
          </div>
        </CodePreview>

        {/* With Icon */}
        <h2 id="with-icon" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Icon
        </h2>
        <p className="mt-4 text-slate-600">
          Adding an icon to a button can provide extra visual context, clarify
          its function, and enhance the overall user experience. Icons can be
          placed before or after the text to create a visually appealing and
          informative button.
        </p>
        <CodePreview code={withIconCode}>
          <div className="flex flex-wrap items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M12.154 2.346a.75.75 0 01.862 0l9.375 6.375a.75.75 0 01-.216 1.352L12.375 16.5 2.58 10.073a.75.75 0 01-.216-1.352l9.375-6.375zM12 17.625l9.375-6.375v6.375a.75.75 0 01-.862.71L12 15.492v-4.242l-8.138 5.523a.75.75 0 01-.862-.71v-6.375L12 17.625z" clipRule="evenodd" />
              </svg>
              Next.js
            </button>
          </div>
        </CodePreview>

        {/* Sizes */}
        <h2 id="sizes" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Sizes
        </h2>
        <p className="mt-4 text-slate-600">
          Buttons can be rendered in different sizes to suit various layouts and contexts. The template provides small, medium (default), and large size options. You can easily adjust padding and font size to create your own custom sizes.
        </p>
        <CodePreview code={buttonSizesCode}>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700">
              Small
            </button>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
              Medium (Default)
            </button>
            <button className="rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-700">
              Large
            </button>
          </div>
        </CodePreview>

        {/* Disabled State */}
        <h2 id="disabled-state" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Disabled State
        </h2>
        <p className="mt-4 text-slate-600">
          A button can be disabled to prevent user interaction when an action is not available. Use opacity and `cursor-not-allowed` to clearly indicate that the button is inactive. It&apos;s important to also add the `disabled` attribute to the button element for accessibility.
        </p>
        <CodePreview code={disabledStateCode}>
          <div className="flex flex-wrap items-center gap-4">
            <button disabled className="cursor-not-allowed rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white opacity-50">
              Solid
            </button>
            <button disabled className="cursor-not-allowed rounded-lg border border-slate-900 px-4 py-2 font-semibold text-slate-900 opacity-50 dark:border-slate-200 dark:text-slate-200">
              Outline
            </button>
            <button disabled className="cursor-not-allowed rounded-lg px-4 py-2 font-semibold text-slate-900 opacity-50 dark:text-slate-200">
              Ghost
            </button>
          </div>
        </CodePreview>

        {/* Gradient Buttons */}
        <h2 id="gradient" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Gradient
        </h2>
        <p className="mt-4 text-slate-600">
          Gradient buttons use a smooth color transition to create a vibrant
          and eye-catching effect. They are excellent for primary
          call-to-action buttons that need to stand out and draw the user&apos;s
          attention, adding a modern and dynamic feel to your interface.
        </p>
        <CodePreview code={gradientCode}>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-indigo-500/50">
              Primary
            </button>
            <button className="rounded-lg bg-linear-to-r from-emerald-500 to-teal-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-emerald-500/50">
              Success
            </button>
            <button className="rounded-lg bg-linear-to-r from-rose-500 to-pink-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-rose-500/50">
              Danger
            </button>
          </div>
        </CodePreview>

        {/* Glassmorphism Buttons */}
        <h2
          id="glassmorphism"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Glassmorphism
        </h2>
        <p className="mt-4 text-slate-600">
          Glassmorphism buttons use a background blur and transparency to create
          a frosted-glass look. This modern style is perfect for interfaces
          that want to emphasize layers and depth, giving a sense of elevation
          over the background.
        </p>
        <CodePreview code={glassmorphismCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-black p-8">
            <button className="rounded-lg border border-white/30 bg-white/20 px-4 py-2 font-semibold text-white shadow-lg backdrop-blur-lg hover:bg-white/30">
              Glassmorphism
            </button>
          </div>
        </CodePreview>

        {/* Animated Buttons */}
        <h2
          id="animated"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Animated
        </h2>
        <p className="mt-4 text-slate-600">
          Animated buttons provide dynamic visual feedback when a user
          interacts with them. Transition effects like movement, scaling, or
          enhanced shadows can make the interface feel more alive and engaging,
          guiding the user and confirming their actions.
        </p>
        <CodePreview code={animatedCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg p-8">
            <button className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/50">              Animated            </button>
          </div>
        </CodePreview>

        {/* Wave Animation Buttons */}
        <h2
          id="wave-animation"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Wave Animation
        </h2>
        <p className="mt-4 text-slate-600">
          Buttons with a wave or ripple effect provide instant feedback at the
          user&apos;s click point. This effect mimics a water ripple, creating a
          satisfying and visually interactive experience. It requires a small
          amount of JavaScript to calculate the click position and generate the
          expanding circle animation.
        </p>
        <CodePreview code={waveCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg p-8">
            <button
              className="wave-btn relative overflow-hidden rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/50"
              onClick={handleWaveClick}
            >
              Wave Effect
            </button>
          </div>
        </CodePreview>

        {/* Fill Animation Buttons */}
        <h2
          id="fill-animation"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Fill Animation
        </h2>
        <p className="mt-4 text-slate-600">
          This button features an engaging hover effect where a background
          color fills up from the side, accompanied by a text change.
          Initially showing &quot;Hover me&quot;, the text slides upwards to
          reveal &quot;More&quot; as the fill animation completes, creating a
          delightful and interactive user experience.
        </p>
        <CodePreview code={fillAnimationCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg p-8">
            <button className="group relative h-10 w-32 overflow-hidden rounded-lg border border-slate-900 text-lg shadow">
              <div className="absolute inset-0 w-0 bg-slate-900 transition-all duration-350 ease-out group-hover:w-full"></div>
              <span className="relative flex h-full items-center justify-center text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white">
                <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-8">Hover me</span>
                <span className="absolute block translate-y-8 transform transition-transform duration-500 ease-in-out group-hover:translate-y-0">More</span>
              </span>
            </button>
          </div>
        </CodePreview>

        {/* Pushable Buttons */}
        <h2
          id="pushable"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Pushable
        </h2>
        <p className="mt-4 text-slate-600">
          Pushable buttons create a 3D effect that simulates a physical button
          press. Using a combination of borders and transforms, the button
          appears to move down when clicked, providing satisfying tactile
          feedback to the user.
        </p>
        <CodePreview code={pushableCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg p-8">
            <button className="rounded-lg border-b-4 border-indigo-800 bg-indigo-600 px-4 py-2 font-bold text-white transition-all duration-150 ease-in-out hover:bg-indigo-700 active:translate-y-1 active:border-b-2">
              Pushable
            </button>
          </div>
        </CodePreview>

        {/* Expanding Icon Buttons */}
        <h2
          id="expanding-icon"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Expanding Icon
        </h2>
        <p className="mt-4 text-slate-600">
          This button starts as a compact, circular icon. When hovered, it
          smoothly expands into a pill shape, revealing text from left to
          right. It’s a great way to save space while providing a clear
          call-to-action with a delightful animation.
        </p>
        <CodePreview code={expandingIconCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg p-8">
            <button className="group flex h-12 w-12 items-center overflow-hidden rounded-full bg-black text-white shadow-lg transition-all duration-300 ease-in-out hover:w-40">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-300 group-hover:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
              </div>
              <span className="whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-hover:delay-200">
                I am hover
              </span>
            </button>
          </div>
        </CodePreview>

        {/* Shine Buttons */}
        <h2
          id="shine"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Shine Effect
        </h2>
        <p className="mt-4 text-slate-600">
          The shine effect button adds a sleek, reflective animation on hover. A semi-transparent overlay sweeps across the button, creating a glossy, premium feel. This effect is achieved purely with CSS, using a pseudo-element or a span that transitions across the button&apos;s surface.
        </p>
        <CodePreview code={shineButtonCode}>
          <div className="flex flex-wrap items-center gap-4">
            <button className="group relative overflow-hidden rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-600/50">
              <span className="absolute inset-0 h-full w-full -translate-x-full transform bg-white/20 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0 group-hover:skew-x-[-15deg]"></span>
              <span className="relative">Shine</span>
            </button>
            <button className="group relative overflow-hidden rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-emerald-500/50">
              <span className="absolute inset-0 h-full w-full -translate-x-full transform bg-white/20 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0 group-hover:skew-x-[-15deg]"></span>
              <span className="relative">Shine</span>
            </button>
            <button className="group relative overflow-hidden rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-rose-600/50">
              <span className="absolute inset-0 h-full w-full -translate-x-full transform bg-white/20 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0 group-hover:skew-x-[-15deg]"></span>
              <span className="relative">Shine</span>
            </button>
            <button className="group relative overflow-hidden rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-slate-900/50">
              <span className="absolute inset-0 h-full w-full -translate-x-full transform bg-white/20 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0 group-hover:skew-x-[-15deg]"></span>
              <span className="relative">Shine</span>
            </button>
          </div>
        </CodePreview>

        {/* Circular Text Button */}
        <h2
          id="circular-text"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Circular Text
        </h2>
        <p className="mt-4 text-slate-600">
          This unique button features text that wraps around a central icon, creating a dynamic and engaging user interface element. The circular text gently rotates by default and pauses on hover, drawing attention to the call-to-action. The central arrow icon also rotates, providing clear visual feedback. This design is perfect for scroll-to-action prompts or standout feature buttons.
        </p>
        <CodePreview code={circularTextCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg p-8">
            <button className="group relative flex h-32 w-32 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="absolute h-full w-full animate-spin-slow running group-hover:paused">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fontSize="10" className="fill-current tracking-wider">
                    <textPath xlinkHref="#circle" textLength="232">
                      JHONE DOE • JHONE DOE • JHONE DOE •
                    </textPath>
                  </text>
                </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 transition-transform duration-300 group-hover:rotate-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </button>
          </div>
        </CodePreview>

        {/* Spotlight Button */}
        <h2
          id="spotlight"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Spotlight
        </h2>
        <p className="mt-4 text-slate-600">
          The spotlight button creates a magnetic and interactive effect where a soft light follows the user&apos;s cursor as it moves over the button. This is achieved using a radial gradient background on a pseudo-element, with its position updated via JavaScript. It adds a modern, premium feel and is perfect for primary call-to-action buttons.
        </p>
        <CodePreview code={spotlightCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-950 p-8">
            <button
              className="spotlight-btn group relative rounded-lg border border-slate-800 bg-slate-900 px-8 py-4 text-lg font-bold text-white transition-colors duration-300 hover:border-white/30 hover:bg-slate-800"
              onMouseMove={handleSpotlightMove}
            >
              <span className="relative z-10">Spotlight</span>
              <span
                className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(255, 255, 255, 0.1), transparent 40%)' }}
              />
            </button>
          </div>
        </CodePreview>

        {/* Aurora Button */}
        <h2
          id="aurora-effect"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Aurora Effect
        </h2>
        <p className="mt-4 text-slate-600">
          The Aurora button features a subtle, shimmering background effect that mimics the aurora borealis. A skewed gradient overlay moves across the button on hover, creating a futuristic and visually captivating experience. This pure CSS effect adds a touch of magic to your primary call-to-action buttons.
        </p>
        <CodePreview code={auroraCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-950 p-8">
            <button className="group relative overflow-hidden rounded-lg bg-slate-900 px-6 py-3 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-y-12 transform bg-linear-to-r from-transparent to-white/30 opacity-40 transition-all duration-500 group-hover:left-full group-hover:opacity-100"></div>
              <span className="relative">
                Aurora
              </span>
            </button>
          </div>
        </CodePreview>

        {/* Magnetic Button */}
        <h2
          id="magnetic"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Magnetic
        </h2>
        <p className="mt-4 text-slate-600">
          The magnetic button provides a subtle yet engaging micro-interaction. As the user&apos;s cursor approaches, the button gently moves towards it, creating a magnetic pull effect. This interaction is handled with JavaScript to track the cursor&apos;s position and apply a CSS transform, making the UI feel more responsive and alive.
        </p>
        <CodePreview code={magneticCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-100 p-8 dark:bg-slate-950">
            <button
              className="rounded-lg bg-slate-900 px-8 py-4 font-bold text-white transition-transform duration-200 ease-out dark:bg-indigo-600"
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
            >
              Magnetic
            </button>
          </div>
        </CodePreview>

        {/* Neon Button */}
        <h2
          id="neon"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Neon
        </h2>
        <p className="mt-4 text-slate-600">
          Neon buttons use `box-shadow` to create a striking glow effect, ideal for dark or futuristic-themed interfaces. This effect provides an energetic and modern feel, making the buttons stand out with a distinctive light.
        </p>
        <CodePreview code={neonButtonCode}>
          <div className="flex w-full flex-wrap items-center justify-center gap-4 rounded-lg bg-slate-950 p-8">
            <button className="rounded-lg border-2 border-cyan-400 bg-transparent px-4 py-2 font-semibold text-cyan-400 shadow-[0_0_2px_#06b6d4,inset_0_0_2px_#06b6d4,0_0_5px_#06b6d4,0_0_15px_#06b6d4] transition-all duration-300 ease-in-out hover:bg-cyan-400/20 hover:shadow-[0_0_5px_#06b6d4,inset_0_0_5px_#06b6d4,0_0_20px_#06b6d4,0_0_40px_#06b6d4]">
              Neon Blue
            </button>
            <button className="rounded-lg border-2 border-pink-500 bg-transparent px-4 py-2 font-semibold text-pink-500 shadow-[0_0_2px_#ec4899,inset_0_0_2px_#ec4899,0_0_5px_#ec4899,0_0_15px_#ec4899] transition-all duration-300 ease-in-out hover:bg-pink-500/20 hover:shadow-[0_0_5px_#ec4899,inset_0_0_5px_#ec4899,0_0_20px_#ec4899,0_0_40px_#ec4899]">
              Neon Pink
            </button>
            <button className="rounded-lg border-2 border-lime-400 bg-transparent px-4 py-2 font-semibold text-lime-400 shadow-[0_0_2px_#a3e635,inset_0_0_2px_#a3e635,0_0_5px_#a3e635,0_0_15px_#a3e635] transition-all duration-300 ease-in-out hover:bg-lime-400/20 hover:shadow-[0_0_5px_#a3e635,inset_0_0_5px_#a3e635,0_0_20px_#a3e635,0_0_40px_#a3e635]">
              Neon Green
            </button>
          </div>
        </CodePreview>

        {/* Bubbly Button */}
        <h2 id="bubbly" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Bubbly
        </h2>
        <p className="mt-4 text-slate-600">
          The bubbly button creates a fun and satisfying click effect. When
          pressed, a ripple-like &quot;bubble&quot; expands from the center and
          fades out, providing delightful visual feedback. This effect is achieved
          with a simple CSS animation on the button&apos;s pseudo-element,
          making it lightweight and easy to implement.
        </p>
        <CodePreview code={bubblyButtonCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-100 p-8 dark:bg-slate-950">
            <button className="bubbly-button relative rounded-lg bg-rose-500 px-6 py-3 font-semibold text-white transition-transform duration-200 ease-in-out active:scale-95">
              Bubbly Me!
            </button>
          </div>
        </CodePreview>

        {/* Gooey Button */}
        <h2 id="gooey" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Gooey
        </h2>
        <p className="mt-4 text-slate-600">
          The &quot;gooey&quot; button creates a highly dynamic and modern interaction. On hover, several bubble elements expand and merge with the main button, giving the illusion of a liquid. This effect is achieved with an SVG filter (`feGaussianBlur` and `feColorMatrix`) applied to the button and its animated elements.
        </p>
        <CodePreview code={gooeyButtonCode}>
          {/* SVG filter for the gooey effect */}
          <svg className="absolute -z-10 h-0 w-0">
            <defs>
              <filter id="gooey-filter-demo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-100 p-8 dark:bg-slate-950">
            <button className="group gooey-button relative overflow-hidden rounded-full bg-indigo-600 px-10 py-4 font-bold text-white" style={{ filter: "url('#gooey-filter-demo')" }}>
              <span className="relative z-10 block h-full w-full">
                <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">Gooey Effect</span>
                <span className="absolute inset-0 block translate-y-full transform transition-transform duration-500 ease-in-out group-hover:translate-y-0">Hello!</span>
              </span>
              <span className="pointer-events-none absolute left-0 top-0 h-1/2 w-1/2 scale-0 rounded-full bg-indigo-600 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></span>
              <span className="pointer-events-none absolute right-0 top-0 h-1/2 w-1/2 scale-0 rounded-full bg-indigo-600 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></span>
              <span className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/2 scale-0 rounded-full bg-indigo-600 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></span>
              <span className="pointer-events-none absolute bottom-0 right-0 h-1/2 w-1/2 scale-0 rounded-full bg-indigo-600 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></span>
              <span className="pointer-events-none absolute left-1/4 top-1/4 h-3/4 w-3/4 scale-0 rounded-full bg-indigo-600 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-125"></span>
            </button>
          </div>
        </CodePreview>

        {/* Parallax Tilt Button */}
        <h2
          id="parallax-tilt"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Parallax Tilt
        </h2>
        <p className="mt-4 text-slate-600">
          The &quot;Parallax Tilt&quot; button provides a 3D depth illusion as the cursor moves over it. The button tilts to follow the cursor&apos;s position, creating a modern and engaging interactive experience. This effect uses JavaScript to calculate the rotation based on the mouse position and applies it via the CSS `transform` property.
        </p>
        <CodePreview code={parallaxButtonCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-950 p-12">
            <button
              className="relative h-12 w-40 rounded-lg bg-slate-800 text-lg font-bold text-white transition-transform duration-100 ease-out"
              style={{ transformStyle: 'preserve-3d', transform: 'perspective(800px)' }}
              onMouseMove={handleParallaxMove}
              onMouseLeave={handleParallaxLeave}
            >
              <span className="absolute inset-0 rounded-lg bg-blue-600" style={{ transform: 'translateZ(20px)' }}></span>
              <span className="relative block" style={{ transform: 'translateZ(40px)' }}>Parallax</span>
            </button>
          </div>
        </CodePreview>

        {/* Border Animation Button */}
        <h2
          id="border-animation"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Border Animation
        </h2>
        <p className="mt-4 text-slate-600">
          The &quot;Border Animation&quot; button features a rotating gradient around its edges, creating a dynamic and eye-catching visual effect. This effect uses a pseudo-element with a spinning animation on a conic gradient to give the illusion of a moving border.
        </p>
        <CodePreview code={borderAnimationCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-950 p-12">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Border Animation
              </span>
            </button>
          </div>
        </CodePreview>

        {/* Shimmer Button */}
        <h2 id="shimmer" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Shimmer
        </h2>
        <p className="mt-4 text-slate-600">
          The &quot;Shimmer&quot; button creates an illusion of a light sheen that moves with the cursor on hover. This effect uses a radial gradient whose position is updated via JavaScript, giving the button a premium and interactive feel.
        </p>
        <CodePreview code={shimmerButtonCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-950 p-12">
            <button
              className="shimmer-btn group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onMouseMove={handleShimmerMove}
            >
              <span
                className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_400px_at_var(--x,0)_var(--y,0),rgba(255,255,255,0.2),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></span>
              <span className="relative">Shimmer</span>
            </button>
          </div>
        </CodePreview>

        {/* Dock Effect Button */}
        <h2
          id="dock-effect"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Dock Effect
        </h2>
        <p className="mt-4 text-slate-600">
          The &quot;Dock&quot; effect mimics the magnification interaction found in modern application docks. As the cursor moves over the container, the buttons within it dynamically scale up based on their proximity to the cursor, creating a fluid and engaging effect.
        </p>
        <CodePreview code={dockButtonCode}>
          <div
            ref={dockContainerRef}
            onMouseMove={handleDockMouseMove}
            onMouseLeave={handleDockMouseLeave}
            className="flex h-24 w-full items-end justify-center gap-2 rounded-lg bg-slate-100 p-4 dark:bg-slate-900"
          >
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition-transform duration-100 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white transition-transform duration-100 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white transition-transform duration-100 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white transition-transform duration-100 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white transition-transform duration-100 ease-out">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
          </div>
        </CodePreview>

        {/* Cyberpunk Button */}
        <h2
          id="cyberpunk"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Cyberpunk
        </h2>
        <p className="mt-4 text-slate-600">
          The &quot;Cyberpunk&quot; button brings a futuristic and digital feel. By using multiple border layers that shift on hover, this button creates a distinctive &quot;glitch&quot; illusion. This effect is made entirely with CSS, perfect for tech or sci-fi themed interfaces.
        </p>
        <CodePreview code={cyberpunkButtonCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-950 p-12">
            <button className="cyber-btn group relative bg-slate-950 px-6 py-3 font-mono font-bold uppercase text-cyan-400">
              <span className="relative z-10">Cyberpunk</span>
              <span className="absolute inset-0 border-2 border-cyan-400 transition-all duration-200 ease-in-out group-hover:border-fuchsia-500"></span>
              <span className="absolute inset-0 transform-gpu transition-all duration-200 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2">
                <span className="absolute inset-0 border-2 border-fuchsia-500 transition-all duration-200 ease-in-out group-hover:border-cyan-400"></span>
              </span>
            </button>
          </div>
        </CodePreview>

        {/* AI Action Button */}
        <h2
          id={aiActionButtonId}
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          AI Action Button
        </h2>
        <p className="mt-4 text-slate-600">
          In modern applications, buttons often trigger asynchronous AI tasks. This button demonstrates how to provide clear, multi-state feedback to the user: an initial state, a loading state while the AI is working, and success or error states upon completion. This pattern is crucial for a good user experience when dealing with potentially long-running operations.
        </p>
        <CodePreview code={aiActionButtonCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
            <button
              onClick={handleAiAction}
              disabled={aiStatus === 'loading'}
              className={`relative flex min-w-[150px] items-center justify-center overflow-hidden rounded-lg px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 ${
                aiStatus === 'success' ? 'bg-emerald-500' :
                aiStatus === 'error' ? 'bg-rose-600' :
                'bg-indigo-600'
              }`}
            >
              {getAiButtonContent()}
            </button>
          </div>
        </CodePreview>

        {/* Retro Shadow Button */}
        <h2
          id={retroShadowButtonId}
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Retro Shadow
        </h2>
        <p className="mt-4 text-slate-600">
          The &quot;Retro Shadow&quot; button combines a classic look with a modern twist. On hover, the button shifts to reveal a solid shadow, creating a satisfying and tactile effect. This style is perfect for adding a touch of personality and clear interactive feedback to your calls-to-action.
        </p>
        <CodePreview code={retroShadowButtonCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
            <button className="rounded-lg border-2 border-slate-900 bg-white px-6 py-3 font-bold text-slate-900 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0f172a] dark:bg-slate-900 dark:text-white dark:hover:shadow-[6px_6px_0px_#cbd5e1]">
              Retro Shadow
            </button>
          </div>
        </CodePreview>

        {/* 3D Flip Button */}
        <h2
          id="3d-flip"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          3D Flip
        </h2>
        <p className="mt-4 text-slate-600">
          The &quot;3D Flip&quot; button offers a delightful interactive experience by flipping on its Y-axis when hovered. This reveals a different content on its back side, perfect for showing a confirmation icon or a secondary action. The effect is achieved using CSS 3D transforms.
        </p>
        <CodePreview code={flipButtonCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
            <button className="group h-12 w-32 rounded-lg bg-slate-900 text-white [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-blue-600">
                Hover Me
              </div>
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-rose-600 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
              </div>
            </button>
          </div>
        </CodePreview>

        {/* Draw-in Border Button */}
        <h2
          id="draw-in-border"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Draw-in Border
        </h2>
        <p className="mt-4 text-slate-600">
          The &quot;Draw-in Border&quot; button creates an elegant hover effect where the border appears to be drawn around the button. This is achieved using an SVG `rect` element and animating its `stroke-dashoffset` property with CSS, providing a clean and sophisticated animation.
        </p>
        <CodePreview code={drawInBorderButtonCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
            <button className="draw-border-btn group relative h-12 w-40 rounded-lg bg-slate-900 text-white">
              <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <rect className="h-full w-full stroke-2 stroke-current" fill="none" rx="8" ry="8" />
              </svg>
              <span className="relative">Draw Border</span>
            </button>
          </div>
        </CodePreview>

        {/* Gradient Follow Button */}
        <h2
          id="gradient-follow"
          className="mt-12 scroll-mt-20 text-3xl font-bold"
        >
          Gradient Follow
        </h2>
        <p className="mt-4 text-slate-600">
          Tombol &quot;Gradient Follow&quot; menciptakan efek cahaya interaktif yang mengikuti kursor pengguna saat melayang di atas tombol. Efek ini menggunakan gradien radial yang posisinya diperbarui melalui JavaScript, memberikan nuansa premium dan dinamis pada antarmuka Anda.
        </p>
        <CodePreview code={gradientFollowButtonCode}>
          <div className="flex w-full items-center justify-center gap-4 rounded-lg bg-slate-950 p-12">
            <button
              className="gradient-follow-btn group relative rounded-lg border border-slate-800 bg-slate-900 px-8 py-4 text-lg font-bold text-white"
              onMouseMove={handleGradientFollowMove}
            >
              <span className="relative z-10">Follow Me</span>
              <span className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(300px circle at var(--x) var(--y), #818cf8, transparent 40%)' }} />
            </button>
          </div>
        </CodePreview>

      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}
