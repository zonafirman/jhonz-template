'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- TYPE DEFINITIONS ---

/**
 * Represents a standard navigation link in the sidebar.
 */
type NavLinkData = {
  type: 'link';
  href: string;
  label: string;
};

/**
 * Represents a collapsible section in the sidebar, containing child links.
 */
type CollapsibleSectionData = {
  type: 'collapsible';
  id: string;
  label: string;
  children: { href: string; label: string }[];
};

/**
 * Union type for any item that can be rendered in the sidebar.
 */
export type SidebarItem = NavLinkData | CollapsibleSectionData;

// --- SIDEBAR DATA ---

/**
 * Data structure for the sidebar navigation items.
 * This array defines the content and structure of the sidebar.
 */
export const sidebarItems: SidebarItem[] = [
  {
    type: 'collapsible',
    id: 'get-started',
    label: 'Get Started',
    children: [
      { href: '/docs/introduction', label: 'Introduction' },
      { href: '/docs/installation', label: 'Installation' },
    ],
  },
  {
    type: 'collapsible',
    id: 'components',
    label: 'Components',
    children: [
      { href: '/docs/components/accordion', label: 'Accordion' },
      { href: '/docs/components/alert', label: 'Alert' },
      { href: '/docs/components/avatar', label: 'Avatar' },
      { href: '/docs/components/back-to-top-button', label: 'Back To Top Button' },
      { href: '/docs/components/badge', label: 'Badge' }, { href: '/docs/components/breadchrumb', label: 'Breadcrumb' },
      { href: '/docs/components/button', label: 'Button' },
      { href: '/docs/components/card', label: 'Card' },
      { href: '/docs/components/checkbox', label: 'Checkbox' },
      { href: '/docs/components/chip', label: 'Chip' },
      { href: '/docs/components/date-picker', label: 'Date Picker' },
      { href: '/docs/components/divider', label: 'Divider' },
      { href: '/docs/components/dropdown', label: 'Dropdown' },
      { href: '/docs/components/file-upload', label: 'File Upload' },
      { href: '/docs/components/icon', label: 'Icon' },
      { href: '/docs/components/image', label: 'Image' },
      { href: '/docs/components/input', label: 'Input' },
      { href: '/docs/components/label', label: 'Label' },
      { href: '/docs/components/link', label: 'Link' },
      { href: '/docs/components/pagination', label: 'Pagination' },
      { href: '/docs/components/progress-bar', label: 'Progress Bar' },
      { href: '/docs/components/radio-button', label: 'Radio Button' },
      { href: '/docs/components/rating', label: 'Rating' },
      { href: '/docs/components/search-bar', label: 'Search Bar' },
      { href: '/docs/components/select', label: 'Select' },
      { href: '/docs/components/skeleton', label: 'Skeleton' },
      { href: '/docs/components/slider', label: 'Slider' },
      { href: '/docs/components/spinner', label: 'Spinner' },
      { href: '/docs/components/stepper', label: 'Stepper' },
      { href: '/docs/components/tabs', label: 'Tabs' },
      { href: '/docs/components/text-area', label: 'Text Area' },
      { href: '/docs/components/toast', label: 'Toast' },
      { href: '/docs/components/toggle', label: 'Toggle' },
      { href: '/docs/components/tooltip', label: 'Tooltip' },
    ],
  },
  {
    type: 'collapsible',
    id: 'sections',
    label: 'Sections',
    children: [
      { href: '/docs/sections/HeroSections', label: 'Hero Sections' },
      { href: '/docs/sections/FeatureSections', label: 'Feature Sections' },
      { href: '/docs/sections/TestimonialSections', label: 'Testimonial Sections' },
    ],
  },
] as const; // Using 'as const' for stricter typing

// Dynamically create a type for the open sections state from the sidebar data.
type OpenSections = {
  [K in (typeof sidebarItems)[number] as K extends { type: 'collapsible' } ? K['id'] : never]: boolean;
};

// --- HELPER FUNCTIONS ---

/**
 * Checks if the current pathname matches any of the child links in a section.
 * @param children - Array of child link objects.
 * @param pathname - The current URL pathname.
 * @returns `true` if the pathname is a child of the section.
 */
const isPathInChildren = (children: readonly { href: string }[], pathname: string | null) => children.some((child) => pathname?.startsWith(child.href));

// --- SUB-COMPONENTS ---

/**
 * Renders a single navigation link with active state styling.
 */
