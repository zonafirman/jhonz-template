'use client';
import React from 'react';
import CodePreview from '@/app/docs/components/CodePreview';

const basicTextAreaCode = `<label for="message" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>`;

const disabledTextAreaCode = `<label for="disabled-message" class="block mb-2 text-sm font-medium text-slate-400 dark:text-slate-500">Disabled</label>
<textarea id="disabled-message" rows="4" class="block p-2.5 w-full text-sm text-slate-900 bg-slate-100 rounded-lg border border-slate-300 cursor-not-allowed dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-slate-400" placeholder="Your message..." disabled></textarea>`;

const withHelperTextCode = `<div>
    <label for="message-helper" class="block mb-2 text-sm font-medium text-slate-900 dark:text-white">Your message</label>
    <textarea id="message-helper" rows="4" class="block p-2.5 w-full text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
    <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Feel free to share your feedback with us.</p>
</div>`;

const validationTextAreaCode = `<div class="space-y-6">
    <div>
        <label for="success" class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your message</label>
        <textarea id="success" rows="4" class="block p-2.5 w-full text-sm text-green-900 placeholder-green-700 bg-green-50 rounded-lg border border-green-500 focus:ring-green-500 focus:border-green-500 dark:bg-slate-700 dark:border-green-500 dark:text-green-400 dark:placeholder-green-500" placeholder="Success message"></textarea>
        <p class="mt-2 text-sm text-green-600 dark:text-green-500">Your message has been sent successfully.</p>
    </div>
    <div>
        <label for="error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Your message</label>
        <textarea id="error" rows="4" class="block p-2.5 w-full text-sm text-red-900 placeholder-red-700 bg-red-50 rounded-lg border border-red-500 focus:ring-red-500 focus:border-red-500 dark:bg-slate-700 dark:border-red-500 dark:text-red-400 dark:placeholder-red-500" placeholder="Error message"></textarea>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">The message cannot be empty.</p>
    </div>
</div>`;

export default function TextAreaClientComponent() {
  return (
    <>
      <h2 id="basic-usage" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Basic Usage
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Contoh dasar dari komponen Text Area.</p>
      <CodePreview code={basicTextAreaCode}>
        <div dangerouslySetInnerHTML={{ __html: basicTextAreaCode }} />
      </CodePreview>

      <h2 id="disabled-state" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Disabled State
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan atribut `disabled` untuk membuat Text Area tidak dapat diubah.</p>
      <CodePreview code={disabledTextAreaCode}>
        <div dangerouslySetInnerHTML={{ __html: disabledTextAreaCode }} />
      </CodePreview>

      <h2 id="with-helper-text" className="mt-12 scroll-mt-20 text-3xl font-bold">
        With Helper Text
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Tambahkan teks bantuan di bawah Text Area untuk memberikan konteks atau instruksi tambahan.</p>
      <CodePreview code={withHelperTextCode}>
        <div dangerouslySetInnerHTML={{ __html: withHelperTextCode }} />
      </CodePreview>

      <h2 id="validation" className="mt-12 scroll-mt-20 text-3xl font-bold">
        Validation
      </h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Gunakan warna untuk menunjukkan status validasi, seperti sukses atau error.</p>
      <CodePreview code={validationTextAreaCode}>
        <div dangerouslySetInnerHTML={{ __html: validationTextAreaCode }} />
      </CodePreview>
    </>
  );
}