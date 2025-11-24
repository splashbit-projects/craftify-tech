import type { Metadata } from 'next';

import {
  ExpertiseScales,
  IntegratorAssurance,
  IntegratorExpect,
  IntegratorExperts,
  IntegratorHero,
  IntegratorInPractice,
  IntegratorOperate,
  IntegratorSecond,
  IntegratorWays,
  IntegratorWhy,
} from './components';

export const metadata: Metadata = {
  title: 'The Integrator Model | Unified Cybersecurity Delivery |  Craftify Tech',
  description:
    "Discover how Craftify Tech's Integrator Model delivers complete cybersecurity coverage through coordinated experts, measurable KPIs, and single-point accountability.",
  openGraph: {
    title: 'The Integrator Model | Unified Cybersecurity Delivery |  Craftify Tech',
    description:
      "Discover how Craftify Tech's Integrator Model delivers complete cybersecurity coverage through coordinated experts, measurable KPIs, and single-point accountability.",
    images: 'https://craftify-tech.com/images/meta.png',
  },
};

export default async function TheIntegratorModelPage() {
  return (
    <>
      <IntegratorHero />
      <IntegratorSecond />
      <IntegratorOperate />
      <IntegratorInPractice />
      <IntegratorWays />
      <IntegratorExpect />
      <IntegratorAssurance />
      <IntegratorWhy />
      <ExpertiseScales />
      <IntegratorExperts />
    </>
  );
}
