import React from 'react';
import FeatureSectionsClientComponent from './FeatureSectionsClientComponent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feature Sections',
  description: 'A collection of modern and versatile feature sections to highlight your product or service capabilities.',
};

export default function FeatureSectionsPage() {
  return (
    <FeatureSectionsClientComponent />
  );
}

