'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './Experts.module.scss';

export const Experts = () => {
  const t = useTranslations('teamExperts');

  const items = [
    {
      icon: '/images/team/experts/icon1.png',
      title: t('itemTitle1', { fallback: 'Cloud Security <br/>Architect' }),
      text: t('itemText1', {
        fallback:
          'Designs secure cloud infrastructures, implements Zero Trust principles, and ensures compliance with enterprise resilience standards.',
      }),
    },
    {
      icon: '/images/team/experts/icon2.png',
      title: t('itemTitle2', { fallback: 'Incident <br/>Response Lead' }),
      text: t('itemText2', {
        fallback:
          'Coordinates containment, eradication, and recovery during critical incidents with minimal operational disruption.',
      }),
    },
    {
      icon: '/images/team/experts/icon3.png',
      title: t('itemTitle3', { fallback: 'GRC & <br/>Compliance Lead' }),
      text: t('itemText3', {
        fallback:
          'Implements ISO, PCI, and GDPR frameworks, ensuring measurable governance and audit readiness.',
      }),
    },
    {
      icon: '/images/team/experts/icon4.png',
      title: t('itemTitle4', { fallback: 'Red <br/>Team Lead' }),
      text: t('itemText4', {
        fallback:
          'Conducts adversary simulations and penetration testing to expose and mitigate critical vulnerabilities.',
      }),
    },
    {
      icon: '/images/team/experts/icon5.png',
      title: t('itemTitle5', { fallback: 'DevSecOps <br/>Security Engineer' }),
      text: t('itemText5', {
        fallback:
          'Integrates security into CI/CD pipelines, maintaining code integrity and continuous protection.',
      }),
    },
  ];

  return (
    <section className={styles.our_approach}>
      <div className={'_container'}>
        <div className={styles.our_approach__content}>
          <div className={styles.our_approach__heading}>
            <div className={styles.our_approach__title}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'Experts Who Power Our Projects' })}
              </motion.h2>
            </div>
          </div>
          <div className={styles.our_approach__items}>
            {items.map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.our_approach__item}
                key={item.title}
              >
                <div>
                  <Image src={item.icon || ''} alt={item.title || ''} width={102} height={42} />
                  <h3 dangerouslySetInnerHTML={{ __html: item.title || '' }} />
                  <p dangerouslySetInnerHTML={{ __html: item.text || '' }} />
                </div>
                <Button variant="primary" url="#" type="link">
                  {t('button', { fallback: 'Contact' })}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
