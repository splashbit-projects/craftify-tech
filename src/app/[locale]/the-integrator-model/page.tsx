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

export default async function Home() {
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
