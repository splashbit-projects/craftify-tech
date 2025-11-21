'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './AboutUsHero.module.scss';

export const AboutUsHero = () => {
  const t = useTranslations('aboutUsHero');

  return (
    <section className={styles.about_us_hero}>
      <div className={'_container'}>
        <div className={styles.about_us_hero__content}>
          <div className={styles.about_us_hero__col_1}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', {
                fallback: 'Cybersecurity project integrator ',
              })}
              <br />
              <span>
                {t('subtitle', { fallback: 'Connecting Businesses with Proven Experts' })}
              </span>
            </motion.h1>
          </div>
          <div className={styles.about_us_hero__col_2}>
            <div className={styles.about_us_hero__wrapper}>
              <Image
                src="/images/about-us/hero/line1.svg"
                alt="About Us Hero"
                width={104}
                height={130}
                className={styles.line1}
              />
              <Image
                src="/images/about-us/hero/line2.svg"
                alt="About Us Hero"
                width={36}
                height={66}
                className={styles.line2}
              />
              <Image
                src="/images/about-us/hero/line3.svg"
                alt="About Us Hero"
                width={70}
                height={75}
                className={styles.line3}
              />
              <Image
                src="/images/about-us/hero/line4.svg"
                alt="About Us Hero"
                width={97}
                height={40}
                className={styles.line4}
              />
              <Image
                src="/images/about-us/hero/line1Mobile.svg"
                alt="About Us Hero"
                width={50}
                height={130}
                className={styles.line1Mobile}
              />
              <Image
                src="/images/about-us/hero/line2Mobile.svg"
                alt="About Us Hero"
                width={31}
                height={51}
                className={styles.line2Mobile}
              />
              <Image
                src="/images/about-us/hero/line3Mobile.svg"
                alt="About Us Hero"
                width={51}
                height={54}
                className={styles.line3Mobile}
              />
              <Image
                src="/images/about-us/hero/line4Mobile.svg"
                alt="About Us Hero"
                width={44}
                height={39}
                className={styles.line4Mobile}
              />
              <span className={styles.text1}>{t('text1', { fallback: 'SOC Expert' })}</span>
              <span className={styles.text2}>{t('text2', { fallback: 'Cloud Security' })}</span>
              <span className={styles.text3}>{t('text3', { fallback: 'Incident Response' })}</span>
              <span className={styles.text4}>{t('text4', { fallback: 'Pentester' })}</span>
              <Button variant="primary" url="#" type="link">
                {t('button', { fallback: 'Request Assistance' })}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
