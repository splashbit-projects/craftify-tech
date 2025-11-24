import type { Metadata } from 'next';

import { ContactBlock } from './components';

export const metadata: Metadata = {
  title: 'Cybersecurity for Every Industry | Craftify Tech Enterprise Solutions',
  description:
    "Explore Craftify Tech's tailored cybersecurity solutions for finance, insurance, retail, telecom, crypto, and SMB sectors. Prevent downtime, data leaks, and compliance risks with expert support.",
  openGraph: {
    title: 'Cybersecurity for Every Industry | Craftify Tech Enterprise Solutions',
    description:
      "Explore Craftify Tech's tailored cybersecurity solutions for finance, insurance, retail, telecom, crypto, and SMB sectors. Prevent downtime, data leaks, and compliance risks with expert support.",
    images: '#',
  },
};

export default async function ContactPage() {
  return (
    <>
      <ContactBlock />
    </>
  );
}
