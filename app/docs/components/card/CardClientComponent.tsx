'use client';

import React, { MouseEvent } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Image from 'next/image';

const simpleCardCode = `<div class="max-w-sm rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
  <h3 class="text-xl font-bold text-slate-900 dark:text-white">Card Title</h3>
  <p class="mt-2 text-slate-600 dark:text-slate-400">
    This is a simple card component. It's a great starting point for any content container.
  </p>
</div>`;

const withImageCode = `<div class="max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
  <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=870" alt="Abstract background" class="h-48 w-full object-cover"/>
  <div class="p-6">
    <h3 class="text-xl font-bold text-slate-900 dark:text-white">Card With Image</h3>
    <p class="mt-2 text-slate-600 dark:text-slate-400">
      An image can make your content more engaging and visually appealing.
    </p>
  </div>
</div>`;

const withHeaderFooterCode = `<div class="max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
  <div class="border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/50">
    <h3 class="font-bold text-slate-900 dark:text-white">Featured</h3>
  </div>
  <div class="p-6">
    <h4 class="text-xl font-semibold text-slate-900 dark:text-white">Special title treatment</h4>
    <p class="mt-2 text-slate-600 dark:text-slate-400">With supporting text below as a natural lead-in to additional content.</p>
    <button class="mt-4 rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">Go somewhere</button>
  </div>
  <div class="border-t border-slate-200 bg-slate-50 px-6 py-3 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-400">
    2 days ago
  </div>
</div>`;

const horizontalCardCode = `<div class="flex max-w-2xl flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900 md:flex-row">
  <div class="h-48 w-full md:h-auto md:w-48">
    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=870" alt="Mountain landscape" class="h-full w-full object-cover"/>
  </div>
  <div class="flex flex-col justify-start p-6">
    <h3 class="text-xl font-bold text-slate-900 dark:text-white">Horizontal Card</h3>
    <p class="mt-2 text-slate-600 dark:text-slate-400">
      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    </p>
    <p class="mt-4 text-sm text-slate-500 dark:text-slate-400">Last updated 3 mins ago</p>
  </div>
</div>`;

const interactiveCardCode = `<div class="group max-w-sm rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500">
  <h3 class="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">Interactive Card</h3>
  <p class="mt-2 text-slate-600 dark:text-slate-400">
    This card has hover effects that provide visual feedback to the user, making the interface more engaging.
  </p>
</div>`;

const glassmorphismCardCode = `<div class="max-w-sm rounded-lg border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
  <h3 class="text-xl font-bold text-white">Glassmorphism Card</h3>
  <p class="mt-2 text-white/80">
    This card uses a frosted-glass effect, perfect for modern UIs that sit on top of colorful backgrounds.
  </p>
</div>`;

const tiltCardCode = `<div class="tilt-card relative h-64 w-full max-w-sm rounded-xl bg-slate-800 p-6 text-white" style="transform-style: preserve-3d; transform: perspective(1000px);">
  <div class="absolute inset-0 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600" style="transform: translateZ(20px);"></div>
  <div class="relative" style="transform: translateZ(40px);">
    <h3 class="text-2xl font-bold">3D Tilt Card</h3>
    <p class="mt-2">This card tilts in 3D space as you move your cursor over it, creating a cool depth effect.</p>
  </div>
</div>

<!-- Script to handle the tilt effect -->
<script>
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y / height - 0.5) * -30; // Max rotation
      const rotateY = (x / width - 0.5) * 30;   // Max rotation

      card.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.05, 1.05, 1.05)\`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
</script>`;

const spotlightCardCode = `<div class="spotlight-card group relative max-w-sm overflow-hidden rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg">
  <div class="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: radial-gradient(600px circle at var(--x) var(--y), rgba(120, 81, 229, 0.15), transparent 80%);"></div>
  <h3 class="text-xl font-bold text-white">Spotlight Card</h3>
  <p class="mt-2 text-slate-400">
    This card reveals a subtle spotlight effect that follows your cursor, adding a touch of modern interactivity.
  </p>
</div>

<!-- Script to handle the spotlight effect -->
<script>
  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', e.clientX - rect.left + 'px');
      card.style.setProperty('--y', e.clientY - rect.top + 'px');
    });
  });
</script>`;

const particleCardCode = `<div class="particle-card group relative max-w-sm overflow-hidden rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg">
  <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
    <!-- Particles will be generated here by script -->
  </div>
  <h3 class="text-xl font-bold text-white">Particle Effect Card</h3>
  <p class="mt-2 text-slate-400">
    This card creates a mesmerizing particle effect that follows your cursor, adding a dynamic and futuristic feel.
  </p>
</div>

<!-- Script to handle the particle effect -->
<script>
  // This is a simplified example. For a real-world scenario,
  // you would likely use a library or a more robust implementation.
  document.querySelectorAll('.particle-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      // Your particle generation logic here
    });
  });
</script>`;

const bentoGridCode = `<div class="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
  {/* Large Card */}
  <div class="md:col-span-2 md:row-span-2 rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Main Feature</h3>
    <p class="mt-2 text-slate-600 dark:text-slate-400">This is the primary card in the bento grid, taking up more space to draw attention.</p>
    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=870" alt="Code on a screen" class="mt-4 h-48 w-full rounded-lg object-cover"/>
  </div>

  {/* Small Card 1 */}
  <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-xl font-bold text-slate-900 dark:text-white">Metric 1</h3>
    <p class="mt-2 text-3xl font-semibold text-indigo-600 dark:text-indigo-400">1.2M+</p>
    <p class="text-sm text-slate-500 dark:text-slate-400">Users</p>
  </div>

  {/* Small Card 2 */}
  <div class="rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
    <h3 class="text-xl font-bold text-slate-900 dark:text-white">Quick Action</h3>
    <button class="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">Deploy</button>
  </div>
</div>`;

