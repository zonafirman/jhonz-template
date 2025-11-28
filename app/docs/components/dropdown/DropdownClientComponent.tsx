'use client';

import React, { useState, useEffect, useRef } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const simpleDropdownCode = `<div class="relative inline-block text-left">
  <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50">
    Options
    <svg class="-mr-1 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>
  {/* Dropdown menu */}
  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Account settings</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Support</a>
      <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">License</a>
    </div>
  </div>
</div>`;

const dividerDropdownCode = `<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
  <div class="py-1">
    <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Edit</a>
    <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Duplicate</a>
  </div>
  <div class="py-1">
    <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Archive</a>
  </div>
  <div class="py-1">
    <a href="#" class="block px-4 py-2 text-sm text-red-700 hover:bg-slate-100">Delete</a>
  </div>
</div>`;

const headerDropdownCode = `<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
  <div class="px-4 py-2 text-sm text-slate-500">
    Signed in as
    <p class="font-medium text-slate-900 truncate">tom@example.com</p>
  </div>
  <div class="py-1">
    <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Account settings</a>
    <a href="#" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">Sign out</a>
  </div>
</div>`;

const iconDropdownCode = `<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
  <div class="py-1">
    <a href="#" class="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
      <svg class="mr-3 h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"/></svg>
      Edit
    </a>
    <a href="#" class="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
      <svg class="mr-3 h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M7 2a1 1 0 00-.707 1.707L8.586 6H6a1 1 0 100 2h3.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4A1 1 0 007 2z"/></svg>
      Move
    </a>
  </div>
</div>`;

const modernDropdownCode = `<div class="relative inline-block text-left">
  <button class="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900">
    <span>Modern Options</span>
    <svg class="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>

  {/* Menu (conditionally rendered with transition) */}
  <div class="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-150 ease-in-out focus:outline-none transform opacity-100 scale-100">
    <div class="p-2">
      <a href="#" class="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span>View Profile</span>
      </a>
      <a href="#" class="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <span>Settings</span>
      </a>
      <div class="my-1 h-px bg-slate-700"></div>
      <a href="#" class="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-400 hover:bg-red-500/20 hover:text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
        <span>Log out</span>
      </a>
    </div>
  </div>
</div>`;

const DropdownMenu = ({ children, isOpen, className }: { children: React.ReactNode; isOpen: boolean; className?: string }) => {
  if (!isOpen) return null;
  return (
    <div className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:ring-white/10 ${className}`} role="menu" aria-orientation="vertical">
      {children}
    </div>
  );
};

const DropdownButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:bg-slate-700 dark:text-white dark:ring-slate-600 dark:hover:bg-slate-600">
    {children}
    <svg className="-mr-1 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  </button>
);

export default function DropdownClientComponent() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (openDropdown && dropdownRefs.current[openDropdown] && !dropdownRefs.current[openDropdown]?.contains(target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const dropdownSections = [
    {
      id: 'simple-dropdown',
      title: 'Simple Dropdown',
      description: 'A basic dropdown menu that appears when the button is clicked.',
      code: simpleDropdownCode,
      content: (
        <div className="relative inline-block text-left" ref={el => { dropdownRefs.current['simple-dropdown'] = el; }}>
          <DropdownButton onClick={() => toggleDropdown('simple-dropdown')}>Options</DropdownButton>
          <DropdownMenu isOpen={openDropdown === 'simple-dropdown'}>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">Account settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">Support</a>
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">License</a>
            </div>
          </DropdownMenu>
        </div>
      ),
    },
    {
      id: 'with-divider',
      title: 'With Divider',
      description: 'Use dividers to group related menu items.',
      code: dividerDropdownCode,
      content: (
        <div className="relative inline-block text-left" ref={el => { dropdownRefs.current['with-divider'] = el; }}>
          <DropdownButton onClick={() => toggleDropdown('with-divider')}>Options</DropdownButton>
          <DropdownMenu isOpen={openDropdown === 'with-divider'}>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">Edit</a>
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">Duplicate</a>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700"></div>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">Archive</a>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700"></div>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-red-700 hover:bg-slate-100 dark:text-red-500 dark:hover:bg-slate-700">Delete</a>
            </div>
          </DropdownMenu>
        </div>
      ),
    },
    {
      id: 'with-header',
      title: 'With Header',
      description: 'Add a header to provide context for the dropdown items, such as user information.',
      code: headerDropdownCode,
      content: (
        <div className="relative inline-block text-left" ref={el => { dropdownRefs.current['with-header'] = el; }}>
          <DropdownButton onClick={() => toggleDropdown('with-header')}>Options</DropdownButton>
          <DropdownMenu isOpen={openDropdown === 'with-header'}>
            <div className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
              <p>Signed in as</p>
              <p className="font-medium text-slate-900 truncate dark:text-white">tom@example.com</p>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700"></div>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">Account settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">Sign out</a>
            </div>
          </DropdownMenu>
        </div>
      ),
    },
    {
      id: 'with-icon',
      title: 'With Icon',
      description: 'Include icons next to menu items for better visual communication.',
      code: iconDropdownCode,
      content: (
        <div className="relative inline-block text-left" ref={el => { dropdownRefs.current['with-icon'] = el; }}>
          <DropdownButton onClick={() => toggleDropdown('with-icon')}>Options</DropdownButton>
          <DropdownMenu isOpen={openDropdown === 'with-icon'}>
            <div className="py-1">
              <a href="#" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
                <svg className="mr-3 h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                Edit
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700">
                <svg className="mr-3 h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M7 2a1 1 0 00-.707 1.707L8.586 6H6a1 1 0 100 2h3.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4A1 1 0 007 2z" /></svg>
                Move
              </a>
            </div>
          </DropdownMenu>
        </div>
      ),
    },
    {
      id: 'modern-dropdown',
      title: 'Modern Dropdown',
      description: 'Dropdown modern untuk tahun 2025 dengan latar belakang gelap, ikon, dan animasi transisi yang halus. Desain ini memberikan nuansa premium dan profesional, cocok untuk aplikasi web modern.',
      code: modernDropdownCode,
      content: (
        <div className="relative inline-block text-left" ref={el => { dropdownRefs.current['modern-dropdown'] = el; }}>
          <button onClick={() => toggleDropdown('modern-dropdown')} type="button" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900">
            <span>Modern Options</span>
            <svg className="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
          </button>
          <DropdownMenu isOpen={openDropdown === 'modern-dropdown'} className={`transition-all duration-150 ease-in-out ${openDropdown === 'modern-dropdown' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} >
            <div className="p-2">
              <a href="#" className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                <span>View Profile</span>
              </a>
              <a href="#" className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Settings</span>
              </a>
              <div className="my-1 h-px bg-slate-700"></div>
              <a href="#" className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-400 hover:bg-red-500/20 hover:text-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                <span>Log out</span>
              </a>
            </div>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <>
      {dropdownSections.map(section => (
        <div key={section.id}>
          <h2 id={section.id} className="mt-12 scroll-mt-20 text-3xl font-bold">
            {section.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{section.description}</p>
          <CodePreview code={section.code}>{section.content}</CodePreview>
        </div>
      ))}
    </>
  );
}