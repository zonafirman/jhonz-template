'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/docs/SideBar';
import { Search, ChevronDown, Github, Moon, Sun, Menu, X, FileCode } from 'lucide-react';
import SearchDialog from './SearchDialog';

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [theme, setTheme] = useState('light');
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
      <nav className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex shrink-0 items-center space-x-2">
          <FileCode className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-slate-900 dark:text-slate-50">Jhonz</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden w-40 cursor-pointer items-center justify-between rounded-md border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm text-slate-500 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-600 sm:flex sm:w-64"
        >
          <div className="flex items-center">
            <Search size={16} className="mr-2" />
            <span>Search docs...</span>
          </div>
          <span className="rounded-md border border-slate-300 bg-white px-1.5 py-0.5 text-xs font-medium dark:border-slate-600 dark:bg-slate-900 dark:text-slate-400">
            CTRL K
          </span>
        </button>

        <div className="flex items-center space-x-4">
        <Link
          href="https://github.com/zonafirman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          <Github size={20} />
        </Link>
        <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Open main menu"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      </nav>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 h-[calc(100vh-4rem)] w-full border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:hidden">
          <Sidebar isMobile />
        </div>
      )}

      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}