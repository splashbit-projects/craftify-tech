import { AboutExperts, AboutPricing, AboutUsHero, AboutWho } from './components';

export default async function TeamPage() {
  return (
    <>
      <AboutUsHero />
      <AboutWho />
      <AboutPricing />
      <AboutExperts />
    </>
  );
}
