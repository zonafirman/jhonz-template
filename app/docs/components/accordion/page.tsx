'use client';
import RightSidebar from '@/components/docs/RightSideBar';
import React, { useState, MouseEvent } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';
import Link from 'next/link';

const pageHeadings = [
  { title: 'Accordion', slug: 'accordion', level: 1 },
  { title: 'Simple', slug: 'simple-accordion', level: 2 },
  { title: 'Always Open', slug: 'always-open', level: 2 },
  { title: 'Flush', slug: 'flush-accordion', level: 2 },
  { title: 'With Icons', slug: 'accordion-with-icons', level: 2 },
  { title: 'Styled', slug: 'styled-accordion', level: 2 },
  { title: 'Modern', slug: 'modern-accordion', level: 2 },
  { title: 'Gradient Accent', slug: 'gradient-accent-accordion', level: 2 },
  { title: 'Spotlight', slug: 'spotlight-accordion', level: 2 },
  { title: 'Timeline', slug: 'timeline-accordion', level: 2 },
  { title: 'Kinetic', slug: 'kinetic-accordion', level: 2 },
  { title: 'Bento Grid', slug: 'bento-grid-accordion', level: 2 },
];

const simpleAccordionCode = `<div class="w-full max-w-md rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
  {/* Accordion Item 1 */}
  <div class="border-b border-slate-200 dark:border-slate-800">
    <button class="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-800 dark:text-white">
      <span>Accordion Item #1</span>
      <svg class="h-5 w-5 shrink-0 transition-transform duration-200">...</svg>
    </button>
    <div class="overflow-hidden transition-all duration-300 ease-in-out">
      <div class="p-4 pt-0 text-slate-600 dark:text-slate-400">
        <strong>This is the first item's accordion body.</strong> It is shown by default...
      </div>
    </div>
  </div>
  {/* Accordion Item 2 */}
  ...
</div>`;

const alwaysOpenAccordionCode = `<div class="w-full max-w-md rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
  {/* Items are independent. Clicking one doesn't close others. */}
  ...
</div>`;

const flushAccordionCode = `<div class="w-full max-w-md">
  {/* Accordion Item 1 (no outer border, rounded corners on first/last) */}
  <div class="border-b border-slate-200 dark:border-slate-800">
    ...
  </div>
  ...
</div>`;

const withIconsAccordionCode = `<div class="w-full max-w-md rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
  <div class="border-b border-slate-200 dark:border-slate-800">
    <button class="flex w-full items-center justify-between p-4 font-semibold">
      <span class="flex items-center">
        <svg class="mr-2 h-5 w-5 text-indigo-500">...</svg>
        <span>Accordion with Icon</span>
      </span>
      <svg class="h-5 w-5 shrink-0">...</svg>
    </button>
    ...
  </div>
  ...
</div>`;

const styledAccordionCode = `<div class="w-full max-w-md space-y-2">
  {/* Item 1 */}
  <div class="rounded-lg bg-slate-100 dark:bg-slate-800">
    <button class="flex w-full items-center justify-between p-4 font-bold text-indigo-600 dark:text-indigo-400">
      <span>Styled Accordion</span>
      <svg>...</svg>
    </button>
    <div class="p-4 pt-0 text-slate-600 dark:text-slate-300">
      ...
    </div>
  </div>
  ...
</div>`;

const modernAccordionCode = `<div class="w-full max-w-md space-y-3">
  {/* Item 1 */}
  <div class="border-l-2 border-transparent transition-colors duration-300 has-[button:focus-visible]:border-indigo-500 has-[button:hover]:border-indigo-500">
    <button class="flex w-full items-center justify-between bg-slate-100 p-4 text-left font-medium text-slate-800 transition-colors duration-300 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:focus-visible:ring-offset-slate-900">
      <span>Modern Accordion Item</span>
      <svg>...</svg>
    </button>
    <div class="bg-slate-50 p-4 dark:bg-slate-800/50">
      ...
    </div>
  </div>
  {/* ... other items */}
</div>
`;

