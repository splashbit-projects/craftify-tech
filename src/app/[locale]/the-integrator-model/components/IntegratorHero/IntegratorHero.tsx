'use client';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button/Button';

import styles from './IntegratorHero.module.scss';

export const IntegratorHero = () => {
  const t = useTranslations('integratorHero');

  return (
    <section className={styles.integrator_hero}>
      <div className={'_container'}>
        <div className={styles.integrator_hero__heading}>
          <h1>
            <span>{t('title1', { fallback: 'Integrator Model' })}</span>
            {t('title2', { fallback: 'Multiple Experts, Single Accountability, Proven Results' })}
          </h1>
        </div>
        <div className={styles.integrator_hero__content}>
          <Image
            src="/images/integrator/hero-chart.png"
            alt="Integrator Model"
            width={824}
            height={260}
            className={styles.dt}
          />
          <Image
            src="/images/integrator/hero-chart-mob.png"
            alt="Integrator Model"
            width={366}
            height={490}
            className={styles.mobile}
          />
          <Button variant="primary" url="#" type="link">
            {t('button', { fallback: 'Proven Results' })}
          </Button>
        </div>
      </div>
    </section>
  );
};
