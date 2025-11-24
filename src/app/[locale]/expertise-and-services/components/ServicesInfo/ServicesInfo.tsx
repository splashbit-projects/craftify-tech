'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './ServicesInfo.module.scss';

export const ServicesInfo = () => {
  const t = useTranslations('servicesInfo');

  return (
    <section className={styles.services_info}>
      <div className={'_container'}>
        <div className={styles.services_info__content}>
          <div className={styles.services_info__col_1}>
            <Image
              src="/images/services/info.svg"
              alt="info"
              width={400}
              height={400}
              className={styles.info}
            />
          </div>
          <div className={styles.services_info__col_2}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: t('title', { fallback: 'We don’t sell services. <br/>We integrate solutions.' }),
              }}
           />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.subtitle}
            >
              {t('subtitle', {
                fallback: 'No cybersecurity challenge is isolated.',
              })}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.text}
            >
              {t('text', {
                fallback:
                  'Every effective defense is a cross-domain response, built by coordinated experts.',
              })}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.button}
            >
              <Button variant="primary" url="#" type="link">
                {t('button', { fallback: 'Request Expert Assistance' })}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
