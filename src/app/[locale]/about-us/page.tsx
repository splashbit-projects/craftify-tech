import { AboutExperts, AboutPricing, AboutSecurity, AboutUsHero, AboutVision, AboutWho } from './components';

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
