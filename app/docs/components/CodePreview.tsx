'use client';

import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import Image from 'next/image';

interface CodePreviewProps {
  children: React.ReactNode;
  code: string;
  htmlCode?: string;
  fileName?: string;
}

const CopyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'h-4 w-4'}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  </svg>
);

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || 'h-4 w-4'}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export default function CodePreview({ children, code, htmlCode }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<'react' | 'html' | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (codeToCopy: string) => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleDownload = (codeToDownload: string, extension: string) => {
    const blob = new Blob([codeToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code-snippet.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-4">
      <div className="relative rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">{children}</div>
      <div className="mt-2 flex gap-2">
        <button onClick={() => setActiveTab(activeTab === 'react' ? null : 'react')} className="flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
          <Image src="/next.svg" alt="Next.js Icon" width={40} height={40} className="dark:invert" />
          <span></span>
        </button>
        {htmlCode && (
          <button onClick={() => setActiveTab(activeTab === 'html' ? null : 'html')} className="flex items-center gap-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
            <svg className="h-6 w-6 text-[#E44D26]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.362 3.333L4.055 21h15.89l1.693-17.667H2.362zm16.43 15.834H6.254l-.22-2.292h10.89l.25-2.6h-8.5l-.22-2.292h9.16l.25-2.6H5.374l-.44-4.583h15.13l-1.205 12.583z" />
            </svg>
            <span>HTML</span>
          </button>
        )}
      </div>
      {activeTab === 'react' && (
        <Highlight theme={themes.nightOwl} code={code} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <div className="relative mt-2">
              <div className="absolute right-2 top-2 z-10 flex gap-1">
                <button onClick={() => handleCopy(code)} className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/70 p-2 text-xs text-slate-300 hover:bg-slate-700" title="Copy code">
                  <CopyIcon />
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
                <button onClick={() => handleDownload(code, 'jsx')} className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/70 p-2 text-xs text-slate-300 hover:bg-slate-700" title="Download snippet">
                  <DownloadIcon />
                </button>
              </div>
              <pre className={`${className} overflow-x-auto rounded-lg p-4 text-sm`} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            </div>
          )}
        </Highlight>
      )}
      {activeTab === 'html' && htmlCode && (
        <Highlight theme={themes.nightOwl} code={htmlCode} language="html">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <div className="relative mt-2">
              <div className="absolute right-2 top-2 z-10 flex gap-1">
                <button onClick={() => handleCopy(htmlCode)} className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/70 p-2 text-xs text-slate-300 hover:bg-slate-700" title="Copy code">
                  <CopyIcon />
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
                <button onClick={() => handleDownload(htmlCode, 'html')} className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/70 p-2 text-xs text-slate-300 hover:bg-slate-700" title="Download snippet">
                  <DownloadIcon />
                </button>
              </div>
              <pre className={`${className} overflow-x-auto rounded-lg p-4 text-sm`} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            </div>
          )}
        </Highlight>
      )}
    </div>
    
  );
}
