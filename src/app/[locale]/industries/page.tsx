import {
  IndustriesDetails,
  IndustriesExperts,
  IndustriesHero,
  IndustriesOperate,
  IndustriesSlows,
} from './components';

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
