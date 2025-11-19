'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './Industries.module.scss';

export const Industries = () => {
  const t = useTranslations('industries');

  const items = [
    {
      icon: '/images/home/industries/icon1.svg',
      title: t('item1', { fallback: 'Finance & <br/>Fintech' }),
    },
    {
      icon: '/images/home/industries/icon2.svg',
      title: t('item2', { fallback: 'Healthcare & Life <br/>Sciences' }),
    },
    {
      icon: '/images/home/industries/icon3.svg',
      title: t('item3', { fallback: 'Manufacturing & <br/>Industrial' }),
    },
    {
      icon: '/images/home/industries/icon4.svg',
      title: t('item4', { fallback: 'Retail & <br/>E-commerce' }),
    },
    {
      icon: '/images/home/industries/icon5.svg',
      title: t('item5', { fallback: 'SaaS & <br/>Technology' }),
    },
  ];

  return (
    <section className={styles.industries}>
      <div className={'_container'}>
        <div className={styles.industries__content}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title}
          >
            {t('title', { fallback: 'Industries We Secure' })}
          </motion.h2>

          <div className={styles.industries__list}>
            {items.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={`${item.title}-${index}`}
                className={styles.item}
              >
                <Image src={item.icon} alt={item.title} width={40} height={40} />
                <p dangerouslySetInnerHTML={{ __html: item.title }} />
              </motion.div>
            ))}
          </div>
          <Button variant="primary" url="#" type="link">
            {t('button', { fallback: 'Learn How We Help' })}
          </Button>
        </div>
      </div>
    </section>
  );
};
