import { ServicesChallenged, ServicesHero, ServicesInfo, ServicesLoop,  } from './components';

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
