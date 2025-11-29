'use client';

import React, { useState, MouseEvent, useId } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

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
      <span class="flex items-center text-slate-800 dark:text-white">
        <svg class="mr-2 h-5 w-5 text-indigo-500">...</svg>
        <span>Accordion with Icon</span>
      </span>
      <svg class="h-5 w-5 shrink-0">...</svg>
    </button>
    <div class="p-4 pt-0 text-slate-600 dark:text-slate-400">...</div>
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
    <div class="p-4 pt-0 text-white">
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

const frostedAccordionCode = `<div class="relative w-full max-w-md rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 p-8">
  <div class="space-y-2">
    {/* Item 1 */}
    <div class="overflow-hidden rounded-lg bg-white/30 backdrop-blur-md transition-all duration-300 dark:bg-slate-800/30">
      <button class="flex w-full items-center justify-between p-4 font-semibold text-white">
        <span>Frosted Glass Accordion</span>
        <svg>...</svg>
      </button>
      <div class="overflow-hidden transition-all duration-300 ease-in-out">
        <div class="p-4 pt-0 text-white/80">
          ...
        </div>
      </div>
    </div>
    {/* ... other items */}
  </div>
</div>`;

const insetAccordionCode = `<div class="w-full max-w-md space-y-2 rounded-xl bg-slate-100 p-2 dark:bg-slate-800">
  {/* Item 1 */}
  <div class="rounded-lg bg-white shadow-sm transition-all duration-300 dark:bg-slate-900">
    <button class="flex w-full items-center justify-between p-4 font-semibold text-slate-800 dark:text-white">
      <span>Inset Accordion</span>
      <svg>...</svg>
    </button>
    <div class="overflow-hidden transition-all duration-300 ease-in-out">
      <div class="p-4 pt-0 text-slate-600 dark:text-slate-400">
        ...
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
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
}) => {
  const id = useId();
  const headingId = `accordion-heading-${id}`;
  const contentId = `accordion-content-${id}`;

  return (
    <div className={className}>
      <h3 id={headingId} className="m-0">
        <button onClick={onClick} aria-expanded={isOpen} aria-controls={contentId} className={`flex w-full items-center justify-between p-4 text-left font-semibold text-slate-800 dark:text-white ${buttonClassName}`}>
          <span className="flex items-center">
            {icon}
            {title}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </h3>
      <div id={contentId} role="region" aria-labelledby={headingId} className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className={`p-4 pt-0 text-slate-600 dark:text-slate-400 ${contentClassName}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default function AccordionClientComponent() {
  // State untuk setiap grup accordion agar independen
  const [simpleOpen, setSimpleOpen] = useState<string | null>('item-1');
  const [alwaysOpen, setAlwaysOpen] = useState<string[]>(['item-1']);
  const [flushOpen, setFlushOpen] = useState<string | null>(null);
  const [iconOpen, setIconOpen] = useState<string | null>(null);
  const [styledOpen, setStyledOpen] = useState<string | null>(null);
  const [modernOpen, setModernOpen] = useState<string | null>(null);
  const [gradientOpen, setGradientOpen] = useState<string | null>(null);
  const [spotlightOpen, setSpotlightOpen] = useState<string | null>(null);
  const [timelineOpen, setTimelineOpen] = useState<string | null>('timeline-1');
  const [kineticOpen, setKineticOpen] = useState<string | null>(null);
  const [bentoOpen, setBentoOpen] = useState<string | null>(null);
  const [frostedOpen, setFrostedOpen] = useState<string | null>(null);
  const [insetOpen, setInsetOpen] = useState<string | null>(null);

  // Generic toggle handler
  const handleToggle = React.useCallback((setter: React.Dispatch<React.SetStateAction<string | null>>, id: string) => {
    setter(prev => (prev === id ? null : id));
  }, []);

  const handleAlwaysOpenToggle = React.useCallback((id: string) => {
    setAlwaysOpen((prev: string[]) => (prev.includes(id) ? prev.filter((i: string) => i !== id) : [...prev, id]));
  }, []);

  const handleSpotlightMove = React.useCallback((e: MouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    item.style.setProperty('--x', `${x}px`);
    item.style.setProperty('--y', `${y}px`);
  }, []);

  const accordionItems = [
    { id: 'item-1', title: 'Accordion Item #1', content: "This is the body of the first accordion item. This content can contain text, images, or other components. It provides a great way to organize information in a compact layout." },
    { id: 'item-2', title: 'Accordion Item #2', content: "This is the body of the second accordion item. By default, this item is hidden until the user clicks on it. This behavior helps keep the interface clean and organized." },
    { id: 'item-3', title: 'Accordion Item #3', content: "This is the body of the third accordion item. Accordions are very useful for FAQ sections, feature lists, or whenever you need to present a lot of information in a limited space." },
  ];

  const timelineItems = [
    { id: 'timeline-1', title: 'Phase 1: Discovery', date: 'January 2025', content: 'Initial research, requirement gathering, and project planning to define the scope and objectives.' },
    { id: 'timeline-2', title: 'Phase 2: Design & Prototyping', date: 'February 2025', content: 'Creating wireframes, mockups, and interactive prototypes to visualize the final product and user experience.' },
    { id: 'timeline-3', title: 'Phase 3: Development & Launch', date: 'March 2025', content: 'Coding, testing, and deploying the application. Final launch and post-launch support.' },
  ];

  const bentoItems = [
    { id: 'bento-1', title: 'Project Alpha', status: 'Active', statusColor: 'text-green-600 dark:text-green-400', dueDate: '2025-10-15', content: 'This is the main content area for Project Alpha, showing detailed information about its progress, goals, and team members.' },
    { id: 'bento-2', title: 'Project Beta', status: 'Pending', statusColor: 'text-yellow-600 dark:text-yellow-400', dueDate: '2025-11-01', content: 'Project Beta is currently in the planning phase. Resources are being allocated, and the project kick-off is scheduled for next month.' },
  ];

  const accordionSections = [
    { id: 'simple-accordion', title: 'Simple Accordion', description: 'A basic accordion where only one item can be open at a time. Clicking another item will close the currently open one.', code: simpleAccordionCode,
    content: (
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        {accordionItems.map((item, index) => (
          <AccordionItem key={item.id} title={item.title} isOpen={simpleOpen === item.id} onClick={() => handleToggle(setSimpleOpen, item.id)} className={index < accordionItems.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''}>
            {item.content}
          </AccordionItem>
        ))}
      </div>
    )},
    { id: 'always-open', title: 'Always Open', description: 'In this variant, each accordion item can be opened or closed independently. Opening one item will not close the others.', code: alwaysOpenAccordionCode,
    content: (
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        {accordionItems.map((item, index) => (
          <AccordionItem key={item.id} title={item.title} isOpen={alwaysOpen.includes(item.id)} onClick={() => handleAlwaysOpenToggle(item.id)} className={index < accordionItems.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''}>
            {item.content}
          </AccordionItem>
        ))}
      </div>
    )},
    { id: 'flush-accordion', title: 'Flush Accordion', description: 'Remove the default `border` and `border-radius` to create an accordion that is edge-to-edge with its parent container.', code: flushAccordionCode,
    content: (
      <div className="w-full max-w-md">
        {accordionItems.map((item, index) => (
          <AccordionItem key={item.id} title={item.title} isOpen={flushOpen === item.id} onClick={() => handleToggle(setFlushOpen, item.id)} className={`border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 ${index === 0 ? 'rounded-t-lg' : ''} ${index === accordionItems.length - 1 ? 'rounded-b-lg border-b-0' : ''}`}>
            {item.content}
          </AccordionItem>
        ))}
      </div>
    )},
    { id: 'accordion-with-icons', title: 'Accordion with Icons', description: 'Add an icon next to the accordion title to provide additional visual context.', code: withIconsAccordionCode,
    content: (
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <AccordionItem
          key="icon-item"
          title="Accordion with Icon"
          isOpen={iconOpen === 'icon-item'}
          onClick={() => handleToggle(setIconOpen, 'icon-item')}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-indigo-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          }
          className="border-b border-slate-200 dark:border-slate-800"
        >
          You can add any icon here to enhance visual appeal and provide a hint about the content within.
        </AccordionItem>
      </div>
    )},
    { id: 'styled-accordion', title: 'Styled Accordion', description: 'Customize the look and feel of the accordion to match your design. This example uses a different background for each item and an accent color for the title.', code: styledAccordionCode,
    content: (
      <div className="w-full max-w-md space-y-2">
        {accordionItems.map(item => (
          <AccordionItem key={item.id} title={item.title} isOpen={styledOpen === item.id} onClick={() => handleToggle(setStyledOpen, item.id)} className="rounded-lg bg-slate-100 dark:bg-slate-800" buttonClassName="text-indigo-600 dark:text-indigo-400 font-bold" contentClassName="text-slate-600 dark:text-slate-300">
            {item.content}
          </AccordionItem>
        ))}
      </div>
    )},
    { id: 'modern-accordion', title: 'Modern Accordion', description: 'A sleek, professional design for 2025. It features a clean separation between items, a left border accent on hover/focus, and distinct button/content backgrounds for a layered feel.', code: modernAccordionCode,
    content: (
      <div className="w-full max-w-md space-y-3">
        {accordionItems.map(item => (
          <div key={item.id} className="border-l-2 border-transparent transition-colors duration-300 has-[button:focus-visible]:border-indigo-500 has-[button:hover]:border-indigo-500">
            <AccordionItem
              title={item.title}
              isOpen={modernOpen === item.id}
              onClick={() => handleToggle(setModernOpen, item.id)}
              buttonClassName="bg-slate-100 text-slate-800 font-medium transition-colors duration-300 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:focus-visible:ring-offset-slate-900"
              contentClassName="bg-slate-50 dark:bg-slate-800/50"
            >{item.content}</AccordionItem>
          </div>
        ))}
      </div>
    )},
    { id: 'gradient-accent-accordion', title: 'Gradient Accent', description: "This accordion uses a subtle gradient background in the content area and a clean, card-like appearance for each item. It's a modern and professional design that adds a touch of depth and elegance.", code: gradientAccentAccordionCode,
    content: (
      <div className="w-full max-w-md space-y-2">
        {accordionItems.map(item => (
          <AccordionItem
            key={item.id}
            title={item.title}
            isOpen={gradientOpen === item.id}
            onClick={() => handleToggle(setGradientOpen, item.id)}
            className="rounded-lg bg-white shadow-sm dark:bg-slate-900"
            contentClassName="border-t border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 !p-4 dark:border-slate-800 dark:from-slate-900 dark:to-slate-800/50 !text-slate-600 dark:!text-slate-300"
          >{item.content}</AccordionItem>
        ))}
      </div>
    )},
    { id: 'spotlight-accordion', title: 'Spotlight Accordion', description: 'This accordion uses a spotlight effect that follows the cursor, creating an engaging and interactive experience. The subtle glow highlights the active item, making it perfect for dark-themed interfaces that need a touch of modern elegance.', code: spotlightAccordionCode,
    content: (
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
              isOpen={spotlightOpen === item.id}
              onClick={() => handleToggle(setSpotlightOpen, item.id)}
            >{item.content}</AccordionItem>
          </div>
        ))}
      </div>
    )},
    { id: 'timeline-accordion', title: 'Timeline Accordion', description: 'The "Timeline Accordion" presents information in a vertical timeline format. Each item represents a point in time, and clicking it reveals more details. This design is perfect for showcasing project milestones, company history, or any chronological data in a professional and visually engaging way.', code: timelineAccordionCode,
    content: (
      <div className="w-full max-w-md">
        <div className="relative space-y-8">
          <div className="absolute left-3 top-4 h-full w-0.5 bg-slate-200 dark:bg-slate-700" />
          {timelineItems.map(item => (
            <div key={item.id} className="relative pl-10">
              <AccordionItem
                isOpen={timelineOpen === item.id}
                onClick={() => handleToggle(setTimelineOpen, item.id)}
                className="-mt-4"
                buttonClassName="!p-0 !font-semibold"
                contentClassName="!p-0 !pt-2"
                icon={<div className="absolute -left-7 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-900"><div className={`h-3 w-3 rounded-full ${timelineOpen === item.id ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-600'}`} /></div>}
                title={
                  <div><div>{item.title}</div><div className="mt-1 text-sm font-normal text-slate-500 dark:text-slate-400">{item.date}</div></div>
                }
              >{item.content}</AccordionItem>
            </div>
          ))}
        </div>
      </div>
    )},
    { id: 'kinetic-accordion', title: 'Kinetic Accordion', description: 'The "Kinetic Accordion" is a modern and professional design for 2025, focusing on subtle motion to enhance user experience. When an item is opened, both the leading and trailing icons animate smoothly. The content panel reveals itself with a gentle easing effect, creating a sense of fluidity and responsiveness.', code: kineticAccordionCode,
    content: (
      <div className="w-full max-w-md space-y-2">
        {accordionItems.map(item => (
          <div key={item.id} className="group rounded-lg bg-slate-100 dark:bg-slate-800" data-state={kineticOpen === item.id ? 'open' : 'closed'}>
            <AccordionItem
              title={item.title}
              isOpen={kineticOpen === item.id}
              onClick={() => handleToggle(setKineticOpen, item.id)}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`mr-3 h-6 w-6 text-purple-500 transition-transform duration-300 ${kineticOpen === item.id ? 'rotate-90' : ''}`}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>}
              buttonClassName="font-semibold"
              contentClassName="!px-4 !pb-4 text-slate-600 dark:text-slate-300"
            >{item.content}</AccordionItem>
          </div>
        ))}
      </div>
    )},
    { id: 'bento-grid-accordion', title: 'Bento Grid Accordion', description: 'Inspired by the modern bento layout trend, this accordion presents its content in a structured grid. When expanded, it reveals not just the main content but also related data points or actions in separate, organized cells. This is perfect for displaying complex information like project statuses or feature details in a clean, professional, and easy-to-scan format for 2025.', code: bentoGridAccordionCode,
    content: (
      <div className="w-full max-w-lg space-y-3">
        {bentoItems.map(item => (
          <AccordionItem
            key={item.id}
            title={item.title}
            isOpen={bentoOpen === item.id}
            onClick={() => handleToggle(setBentoOpen, item.id)}
            className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50"
            contentClassName="!p-0"
          >
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
              <div className="bg-white p-3 text-center dark:bg-slate-900">
                <button className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400">View Details</button>
              </div>
            </div>
          </AccordionItem>
        ))}
      </div>
    )},
    { id: 'frosted-glass-accordion', title: 'Frosted Glass Accordion', description: 'Achieve a modern, glassmorphism effect with the "Frosted Glass Accordion." This design uses a semi-transparent, blurred background (`backdrop-blur`) to create a sense of depth. It\'s highly effective when placed over a colorful or image-based background, making it a professional and stylish choice for 2025.', code: frostedAccordionCode,
    content: (
      <div className="flex w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-r from-purple-400 to-indigo-500 p-8">
        <div className="w-full space-y-2">
          {accordionItems.map(item => (
            <AccordionItem
              key={item.id}
              title={item.title}
              isOpen={frostedOpen === item.id}
              onClick={() => handleToggle(setFrostedOpen, item.id)}
              className="overflow-hidden rounded-lg bg-white/30 backdrop-blur-md transition-all duration-300 dark:bg-slate-800/30"
              contentClassName="!text-white/80"
            >{item.content}</AccordionItem>
          ))}
        </div>
      </div>
    )},
    { id: 'inset-accordion', title: 'Inset Accordion', description: 'Desain modern untuk 2025 ini menggunakan layout "inset" di mana item-item akordeon ditempatkan di dalam sebuah kontainer dengan latar belakang yang kontras. Setiap item memiliki `box-shadow` halus, menciptakan efek mengambang yang elegan dan memberikan kedalaman visual.', code: insetAccordionCode,
    content: (
      <div className="w-full max-w-md space-y-2 rounded-xl bg-slate-100 p-2 dark:bg-slate-800">
        {accordionItems.map(item => (
          <AccordionItem
            key={item.id}
            title={item.title}
            isOpen={insetOpen === item.id}
            onClick={() => handleToggle(setInsetOpen, item.id)}
            className="rounded-lg bg-white shadow-sm transition-all duration-300 dark:bg-slate-900"
          >{item.content}</AccordionItem>
        ))}
      </div>
    )},
  ];

  return (
    <>
      {accordionSections.map(section => (
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