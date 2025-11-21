'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './AboutPricing.module.scss';

export const AboutPricing = () => {
  const t = useTranslations('aboutPricing');

  const items = [
    {
      title: t('itemTitle1', { fallback: 'Outcome focused' }),
      text: t('itemText1', {
        fallback: 'Full process management to achieve defined goals.',
      }),
    },
    {
      title: t('itemTitle2', { fallback: 'Top-tier expertise' }),
      text: t('itemText2', {
        fallback: 'Senior specialists coordinated under one oversight.',
      }),
    },
    {
      title: t('itemTitle3', { fallback: 'Extra Governance' }),
      text: t('itemText3', {
        fallback: 'Projects quality-checked by experienced architects.',
      }),
    },
    {
      title: t('itemTitle4', { fallback: 'Clear coordination' }),
      text: t('itemText4', {
        fallback: 'Centralized management reduces miscommunication.',
      }),
    },
    {
      title: t('itemTitle5', { fallback: 'Full Compliance' }),
      text: t('itemText5', {
        fallback: 'EU-aligned processes ensure accountability and clarity.',
      }),
    },
  ];

  return (
    <section className={styles.about_pricing}>
      <div className={'_container'}>
        <div className={styles.about_pricing__content}>
          <div className={styles.about_pricing__heading}>
            <div className={styles.about_pricing__title}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'Pricing Philosophy' })}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: t('text', {
                    fallback:
                      'Craftify Tech rates reflect the value of structured delivery, expert coordination, and measurable results – not just hours or headcount. <br/>Every engagement ensures that enterprise cybersecurity work is executed efficiently, with accountability and clarity.',
                  }),
                }}
              />
            </div>
          </div>
          <div className={styles.about_pricing__items}>
            {items.map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.about_pricing__item}
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