const SidebarLink = ({ href, label, pathname }: { href: string; label: string; pathname: string | null }) => {
  const isActive = pathname === href || pathname?.startsWith(`${href}/`);
  const linkClasses = `block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
    isActive ? 'bg-blue-100 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-100 font-medium'
  }`;

  return (
    <motion.div data-active={isActive} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
      <Link
        href={href}
        className={`relative ${linkClasses}`}
      >
        {isActive && <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600" />}
        {label}
      </Link>
    </motion.div>
  );
};

/**
 * Renders a collapsible section with its child links.
 */
const CollapsibleSection = ({ item, pathname, isOpen, onToggle }: { item: CollapsibleSectionData; pathname: string | null; isOpen: boolean; onToggle: () => void }) => {
  const isSectionActive = isPathInChildren(item.children, pathname);
  const buttonClasses = `flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors ${
    isSectionActive ? 'text-blue-600 font-bold' : 'text-slate-600 font-medium'
  } hover:bg-slate-100`;

  return (
    <div>
      <button onClick={onToggle} className={buttonClasses}>
        {item.label}
        <motion.div animate={{ rotate: isOpen ? 0 : -90 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="relative mt-2 pl-7">
              <div className="absolute left-3 top-0 h-full w-px bg-slate-200" />
              <AnimatePresence>
                {item.children.map((child) => {
                  const isChildActive = pathname === child.href || pathname?.startsWith(`${child.href}/`);
                  return (
                    <div key={child.href} className="relative">
                      {isChildActive && (
                        <motion.div
                          layoutId="active-child-indicator"
                          className="absolute left-[-17px] top-0 h-full w-0.5 bg-blue-600"
                        />
                      )}
                      <SidebarLink href={child.href} label={child.label} pathname={pathname} />
                    </div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN COMPONENT ---

/**
 * The main sidebar component for documentation navigation.
 * It's a client component that uses hooks to manage its state based on the current URL.
 */
export default function Sidebar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
 
  // Initialize state to be consistent on server and client to avoid hydration errors.
  const [openSections, setOpenSections] = useState<OpenSections>({} as OpenSections);
  const [isInitialised, setIsInitialised] = useState(false);
 
  // Determine the initial open state on the client side after hydration.
  useEffect(() => {
    const initialState: Partial<OpenSections> = {};
    const saved = localStorage.getItem('sidebarOpenSections');
    let savedState: Partial<OpenSections> = {};
    if (saved) {
      try {
        savedState = JSON.parse(saved);
      } catch (error) {
        console.error('Failed to parse sidebar state from localStorage', error);
      }
    }
    
    sidebarItems.forEach((item) => {
      if (item.type === 'collapsible') {
        const isActive = isPathInChildren(item.children, pathname);
        // If nothing is saved (first visit), open all. Otherwise, use saved state or open if active.
        initialState[item.id] = saved ? (isActive || savedState[item.id] === true) : true;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setOpenSections(initialState as OpenSections); // This is intentional to sync state post-hydration
    setIsInitialised(true);
  }, [pathname]); // Only re-run if the page path changes.
 
  // Save state to localStorage whenever it changes
  useEffect(() => {
    // Only save to localStorage after the initial state has been set on the client.
    // This prevents overwriting saved state with an empty object on initial load.
    if (isInitialised) {
      localStorage.setItem('sidebarOpenSections', JSON.stringify(openSections));
    }
  }, [openSections, isInitialised]);

  // Scroll to active link on page change
  useEffect(() => {
    if (isInitialised && navRef.current) {
      const activeElement = navRef.current.querySelector<HTMLElement>('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }, [pathname, isInitialised]);
  /**
   * Toggles the open/closed state of a collapsible section.
   * @param sectionId - The ID of the section to toggle.
   */
  const toggleSection = (sectionId: keyof OpenSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <aside className="fixed top-16 left-0 z-10 h-[calc(100vh-4rem)] w-64 border-r border-slate-200 bg-slate-50">
      <nav ref={navRef} className="h-full overflow-y-auto p-4 space-y-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sidebarItems.map((item) => {
          if (item.type === 'link') {
            return <SidebarLink key={item.href} href={item.href} label={item.label} pathname={pathname} />;
          }
          if (item.type === 'collapsible') {
            return (
              <CollapsibleSection
                key={item.id}
                item={item}
                pathname={pathname}
                isOpen={openSections[item.id]}
                onToggle={() => toggleSection(item.id)}
              />
            );
          }
          return null;
        })}
      </nav>
    </aside>
  );
}