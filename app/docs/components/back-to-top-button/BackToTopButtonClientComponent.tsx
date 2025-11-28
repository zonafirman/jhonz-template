'use client';
import React, { useState, useEffect } from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const simpleButtonCode = `<button class="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-opacity duration-300 hover:bg-indigo-700">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
  </svg>
</button>`;

const withTextButtonCode = `<button class="fixed bottom-4 right-4 z-50 flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-lg transition-opacity duration-300 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600">
  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
  </svg>
  <span>Go to Top</span>
</button>`;

const customStyleButtonCode = `<button class="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
  </svg>
</button>`;

const withProgressButtonCode = `<div class="fixed bottom-4 right-4 z-50">
  <svg class="h-16 w-16 -rotate-90" viewBox="0 0 120 120">
    <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="8" />
    <circle cx="60" cy="60" r="54" fill="none" stroke="#6366F1" stroke-width="8" stroke-dasharray="339.292" stroke-dashoffset="..."></circle>
  </svg>
  <button class="absolute inset-0 flex items-center justify-center rounded-full bg-slate-900/50 text-white backdrop-blur-sm">
    <svg>...</svg>
  </button>
</div>`;

const BackToTopButton = ({ isVisible, onClick, children, className }: { isVisible: boolean; onClick: () => void; children: React.ReactNode; className?: string }) => (
  <button onClick={onClick} className={`${className} ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
    {children}
  </button>
);

export default function BackToTopButtonClientComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    setScrollProgress(progress);

    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const circumference = 2 * Math.PI * 54; // 2 * pi * r
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <div className="mt-4 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800 dark:border-yellow-800/60 dark:bg-yellow-900/20 dark:text-yellow-200">
        <strong>Note:</strong> The buttons in the previews are fully functional. Scroll down this page to see them appear at the bottom-right corner.
      </div>

      <h2 id="simple" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Simple
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A basic, icon-only button with a solid background color and a circular shape.</p>
      <CodePreview code={simpleButtonCode}>
        <BackToTopButton isVisible={isVisible} onClick={scrollToTop} className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-opacity duration-300 hover:bg-indigo-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </BackToTopButton>
      </CodePreview>

      <h2 id="with-text" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Text
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A button that includes text alongside the icon for better clarity.</p>
      <CodePreview code={withTextButtonCode}>
        <BackToTopButton isVisible={isVisible} onClick={scrollToTop} className="fixed bottom-20 right-4 z-50 flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow-lg transition-opacity duration-300 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          <span>Go to Top</span>
        </BackToTopButton>
      </CodePreview>

      <h2 id="custom-style" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Custom Style
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A stylized version with a gradient background, a different shape, and a hover effect.</p>
      <CodePreview code={customStyleButtonCode}>
        <BackToTopButton isVisible={isVisible} onClick={scrollToTop} className="fixed bottom-36 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </BackToTopButton>
      </CodePreview>

      <h2 id="with-scroll-progress" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Scroll Progress
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">A modern button that includes a circular progress indicator showing how far the user has scrolled down the page.</p>
      <CodePreview code={withProgressButtonCode}>
        <div className={`fixed bottom-56 right-4 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
          <svg className="h-16 w-16 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="8" />
            <circle cx="60" cy="60" r="54" fill="none" stroke="#6366F1" strokeWidth="8" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} className="transition-all duration-100 ease-linear" />
          </svg>
          <button onClick={scrollToTop} className="absolute inset-0 flex items-center justify-center rounded-full bg-slate-900/50 text-white backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </CodePreview>

      <div className="h-[150vh]"></div>
    </>
  );
}