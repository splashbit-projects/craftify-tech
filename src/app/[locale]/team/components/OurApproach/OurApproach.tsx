'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './OurApproach.module.scss';

export const OurApproach = () => {
  const t = useTranslations('teamApproach');

  const items = [
    {
      icon: '/images/team/approach/icon1.svg',
      title: t('itemTitle1', { fallback: 'One contract' }),
      text: t('itemText1', {
        fallback: 'Full operational control and unified reporting',
      }),
    },
    {
      icon: '/images/team/approach/icon2.svg',
      title: t('itemTitle2', { fallback: 'Matched expertise' }),
      text: t('itemText2', {
        fallback: 'Every task handled by the right certified specialist',
      }),
    },
    {
      icon: '/images/team/approach/icon3.svg',
      title: t('itemTitle3', { fallback: 'Scalable structure' }),
      text: t('itemText3', {
        fallback: 'Add or replace experts within days',
      }),
    },
    {
      icon: '/images/team/approach/icon4.svg',
      title: t('itemTitle4', { fallback: 'Accountable delivery' }),
      text: t('itemText4', {
        fallback: 'Oversight by senior architects or vCISOs',
      }),
    },
  ];

  return (
    <section className={styles.our_approach}>
      <div className={'_container'}>
        <div className={styles.our_approach__content}>
          <div className={styles.our_approach__heading}>
            <div className={styles.our_approach__title}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'Our Approach' })}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.subtitle}
              >
                {t('subtitle', {
                  fallback:
                    'Most organizations cannot maintain full in-house cybersecurity coverage.',
                })}
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
                      'Craftify Tech builds and manages dedicated expert teams for every security <br/>domain – led, coordinated, and quality-controlled by our core management unit.',
                  }),
                }}
              />
            </div>
          </div>
          <div className={styles.our_approach__items}>
            {items.map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.our_approach__item}
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
        </div>
        <div className={styles.our_approach__results}>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item__title}
          >
            {t('resultsTitle', { fallback: 'Result' })}
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.item__text}
          >
            {t('resultsText', {
              fallback: 'Сomplete security capability without building an internal department. ',
            })}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
