'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { ExpertBlock } from '@/shared/ui/components';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './ServicesChallenged.module.scss';

export const ServicesChallenged = () => {
  const t = useTranslations('servicesChallenged');

  return (
    <section className={styles.services_challenged}>
      <div className={'_container'}>
        <div className={styles.services_challenged__content}>
          <div className={styles.services_challenged__col_1}>
            <ExpertBlock />
          </div>
          <div className={styles.services_challenged__col_2}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', { fallback: 'Still Challenged?' })}
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
                  'Tell us your top security priority and we’ll match the right experts and delivery mode.',
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
