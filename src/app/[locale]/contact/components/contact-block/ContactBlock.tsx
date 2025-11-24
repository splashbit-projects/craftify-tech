'use client';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { ContactForm } from '@/features/contact-form/ui/ContactForm';

import {
  LINKEDIN_URL,
  WEBSITE_EMAIL,
  WEBSITE_PHONE,
  WEBSITE_REGISTERED_ADDRESS,
  WEBSITE_REGISTERED_ADDRESS_MAP,
} from '@/shared/lib/constants/constants';
import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './ContactBlock.module.scss';

export const ContactBlock = () => {
  const t = useTranslations('contact');

  return (
    <section className={styles.contact_block}>
      <div className={'_container'}>
        <div className={styles.contact_block__content}>
          <div className={styles.contact_block__col}>
            <div className={styles.heading}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title1', { fallback: 'Business Correspondence' })}
              </motion.h2>
            </div>
            <div className={styles.details}>
              <div className={styles.addresses}>
                <h3>{t('subtitle1', { fallback: 'Craftify Labs Technologies SRL' })}</h3>
                <div>
                  <b>{t('subtitle2', { fallback: 'Registered Address' })}</b>
                  <p>{WEBSITE_REGISTERED_ADDRESS}</p>
                  <div dangerouslySetInnerHTML={{ __html: WEBSITE_REGISTERED_ADDRESS_MAP }} />
                </div>
                <div>
                  <b>{t('subtitle3', { fallback: 'Phone' })}</b>
                  <Link href={`tel:${WEBSITE_PHONE}`}>{WEBSITE_PHONE}</Link>
                </div>
                <div>
                  <b>{t('subtitle4', { fallback: 'Email:' })}</b>
                  <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
                </div>
                <div className={styles.linkedin}>
                  <b>{t('subtitle5', { fallback: 'Visit us on LinkedIn' })}</b>
                  <Link href={LINKEDIN_URL} target="_blank">
                    <Image src="/images/linkedinBlue.svg" alt="Linkedin" width={84} height={26} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contact_block__col}>
            <div className={styles.heading}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.title}
              >
                {t('title2-1', { fallback: 'Contact' })}
                <br />
                <span>{t('title2-2', { fallback: 'Craftify Tech Team' })}</span>
              </motion.h2>
            </div>
            <div className={styles.details}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
