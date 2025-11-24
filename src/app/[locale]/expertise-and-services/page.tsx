import type { Metadata } from 'next';

import { ServicesChallenged, ServicesHero, ServicesInfo, ServicesLoop } from './components';

export const metadata: Metadata = {
  title: 'Cybersecurity Expertise and Services | Integrated Security Solutions by Craftify Tech',
  description:
    'Explore Craftify Tech’s expert-driven cybersecurity services — from SOC operations and incident response to cloud hardening, DevSecOps, and compliance programs — designed for measurable protection and lasting resilience.',
  openGraph: {
    title: 'Cybersecurity Expertise and Services | Integrated Security Solutions by Craftify Tech',
    description:
      'Explore Craftify Tech’s expert-driven cybersecurity services — from SOC operations and incident response to cloud hardening, DevSecOps, and compliance programs — designed for measurable protection and lasting resilience.',
    images: 'https://craftify-tech.com/images/meta.png',
  },
};

export default async function TeamPage() {
  return (
    <>
      <ServicesHero />
      <ServicesInfo />
      <ServicesLoop />
      <ServicesChallenged />
    </>
  );
}