const gradientAccentAccordionCode = `<div class="w-full max-w-md space-y-2">
  {/* Item 1 */}
  <div class="rounded-lg bg-white shadow-sm dark:bg-slate-900">
    <button class="flex w-full items-center justify-between p-4 font-semibold text-slate-800 dark:text-white">
      <span>Gradient Accent Accordion</span>
      <svg>...</svg>
    </button>
    <div class="overflow-hidden transition-all duration-300 ease-in-out">
      <div class="border-t border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 p-4 dark:border-slate-800 dark:from-slate-900 dark:to-slate-800/50">
        <div class="text-slate-600 dark:text-slate-300">
          ...
        </div>
      </div>
    </div>
  </div>
  {/* ... other items */}
</div>
`;

const spotlightAccordionCode = `<div class="w-full max-w-md space-y-2">
  {/* Item 1 */}
  <div class="spotlight-accordion-item group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
    <div class="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="background: radial-gradient(300px circle at var(--x) var(--y), rgba(255, 255, 255, 0.05), transparent 80%);"></div>
    <button class="flex w-full items-center justify-between p-4 text-left font-semibold text-white">
      <span>Spotlight Accordion</span>
      <svg>...</svg>
    </button>
    <div class="p-4 pt-0 text-slate-400">
      ...
    </div>
  </div>
  {/* ... other items */}
</div>

<!-- Script to handle the spotlight effect -->
<script>
  // Add mousemove event listener to each item
</script>
`;

const timelineAccordionCode = `<div class="w-full max-w-md">
  <div class="relative space-y-4">
    <div class="absolute left-4 top-5 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>
    {/* Item 1 */}
    <div class="relative pl-10">
      <div class="absolute -left-1.5 top-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-900">
        <div class="h-3 w-3 rounded-full bg-indigo-500"></div>
      </div>
      <button class="w-full text-left font-semibold text-slate-800 dark:text-white">Phase 1: Discovery</button>
      <div class="mt-1 text-sm text-slate-500 dark:text-slate-400">January 2025</div>
      <div class="mt-2 text-slate-600 dark:text-slate-400">
        Initial research, requirement gathering, and project planning.
      </div>
    </div>
    {/* Item 2 */}
    ...
    {/* Item 3 */}
    ...
  </div>
</div>
`;

const kineticAccordionCode = `<div class="w-full max-w-md space-y-2">
  {/* Item 1 */}
  <div class="group rounded-lg bg-slate-100 dark:bg-slate-800">
    <button class="flex w-full items-center justify-between p-4 font-semibold text-slate-800 dark:text-white">
      <span class="flex items-center">
        <svg class="mr-3 h-6 w-6 text-purple-500 transition-transform duration-300 group-aria-expanded:rotate-90">...</svg>
        <span>Kinetic Accordion</span>
      </span>
      <svg class="h-5 w-5 shrink-0 transition-transform duration-300 group-aria-expanded:-rotate-180">...</svg>
    </button>
    <div class="overflow-hidden transition-all duration-500 ease-in-out">
      <div class="px-4 pb-4 text-slate-600 dark:text-slate-300">
        This accordion features kinetic (motion-based) effects. The icons animate on open/close, and the content reveals with a smooth, slightly eased transition, creating a professional and dynamic user experience.
      </div>
    </div>
  </div>
  {/* ... other items */}
</div>
`;

const bentoGridAccordionCode = `<div class="w-full max-w-lg space-y-3">
  {/* Item 1 */}
  <div class="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
    <button class="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-800 dark:text-white">
      <span>Project Alpha</span>
      <svg>...</svg>
    </button>
    <div class="grid grid-cols-3 gap-px border-t border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800">
      <div class="col-span-3 bg-white p-4 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
        This is the main content area for Project Alpha, showing detailed information.
      </div>
      <div class="bg-white p-3 text-center dark:bg-slate-900">
        <div class="text-sm font-medium text-slate-500 dark:text-slate-400">Status</div>
        <div class="mt-1 font-semibold text-green-600 dark:text-green-400">Active</div>
      </div>
      <div class="bg-white p-3 text-center dark:bg-slate-900">
        <div class="text-sm font-medium text-slate-500 dark:text-slate-400">Due Date</div>
        <div class="mt-1 font-semibold text-slate-700 dark:text-slate-300">2025-10-15</div>
      </div>
      <div class="bg-white p-3 text-center dark:bg-slate-900">
        <button class="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400">View Details</button>
      </div>
    </div>
  </div>
</div>`;


