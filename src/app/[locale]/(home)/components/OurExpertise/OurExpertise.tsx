'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './OurExpertise.module.scss';

export const OurExpertise = () => {
  const t = useTranslations('ourExpertise');

  const items = [
    {
      title: t('itemTitle1', { fallback: 'Network & Cloud Security' }),
      text: t('itemText1', {
        fallback:
          'Ensure secure, uninterrupted operations across hybrid and cloud infrastructures.',
      }),
    },
    {
      title: t('itemTitle2', { fallback: 'Identity & Access Management' }),
      text: t('itemText2', {
        fallback:
          'Gain full control over user access, authentication, and permissions across your systems.',
      }),
    },
    {
      title: t('itemTitle3', { fallback: 'Threat Detection & Incident Response' }),
      text: t('itemText3', {
        fallback: 'Detect incidents early, respond fast, and minimize operational disruption.',
      }),
    },
    {
      title: t('itemTitle4', { fallback: 'Security Architecture & Operations' }),
      text: t('itemText4', {
        fallback: 'Build a unified security structure that adapts as your business evolves.',
      }),
    },
    {
      title: t('itemTitle5', { fallback: 'Risk & Compliance Management' }),
      text: t('itemText5', {
        fallback:
          'Meet and maintain alignment with regulatory frameworks – without slowing operations.',
      }),
    },
    {
      title: t('itemTitle6', { fallback: 'Endpoint Protection & Infrastructure Defense' }),
      text: t('itemText6', {
        fallback: 'Keep every device, network layer, and workload shielded from modern threats.',
      }),
    },
  ];

  return (
    <section className={styles.our_expertise}>
      <div className={'_container'}>
        <div className={styles.our_expertise__content}>
          <div className={styles.our_expertise__heading}>
            <div className={styles.our_expertise__title}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'Our Expertise' })}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.text}
              >
                {t('text', {
                  fallback: 'Comprehensive coverage across all key cybersecurity domains.',
                })}
              </motion.p>
            </div>
            <Image
              src="/images/home/our-expertise/title.svg"
              alt="our expertise title"
              width={206}
              height={64}
            />
          </div>
          <div className={styles.our_expertise__items}>
            {items.map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.our_expertise__item}
                key={item.title}
              >
                <Image
                  src="/images/topRightBlack.svg"
                  alt="top right corner"
                  width={20}
                  height={20}
                  className={styles.top_right}
                />
                <Image
                  src="/images/bottomLeftBlack.svg"
                  alt="bottom left corner"
                  width={20}
                  height={20}
                  className={styles.bottom_left}
                />
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
