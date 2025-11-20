'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IntegratorInPractice.module.scss';

export const IntegratorInPractice = () => {
  const t = useTranslations('integratorInPractice');

  const items = [
    {
      icon: '/images/integrator/icon1.svg',
      title: t('itemTitle1', { fallback: 'Mission Definition' }),
      text: t('itemText1', {
        fallback: 'We define your security goals and KPIs based on your operational context.',
      }),
    },
    {
      icon: '/images/integrator/icon2.svg',
      title: t('itemTitle2', { fallback: 'Team Assembling' }),
      text: t('itemText2', {
        fallback: 'Certified specialists are assigned per domain to cover every critical area.',
      }),
    },
    {
      icon: '/images/integrator/icon3.svg',
      title: t('itemTitle3', { fallback: 'One Channel Delivery' }),
      text: t('itemText3', {
        fallback: 'A single delivery manager coordinates all activities and reporting.',
      }),
    },
    {
      icon: '/images/integrator/icon4.svg',
      title: t('itemTitle4', { fallback: 'Review and Optimization' }),
      text: t('itemText4', {
        fallback: 'Results are measured against KPIs and used to improve your next steps.',
      }),
    },
  ];

  return (
    <section className={styles.integrator_in_practice}>
      <div className={'_container'}>
        <div className={styles.integrator_in_practice__content}>
          <div className={styles.integrator_in_practice__heading}>
            <div className={styles.integrator_in_practice__title}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'How the Integrator Model Works in Practice' })}
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
                      'Other solutions leave gaps. We cover every domain with one tailored team.',
                  }),
                }}
              />
            </div>
          </div>
          <div className={styles.integrator_in_practice__items}>
            {items.map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.integrator_in_practice__item}
                key={item.title}
              >
                <Image
                  src="/images/topLeft.svg"
                  alt="top left corner"
                  width={20}
                  height={20}
                  className={styles.top_left}
                />
                <Image
                  src="/images/topRight.svg"
                  alt="top right corner"
                  width={20}
                  height={20}
                  className={styles.top_right}
                />
                <Image
                  src="/images/bottomLeft.svg"
                  alt="bottom left corner"
                  width={20}
                  height={20}
                  className={styles.bottom_left}
                />
                <Image
                  src="/images/bottomRight.svg"
                  alt="bottom right corner"
                  width={20}
                  height={20}
                  className={styles.bottom_right}
                />
                <Image src={item.icon || ''} alt={item.title || ''} width={32} height={32} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.integrator_in_practice__outcome}>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item__title}
            >
              {t('resultsTitle', { fallback: 'The outcome?' })}
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.item__text}
            >
              {t('resultsText', {
                fallback: 'Enterprise cybersecurity, measurable results, zero in-house overhead',
              })}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
