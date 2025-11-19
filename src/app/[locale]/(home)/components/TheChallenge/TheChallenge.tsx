'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { PercentageGraph } from '@/shared/ui/components';

import styles from './TheChallenge.module.scss';

export const TheChallenge = () => {
  const t = useTranslations('theChallenge');
  return (
    <section className={styles.the_challenge}>
      <div className={'_container'}>
        <div className={styles.the_challenge__content}>
          <div className={styles.the_challenge__col_1}>
            <div className={styles.top}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title', { fallback: 'The Challenge' })}
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.subtitle}
              >
                {t('subtitle', {
                  fallback: 'Modern enterprises face more than threats, they face complexity.',
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
                    'Fragmented systems, overwhelmed teams, and constantly shifting regulations leave critical gaps exposed. Even strong internal departments can’t cover every domain or adapt fast enough.',
                })}
              </motion.p>
            </div>
            <div className={styles.bottom}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.the_challenge__image}
              >
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={styles.the_challenge__text}
                >
                  {t('subtitle', {
                    fallback:
                      'Cybersecurity isn’t just about defense — it’s about coordination. That’s where most systems fail.',
                  })}
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className={styles.the_challenge__col_2}>
            <div className={styles.inner}>
              <Image
                src="/images/home/the-chellange/topCorners.svg"
                alt="top corners"
                width={427}
                height={20}
              />
              <div className={styles.graph}>
                <PercentageGraph percentage={44} />
                <PercentageGraph percentage={72} />
                <PercentageGraph percentage={19} />
                <PercentageGraph percentage={93} />
              </div>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.the_challenge__title}
              >
                {t('subtitle2', { fallback: 'Where businesses struggle most' })}
              </motion.h3>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.the_challenge__list}
              >
                <li className={styles.the_challenge__item}>
                  {t('item-1', { fallback: 'Limited internal cybersecurity capacity' })}
                </li>
                <li className={styles.the_challenge__item}>
                  {t('item-2', { fallback: 'Disconnected tools and data silos' })}
                </li>
                <li className={styles.the_challenge__item}>
                  {t('item-3', { fallback: 'Escalating compliance pressure' })}
                </li>
                <li className={styles.the_challenge__item}>
                  {t('item-4', { fallback: 'Absence of niche expertise when it matters most' })}
                </li>
              </motion.ul>
              <Image
                src="/images/home/the-chellange/bottomCorners.svg"
                alt="bottom corners"
                width={427}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
