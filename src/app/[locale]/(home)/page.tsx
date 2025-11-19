import { getTranslations } from 'next-intl/server';

import { CtaBlock } from '@/shared/ui/components';

import {
  About,
  HomeHero,
  Industries,
  OurApproach,
  OurExpertise,
  OurNetwork,
  Secure,
  Tech,
  TheChallenge,
} from './components';

export default async function Home() {
  const t = await getTranslations('homepage');

  const ctaBlockData = {
    title: t('title', { fallback: 'Not a vendor' }),
    subtitle: t('subtitle', { fallback: 'A cybersecurity command unit built around your needs.' }),
    button: t('button', { fallback: 'Learn More' }),
    backgroundImage: '/images/WorldMap.svg',
  };

  return (
    <>
      <HomeHero />
      <TheChallenge />
      <OurApproach />

      <CtaBlock {...ctaBlockData} />
      <OurExpertise />
      <Tech />
      <OurNetwork />
      <Industries />
      <About />
      <Secure />
    </>
  );
}
