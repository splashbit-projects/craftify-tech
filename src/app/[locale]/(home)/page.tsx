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

export default function Home() {
  return (
    <>
      <HomeHero />
      <TheChallenge />
      <OurApproach />

      <CtaBlock />
      <OurExpertise />
      <Tech />
      <OurNetwork />
      <Industries />
      <About />
      <Secure />
    </>
  );
}