const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick,
  icon,
  className = '',
  buttonClassName = '',
  contentClassName = '',
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
}) => (
  <div className={className}>
    <button onClick={onClick} className={`flex w-full items-center justify-between p-4 text-left font-semibold text-slate-800 dark:text-white ${buttonClassName}`}>
      <span className="flex items-center">
        {icon}
        {title}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
      <div className="overflow-hidden">
        <div className={`p-4 pt-0 text-slate-600 dark:text-slate-400 ${contentClassName}`}>{children}</div>
      </div>
    </div>
  </div>
);

export default function AccordionPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('item-1');
  const [alwaysOpen, setAlwaysOpen] = useState<string[]>(['item-1']);

  const handleToggle = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleAlwaysOpenToggle = (id: string) => {
    setAlwaysOpen((prev: string[]) => (prev.includes(id) ? prev.filter((i: string) => i !== id) : [...prev, id]));
  };

  const handleSpotlightMove = (e: MouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    item.style.setProperty('--x', `${x}px`);
    item.style.setProperty('--y', `${y}px`);
  };

  const accordionItems = [
    { id: 'item-1', title: 'Accordion Item #1', content: "This is the body of the first accordion item. This content can contain text, images, or other components. It provides a great way to organize information in a compact layout." },
    { id: 'item-2', title: 'Accordion Item #2', content: "This is the body of the second accordion item. By default, this item is hidden until the user clicks on it. This behavior helps keep the interface clean and organized." },
    { id: 'item-3', title: 'Accordion Item #3', content: "This is the body of the third accordion item. Accordions are very useful for FAQ sections, feature lists, or whenever you need to present a lot of information in a limited space." },
  ];

  return (
    <div className="flex w-full">
      <article className="min-w-0 flex-1 pe-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/docs" className="block transition hover:text-slate-700">
            Documentation
          </Link>
          <span className="select-none text-slate-400">/</span>
          <span className="font-semibold text-slate-700">Accordion</span>
        </nav>

        <h1 id="accordion" className="scroll-mt-20 text-4xl font-bold">
          Accordion
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          An accordion is a user interface component that allows you to show and hide sections of content. It&apos;s particularly useful for FAQ sections, feature lists, or whenever you need to present a lot of information in a limited space.
        </p>

        <h2 id="simple-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Simple Accordion
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A basic accordion where only one item can be open at a time. Clicking another item will close the currently open one.
        </p>
        <CodePreview code={simpleAccordionCode}>
          <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            {accordionItems.map((item, index) => (
              <AccordionItem key={item.id} title={item.title} isOpen={openAccordion === item.id} onClick={() => handleToggle(item.id)} className={index < accordionItems.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </CodePreview>

        <h2 id="always-open" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Always Open
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          In this variant, each accordion item can be opened or closed independently. Opening one item will not close the others.
        </p>
        <CodePreview code={alwaysOpenAccordionCode}>
          <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            {accordionItems.map((item, index) => (
              <AccordionItem key={item.id} title={item.title} isOpen={alwaysOpen.includes(item.id)} onClick={() => handleAlwaysOpenToggle(item.id)} className={index < accordionItems.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </CodePreview>

        <h2 id="flush-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Flush Accordion
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Remove the default `border` and `border-radius` to create an accordion that is edge-to-edge with its parent container.
        </p>
        <CodePreview code={flushAccordionCode}>
          <div className="w-full max-w-md">
            {accordionItems.map((item, index) => (
              <AccordionItem key={item.id} title={item.title} isOpen={openAccordion === item.id} onClick={() => handleToggle(item.id)} className={`border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 ${index === 0 ? 'rounded-t-lg' : ''} ${index === accordionItems.length - 1 ? 'rounded-b-lg border-b-0' : ''}`}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </CodePreview>

        <h2 id="accordion-with-icons" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Accordion with Icons
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Add an icon next to the accordion title to provide additional visual context.
        </p>
        <CodePreview code={withIconsAccordionCode}>
          <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <AccordionItem title="Accordion with Icon" isOpen={openAccordion === 'icon-item'} onClick={() => handleToggle('icon-item')} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-indigo-500"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5 4.5V6m0 0L10.5 8.25M13.5 6l3 2.25" /></svg>} className="border-b border-slate-200 dark:border-slate-800" contentClassName="text-slate-600 dark:text-slate-400">
              You can add any icon here to enhance visual appeal and provide a hint about the content within.
            </AccordionItem>
          </div>
        </CodePreview>

        <h2 id="styled-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Styled Accordion
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Customize the look and feel of the accordion to match your design. This example uses a different background for each item and an accent color for the title.
        </p>
        <CodePreview code={styledAccordionCode}>
          <div className="w-full max-w-md space-y-2">
            {accordionItems.map(item => (
              <AccordionItem key={item.id} title={item.title} isOpen={openAccordion === item.id} onClick={() => handleToggle(item.id)} className="rounded-lg bg-slate-100 dark:bg-slate-800" buttonClassName="text-indigo-600 dark:text-indigo-400 font-bold" contentClassName="text-slate-600 dark:text-slate-300">
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </CodePreview>

        <h2 id="modern-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Modern Accordion
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          A sleek, professional design for 2025. It features a clean separation between items, a left border accent on hover/focus, and distinct button/content backgrounds for a layered feel.
        </p>
        <CodePreview code={modernAccordionCode}>
          <div className="w-full max-w-md space-y-3">
            {accordionItems.map(item => (
              <div key={item.id} className="border-l-2 border-transparent transition-colors duration-300 has-[button:focus-visible]:border-indigo-500 has-[button:hover]:border-indigo-500">
                <AccordionItem
                  title={item.title}
                  isOpen={openAccordion === item.id}
                  onClick={() => handleToggle(item.id)}
                  buttonClassName="bg-slate-100 text-slate-800 font-medium transition-colors duration-300 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:focus-visible:ring-offset-slate-900"
                  contentClassName="bg-slate-50 dark:bg-slate-800/50"
                >{item.content}</AccordionItem>
              </div>
            ))}
          </div>
        </CodePreview>

        <h2 id="gradient-accent-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Gradient Accent
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          This accordion uses a subtle gradient background in the content area and a clean, card-like appearance for each item. It&apos;s a modern and professional design that adds a touch of depth and elegance.
        </p>
        <CodePreview code={gradientAccentAccordionCode}>
          <div className="w-full max-w-md space-y-2">
            {accordionItems.map(item => (
              <AccordionItem
                key={item.id}
                title={item.title}
                isOpen={openAccordion === item.id}
                onClick={() => handleToggle(item.id)}
                className="rounded-lg bg-white shadow-sm dark:bg-slate-900"
                contentClassName="border-t border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 !p-4 dark:border-slate-800 dark:from-slate-900 dark:to-slate-800/50 !text-slate-600 dark:!text-slate-300"
              >{item.content}</AccordionItem>
            ))}
          </div>
        </CodePreview>

        <h2 id="spotlight-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Spotlight Accordion
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          This accordion uses a spotlight effect that follows the cursor, creating an engaging and interactive experience. The subtle glow highlights the active item, making it perfect for dark-themed interfaces that need a touch of modern elegance.
        </p>
        <CodePreview code={spotlightAccordionCode}>
          <div className="w-full max-w-md space-y-2">
            {accordionItems.map(item => (
              <div
                key={item.id}
                className="spotlight-accordion-item group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900"
                onMouseMove={handleSpotlightMove}
              >
                <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(300px circle at var(--x) var(--y), rgba(255, 255, 255, 0.05), transparent 80%)` }}></div>
                <AccordionItem
                  title={item.title}
                  isOpen={openAccordion === item.id}
                  onClick={() => handleToggle(item.id)}
                >{item.content}</AccordionItem>
              </div>
            ))}
          </div>
        </CodePreview>

        <h2 id="timeline-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Timeline Accordion
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;Timeline Accordion&quot; presents information in a vertical timeline format. Each item represents a point in time, and clicking it reveals more details. This design is perfect for showcasing project milestones, company history, or any chronological data in a professional and visually engaging way.
        </p>
        <CodePreview code={timelineAccordionCode}>
          <div className="w-full max-w-md">
            <div className="relative space-y-8">
              <div className="absolute left-4 top-5 h-full w-0.5 bg-slate-200 dark:bg-slate-700" />
              {[
                { id: 'timeline-1', title: 'Phase 1: Discovery', date: 'January 2025', content: 'Initial research, requirement gathering, and project planning to define the scope and objectives.' },
                { id: 'timeline-2', title: 'Phase 2: Design & Prototyping', date: 'February 2025', content: 'Creating wireframes, mockups, and interactive prototypes to visualize the final product and user experience.' },
                { id: 'timeline-3', title: 'Phase 3: Development & Launch', date: 'March 2025', content: 'Coding, testing, and deploying the application. Final launch and post-launch support.' },
              ].map(item => (
                <div key={item.id} className="relative pl-10">
                  <div className="absolute -left-1.5 top-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-900">
                    <div className={`h-3 w-3 rounded-full ${openAccordion === item.id ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-600'}`} />
                  </div>
                  <button onClick={() => handleToggle(item.id)} className="w-full text-left">
                    <div className="font-semibold text-slate-800 dark:text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.date}</div>
                  </button>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="mt-2 text-slate-600 dark:text-slate-400">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CodePreview>

        <h2 id="kinetic-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Kinetic Accordion
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The &quot;Kinetic Accordion&quot; is a modern and professional design for 2025, focusing on subtle motion to enhance user experience. When an item is opened, both the leading and trailing icons animate smoothly. The content panel reveals itself with a gentle easing effect, creating a sense of fluidity and responsiveness.
        </p>
        <CodePreview code={kineticAccordionCode}>
          <div className="w-full max-w-md space-y-2">
            {accordionItems.map(item => (
              <div key={item.id} className="group rounded-lg bg-slate-100 dark:bg-slate-800" data-state={openAccordion === item.id ? 'open' : 'closed'}>
                <AccordionItem
                  title={item.title}
                  isOpen={openAccordion === item.id}
                  onClick={() => handleToggle(item.id)}
                  icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`mr-3 h-6 w-6 text-purple-500 transition-transform duration-300 ${openAccordion === item.id ? 'rotate-90' : ''}`}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>}
                  buttonClassName="font-semibold"
                  contentClassName="!px-4 !pb-4 text-slate-600 dark:text-slate-300"
                >{item.content}</AccordionItem>
              </div>
            ))}
          </div>
        </CodePreview>

        <h2 id="bento-grid-accordion" className="mt-12 scroll-mt-20 text-3xl font-bold">
          Bento Grid Accordion
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Inspired by the modern bento layout trend, this accordion presents its content in a structured grid. When expanded, it reveals not just the main content but also related data points or actions in separate, organized cells. This is perfect for displaying complex information like project statuses or feature details in a clean, professional, and easy-to-scan format for 2025.
        </p>
        <CodePreview code={bentoGridAccordionCode}>
          <div className="w-full max-w-lg space-y-3">
            {[
              { id: 'bento-1', title: 'Project Alpha', status: 'Active', statusColor: 'text-green-600 dark:text-green-400', dueDate: '2025-10-15', content: 'This is the main content area for Project Alpha, showing detailed information about its progress, goals, and team members.' },
              { id: 'bento-2', title: 'Project Beta', status: 'Pending', statusColor: 'text-yellow-600 dark:text-yellow-400', dueDate: '2025-11-01', content: 'Project Beta is currently in the planning phase. Resources are being allocated, and the project kick-off is scheduled for next month.' },
            ].map(item => (
              <div key={item.id} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
                <button onClick={() => handleToggle(item.id)} className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-800 dark:text-white">
                  <span>{item.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`h-5 w-5 shrink-0 transition-transform duration-200 ${openAccordion === item.id ? 'rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-3 gap-px border-t border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800">
                      <div className="col-span-3 bg-white p-4 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                        {item.content}
                      </div>
                      <div className="bg-white p-3 text-center dark:bg-slate-900">
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Status</div>
                        <div className={`mt-1 font-semibold ${item.statusColor}`}>{item.status}</div>
                      </div>
                      <div className="bg-white p-3 text-center dark:bg-slate-900">
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Due Date</div>
                        <div className="mt-1 font-semibold text-slate-700 dark:text-slate-300">{item.dueDate}</div>
                      </div>
                      <div className="bg-white p-3 text-center dark:bg-slate-900"><button className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400">View Details</button></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CodePreview>
      </article>

      <RightSidebar headings={pageHeadings} />
    </div>
  );
}