const auroraCardCode = `<div class="aurora-card group relative max-w-sm overflow-hidden rounded-lg bg-slate-900 p-6 shadow-lg">
  <div class="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <div class="absolute inset-0 animate-[aurora_8s_linear_infinite] bg-[radial-gradient(ellipse_at_top_left,var(--aurora-color-1),transparent_50%),radial-gradient(ellipse_at_top_right,var(--aurora-color-2),transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--aurora-color-3),transparent_50%)]"></div>
  </div>
  <div class="relative z-10">
    <h3 class="text-xl font-bold text-white">Aurora Card</h3>
    <p class="mt-2 text-slate-300">This card has a beautiful, animated aurora background effect on hover.</p>
  </div>
</div>

<!-- Add this to your global CSS or tailwind.config.js -->
<!-- @keyframes aurora {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} -->`;

const expandingDetailsCardCode = `<div class="group relative h-80 w-64 overflow-hidden rounded-xl bg-slate-800 shadow-lg">
  <img src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=687" alt="Abstract Art" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
  <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>
  <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
    <h3 class="text-2xl font-bold">Vibrant Strokes</h3>
    <div class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40">
      <p class="mt-2 text-sm opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">An abstract painting full of color and motion, representing the chaos and beauty of creation. Perfect for adding a modern artistic touch.</p>
    </div>
  </div>
</div>`;

const floatingGlassCardCode = `<!-- Add this animation to your global CSS:
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
-->
<div 
  class="floating-card group relative h-80 w-64 cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg"
  style="animation: float 6s ease-in-out infinite; transform-style: preserve-3d; transform: perspective(1000px);"
>
  <div class="absolute -inset-20 bg-purple-500/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
  <div class="relative flex h-full flex-col items-center justify-center text-center" style="transform: translateZ(40px);">
    <div class="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/50 bg-white/20">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" /></svg>
    </div>
    <h3 class="mt-4 text-2xl font-bold text-white">Development</h3>
    <p class="mt-2 text-sm text-white/80">Modern web solutions with cutting-edge technology.</p>
  </div>
</div>`;

const staggeredGridCode = `<div class="w-full columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3">
  <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500" alt="Tech 1">
  <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500" alt="Tech 2">
  <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1550745165-9bc0b252726a?w=500" alt="Tech 3">
  <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500" alt="Tech 4">
  <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500" alt="Tech 5">
  <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500" alt="Tech 6">
</div>`;

const kineticCardCode = `<div class="kinetic-card group relative w-72 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-1 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-purple-500/20">
  <div class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: radial-gradient(400px circle at var(--x) var(--y), rgba(192, 132, 252, 0.15), transparent 80%);"></div>
  <div class="relative rounded-[11px] bg-slate-900 p-4">
    <div class="aspect-square w-full overflow-hidden rounded-lg">
      <img src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?q=80&w=870" alt="Gaming Headset" class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
    </div>
    <div class="mt-4">
      <h3 class="text-lg font-bold text-white">Aura Gaming Headset</h3>
      <p class="mt-1 text-sm text-slate-400">Immersive 7.1 Surround Sound</p>
      <div class="mt-4 flex items-end justify-between">
        <p>
          <span class="text-2xl font-bold text-purple-400">$129</span>
          <span class="text-sm text-slate-500 line-through">$159</span>
        </p>
        <button class="translate-y-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-purple-700">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Script to handle the border-glow effect -->
<script>
  document.querySelectorAll('.kinetic-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', e.clientX - rect.left + 'px');
      card.style.setProperty('--y', e.clientY - rect.top + 'px');
    });
  });
</script>`;

const infiniteCarouselCode = `<div class="w-full overflow-hidden" style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);">
  <div class="flex animate-scroll">
    <!-- Duplicate items for seamless loop -->
    <div class="flex w-max shrink-0 gap-4 p-4">... (items) ...</div>
    <div class="flex w-max shrink-0 gap-4 p-4">... (items) ...</div>
  </div>
</div>`;

const glowingBorderCardCode = `<div class="glowing-border-card group relative max-w-sm overflow-hidden rounded-xl bg-slate-900 p-px">
  <span class="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: radial-gradient(600px circle at var(--x) var(--y), rgba(192, 132, 252, 0.2), transparent 40%);"></span>
  <div class="relative rounded-[11px] bg-slate-900 p-6">
    <h3 class="text-xl font-bold text-white">Glowing Border</h3>
    <p class="mt-2 text-slate-400">A subtle glow follows your cursor around the card's border.</p>
  </div>
</div>

<!-- Script to handle the glowing border effect -->
<script>
  document.querySelectorAll('.glowing-border-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', e.clientX - rect.left + 'px');
      card.style.setProperty('--y', e.clientY - rect.top + 'px');
    });
  });
</script>`;

