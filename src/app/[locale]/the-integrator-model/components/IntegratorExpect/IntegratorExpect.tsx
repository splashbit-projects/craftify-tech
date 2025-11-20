'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IntegratorExpect.module.scss';

export const IntegratorExpect = () => {
  const t = useTranslations('integratorExpect');

  const items = [
    {
      title: t('title1', { fallback: 'Dedicated contact' }),
      text: t('text1', {
        fallback: 'One person coordinates planning, progress, and reporting.',
      }),
    },
    {
      title: t('title2', { fallback: 'Rapid onboarding' }),
      text: t('text2', {
        fallback: 'Scoping call, prioritized tasks, and required access outlined.',
      }),
    },
    {
      title: t('title3', { fallback: 'Fast expert access' }),
      text: t('text3', {
        fallback: 'Critical advisory delivered within 24–48 hours.',
      }),
    },
  ];

  return (
    <section className={styles.integrator_expect}>
      <div className={'_container'}>
        <div className={styles.integrator_expect__content}>
          <div className={styles.integrator_expect__col_1}>
            <div className={styles.heading}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
                dangerouslySetInnerHTML={{
                  __html: t('title', {
                    fallback: 'What to Expect',
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
          <div className={styles.integrator_expect__col_2}>
            <div className={styles.steps}>
              <div className={styles.step}>
                <Image src="/images/integrator/1.svg" alt="step-1" width={20} height={20} />
                <span>{t('step1', { fallback: 'Dedicated contact' })}</span>
              </div>
              <Image
                src="/images/integrator/stepLine1.svg"
                className={styles.stepLine1}
                alt="step-1"
                width={75}
                height={135}
              />
              <div className={styles.step}>
                <Image src="/images/integrator/2.svg" alt="step-2" width={20} height={20} />
                <span>{t('step2', { fallback: 'Rapid onboarding' })}</span>
              </div>
              <Image
                src="/images/integrator/stepLine2.svg"
                className={styles.stepLine2}
                alt="step-1"
                width={75}
                height={135}
              />
              <div className={styles.step}>
                <Image src="/images/integrator/3.svg" alt="step-3" width={20} height={20} />
                <span>{t('step3', { fallback: 'Fast expert access' })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
