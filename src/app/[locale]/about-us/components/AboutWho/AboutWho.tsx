'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './AboutWho.module.scss';

export const AboutWho = () => {
  const t = useTranslations('aboutWho');

  return (
    <section className={styles.about_who}>
      <div className={'_container'}>
        <div className={styles.about_who__content}>
          <div className={styles.about_who__col_1}>
            <Image
              src="/images/about-us/who/leftImage.png"
              alt="top left corner"
              width={555}
              height={555}
              className={styles.leftImage}
              unoptimized
            />
          </div>
          <div className={styles.about_who__col_2}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: t('title', {
                  fallback: 'Who We Are',
                }),
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
                fallback:
                  'Craftity Labs is a cybersecurity integrator with deep operational expertise, delivering enterprise-grade security by orchestrating vetted specialists across multiple domains.',
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
                {t('button', { fallback: 'Check Services' })}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