const gradientBorderCardCode = `<div class="relative max-w-sm rounded-xl border border-slate-200 bg-white p-1 shadow-md transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-300/20 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-700/20">
  <div class="absolute inset-0 rounded-xl bg-linear-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
  <div class="relative rounded-lg bg-white p-6 dark:bg-slate-900">
    <h3 class="text-xl font-bold text-slate-900 dark:text-white">Gradient Border Card</h3>
    <p class="mt-2 text-slate-600 dark:text-slate-400">
      This card reveals a soft gradient border on hover, adding a professional and modern touch to your UI.
    </p>
  </div>
</div>`;

const evervaultCardCode = `<div class="evervault-card group relative max-w-sm overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-px">
  <div class="pointer-events-none absolute -inset-px transition duration-300" style="background: radial-gradient(600px circle at var(--x) var(--y), rgba(255, 255, 255, 0.1), transparent 40%);"></div>
  <div class="relative rounded-xl bg-slate-900/95 p-6">
    <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke-width="2" stroke="rgb(30 41 59 / 0.5)"%3e%3cpath d="M0 .5H31.5V32"/%3e%3c/svg%3e'); mask-image: radial-gradient(transparent, black 50%); -webkit-mask-image: radial-gradient(transparent, black 50%);"></div>
    <h3 class="text-xl font-bold text-white">Evervault Card</h3>
    <p class="mt-2 text-slate-400">
      A modern card with a background pattern that animates on cursor move.
    </p>
  </div>
</div>

<!-- Script to handle the effect -->
<script>
  document.querySelectorAll('.evervault-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--x', e.clientX - rect.left + 'px');
      card.style.setProperty('--y', e.clientY - rect.top + 'px');
    });
  });
</script>`;

const meteoricCardCode = `<!-- Add this animation to your global CSS:
@keyframes meteor-effect {
  0% { transform: rotate(215deg) translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: rotate(215deg) translateX(-500px); opacity: 0; }
}
-->
<div class="relative max-w-sm overflow-hidden rounded-lg bg-slate-900 p-6 shadow-lg">
  <div class="absolute inset-0 pointer-events-none">
    <!-- Meteors -->
    <span class="absolute top-0 left-1/2 h-80 w-0.5 -translate-x-1/2 rotate-215 animate-[meteor-effect_3s_linear_infinite] bg-linear-to-b from-slate-400/40 to-transparent"></span>
    <span class="absolute top-0 left-1/3 h-60 w-0.5 -translate-x-1/2 rotate-215 animate-[meteor-effect_4s_linear_2s_infinite] bg-linear-to-b from-slate-400/40 to-transparent"></span>
    <span class="absolute top-0 left-2/3 h-72 w-px -translate-x-1/2 rotate-215 animate-[meteor-effect_5s_linear_1s_infinite] bg-linear-to-b from-slate-400/40 to-transparent"></span>
  </div>
  <div class="relative z-10">
    <h3 class="text-xl font-bold text-white">Meteoric Card</h3>
    <p class="mt-2 text-slate-300">A card with animated meteors streaking across the background.</p>
  </div>
</div>`;

const dockingCardsCode = `<div class="group/dock w-full max-w-md">
  <div class="flex h-16 items-end justify-center gap-3 rounded-2xl bg-slate-900 p-4 transition-all duration-300 ease-in-out group-hover/dock:h-48">
    
    <div class="group/card relative aspect-square w-12 cursor-pointer rounded-xl bg-slate-700 transition-all duration-300 ease-in-out hover:w-24!">
      <div class="absolute inset-x-0 -bottom-12 flex justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
        <span class="text-sm text-slate-400">Home</span>
      </div>
    </div>

    <div class="group/card relative aspect-square w-12 cursor-pointer rounded-xl bg-slate-700 transition-all duration-300 ease-in-out hover:w-24!">
      <div class="absolute inset-x-0 -bottom-12 flex justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
        <span class="text-sm text-slate-400">Music</span>
      </div>
    </div>

    <div class="group/card relative aspect-square w-12 cursor-pointer rounded-xl bg-slate-700 transition-all duration-300 ease-in-out hover:w-24!">
      <div class="absolute inset-x-0 -bottom-12 flex justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
        <span class="text-sm text-slate-400">Apps</span>
      </div>
    </div>

  </div>
</div>`;

const parallaxHoverCardsCode = `<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <div class="group relative h-72 w-full cursor-pointer overflow-hidden rounded-xl shadow-lg">
    <div class="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
    <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" alt="Workspace">
    <div class="relative z-20 flex h-full flex-col justify-end p-6 text-white">
      <h3 class="text-2xl font-bold">Creative Workspace</h3>
      <p class="mt-2 text-sm opacity-80">A space designed for focus and creativity.</p>
    </div>
  </div>
  <div class="group relative h-72 w-full cursor-pointer overflow-hidden rounded-xl shadow-lg">
    <div class="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" alt="Laptop with code">
    <div class="relative z-20 flex h-full flex-col justify-end p-6 text-white">
      <h3 class="text-2xl font-bold">Modern Development</h3>
      <p class="mt-2 text-sm opacity-80">Building the future, one line of code at a time.</p>
    </div>
  </div>
</div>`;

