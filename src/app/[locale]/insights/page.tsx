import type { Metadata } from 'next';

import { InsightExperts, InsightHero } from './components';

export const metadata: Metadata = {
  title: '',
  description: '',
  openGraph: {
    title: '',
    description: '',
    images: '#',
  },
};

export default function InsightsPage() {
  return (
    <>
      <InsightHero />
      <InsightExperts />
    </>
  );
}
