'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IndustriesSlows.module.scss';

export const IndustriesSlows = () => {
  const t = useTranslations('industriesSlows');

  return (
    <section className={styles.industries_slows}>
      <div className={'_container'}>
        <div className={styles.industries_slows__content}>
          <div className={styles.industries_slows__col_1}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', { fallback: 'We Prevent What Slows You Down' })}
            </motion.h1>
          </div>
          <div className={styles.industries_slows__col_2}>
            <Image src="/images/industries/info.svg" alt="industries" width={496} height={422} />
          </div>
        </div>
      </div>
    </section>
  );
};
