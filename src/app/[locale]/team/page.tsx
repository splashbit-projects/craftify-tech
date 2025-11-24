import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { CtaBlock } from '@/shared/ui/components';

import {
  ExpertiseScales,
  Experts,
  HowWeChoose,
  OurApproach,
  TeamDetails,
  TeamHero,
} from './components/';

export const metadata: Metadata = {
  title: 'Cybersecurity Experts for Every Function | Certified Specialists | Craftify Tech',
  description:
    'Meet Craftify Tech’s network of senior cybersecurity specialists. From cloud and DevSecOps to incident response and compliance — expertise built for enterprise resilience.',
  openGraph: {
    title: 'Cybersecurity Experts for Every Function | Certified Specialists | Craftify Tech',
    description:
      'Meet Craftify Tech’s network of senior cybersecurity specialists. From cloud and DevSecOps to incident response and compliance — expertise built for enterprise resilience.',
    images: '#',
  },
};

export default async function TeamPage() {
  const t = await getTranslations('teampage');

  const ctaBlockData = {
    title: t('title', { fallback: 'Not a vendor' }),
    subtitle: t('subtitle', { fallback: 'A cybersecurity command unit built around your needs.' }),
    button: t('button', { fallback: 'Learn More' }),
    backgroundImage: '/images/team/shields.svg',
  };

  return (
    <>
      <TeamHero />
      <TeamDetails />
      <OurApproach />
      <Experts />
      <HowWeChoose />
      <ExpertiseScales />
      <CtaBlock {...ctaBlockData} />
      <div style={{ height: '200px' }}></div>
    </>
  );
}
