'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { useServices } from '@/features/services/model/services';
import { ServiceCard } from '@/features/services/ui/service-card/ServiceCard';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ServicesLoop.module.scss';

export const ServicesLoop = () => {
  const t = useTranslations('servicesLoop');

  const services = useServices();

  return (
    <section className={styles.services_loop}>
      <div className={'_container'}>
        <div className={styles.services_loop__content}>
          <div className={styles.services_loop__heading}>
            <div className={styles.services_loop__title}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'Our Services' })}
              </motion.h2>
            </div>
          </div>
          <div className={styles.services_loop__items}>
            {services.map((service) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.services_loop__item}
                key={service.id}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
