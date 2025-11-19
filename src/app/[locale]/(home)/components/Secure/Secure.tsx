'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './Secure.module.scss';

export const Secure = () => {
  const t = useTranslations('secure');

  return (
    <section className={styles.secure}>
      <div className={'_container'}>
        <div className={styles.secure__content}>
          <div className={styles.secure__col_1}>
            <Image src="/images/home/secure/radar.svg" alt="secure" width={500} height={500} />
          </div>
          <div className={styles.secure__col_2}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', {
                fallback: 'Secure Your Enterprise Infrastructure, Talk to a Cyber Expert Today',
              })}
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.secure__button}
            >
              <Button variant="primary" url="#" type="link">
                {t('request-consultation', { fallback: 'Request Free Consultation' })}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
