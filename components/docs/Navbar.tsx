'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Github, Moon, Sun, Menu, X, FileCode } from 'lucide-react';
import SearchDialog from './SearchDialog';

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Kita tidak lagi memerlukan ref untuk tombol search, karena dialog akan di-fokuskan secara otomatis
  // const searchButtonRef = useRef<HTMLButtonElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Menutup dropdown resources jika klik di luar
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

  // State dan handler untuk theme switcher (contoh)
  const [theme, setTheme] = useState('light'); // Placeholder, ganti dengan useTheme
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    // setTheme(isDark ? 'light' : 'dark');
    setTheme(isDark ? 'light' : 'dark'); // Placeholder
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
      <nav className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      {/* Bagian Kiri: Logo & Link Navigasi */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center space-x-2">
          {/* Box Logo Sederhana */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-xl font-bold text-white">J</span>
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-slate-50">Jhonz</span>
        </Link>
      </div>

      {/* Bagian Kanan: Search & Ikon */}
      <div className="flex items-center space-x-4">
        {/* Link Navigasi */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link
            href="/docs/introduction"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Docs
          </Link>
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
              className="flex items-center space-x-1 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              <span>Resources</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {/* Dropdown Menu */}
            {resourcesOpen && (
              <div className="absolute top-full mt-2 w-48 rounded-md border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <Link
                  href="/blog"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  Blog
                </Link>
                <Link
                  href="/guides"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  Guides
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Tombol Search */}
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

        {/* Ikon-Ikon */}
        <div className="flex items-center space-x-4">
        <Link
          href="https://github.com/your-repo" // Ganti dengan link repo Anda
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          <Github size={20} />
        </Link>
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {/* Tombol Hamburger Menu */}
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

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 dark:border-slate-800 md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
             <Link
              href="/docs/introduction"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              Docs
            </Link>
            <Link
              href="/blog"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              Blog
            </Link>
            <Link
              href="/guides"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              Guides
            </Link>
          </div>
        </div>
      )}

      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}