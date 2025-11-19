'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './CtaBlock.module.scss';

export const CtaBlock = () => {
  const t = useTranslations('ctaBlock');

  return (
    <section className={styles.cta_block}>
      <div className={'_container'}>
        <div className={styles.cta_block__content}>
          <Image
            src="/images/topLeftWhite.svg"
            alt="top left white corner"
            width={20}
            height={20}
            className={styles.top_left}
          />
          <Image
            src="/images/topRightWhite.svg"
            alt="top right white corner"
            width={20}
            height={20}
            className={styles.top_right}
          />
          <Image
            src="/images/bottomLeftWhite.svg"
            alt="bottom left white corner"
            width={20}
            height={20}
            className={styles.bottom_left}
          />
          <Image
            src="/images/bottomRightWhite.svg"
            alt="bottom right white corner"
            width={20}
            height={20}
            className={styles.bottom_right}
          />
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            {t('title', { fallback: 'Not a vendor' })}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.subtitle}
          >
            {t('subtitle', { fallback: 'A cybersecurity command unit built around your needs.' })}
          </motion.p>
          <Link href="#" className={styles.button}>
            {t('button', { fallback: 'Learn More' })}
          </Link>
        </div>
      </div>
    </section>
  );
};
