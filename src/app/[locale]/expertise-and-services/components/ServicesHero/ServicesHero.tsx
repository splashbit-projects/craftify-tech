'use client';


import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ServicesHero.module.scss';

export const ServicesHero = () => {
  const t = useTranslations('servicesHero');

  return (
    <section className={styles.services_hero}>
      <div className={'_container'}>
        <div className={styles.services_hero__content}>
          <div className={styles.services_hero__col_1}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title}
            >
              {t('title', {
                fallback: 'Cybersecurity Solutions ',
              })}
              <br />
              <span>{t('subtitle', { fallback: 'Designed, Integrated, Delivered' })}</span>
            </motion.h1>
          </div>
          <div className={styles.services_hero__col_2}>
            <div className={styles.services_hero__wrapper}>
              <div className={styles.heading}>
                {t('heading', {
                  fallback: 'Craftify Labs Technologies',
                })}
              </div>
              <div className={styles.description}>
                <ol>
                  <li>
                    <span>
                      {t('description-item-1', {
                        fallback: '[ SYSTEM STATUS ]',
                      })}
                    </span>
                  </li>
                  <li>
                    •{` `}
                    <b>{t('description-item-2-bold', { fallback: 'All' })}</b>{' '}
                    {t('description-item-2', {
                      fallback: t('description-item-2-text', { fallback: 'domains' }),
                    })}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{t('description-item-2-span', { fallback: '[connected]' })}</span>
                  </li>
                  <li>
                    {t('description-item-3', {
                      fallback: '• No delivery gaps ',
                    })}
                    &nbsp;
                    <span>{t('description-item-3-span', { fallback: '[detected]' })}</span>
                  </li>
                  <li>
                    {t('description-item-4', {
                      fallback: '• Risk coverage',
                      })}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{t('description-item-4-span', { fallback: '[94%]' })}</span>
                  </li>
                  <li> </li>
                  <li>
                    <span>
                      {t('description-item-5', {
                        fallback: '[ ACTIVE MODULES ]',
                      })}
                    </span>
                  </li>
                  <li>
                    {t('description-item-6', {
                      fallback: '- IAM',
                    })}
                  </li>
                  <li>
                    {t('description-item-7', {
                      fallback: '- Cloud Security',
                    })}
                  </li>
                  <li>
                    {t('description-item-8', {
                      fallback: '- Network Defense',
                    })}
                  </li>
                  <li>
                    {t('description-item-9', {
                      fallback: '- AppSec',
                    })}
                  </li>
                  <li>
                    {t('description-item-10', {
                      fallback: '- DevSecOps',
                    })}
                  </li>
                  <li>
                    {t('description-item-11', {
                      fallback: '- GRC',
                    })}
                  </li>
                  <li>
                    {t('description-item-12', {
                      fallback: '- Threat Intelligence',
                    })}
                  </li>
                  <li>
                    {t('description-item-13', {
                      fallback: '- SOC Operations',
                    })}
                  </li>
                  <li> </li>
                  <li>
                    <span>
                      {t('description-item-14', {
                        fallback: '[ NEXT SCHEDULED DELIVERABLES ]',
                      })}
                    </span>
                  </li>
                  <li>
                  •{` `}
                    {t('description-item-15', {
                      fallback: 'Cloud Hardening',
                    })}
                     .......... 
                    <i>{t('description-item-15-span', { fallback: 'In progress' })}</i>
                  </li>
                  <li>
                  •{` `}
                    {t('description-item-16', {
                      fallback: 'AppSec Assessments',
                    })}
                     ....... 
                    <b>{t('description-item-16-bold', { fallback: 'Ready for review' })}</b>
                  </li>
                  <li>
                  •{` `}
                    {t('description-item-17', {
                      fallback: 'SIEM Tuning .............. Delivered',
                    })}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
