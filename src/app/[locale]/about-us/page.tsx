import type { Metadata } from 'next';

import {
  AboutExperts,
  AboutPricing,
  AboutSecurity,
  AboutUsHero,
  AboutVision,
  AboutWho,
} from './components';

export const metadata: Metadata = {
  title: 'About Craftify Tech | Cybersecurity Project Integrator for Enterprises',
  description:
    'Learn how Craftify Tech unites proven cybersecurity specialists under one structured delivery model, ensuring measurable results, full coordination, and enterprise-grade protection.',
  openGraph: {
    title: 'About Craftify Tech | Cybersecurity Project Integrator for Enterprises',
    description:
      'Learn how Craftify Tech unites proven cybersecurity specialists under one structured delivery model, ensuring measurable results, full coordination, and enterprise-grade protection.',
    images: 'https://craftify-tech.com/images/meta.png',
  },
};

export default async function TeamPage() {
  return (
    <>
      <AboutUsHero />
      <AboutWho />
      <AboutSecurity />
      <AboutVision />
      <AboutPricing />
      <AboutExperts />
    </>
  );
}
