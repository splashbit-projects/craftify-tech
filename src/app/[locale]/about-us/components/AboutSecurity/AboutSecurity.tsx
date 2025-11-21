'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './AboutSecurity.module.scss';

export const AboutSecurity = () => {
  const t = useTranslations('aboutSecurity');

  return (
    <section className={styles.about_security}>
      <div className={'_container'}>
        <div className={styles.about_security__content}>
          <div className={styles.about_security__col_1}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: t('title', {
                  fallback: 'Security Projects Fail Without Structure',
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
              {t('text1', {
                fallback:
                  'Most enterprises hire multiple vendors or rely on internal teams that cannot cover every domain. The result: gaps, duplicated efforts, missed deadlines, and unaccountable outcomes.',
              })}
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.subtitle}
            >
              {t('text2', {
                fallback:
                  'Craftity Labs was founded to fix this, providing a single point of control and fully coordinated, cross-domain security delivery.Craftity Labs was founded to fix this, providing a single point of control and fully coordinated, cross-domain security delivery.',
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
                {t('button', { fallback: 'Check Our Approach' })}
              </Button>
            </motion.div>
          </div>
          <div className={styles.about_security__col_2}>
            <div className={styles.inner1}>
              <div className={styles.item1}>{t('item1', { fallback: 'multiple vendors' })}</div>
              <div className={styles.item2}>{t('item2', { fallback: 'duplicate work' })}</div>
              <div className={styles.item3}>{t('item3', { fallback: 'missed deadlines' })}</div>
            </div>
            <div className={styles.inner2}>
              <div>
                <Image
                  src="/images/about-us/security/icon1.svg"
                  alt="icon"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                <span>{t('info1', { fallback: 'Craftity Labs' })}</span>
              </div>
              <Image
                src="/images/about-us/security/line.svg"
                alt="icon"
                width={24}
                height={106}
                className={styles.line}
              />
              <div>
                <Image
                  src="/images/about-us/security/icon2.svg"
                  alt="icon"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                <span>{t('info2', { fallback: 'Single Control' })}</span>
              </div>
              <Image
                src="/images/about-us/security/line.svg"
                alt="icon"
                width={24}
                height={106}
                className={styles.line}
              />
              <div>
                <Image
                  src="/images/about-us/security/icon3.svg"
                  alt="icon"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
                <span>{t('info3', { fallback: 'Coordinated Domains' })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
