'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './AboutVision.module.scss';

export const AboutVision = () => {
  const t = useTranslations('aboutVision');

  return (
    <section className={styles.about_vision}>
      <div className={'_container'}>
        <div className={styles.about_vision__content}>
          <div className={styles.about_vision__col_1}>
            <Image
              src="/images/about-us/vision/chart.svg"
              alt="about vision"
              width={383}
              height={383}
            />
          </div>
          <div className={styles.about_vision__col_2}>
            <div className={styles.top}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'Our Vision' })}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.subtitle}
              >
                {t('text', {
                  fallback:
                    'Enterprise cybersecurity will only get more complex. Threats evolve fast, and companies cannot rely on isolated teams or static controls. Our approach ensures organizations stay ahead through coordinated, measurable, and scalable security capabilities. ',
                })}
              </motion.p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.bottom}>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title2}
              >
                {t('title2', { fallback: 'Our fundamental principles' })}
              </motion.h3>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <li>
                  {t('item1Text', { fallback: 'Cross-domain coverage for every security layer' })}
                </li>
                <li>
                  {t('item2Text', {
                    fallback: 'Agile delivery without building large in-house teams',
                  })}
                </li>
                <li>
                  {t('item3Text', {
                    fallback: 'Measurable outcomes tied to KPIs and governance',
                  })}
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
