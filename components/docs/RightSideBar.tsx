'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';

// Tentukan tipe untuk props yang akan diterima
// Setiap halaman akan mengirimkan daftar judulnya sendiri
type Heading = {
  title: string;
  slug: string; // Ini akan jadi link (e.g., #what-is-nextmerce)
};

type RightSidebarProps = {
  headings: Heading[];
};

export default function RightSidebar({ headings }: RightSidebarProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Cari entri yang paling atas di viewport
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
      
      if (intersectingEntries.length > 0) {
        // Urutkan berdasarkan posisi dari atas
        intersectingEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        // Set ID dari entri yang paling atas sebagai yang aktif
        setActiveId(intersectingEntries[0].target.id);
      }
    };

    // Opsi untuk observer: deteksi saat elemen masuk/keluar dari area 20% teratas layar
    const observerOptions: IntersectionObserverInit = {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
    const currentObserver = observerRef.current;

    const elements = headings
      .map((h) => document.getElementById(h.slug))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => currentObserver.observe(el));

    return () => {
      elements.forEach((el) => currentObserver.unobserve(el));
    };
  }, [headings]);

  // Sembunyikan jika tidak ada headings
  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="fixed top-16 right-0 z-10 hidden h-[calc(100vh-4rem)] w-64 overflow-y-auto border-l border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 lg:block">
      <div className="flex flex-col space-y-4">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
          On This Page
        </h3>

        <nav>
          <ul className="relative space-y-2">
            {headings.map((heading) => (
              <li key={heading.slug} className="relative">
                {activeId === heading.slug && (
                  <motion.div
                    layoutId="active-section-indicator"
                    className="absolute -left-3 top-0 h-full w-0.5 rounded-full bg-blue-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                <Link
                  href={`#${heading.slug}`}
                  className={clsx(
                    'block text-sm transition-colors',
                    activeId === heading.slug
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  {heading.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Link Feedback di Bawah */}
      <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
        <Link
          href="/feedback" // Ganti dengan link feedback Anda
          className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
        >
          Question? Give us feedback &rarr;
        </Link>
      </div>
    </aside>
  );
}