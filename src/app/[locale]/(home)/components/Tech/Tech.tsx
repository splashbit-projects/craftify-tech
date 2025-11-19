'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import { Graph } from './Graph';
import styles from './Tech.module.scss';

export const Tech = () => {
  const t = useTranslations('tech');

  return (
    <section className={styles.tech}>
      <div className={'_container'}>
        <div className={styles.tech__content}>
          <div className={styles.tech__col_1}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', { fallback: 'Craftify Tech' })}
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
                  'Practical expertise that strengthens resilience, compliance, and operational continuity.',
              })}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.tech__button}
            >
              <Button variant="primary" url="#" type="link">
                {t('explore-solutions', { fallback: 'Explore Solutions' })}
              </Button>
            </motion.div>
          </div>
          <div className={styles.tech__col_2}>
            <Graph />
          </div>
        </div>
      </div>
    </section>
  );
};
