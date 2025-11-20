'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './IntegratorWays.module.scss';
export const IntegratorWays = () => {
  const t = useTranslations('integratorWays');
  return (
    <section className={styles.integrator_ways}>
      <div className={'_container'}>
        <div className={styles.integrator_ways__heading}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            {t('title', { fallback: 'Two Delivery Ways' })}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.subtitle}
          >
            {t('subtitle', {
              fallback: 'Craftify Tech operates under two delivery models to match your needs.',
            })}
          </motion.p>
        </div>
        <div className={styles.integrator_ways__content}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.integrator_ways__col}
          >
            <h3>
              {t('col1Title', { fallback: 'Project Engagements' })}
              <br />
              <span>{t('col1Subtitle', { fallback: '(One-Time)' })}</span>
            </h3>
            <ul>
              <li>
                {t('col1Item1', {
                  fallback: 'Outcome-focused: audits, pentests, designs, simulations, assessments',
                })}
              </li>
              <li>
                {t('col1Item2', {
                  fallback: 'Scoped deliverables with KPIs and acceptance window',
                })}
              </li>
              <li>
                {t('col1Item3', {
                  fallback:
                    'Ideal for defined results: hardened systems, validated controls, or audit evidence',
                })}
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.integrator_ways__col}
          >
            <h3>
              {t('col2Title', { fallback: 'Managed Services' })}
              <br />
              <span>{t('col2Subtitle', { fallback: '(Ongoing)' })}</span>
            </h3>
            <ul>
              <li>
                {t('col12tem1', {
                  fallback:
                    'Continuous operations, monitoring, or advisory under monthly agreement',
                })}
              </li>
              <li>
                {t('col2Item2', {
                  fallback:
                    'Continuous operations, monitoring, or advisory under monthly agreement',
                })}
              </li>
              <li>
                {t('col3Item3', {
                  fallback:
                    'Continuous operations, monitoring, or advisory under monthly agreement',
                })}
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.integrator_ways__button}
          >
            <Button variant="primary" url="#" type="link">
              {t('button', { fallback: 'Check Services' })}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
