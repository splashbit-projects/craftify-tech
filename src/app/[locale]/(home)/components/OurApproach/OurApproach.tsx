'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './OurApproach.module.scss';

export const OurApproach = () => {
  const t = useTranslations('ourApproach');

  const items = [
    {
      icon: '/images/home/our-approach/icon-1.svg',
      title: t('itemTitle1', { fallback: 'Assess' }),
      text: t('itemText1', {
        fallback:
          'We evaluate your infrastructure, workflows, and governance posture to pinpoint risk and complexity.',
      }),
    },
    {
      icon: '/images/home/our-approach/icon-2.svg',
      title: t('itemTitle2', { fallback: 'Assemble' }),
      text: t('itemText2', {
        fallback:
          'We bring in domain specialists – architects, engineers, analysts – matched precisely to your challenge.',
      }),
    },
    {
      icon: '/images/home/our-approach/icon-3.svg',
      title: t('itemTitle3', { fallback: 'Integrate' }),
      text: t('itemText3', {
        fallback:
          'We align people, processes, and technology into a unified, resilient security architecture.',
      }),
    },
    {
      icon: '/images/home/our-approach/icon-4.svg',
      title: t('itemTitle4', { fallback: 'Validate' }),
      text: t('itemText4', {
        fallback:
          'We measure outcomes against recognized frameworks to ensure lasting compliance and performance.',
      }),
    },
  ];

  return (
    <section className={styles.our_approach}>
      <div className={'_container'}>
        <div className={styles.our_approach__content}>
          <div className={styles.our_approach__col_1}>
            <Image
              src="/images/home/our-approach/our-approach-1.png"
              alt="our approach bg"
              width={555}
              height={655}
            />
            <Image
              src="/images/home/our-approach/our-approach-2.png"
              alt="our approach bg"
              width={555}
              height={655}
            />
            <Image
              src="/images/home/our-approach/our-approach-3.png"
              alt="our approach bg"
              width={555}
              height={655}
            />
          </div>
          <div className={styles.our_approach__col_2}>
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
              className={styles.text}
            >
              {t('text', {
                fallback:
                  'We don’t sell predefined packages — we assemble the exact expertise your case demands.',
              })}
            </motion.p>
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
              <Image src={item.icon} alt={item.title} width={32} height={32} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
