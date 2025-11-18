'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInDownSlow, fadeInUp, fadeInUpSlow } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './HomeHero.module.scss';

export const HomeHero = () => {
  const t = useTranslations('homeHero');

  return (
    <section className={styles.home_hero}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInDownSlow}
        className={styles.home_hero__lights}
      >
        <Image src="/images/home/leftLight.svg" alt="left lights" width={422} height={39} />
        <Image src="/images/home/rightLight.svg" alt="right lights" width={422} height={39} />
      </motion.div>
      <div className={'_container'}>
        <div className={styles.home_hero__content}>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.home_hero__subtitle}
          >
            {t('label', { fallback: '[Expert-Driven]' })}
          </motion.span>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.home_hero__title}
          >
            <span>{t('title', { fallback: 'Cybersecurity' })}</span>
            <br />
            {t('subtitle', { fallback: 'Integration for Business' })}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.home_hero__subtitle}
          >
            {t('text', {
              fallback:
                'Craftify Tech connects your company with the precise skills, technologies, and frameworks needed to solve complex cybersecurity challenges — from architecture to operations.',
            })}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.home_hero__buttons}
          >
            <Button variant="primary" url="#" type="link">
              {t('explore-solutions', { fallback: 'Explore Solutions' })}
            </Button>
            <Button variant="secondary" url="#" type="link">
              {t('request-consultation', { fallback: 'Request Consultation' })}
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpSlow}
        className={styles.home_hero__ellipse}
      >
        <Image src="/images/home/heroEllpse.svg" alt="Home Hero" width={1440} height={280} />
      </motion.div>
    </section>
  );
};
