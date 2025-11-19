'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './TeamDetails.module.scss';

export const TeamDetails = () => {
  const t = useTranslations('teamDetails');

  const items = [
    {
      title: t('title1', { fallback: 'Fragmented protection' }),
      text: t('text1', { fallback: 'Gaps between tools, teams, and processes.' }),
    },
    {
      title: t('title2', { fallback: 'Delayed response' }),
      text: t('text2', { fallback: 'Incidents escalate before detection.' }),
    },
    {
      title: t('title3', { fallback: 'Compliance risk' }),
      text: t('text3', { fallback: 'Frameworks evolve faster than coverage' }),
    },
    {
      title: t('title4', { fallback: 'Burnout and turnover' }),
      text: t('text4', { fallback: 'One overloaded expert can’t sustain enterprise resilience.' }),
    },
  ];

  return (
    <section className={styles.team_details}>
      <div className={'_container'}>
        <div className={styles.team_details__content}>
          <div className={styles.team_details__col_1}>
            {items.map((item, index) => (
              <div key={index} className={styles.item}>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={styles.item__title}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={styles.item__text}
                >
                  {item.text}
                </motion.p>
              </div>
            ))}
          </div>
          <div className={styles.team_details__col_2}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              <span>98%</span>{' '}
              {t('title', {
                fallback: 'of Companies Hire One IT Person to “Handle Security.”',
              })}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.subtitle}
            >
              {t('subtitle', { fallback: 'Here’s Why It Fails.' })}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: t('text', {
                  fallback:
                    'Modern cybersecurity spans 12+ specialized domains.<br/>No single person can manage network defense, DevSecOps, <br/>incident response, compliance, and AI/data security — all at once.',
                }),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
