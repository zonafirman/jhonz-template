'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sidebarItems, SidebarItem } from './SideBar';

type SearchableItem = {
  href: string;
  label: string;
  category: string;
};

type SearchDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  // Flatten sidebar items into a searchable list
  const allItems: SearchableItem[] = useMemo(() => {
    return sidebarItems.flatMap((item: SidebarItem) => {
      if (item.type === 'collapsible') {
        return item.children.map((child: { href: string; label: string }) => ({
          href: child.href,
          label: child.label,
          category: item.label,
        }));
      }
      return [];
    });
  }, []);

  const searchResults = useMemo(() => {
    if (!searchTerm) return [];
    return allItems.filter((item) => item.label.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, allItems]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % searchResults.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
      } else if (e.key === 'Enter' && searchResults[activeIndex]) {
        e.preventDefault();
        window.location.href = searchResults[activeIndex].href;
        onClose();
      }
    },
    [onClose, searchResults, activeIndex]
  );

  useEffect(() => {
    // This effect only manages the keydown event listener
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setSearchTerm('');
        setActiveIndex(0);
      }}
    >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white/50 backdrop-blur-sm dark:bg-slate-900/80"
          onClick={onClose}
        >
          <div className="flex items-start justify-center pt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-lg transform rounded-xl bg-white shadow-2xl dark:bg-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center border-b border-slate-200 p-4 dark:border-slate-700">
                <Search className="h-5 w-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent pl-3 text-slate-900 placeholder:text-slate-500 focus:outline-none dark:text-slate-100"
                />
              </div>
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((item, index) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={`flex items-center justify-between rounded-md p-3 text-sm ${
                            activeIndex === index ? 'bg-blue-50 dark:bg-slate-700' : 'hover:bg-slate-100 dark:hover:bg-slate-700/50'
                          }`}
                        >
                          <span className="font-medium text-slate-800 dark:text-slate-200">{item.label}</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{item.category}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : searchTerm ? (
                  <div className="p-4 text-center text-sm text-slate-500">No results found for &quot;{searchTerm}&quot;</div>
                ) : (
                  <div className="p-4 text-center text-sm text-slate-500">Start typing to search for components.</div>
                )}
              </div>
              {/* Tombol Close di bagian bawah */}
              <div className="flex justify-center border-t border-slate-200 p-2 dark:border-slate-700">
                <button onClick={onClose} aria-label="Close search" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600">
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}