const flippingCardCode = `<div class="group h-72 w-56 cursor-pointer perspective-[1000px]">
  <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
    {/* Front Side */}
    <div class="absolute inset-0">
      <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687" alt="Profile Picture">
    </div>
    {/* Back Side */}
    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 transform-[rotateY(180deg)] backface-hidden">
      <div class="flex min-h-full flex-col items-center justify-center">
        <h3 class="text-2xl font-bold">John Doe</h3>
        <p class="text-lg">Software Engineer</p>
        <p class="mt-2 text-sm">Building innovative solutions for the web.</p>
        <button class="mt-4 rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white hover:bg-indigo-700">
          Contact
        </button>
      </div>
    </div>
  </div>
</div>`;

const revealCardCode = `<div class="group relative h-80 w-64 cursor-pointer overflow-hidden rounded-xl shadow-lg">
  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=799" alt="Product" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
  <div class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
  <div class="absolute inset-0 flex translate-y-[60%] flex-col justify-center p-6 text-white transition-transform duration-500 group-hover:translate-y-0">
    <h3 class="text-2xl font-bold">Sleek Watch</h3>
    <div class="pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p class="text-sm">
        A perfect blend of classic design and modern technology.
      </p>
      <button class="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
        View Details
      </button>
    </div>
  </div>
</div>`;

const stackedDeckCardCode = `<div class="group relative h-64 w-full max-w-sm cursor-pointer">
  {/* Card 3 (Bottom) */}
  <div class="absolute inset-0 rounded-xl bg-slate-700 p-6 text-white shadow-lg transition-transform duration-500 ease-in-out group-hover:-translate-y-4 group-hover:rotate-6">
    <h3 class="text-xl font-bold">Step 3: Launch</h3>
    <p class="mt-2 text-sm">Deploy the application to production and monitor its performance.</p>
  </div>

  {/* Card 2 (Middle) */}
  <div class="absolute inset-0 rounded-xl bg-slate-800 p-6 text-white shadow-lg transition-transform duration-500 ease-in-out group-hover:-translate-y-2 group-hover:rotate-2">
    <h3 class="text-xl font-bold">Step 2: Develop</h3>
    <p class="mt-2 text-sm">Build the features with clean and efficient code.</p>
  </div>

  {/* Card 1 (Top) */}
  <div class="absolute inset-0 rounded-xl bg-slate-900 p-6 text-white shadow-lg transition-transform duration-500 ease-in-out group-hover:-rotate-2">
    <div class="flex items-center justify-between">
      <h3 class="text-xl font-bold">Step 1: Plan</h3>
      <span class="text-xs text-slate-400">HOVER ME</span>
    </div>
    <p class="mt-2 text-sm">Define the project scope, goals, and requirements.</p>
  </div>
</div>`;

