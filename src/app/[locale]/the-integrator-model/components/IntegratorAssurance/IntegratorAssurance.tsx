'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IntegratorAssurance.module.scss';

export const IntegratorAssurance = () => {
  const t = useTranslations('integratorAssurance');

  const items = [
    {
      title: t('itemTitle1', { fallback: 'Proven expertise' }),
      text: t('itemText1', {
        fallback:
          'Every specialist we engage has a minimum of seven years of hands-on experience across their domain.',
      }),
    },
    {
      title: t('itemTitle2', { fallback: 'Certified baseline' }),
      text: t('itemText2', {
        fallback:
          'Experts meet strict certification requirements (OSCP, CISSP, AWS Security Pro, ISO Auditor, or equivalent).',
      }),
    },
    {
      title: t('itemTitle3', { fallback: 'Rigorous vetting' }),
      text: t('itemText3', {
        fallback:
          'Each expert passes a three-stage review: technical validation, peer assessment, and project performance check.',
      }),
    },
    {
      title: t('itemTitle4', { fallback: 'Continuous oversight' }),
      text: t('itemText4', {
        fallback:
          'Senior architects continuously monitor delivery quality to ensure standards remain high across all engagements.',
      }),
    },
  ];

  return (
    <section className={styles.integrator_assurance}>
      <div className={'_container'}>
        <div className={styles.integrator_assurance__content}>
          <div className={styles.integrator_assurance__heading}>
            <div className={styles.integrator_assurance__title}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'Assurance & Standards' })}
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
                      'We ensure every engagement meets the highest standards from day one:',
                  }),
                }}
              />
            </div>
          </div>
          <div className={styles.integrator_assurance__items}>
            {items.map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.integrator_assurance__item}
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
