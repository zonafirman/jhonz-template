'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React, { MouseEvent } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';
import Image from 'next/image';

const pageHeadings = [
  { title: 'Card', slug: 'card', level: 1 },
  { title: 'Simple', slug: 'simple', level: 2 },
  { title: 'With Image', slug: 'with-image', level: 2 },
  { title: 'With Header & Footer', slug: 'with-header-footer', level: 2 },
  { title: 'Horizontal', slug: 'horizontal', level: 2 },
  { title: 'Interactive', slug: 'interactive', level: 2 },
  { title: 'Glassmorphism', slug: 'glassmorphism', level: 2 },
  { title: '3D Tilt', slug: '3d-tilt', level: 2 },
  { title: 'Spotlight', slug: 'spotlight', level: 2 },
  { title: 'Particle Effect', slug: 'particle-effect', level: 2 },
  { title: 'Bento Grid Layout', slug: 'bento-grid', level: 2 },
  { title: 'Aurora Card', slug: 'aurora-card', level: 2 },
  { title: 'Expanding Details Card', slug: 'expanding-details-card', level: 2 },
  { title: 'Floating Glass Card', slug: 'floating-glass-card', level: 2 },
  { title: 'Staggered Grid Layout', slug: 'staggered-grid-layout', level: 2 },
  { title: 'Kinetic Card', slug: 'kinetic-card', level: 2 },
  { title: 'Infinite Carousel', slug: 'infinite-carousel', level: 2 },
  { title: 'Glowing Border Card', slug: 'glowing-border-card', level: 2 },
  { title: 'Gradient Border Card', slug: 'gradient-border-card', level: 2 },
];

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
    <div class="absolute inset-0 animate-[aurora_8s_linear_infinite] bg-[radial-gradient(ellipse_at_top_left,_var(--aurora-color-1),_transparent_50%),radial-gradient(ellipse_at_top_right,_var(--aurora-color-2),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_var(--aurora-color-3),_transparent_50%)]"></div>
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
  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
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
  <div class="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
  <div class="relative rounded-lg bg-white p-6 dark:bg-slate-900">
    <h3 class="text-xl font-bold text-slate-900 dark:text-white">Gradient Border Card</h3>
    <p class="mt-2 text-slate-600 dark:text-slate-400">
      This card reveals a soft gradient border on hover, adding a professional and modern touch to your UI.
    </p>
  </div>
