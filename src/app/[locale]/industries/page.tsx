import type { Metadata } from 'next';

import {
  IndustriesDetails,
  IndustriesExperts,
  IndustriesHero,
  IndustriesOperate,
  IndustriesSlows,
} from './components';

export const metadata: Metadata = {
  title: 'Cybersecurity for Every Industry | Craftify Tech Enterprise Solutions',
  description:
    "Explore Craftify Tech's tailored cybersecurity solutions for finance, insurance, retail, telecom, crypto, and SMB sectors. Prevent downtime, data leaks, and compliance risks with expert support.",
  openGraph: {
    title: 'Cybersecurity for Every Industry | Craftify Tech Enterprise Solutions',
    description:
      "Explore Craftify Tech's tailored cybersecurity solutions for finance, insurance, retail, telecom, crypto, and SMB sectors. Prevent downtime, data leaks, and compliance risks with expert support.",
    images: 'https://craftify-tech.com/images/meta.png',
  },
};

export default async function TeamPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesSlows />
      <IndustriesDetails />
      <IndustriesOperate />
      <IndustriesExperts />
    </>
  );
}
