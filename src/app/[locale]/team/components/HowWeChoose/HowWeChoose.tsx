'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './HowWeChoose.module.scss';

export const HowWeChoose = () => {
  const t = useTranslations('howWeChoose');

  const items = [
    {
      title: t('title1', { fallback: 'Experience' }),
      text: t('text1', {
        fallback: 'Minimum 7 years in cybersecurity operations, architecture, or threat response.',
      }),
    },
    {
      title: t('title2', { fallback: 'Certifications' }),
      text: t('text2', { fallback: 'OSCP, CISSP, AWS Security Pro, ISO Auditor, or equivalent.' }),
    },
    {
      title: t('title3', { fallback: 'Vetting' }),
      text: t('text3', {
        fallback: '3-stage review — technical test, peer validation, project performance check.',
      }),
    },
    {
      title: t('title4', { fallback: 'Quality Control' }),
      text: t('text4', { fallback: 'Continuous monitoring by senior architects.' }),
    },
    {
      title: t('title5', { fallback: 'Scalability' }),
      text: t('text5', {
        fallback: 'Network grows only with fully vetted, domain-matched experts.',
      }),
    },
  ];

  return (
    <section className={styles.how_we_choose}>
      <div className={'_container'}>
        <div className={styles.how_we_choose__content}>
          <div className={styles.how_we_choose__col_1}>
            <div className={styles.heading}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
                dangerouslySetInnerHTML={{
                  __html: t('title', {
                    fallback: 'How We<br/>Choose Our Experts',
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
                {t('subtitle', { fallback: 'Only Proven Specialists Make the Cut' })}
              </motion.p>
            </div>
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
          <div className={styles.how_we_choose__col_2}>
            <Image src="/images/team/experts/photos.png" alt="photos" width={360} height={384} />
          </div>
        </div>
      </div>
    </section>
  );
};
