'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { VerticalGraph } from '@/shared/ui/components/vertical-graph/VerticalGraph';

import styles from './IntegratorWhy.module.scss';

export const IntegratorWhy = () => {
  const t = useTranslations('integratorWhy');

  const items = [
    {
      title: t('title1', { fallback: 'Faster execution' }),
      text: t('text1', {
        fallback: 'Expert teams deployed within days, not months.',
      }),
    },
    {
      title: t('title2', { fallback: 'Reduced risk' }),
      text: t('text2', {
        fallback: 'Single point of accountability eliminates gaps and miscommunication.',
      }),
    },
    {
      title: t('title3', { fallback: 'Transparent outcomes' }),
      text: t('text3', {
        fallback: 'Every engagement tied to measurable KPIs and governance checkpoints.',
      }),
    },
  ];

  return (
    <section className={styles.integrator_why}>
      <div className={'_container'}>
        <div className={styles.integrator_why__content}>
          <div className={styles.integrator_why__col_1}>
            <div className={styles.heading}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
                dangerouslySetInnerHTML={{
                  __html: t('title', {
                    fallback: 'Why?',
                  }),
                }}
              />
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
          <div className={styles.integrator_why__col_2}>
            <div className={styles.graph}>
              <Image
                src="/images/home/the-chellange/topCorners.svg"
                alt="top corners"
                width={427}
                height={20}
              />
              <VerticalGraph text="Execution" percentage={90} />
              <VerticalGraph text="Risk" percentage={5} />
              <VerticalGraph text="Outcomes" percentage={93} />
              <Image
                src="/images/home/the-chellange/bottomCorners.svg"
                alt="bottom corners"
                width={427}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
