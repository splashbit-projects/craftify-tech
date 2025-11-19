'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { CountUp } from '@/shared/ui/components';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './About.module.scss';

export const About = () => {
  const t = useTranslations('about');

  return (
    <section className={styles.about}>
      <div className={'_container'}>
        <div className={styles.about__heading}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            {t('title', { fallback: 'About Craftify Tech' })}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.subtitle}
          >
            {t('subtitle', {
              fallback:
                'Craftify Tech delivers specialized cybersecurity expertise – accessible, measurable, and tailored. We unite top specialists to defend, optimize, and evolve your digital security environment.',
            })}
          </motion.p>
        </div>
        <div className={styles.about__content}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col}
          >
            <div className={styles.number}>
              <CountUp targetNumber={15} suffix="+" />
            </div>
            <p className={styles.accent}>
              {t('itemText1', {
                fallback: 'years combined experience across core cybersecurity domains',
              })}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col}
          >
            <h3>
              {t('itemTitle2', {
                fallback: 'Mission',
              })}
            </h3>
            <p>
              {t('itemText2', {
                fallback:
                  'Deliver targeted, actionable security solutions that adapt to evolving threats and align with your operational and governance needs.',
              })}
            </p>
            <Button variant="primary" url="#" type="link">
              {t('button', { fallback: 'Learn More' })}
            </Button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col}
          >
            <h3>
              {t('itemTitle3', {
                fallback: 'Proven Security',
              })}
            </h3>
            <p>
              {t('itemText3', {
                fallback: 'Proven track record in enterprise-grade security integration',
              })}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.col}
          >
            <div className={styles.number}>
              <CountUp targetNumber={40} suffix="+" />
            </div>
            <p className={styles.accent}>
              {t('itemText1', {
                fallback: 'Global network of 40+ experts',
              })}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
