'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IntegratorSecond.module.scss';

export const IntegratorSecond = () => {
  const t = useTranslations('integratorSecond');
  return (
    <section className={styles.integrator_second}>
      <div className={'_container'}>
        <div className={styles.integrator_second__content}>
          <div className={styles.integrator_second__col_1}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', {
                fallback: 'Struggling to turn cybersecurity spending into real resilience?',
              })}
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
                  'The Integrator Model achieves enterprise-grade protection through structured, accountable delivery. ',
              })}
            </motion.p>
          </div>
          <div className={styles.integrator_second__col_2}>
            <div className={styles.inner}>
              <Image
                src="/images/home/the-chellange/topCorners.svg"
                alt="top corners"
                width={427}
                height={20}
              />
              <Image
                src="/images/integrator/ChartContent.svg"
                alt="integrator model"
                width={379}
                height={250}
                className={styles.chart}
              />

              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.integrator_second__title}
              >
                {t('subtitle2', { fallback: 'That’s how we do it – through the Integrator Model' })}
              </motion.h3>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.integrator_second__list}
              >
                <li className={styles.integrator_second__item}>
                  <b>{t('item-1-title', { fallback: 'Single accountability' })}</b>
                  {t('item-1-text', {
                    fallback: 'One contract, one delivery lead, unified reporting.',
                  })}
                </li>
                <li className={styles.integrator_second__item}>
                  <b>{t('item-2-title', { fallback: 'Specialists on demand' })}</b>
                  {t('item-2-text', {
                    fallback: 'Certified experts assigned per scope and sector.',
                  })}
                </li>
                <li className={styles.integrator_second__item}>
                  <b>{t('item-3-title', { fallback: 'Measured outcomes' })}</b>
                  {t('item-3-text', {
                    fallback: 'Each engagement tied to KPIs and governance checks.',
                  })}
                </li>
              </motion.ul>
              <Image
                src="/images/home/the-chellange/bottomCorners.svg"
                alt="bottom corners"
                width={427}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
