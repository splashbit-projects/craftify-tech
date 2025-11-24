'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IndustriesOperate.module.scss';

export const IndustriesOperate = () => {
  const t = useTranslations('industriesOperate');
  return (
    <section className={styles.industries_operate}>
      <div className={'_container'}>
        <div className={styles.industries_operate__heading}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            {t('title', { fallback: 'It’s Up to You How to Operate' })}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.subtitle}
          >
            {t('subtitle', {
              fallback: 'But neglecting cybersecurity leads to',
            })}
          </motion.p>
        </div>
        <div className={styles.industries_operate__content}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.industries_operate__col}
          >
            <ul>
              <li>
                <b>{t('col1Item1Title', { fallback: 'Loss of customers' })}</b>
                {t('col1Item1', {
                  fallback: 'trust disappears when data protection fails.',
                })}
              </li>
              <li>
                <b>{t('col1Item2Title', { fallback: 'Operational disruption' })}</b>
                {t('col1Item2', {
                  fallback: 'downtime and halted workflows damage productivity.',
                })}
              </li>
              <li>
                <b>{t('col1Item3Title', { fallback: 'Legal exposure' })}</b>
                {t('col1Item3', {
                  fallback: 'non-compliance results in penalties and investigations.',
                })}
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.industries_operate__col}
          >
            <ul>
              <li>
                <b>{t('col2Item1Title', { fallback: 'Financial loss' })}</b>
                {t('col12tem1', {
                  fallback: 'recovery costs and system rebuilding drain resources.',
                })}
              </li>
              <li>
                <b>{t('col2Item2Title', { fallback: 'Brand damage' })}</b>
                {t('col2Item2', {
                  fallback: 'reputation takes years to rebuild after a breach.',
                })}
              </li>
              <li>
                <b>{t('col2Item3Title', { fallback: 'Competitive decline' })}</b>
                {t('col3Item3', {
                  fallback: 'weakened credibility and lost market position.',
                })}
              </li>
            </ul>
          </motion.div>
        </div>

        <div className={styles.industries_operate__spacer}></div>
      </div>
    </section>
  );
};