</div>`;

export default function CardsPage() {
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
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

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
  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Cards</span>
        </nav>

        <h1 id="card" className="scroll-mt-20 text-4xl font-bold">
          Card
        </h1>

        <p className="mt-4 text-slate-600">
          Kartu adalah wadah konten yang fleksibel dan dapat diperluas. Mereka mencakup opsi untuk header dan footer, berbagai macam konten, warna kontekstual, dan opsi tampilan yang kuat.
        </p>

        {/* Simple Card */}
        <h2 id="simple" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Simple
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu dasar yang berfungsi sebagai wadah sederhana untuk teks atau elemen lainnya. Ini adalah blok bangunan fundamental untuk sebagian besar tata letak berbasis kartu.
        </p>
        <CodePreview code={simpleCardCode}>
          <div className="max-w-sm rounded-lg border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Card Title</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              This is a simple card component. It&apos;s a great starting point for any content container.
            </p>
          </div>
        </CodePreview>

        {/* With Image */}
        <h2 id="with-image" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Image
        </h2>
        <p className="mt-4 text-slate-600">
          Sertakan gambar di bagian atas kartu untuk menambahkan daya tarik visual. Ini umum digunakan untuk kartu profil, produk, atau artikel.
        </p>
        <CodePreview code={withImageCode}>
          <div className="max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
            <Image src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=870" alt="Abstract background" width={870} height={400} className="h-48 w-full object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Card With Image</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                An image can make your content more engaging and visually appealing.
              </p>
            </div>
          </div>
        </CodePreview>

        {/* With Header & Footer */}
        <h2 id="with-header-footer" className="mt-12 scroll-mt-20 text-3xl font-bold">
          With Header & Footer
        </h2>
        <p className="mt-4 text-slate-600">
          Tambahkan header dan footer opsional untuk memberikan konteks tambahan atau tindakan pada kartu Anda.
        </p>
        <CodePreview code={withHeaderFooterCode}>
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
        </CodePreview>

        {/* Horizontal */}
        <h2 id="horizontal" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Horizontal
        </h2>
        <p className="mt-4 text-slate-600">
          Ubah tata letak kartu menjadi horizontal dengan menempatkan gambar dan konten secara berdampingan. Ini berguna untuk daftar item atau di mana ruang vertikal terbatas.
        </p>
        <CodePreview code={horizontalCardCode}>
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
        </CodePreview>

        {/* Interactive */}
        <h2 id="interactive" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Interactive
        </h2>
        <p className="mt-4 text-slate-600">
          Tambahkan efek hover untuk membuat kartu lebih interaktif. Ini dapat mencakup perubahan bayangan, batas, atau warna untuk memberikan umpan balik visual kepada pengguna.
        </p>
        <CodePreview code={interactiveCardCode}>
          <div className="group max-w-sm cursor-pointer rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500">
            <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">Interactive Card</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              This card has hover effects that provide visual feedback to the user, making the interface more engaging.
            </p>
          </div>
        </CodePreview>

        {/* Glassmorphism */}
        <h2 id="glassmorphism" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Glassmorphism
        </h2>
        <p className="mt-4 text-slate-600">
          Gaya modern yang menggunakan blur latar belakang dan transparansi untuk menciptakan tampilan seperti kaca buram. Sangat cocok untuk antarmuka yang ingin menonjolkan lapisan dan kedalaman.
        </p>
        <CodePreview code={glassmorphismCardCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-cover bg-center p-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=870')"}}>
            <div className="max-w-sm rounded-lg border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
              <h3 className="text-xl font-bold text-white">Glassmorphism Card</h3>
              <p className="mt-2 text-white/80">
                This card uses a frosted-glass effect, perfect for modern UIs that sit on top of colorful backgrounds.
              </p>
            </div>
          </div>
        </CodePreview>

        {/* 3D Tilt */}
        <h2 id="3d-tilt" className="mt-12 scroll-mt-20 text-3xl font-bold">
          3D Tilt
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu ini memberikan ilusi kedalaman 3D saat kursor bergerak di atasnya. Kartu akan miring mengikuti posisi kursor, menciptakan pengalaman interaktif yang modern dan menarik.
        </p>
        <CodePreview code={tiltCardCode}>
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
        </CodePreview>

        {/* Spotlight Card */}
        <h2 id="spotlight" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Spotlight
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu sorotan menciptakan efek cahaya interaktif yang mengikuti kursor pengguna saat melayang di atas kartu. Efek ini menggunakan gradien radial yang posisinya diperbarui melalui JavaScript, memberikan nuansa premium dan dinamis pada antarmuka Anda.
        </p>
        <CodePreview code={spotlightCardCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
            <div className="group relative max-w-sm overflow-hidden rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg" onMouseMove={handleSpotlightMove}>
              <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(120, 81, 229, 0.15), transparent 80%)' }} />
              <h3 className="text-xl font-bold text-white">Spotlight Card</h3>
              <p className="mt-2 text-slate-400">
                This card reveals a subtle spotlight effect that follows your cursor, adding a touch of modern interactivity.
              </p>
            </div>
          </div>
        </CodePreview>

        {/* Particle Effect Card */}
        <h2 id="particle-effect" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Particle Effect
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu dengan efek partikel ini menciptakan animasi yang memukau saat kursor Anda bergerak di atasnya. Partikel-partikel kecil muncul dan menyebar dari posisi kursor, memberikan nuansa yang dinamis, modern, dan futuristik. Efek ini sangat cocok untuk menarik perhatian pada konten unggulan atau kartu profil.
        </p>
        <CodePreview code={particleCardCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
            <div className="particle-card group relative max-w-sm cursor-pointer overflow-hidden rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg" onMouseMove={handleParticleMove}>
              <div className="pointer-events-none absolute inset-0" aria-hidden="true"></div>
              <h3 className="relative z-10 text-xl font-bold text-white">Particle Effect Card</h3>
              <p className="relative z-10 mt-2 text-slate-400">
                This card creates a mesmerizing particle effect that follows your cursor, adding a dynamic and futuristic feel.
              </p>
            </div>
          </div>
        </CodePreview>

        {/* Bento Grid Layout */}
        <h2 id="bento-grid" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Bento Grid Layout
        </h2>
        <p className="mt-4 text-slate-600">
          Tata letak &ldquo;Bento Grid&rdquo; adalah cara modern dan profesional untuk menyajikan beberapa kartu dalam grid yang menarik secara visual. Ini sangat ideal untuk dasbor, portofolio, atau halaman fitur di mana berbagai potongan informasi perlu ditampilkan secara bersamaan dengan hierarki yang jelas.
        </p>
        <CodePreview code={bentoGridCode}>
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
        </CodePreview>

        {/* Aurora Card */}
        <h2 id="aurora-card" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Aurora Card
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu &quot;Aurora&quot; menampilkan efek latar belakang gradien yang halus dan beranimasi saat kursor diarahkan ke atasnya. Efek ini menciptakan nuansa yang modern, premium, dan sedikit magis, cocok untuk menonjolkan konten penting dengan cara yang elegan.
        </p>
        <CodePreview code={auroraCardCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
            <div
              className="aurora-card group relative max-w-sm cursor-pointer overflow-hidden rounded-lg bg-slate-900 p-6 shadow-lg"
              onMouseMove={handleAuroraMove}
            >
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="aurora-bg absolute inset-0 animate-[aurora_8s_linear_infinite] bg-[radial-gradient(ellipse_at_top_left,_var(--aurora-color-1),_transparent_50%),radial-gradient(ellipse_at_top_right,_var(--aurora-color-2),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_var(--aurora-color-3),_transparent_50%)]"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white">Aurora Card</h3>
                <p className="mt-2 text-slate-300">This card has a beautiful, animated aurora background effect on hover.</p>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Expanding Details Card */}
        <h2 id="expanding-details-card" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Expanding Details Card
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu ini dirancang untuk menampilkan informasi secara progresif. Awalnya hanya gambar dan judul yang terlihat, tetapi saat pengguna mengarahkan kursor, deskripsi detail akan muncul dengan animasi yang halus. Ini adalah cara yang bagus untuk menjaga antarmuka tetap bersih sambil menyediakan informasi mendalam saat dibutuhkan.
        </p>
        <CodePreview code={expandingDetailsCardCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-950 p-12">
            <div className="group relative h-80 w-64 overflow-hidden rounded-xl bg-slate-800 shadow-lg">
              <Image src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=687" alt="Abstract Art" width={256} height={320} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-2xl font-bold">Vibrant Strokes</h3>
                <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40">
                  <p className="mt-2 text-sm opacity-0 transition-opacity duration-300 delay-200 group-hover:opacity-100">An abstract painting full of color and motion, representing the chaos and beauty of creation. Perfect for adding a modern artistic touch.</p>
                </div>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Floating Glass Card */}
        <h2 id="floating-glass-card" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Floating Glass Card
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu ini adalah perpaduan dari beberapa tren desain modern untuk tahun 2025. Menggunakan efek *glassmorphism* untuk tampilan transparan, animasi mengambang yang halus untuk memberikan kesan hidup, dan efek 3D tilt interaktif saat di-hover. Sangat cocok untuk menampilkan layanan atau kategori produk di halaman portofolio atau web perusahaan.
        </p>
        <CodePreview code={floatingGlassCardCode}>
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
        </CodePreview>

        {/* Staggered Grid Layout */}
        <h2 id="staggered-grid-layout" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Staggered Grid Layout
        </h2>
        <p className="mt-4 text-slate-600">
          Tata letak &quot;Staggered Grid&quot; atau Masonry sangat ideal untuk portofolio visual, galeri gambar, atau papan pin. Ini memungkinkan item dengan ketinggian yang berbeda untuk masuk secara efisien ke dalam grid, menciptakan tata letak yang dinamis dan menarik. Tata letak ini dibuat murni dengan CSS menggunakan properti `columns`.
        </p>
        <CodePreview code={staggeredGridCode}>
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
        </CodePreview>

        {/* Kinetic Card */}
        <h2 id="kinetic-card" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Kinetic Card
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu &quot;Kinetic&quot; dirancang untuk e-commerce modern atau portofolio. Kartu ini menggabungkan beberapa efek interaktif: cahaya yang mengikuti kursor, gambar yang membesar, dan tombol aksi yang muncul saat di-hover. Desain berlapis dengan border dalam memberikan tampilan premium dan profesional, sangat cocok untuk menonjolkan produk atau proyek.
        </p>
        <CodePreview code={kineticCardCode}>
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
        </CodePreview>

        {/* Infinite Carousel */}
        <h2 id="infinite-carousel" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Infinite Carousel
        </h2>
        <p className="mt-4 text-slate-600">
          Tata letak &quot;Infinite Carousel&quot; adalah cara yang efektif untuk menampilkan serangkaian item, seperti logo klien, produk unggulan, atau anggota tim, dalam satu baris yang terus bergerak. Ini menciptakan ilusi loop tak terbatas dan menghemat ruang vertikal. Efek ini dibuat murni dengan CSS `animation` dan `flexbox`.
        </p>
        <CodePreview code={infiniteCarouselCode}>
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
        </CodePreview>

        {/* Glowing Border Card */}
        <h2 id="glowing-border-card" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Glowing Border Card
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu ini memiliki efek &quot;glowing border&quot; yang mengikuti kursor, memberikan ilusi batas yang menyala secara dinamis. Efek ini menggunakan pseudo-element dengan gradien radial yang posisinya diatur oleh JavaScript, menciptakan tampilan yang sangat modern dan profesional.
        </p>
        <CodePreview code={glowingBorderCardCode}>
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
        </CodePreview>

        {/* Gradient Border Card */}
        <h2 id="gradient-border-card" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Gradient Border Card
        </h2>
        <p className="mt-4 text-slate-600">
          Kartu &quot;Gradient Border&quot; adalah pilihan yang sangat baik untuk desain yang bersih dan profesional. Saat pengguna mengarahkan kursor, batas gradien yang halus muncul, memberikan umpan balik visual yang elegan tanpa mengganggu. Efek ini dibuat murni dengan CSS, menjadikannya ringan dan mudah diimplementasikan.
        </p>
        <CodePreview code={gradientBorderCardCode}>
          <div className="flex w-full items-center justify-center rounded-lg bg-slate-100 p-12 dark:bg-slate-950">
            <div className="group relative max-w-sm cursor-pointer rounded-xl border border-transparent bg-white p-1 shadow-md transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-300/20 dark:border-transparent dark:bg-slate-900 dark:hover:shadow-slate-700/20">
              <div className="absolute -inset-px z-0 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 rounded-lg bg-white p-6 dark:bg-slate-900">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Gradient Border Card</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">This card reveals a soft gradient border on hover, adding a professional and modern touch to your UI.</p>
              </div>
            </div>
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}