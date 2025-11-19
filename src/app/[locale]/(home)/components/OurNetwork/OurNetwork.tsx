'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './OurNetwork.module.scss';

export const OurNetwork = () => {
  const t = useTranslations('ourNetwork');

  const items = [
    { title: t('item1', { fallback: 'SOC Analytics' }) },
    { title: t('item2', { fallback: 'Threat Hunting' }) },
    { title: t('item3', { fallback: 'Incident Response' }) },
    { title: t('item4', { fallback: 'Forensics' }) },
    { title: t('item5', { fallback: 'Penetration Testing' }) },
    { title: t('item6', { fallback: 'Red Team Operations' }) },
    { title: t('item7', { fallback: 'Cloud Security' }) },
    { title: t('item8', { fallback: 'DevSecOps' }) },
    { title: t('item9', { fallback: 'Security Engineering' }) },
    { title: t('item10', { fallback: 'GRC & Compliance' }) },
    { title: t('item11', { fallback: 'Privacy & Risk' }) },
    { title: t('item12', { fallback: 'Security Architecture' }) },
    { title: t('item13', { fallback: 'Network Security' }) },
    { title: t('item14', { fallback: 'Awareness & Training' }) },
    { title: t('item15', { fallback: 'Security Program Management' }) },
  ];

  const marqueeItems = [...items, ...items];

  return (
    <section className={styles.our_approach}>
      <div className={'_container'}>
        <div className={styles.our_approach__content}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            {t('title', { fallback: 'Expertise Within ' })}
            <span>{t('subtitle', { fallback: 'Our Network' })}</span>
          </motion.h2>

          <div className={styles.marquee}>
            <div className={styles.row1}>
              {marqueeItems.map((item, index) => (
                <div key={`${item.title}-${index}`} className={styles.item}>
                  {item.title}
                </div>
              ))}
            </div>
            <div className={styles.row2}>
              {marqueeItems.map((item, index) => (
                <div key={`${item.title}-row2-${index}`} className={styles.item}>
                  {item.title}
                </div>
              ))}
            </div>
            <div className={styles.row3}>
              {marqueeItems.map((item, index) => (
                <div key={`${item.title}-row3-${index}`} className={styles.item}>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
