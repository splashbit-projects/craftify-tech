'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IntegratorOperate.module.scss';

export const IntegratorOperate = () => {
  const t = useTranslations('integratorOperate');

  const items = [
    {
      title: t('itemTitle1', { fallback: 'Coordination unit' }),
      text: t('itemText1', {
        fallback: 'Senior architects and delivery leads oversee project scope, timelines, and quality.',
      }),
    },
    {
      title: t('itemTitle2', { fallback: 'Expert network' }),
      text: t('itemText2', {
        fallback: 'Verified specialists across all cybersecurity domains engaged per project scope.',
      }),
    },
    {
      title: t('itemTitle3', { fallback: 'Operational delivery' }),
      text: t('itemText3', {
        fallback: 'Each engagement runs under defined SLAs, with integrations and runbooks ensuring continuity.',
      }),
    },
    {
      title: t('itemTitle4', { fallback: 'Governance & reporting' }),
      text: t('itemText4', {
        fallback: 'Every activity documented with evidence, progress checkpoints, and audit-ready summaries.',
      }),
    },
  ];

  return (
    <section className={styles.integrator_operate}>
      <div className={'_container'}>
        <div className={styles.integrator_operate__content}>
          <div className={styles.integrator_operate__heading}>
            <div className={styles.integrator_operate__title}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'What We Operate' })}
              </motion.h2>
            </div>
          </div>
          <div className={styles.integrator_operate__items}>
            {items.map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.integrator_operate__item}
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
