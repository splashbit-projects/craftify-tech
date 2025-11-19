import { getTranslations } from 'next-intl/server';

import { CtaBlock } from '@/shared/ui/components';

import { Experts, OurApproach, TeamDetails, TeamHero } from './components/';

export default async function Home() {
  const t = await getTranslations('teampage');

  const ctaBlockData = {
    title: t('title', { fallback: 'Not a vendor' }),
    subtitle: t('subtitle', { fallback: 'A cybersecurity command unit built around your needs.' }),
    button: t('button', { fallback: 'Learn More' }),
    backgroundImage: '/images/shields.svg',
  };

  return (
    <>
      <TeamHero />
      <TeamDetails />
      <OurApproach />
      <Experts />
      <CtaBlock {...ctaBlockData} />
    </>
  );
}
