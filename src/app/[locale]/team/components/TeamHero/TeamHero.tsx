'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './TeamHero.module.scss';

export const TeamHero = () => {
  const t = useTranslations('teamHero');

  return (
    <section className={styles.team_hero}>
      <div className={'_container'}>
        <div className={styles.team_hero__content}>
          <div className={styles.team_hero__col_1}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', {
                fallback: 'Expertise for',
              })}
              <span>{t('subtitle', { fallback: 'Every Cybersecurity Function' })}</span>
            </motion.h2>
          </div>
          <div className={styles.team_hero__col_2}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.team_hero__col_2_image}
            >
              <Image src="/images/team/heroImg.svg" alt="graph" width={500} height={500} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
