'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IndustriesHero.module.scss';

export const IndustriesHero = () => {
  const t = useTranslations('industriesHero');

  return (
    <section className={styles.industries_hero}>
      <div className={'_container'}>
        <div className={styles.industries_hero__content}>
          <div className={styles.industries_hero__col_1}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: t('title', { fallback: 'Proven <br/>Cybersecurity' }),
                }}
              />
              <br />
              {t('subtitle', { fallback: 'Solutions For Every Industry' })}
            </motion.h1>
          </div>
          <div className={styles.industries_hero__col_2}>
            <Image src="/images/industries/hero.svg" alt="industries" width={496} height={422} />
          </div>
        </div>
      </div>
    </section>
  );
};
