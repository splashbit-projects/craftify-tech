'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Camera, Close, Microphone, Pencil } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './AboutExperts.module.scss';

export const AboutExperts = () => {
  const t = useTranslations('aboutExperts');

  return (
    <section className={styles.about_experts}>
      <div className={'_container'}>
        <div className={styles.about_experts__content}>
          <div className={styles.about_experts__col_1}>
            <div className={styles.about_experts__wrapper}>
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
              <div className={styles.expert_details}>
                <Image
                  src="/images/integrator/expert.png"
                  alt="expert photo"
                  width={64}
                  height={64}
                  className={styles.expert_photo}
                />
                <div>
                  <h3>{t('expertName', { fallback: 'John Doe' })}</h3>
                  <p>{t('expertTitle', { fallback: 'Cyber Threat Analyst' })}</p>
                </div>
              </div>
              <div className={styles.expert_divider}></div>
              <div className={styles.expert_buttons}>
                <Link href="#">
                  <Camera />
                </Link>
                <Link href="#">
                  <Microphone />
                </Link>
                <Link href="#">
                  <Pencil />
                </Link>
                <Link href="#" className={styles.close_button}>
                  <Close />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.about_experts__col_2}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', { fallback: 'Our Experts Are' })}
              <br />
              <span>{t('subtitle', { fallback: 'Ready to Consult You Right Away' })}</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.subtitle}
            >
              {t('text', {
                fallback:
                  'Schedule a session or emergency advisory call within 24 hours for pressing security needs: SOC assessment, incident response, or architecture review.',
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
