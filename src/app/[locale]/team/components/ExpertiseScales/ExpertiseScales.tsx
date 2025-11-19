'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { CountUp } from '@/shared/ui/components/count-up/CountUp';

import styles from './ExpertiseScales.module.scss';

export const ExpertiseScales = () => {
  const t = useTranslations('expertiseScales');

  return (
    <section className={styles.expertise_scales}>
      <div className={'_container'}>
        <div className={styles.expertise_scales__heading}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Expertise That Scales',
              }),
            }}
          />
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.subtitle}
          >
            {t('subtitle', { fallback: 'Results That Prove It' })}
          </motion.p>
        </div>
        <div className={styles.expertise_scales__content}>
          <div className={styles.item}>
            <CountUp targetNumber={100} suffix="+" />
            <p className={styles.accent}>
              {t('itemText1', {
                fallback: 'active specialists in our network',
              })}
            </p>
          </div>
          <div className={styles.item}>
            <CountUp targetNumber={12} prefix={t('prefix2', { fallback: 'Over' })} />
            <p className={styles.accent}>
              {t('itemText2', {
                fallback: 'specialized cybersecurity domains covered',
              })}
            </p>
          </div>
          <div className={styles.item}>
            <CountUp
              targetNumber={4}
              prefix={t('prefix3', { fallback: 'under' })}
              suffix={t('suffix3', { fallback: 'hours' })}
            />
            <p className={styles.accent}>
              {t('itemText3', {
                fallback: 'Average expert response time',
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