export default function CardClientComponent() {
  const handleTiltMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / height - 0.5) * -30; // Max rotation
    const rotateY = (x / width - 0.5) * 30;   // Max rotation

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleTiltLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const handleSpotlightMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  const handleParticleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const particleContainer = card.querySelector<HTMLDivElement>('.absolute.inset-0');
    if (!particleContainer) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create a particle
    const particle = document.createElement('div');
    particle.className = 'absolute rounded-full';
    const size = Math.random() * 4 + 1; // size between 1px and 5px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Randomly choose a color from a palette
    const colors = ['#818cf8', '#c084fc', '#f472b6'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    particleContainer.appendChild(particle);

    // Animate and remove the particle
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 50 + 20;
    const duration = Math.random() * 1000 + 500;

    particle.animate([
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      { 
        transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`, 
        opacity: 0 
      }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => particle.remove();
  };

  const handleAuroraMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    e.clientX - rect.left;
    e.clientY - rect.top;

    card.style.setProperty('--aurora-color-1', 'rgba(99, 102, 241, 0.3)');
    card.style.setProperty('--aurora-color-2', 'rgba(168, 85, 247, 0.3)');
    card.style.setProperty('--aurora-color-3', 'rgba(236, 72, 153, 0.3)');
  };

  const handleFloatingCardMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20; // Max 10deg rotation
    const rotateX = (y / rect.height - 0.5) * -20; // Max 10deg rotation

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleFloatingCardLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  const handleKineticCardMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  const handleGlowingBorderMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  const handleEvervaultCardMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  const cardSections = [
    {
      id: 'simple',
      title: 'Simple',
      description: "A basic card that serves as a simple container for text or other elements. It is the fundamental building block for most card-based layouts.",
      code: simpleCardCode,
      content: (
        <div className="max-w-sm rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Card Title</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            This is a simple card component. It&apos;s a great starting point for any content container.
          </p>
        </div>
      )
    },
    {
      id: 'with-image',
      title: 'With Image',
      description: "Include an image at the top of the card to add visual appeal. This is commonly used for profile, product, or article cards.",
      code: withImageCode,
      content: (
        <div className="max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
          <Image src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=870" alt="Abstract background" width={870} height={400} className="h-48 w-full object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Card With Image</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              An image can make your content more engaging and visually appealing.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'with-header-footer',
      title: 'With Header & Footer',
      description: "Add optional headers and footers to provide additional context or actions for your card.",
      code: withHeaderFooterCode,
      content: (
        <div className="max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/50">
            <h3 className="font-bold text-slate-900 dark:text-white">Featured</h3>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Special title treatment</h4>
            <p className="mt-2 text-slate-600 dark:text-slate-400">With supporting text below as a natural lead-in to additional content.</p>
            <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">Go somewhere</button>
          </div>
          <div className="border-t border-slate-200 bg-slate-50 px-6 py-3 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-400">
            2 days ago
          </div>
        </div>
      )
    },
    {
      id: 'horizontal',
      title: 'Horizontal',
      description: "Change the card layout to horizontal by placing the image and content side-by-side. This is useful for item lists or where vertical space is limited.",
      code: horizontalCardCode,
      content: (
        <div className="flex max-w-2xl flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900 md:flex-row">
          <div className="h-48 w-full shrink-0 md:h-auto md:w-48">
            <Image src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=870" alt="Mountain landscape" width={870} height={580} className="h-full w-full object-cover"/>
          </div>
          <div className="flex flex-col justify-start p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Horizontal Card</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Last updated 3 mins ago</p>
          </div>
        </div>
      )
    },
    {
      id: 'interactive',
      title: 'Interactive',
      description: "Add hover effects to make the card more interactive. This can include changes in shadow, border, or color to provide visual feedback to the user.",
      code: interactiveCardCode,
      content: (
        <div className="group max-w-sm cursor-pointer rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500">
          <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">Interactive Card</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            This card has hover effects that provide visual feedback to the user, making the interface more engaging.
          </p>
        </div>
      )
    },
    {
      id: 'glassmorphism',
      title: 'Glassmorphism',
      description: "A modern style that uses background blur and transparency to create a frosted-glass look. It's perfect for interfaces that want to emphasize layers and depth.",
      code: glassmorphismCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-cover bg-center p-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=870')"}}>
          <div className="max-w-sm rounded-lg border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
            <h3 className="text-xl font-bold text-white">Glassmorphism Card</h3>
            <p className="mt-2 text-white/80">
              This card uses a frosted-glass effect, perfect for modern UIs that sit on top of colorful backgrounds.
            </p>
          </div>
        </div>
      )
    },
    {
      id: '3d-tilt',
      title: '3D Tilt',
      description: "This card provides a 3D depth illusion as the cursor moves over it. The card tilts to follow the cursor's position, creating a modern and engaging interactive experience.",
      code: tiltCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
          <div
            className="relative h-64 w-full max-w-sm rounded-xl bg-slate-800 p-6 text-white transition-transform duration-200 ease-out"
            style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}
            onMouseMove={handleTiltMove}
            onMouseLeave={handleTiltLeave}
          >
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600" style={{ transform: 'translateZ(20px)' }}></div>
            <div className="relative" style={{ transform: 'translateZ(40px)' }}>
              <h3 className="text-2xl font-bold">3D Tilt Card</h3>
              <p className="mt-2">This card tilts in 3D space as you move your cursor over it, creating a cool depth effect.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'spotlight',
      title: 'Spotlight',
      description: "The spotlight card creates an interactive light effect that follows the user's cursor as it hovers over the card. This effect uses a radial gradient whose position is updated via JavaScript, giving your interface a premium and dynamic feel.",
      code: spotlightCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
          <div className="group relative max-w-sm overflow-hidden rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg" onMouseMove={handleSpotlightMove}>
            <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(120, 81, 229, 0.15), transparent 80%)' }} />
            <h3 className="text-xl font-bold text-white">Spotlight Card</h3>
            <p className="mt-2 text-slate-400">
              This card reveals a subtle spotlight effect that follows your cursor, adding a touch of modern interactivity.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'particle-effect',
      title: 'Particle Effect',
      description: "This particle effect card creates a stunning animation as your cursor moves over it. Small particles emerge and spread from the cursor's position, providing a dynamic, modern, and futuristic feel. This effect is perfect for drawing attention to featured content or profile cards.",
      code: particleCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
          <div className="particle-card group relative max-w-sm cursor-pointer overflow-hidden rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg" onMouseMove={handleParticleMove}>
            <div className="pointer-events-none absolute inset-0" aria-hidden="true"></div>
            <h3 className="relative z-10 text-xl font-bold text-white">Particle Effect Card</h3>
            <p className="relative z-10 mt-2 text-slate-400">
              This card creates a mesmerizing particle effect that follows your cursor, adding a dynamic and futuristic feel.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'bento-grid',
      title: 'Bento Grid Layout',
      description: 'The "Bento Grid" layout is a modern and professional way to present multiple cards in a visually appealing grid. It is ideal for dashboards, portfolios, or feature pages where various pieces of information need to be displayed simultaneously with a clear hierarchy.',
      code: bentoGridCode,
      content: (
        <div className="w-full rounded-lg bg-slate-100 p-8 dark:bg-slate-950">
          <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900 md:col-span-2 md:row-span-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Main Feature</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">This is the primary card in the bento grid, taking up more space to draw attention.</p>
              <Image src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=870" alt="Code on a screen" width={870} height={580} className="mt-4 h-48 w-full rounded-lg object-cover"/>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Metric 1</h3>
              <p className="mt-2 text-3xl font-semibold text-indigo-600 dark:text-indigo-400">1.2M+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Users</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Quick Action</h3>
              <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">Deploy</button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'aurora-card',
      title: 'Aurora Card',
      description: 'The "Aurora" card features a subtle and animated gradient background effect on hover. This effect creates a modern, premium, and slightly magical feel, perfect for highlighting important content in an elegant way.',
      code: auroraCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
          <div
            className="aurora-card group relative max-w-sm cursor-pointer overflow-hidden rounded-lg bg-slate-900 p-6 shadow-lg"
            onMouseMove={handleAuroraMove}
          >
            <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="aurora-bg absolute inset-0 animate-[aurora_8s_linear_infinite] bg-[radial-gradient(ellipse_at_top_left,var(--aurora-color-1),transparent_50%),radial-gradient(ellipse_at_top_right,var(--aurora-color-2),transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--aurora-color-3),transparent_50%)]"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">Aurora Card</h3>
              <p className="mt-2 text-slate-300">This card has a beautiful, animated aurora background effect on hover.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'expanding-details-card',
      title: 'Expanding Details Card',
      description: "This card is designed to display information progressively. Initially, only the image and title are visible, but when the user hovers, a detailed description appears with a smooth animation. This is a great way to keep the interface clean while providing in-depth information when needed.",
      code: expandingDetailsCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
          <div className="group relative h-80 w-64 overflow-hidden rounded-xl bg-slate-800 shadow-lg">
            <Image src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=687" alt="Abstract Art" width={256} height={320} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-2xl font-bold">Vibrant Strokes</h3>
              <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40">
                <p className="mt-2 text-sm opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">An abstract painting full of color and motion, representing the chaos and beauty of creation. Perfect for adding a modern artistic touch.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'floating-glass-card',
      title: 'Floating Glass Card',
      description: "This card is a blend of several modern design trends for 2025. It uses a *glassmorphism* effect for a transparent look, a smooth floating animation to give a sense of life, and an interactive 3D tilt effect on hover. It is perfect for showcasing services or product categories on a portfolio or company website.",
      code: floatingGlassCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-cover bg-center p-12" style={{backgroundImage: "url('https://images.unsplash.com/photo-1536566482680-fca31930a0bd?q=80&w=987')"}}>
          <div 
            className="floating-card group relative h-80 w-64 cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-lg"
            style={{ animation: 'float 6s ease-in-out infinite', transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}
            onMouseMove={handleFloatingCardMove}
            onMouseLeave={handleFloatingCardLeave}
          >
            <div className="absolute -inset-20 bg-purple-500/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="relative flex h-full flex-col items-center justify-center text-center" style={{ transform: 'translateZ(40px)' }}>
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/50 bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" /></svg>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">Development</h3>
              <p className="mt-2 text-sm text-white/80">Modern web solutions with cutting-edge technology.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'staggered-grid-layout',
      title: 'Staggered Grid Layout',
      description: 'The "Staggered Grid" or Masonry layout is ideal for visual portfolios, image galleries, or pinboards. It allows items of different heights to fit efficiently into the grid, creating a dynamic and engaging layout. This layout is created purely with CSS using the `columns` property.',
      code: staggeredGridCode,
      content: (
        <div className="w-full rounded-lg bg-slate-100 p-8 dark:bg-slate-950">
          <div className="w-full columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3">
            <Image className="w-full rounded-lg" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500" alt="Tech 1" width={500} height={750} />
            <Image className="w-full rounded-lg" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500" alt="Tech 2" width={500} height={333} />
            <Image className="w-full rounded-lg" src="https://images.unsplash.com/photo-1550745165-9bc0b252726a?w=500" alt="Tech 3" width={500} height={354} />
            <Image className="w-full rounded-lg" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500" alt="Tech 4" width={500} height={334} />
            <Image className="w-full rounded-lg" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500" alt="Tech 5" width={500} height={750} />
            <Image className="w-full rounded-lg" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500" alt="Tech 6" width={500} height={750} />
          </div>
        </div>
      )
    },
    {
      id: 'kinetic-card',
      title: 'Kinetic Card',
      description: 'The "Kinetic" card is designed for modern e-commerce or portfolios. It combines several interactive effects: a cursor-following light, an enlarging image, and an action button that appears on hover. The layered design with an inner border provides a premium and professional look, perfect for highlighting products or projects.',
      code: kineticCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
          <div
            className="group relative w-72 cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-1 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-purple-500/20"
            onMouseMove={handleKineticCardMove}
          >
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at var(--x) var(--y), rgba(192, 132, 252, 0.15), transparent 80%)' }} />
            <div className="relative rounded-[11px] bg-slate-900 p-4">
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <Image src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?q=80&w=870" alt="Gaming Headset" width={500} height={500} className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-white">Aura Gaming Headset</h3>
                <p className="mt-1 text-sm text-slate-400">Immersive 7.1 Surround Sound</p>
                <div className="mt-4 flex items-end justify-between">
                  <p>
                    <span className="text-2xl font-bold text-purple-400">$129</span>
                    <span className="ml-2 text-sm text-slate-500 line-through">$159</span>
                  </p>
                  <button className="translate-y-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-purple-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'infinite-carousel',
      title: 'Infinite Carousel',
      description: 'The "Infinite Carousel" layout is an effective way to display a series of items, such as client logos, featured products, or team members, in a continuously moving row. It creates the illusion of an infinite loop and saves vertical space. This effect is created purely with CSS `animation` and `flexbox`.',
      code: infiniteCarouselCode,
      content: (
        <div className="w-full rounded-lg bg-slate-100 p-8 dark:bg-slate-950">
          <div className="w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex animate-scroll">
              {[...Array(14)].map((_, i) => (
                <div key={i} className="flex w-[150px] shrink-0 items-center justify-center p-4">
                  <div className={`h-12 w-24 rounded-lg ${i % 2 === 0 ? 'bg-slate-300 dark:bg-slate-700' : 'bg-slate-400 dark:bg-slate-600'}`}></div>
                </div>
              ))}
              {[...Array(14)].map((_, i) => (
                <div key={`dup-${i}`} className="flex w-[150px] shrink-0 items-center justify-center p-4">
                  <div className={`h-12 w-24 rounded-lg ${i % 2 === 0 ? 'bg-slate-300 dark:bg-slate-700' : 'bg-slate-400 dark:bg-slate-600'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'glowing-border-card',
      title: 'Glowing Border Card',
      description: 'This card features a "glowing border" effect that follows the cursor, giving the illusion of a dynamically lit border. This effect uses a pseudo-element with a radial gradient whose position is controlled by JavaScript, creating a very modern and professional look.',
      code: glowingBorderCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
          <div
            className="glowing-border-card group relative max-w-sm cursor-pointer overflow-hidden rounded-xl bg-slate-900 p-px"
            onMouseMove={handleGlowingBorderMove}
          >
            <span className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(192, 132, 252, 0.2), transparent 40%)' }} />
            <div className="relative rounded-[11px] bg-slate-900 p-6">
              <h3 className="text-xl font-bold text-white">Glowing Border</h3>
              <p className="mt-2 text-slate-400">A subtle glow follows your cursor around the card&apos;s border.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'gradient-border-card',
      title: 'Gradient Border Card',
      description: 'The "Gradient Border" card is an excellent choice for a clean and professional design. When the user hovers, a smooth gradient border appears, providing elegant visual feedback without being distracting. This effect is created purely with CSS, making it lightweight and easy to implement.',
      code: gradientBorderCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
          <div className="group relative max-w-sm cursor-pointer rounded-xl border border-transparent bg-white p-1 shadow-md transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-300/20 dark:border-transparent dark:bg-slate-900 dark:hover:shadow-slate-700/20">
            <div className="absolute -inset-px z-0 rounded-xl bg-linear-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 rounded-lg bg-white p-6 dark:bg-slate-900">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Gradient Border Card</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">This card reveals a soft gradient border on hover, adding a professional and modern touch to your UI.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'evervault-card',
      title: 'Evervault Card',
      description: 'The "Evervault" card is a modern design featuring an SVG background pattern that interacts with cursor movement. As the cursor moves over the card, a radial highlight follows, illuminating the pattern beneath. This effect creates a sophisticated and professional visual experience, ideal for showcasing tech features or premium products.',
      code: evervaultCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
          <div className="group relative max-w-sm cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-px" onMouseMove={handleEvervaultCardMove}>
            <div className="pointer-events-none absolute -inset-px transition duration-300" style={{ background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(255, 255, 255, 0.1), transparent 40%)' }} />
            <div className="relative rounded-xl bg-slate-900/95 p-6">
              <div className="absolute inset-0" style={{ backgroundImage: `url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke-width="2" stroke="rgb(30 41 59 / 0.5)"%3e%3cpath d="M0 .5H31.5V32"/%3e%3c/svg%3e')`, maskImage: 'radial-gradient(transparent, black 50%)', WebkitMaskImage: 'radial-gradient(transparent, black 50%)' }}></div>
              <h3 className="relative z-10 text-xl font-bold text-white">Evervault Card</h3>
              <p className="relative z-10 mt-2 text-slate-400">A modern card with a background pattern that animates on cursor move.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'meteoric-card',
      title: 'Meteoric Card',
      description: 'The "Meteoric" card features an animated background effect of meteors streaking across the card continuously. This effect is created purely with CSS, providing a dynamic, modern, and slightly magical feel, perfect for cards that want to attract attention in a subtle yet elegant way.',
      code: meteoricCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
          <div className="relative max-w-sm overflow-hidden rounded-lg bg-slate-900 p-6 shadow-lg">
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute top-0 left-1/2 h-80 w-0.5 -translate-x-1/2 rotate-215 animate-[meteor-effect_3s_linear_infinite] bg-linear-to-b from-slate-400/40 to-transparent"></span>
              <span className="absolute top-0 left-1/3 h-60 w-0.5 -translate-x-1/2 rotate-215 animate-[meteor-effect_4s_linear_2s_infinite] bg-linear-to-b from-slate-400/40 to-transparent"></span>
              <span className="absolute top-0 left-2/3 h-72 w-px -translate-x-1/2 rotate-215 animate-[meteor-effect_5s_linear_1s_infinite] bg-linear-to-b from-slate-400/40 to-transparent"></span>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white">Meteoric Card</h3>
              <p className="mt-2 text-slate-300">A card with animated meteors streaking across the background.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'docking-cards-layout',
      title: 'Docking Cards Layout',
      description: 'The "Docking Cards" layout is an interactive way to display a group of items or navigation. When the user hovers over one of the cards, it expands while the others shrink, creating a responsive dock-like effect. This layout is made purely with CSS and is perfect for menus, galleries, or category selections.',
      code: dockingCardsCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
          <div className="group/dock flex h-16 w-full max-w-md items-end justify-center gap-3 rounded-2xl bg-slate-900 p-4 transition-all duration-300 ease-in-out hover:h-28"><div className="group/card relative aspect-square w-12 cursor-pointer rounded-xl bg-slate-700 transition-all duration-300 ease-in-out hover:w-24!"><div className="absolute inset-x-0 -bottom-8 flex justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"><span className="text-sm text-slate-400">Home</span></div></div><div className="group/card relative aspect-square w-12 cursor-pointer rounded-xl bg-slate-700 transition-all duration-300 ease-in-out hover:w-24!"><div className="absolute inset-x-0 -bottom-8 flex justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"><span className="text-sm text-slate-400">Music</span></div></div><div className="group/card relative aspect-square w-12 cursor-pointer rounded-xl bg-slate-700 transition-all duration-300 ease-in-out hover:w-24!"><div className="absolute inset-x-0 -bottom-8 flex justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"><span className="text-sm text-slate-400">Apps</span></div></div><div className="group/card relative aspect-square w-12 cursor-pointer rounded-xl bg-slate-700 transition-all duration-300 ease-in-out hover:w-24!"><div className="absolute inset-x-0 -bottom-8 flex justify-center opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"><span className="text-sm text-slate-400">Settings</span></div></div></div>
        </div>
      )
    },
    {
      id: 'parallax-hover-cards',
      title: 'Parallax Hover Cards',
      description: "This layout features a grid of cards with a subtle parallax effect on the background image on hover. The image will slightly zoom and move, creating a modern and professional illusion of depth. It is perfect for portfolios, galleries, or feature cards that want to emphasize visuals.",
      code: parallaxHoverCardsCode,
      content: (
        <div className="w-full rounded-lg bg-slate-100 p-8 dark:bg-slate-950">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="group relative h-72 w-full cursor-pointer overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
              <Image src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e" layout="fill" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" alt="Workspace" />
              <div className="relative z-20 flex h-full flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold">Creative Workspace</h3>
                <p className="mt-2 text-sm opacity-80">A space designed for focus and creativity.</p>
              </div>
            </div>
            <div className="group relative h-72 w-full cursor-pointer overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
              <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" layout="fill" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" alt="Laptop with code" />
              <div className="relative z-20 flex h-full flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold">Modern Development</h3>
                <p className="mt-2 text-sm opacity-80">Building the future, one line of code at a time.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: '3d-flipping-card',
      title: '3D Flipping Card',
      description: "This card provides a 3D flipping effect on hover, revealing content on the back. It's an interactive and space-saving way to display additional information, such as contact details on a profile card or specifications on a product card. This effect is created purely with CSS and the `transform` property.",
      code: flippingCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
          <div className="group h-72 w-56 cursor-pointer perspective-[1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687" alt="Profile Picture" width={224} height={288} />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-6 text-center text-slate-200 transform-[rotateY(180deg)] backface-hidden">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold">John Doe</h3>
                  <p className="text-lg">Software Engineer</p>
                  <p className="mt-2 text-sm">Building innovative solutions for the web.</p>
                  <button className="mt-4 rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white hover:bg-indigo-700">Contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reveal-card',
      title: 'Reveal Card',
      description: 'The "Reveal" card is an elegant way to display information progressively. When the user hovers, additional content like a description and action button slides up smoothly from the bottom. It\'s perfect for portfolios, product cards, or galleries where you want to keep the interface clean and focused on visuals.',
      code: revealCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
          <div className="group relative h-80 w-64 cursor-pointer overflow-hidden rounded-xl shadow-lg">
            <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=799" alt="Product" width={256} height={320} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col justify-center p-6 text-white transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="text-2xl font-bold">Sleek Watch</h3>
              <div className="pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm">
                  A perfect blend of classic design and modern technology.
                </p>
                <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'stacked-deck-layout',
      title: 'Stacked Deck Layout',
      description: 'The "Stacked Deck" layout is a dynamic and space-saving way to display a series of cards. When the user hovers over the stack, the cards fan out with a smooth animation, revealing the content of each card. It\'s perfect for showcasing steps in a process, key features, or related portfolio items.',
      code: stackedDeckCardCode,
      content: (
        <div className="flex w-full items-center justify-center rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
          <div className="group relative h-64 w-full max-w-sm cursor-pointer">
            {/* Card 3 (Bottom) */}
            <div className="absolute inset-0 rounded-xl bg-slate-700 p-6 text-white shadow-lg transition-transform duration-500 ease-in-out group-hover:-translate-y-4 group-hover:rotate-6">
              <h3 className="text-xl font-bold">Step 3: Launch</h3>
              <p className="mt-2 text-sm">Deploy the application to production and monitor its performance.</p>
            </div>
            {/* Card 2 (Middle) */}
            <div className="absolute inset-0 rounded-xl bg-slate-800 p-6 text-white shadow-lg transition-transform duration-500 ease-in-out group-hover:-translate-y-2 group-hover:rotate-2">
              <h3 className="text-xl font-bold">Step 2: Develop</h3>
              <p className="mt-2 text-sm">Build the features with clean and efficient code.</p>
            </div>
            {/* Card 1 (Top) */}
            <div className="absolute inset-0 rounded-xl bg-slate-900 p-6 text-white shadow-lg transition-transform duration-500 ease-in-out group-hover:-rotate-2">
              <div className="flex items-center justify-between"><h3 className="text-xl font-bold">Step 1: Plan</h3><span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Hover Me</span></div>
              <p className="mt-2 text-sm">Define the project scope, goals, and requirements.</p>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <>
      {cardSections.map(section => (
        <div key={section.id}>
          <h2 id={section.id} className="mt-12 scroll-mt-20 text-3xl font-bold">
            {section.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            {section.description}
          </p>
          <CodePreview code={section.code}>
            {section.content}
          </CodePreview>
        </div>
      ))}
    </>
  );
}