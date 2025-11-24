'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './IndustriesDetails.module.scss';

export const IndustriesDetails = () => {
  const t = useTranslations('industriesDetails');

  const items = [
    {
      title: t('itemTitle1', { fallback: 'Mission Definition' }),
      risks: t('itemRisks1', {
        fallback:
          'Financial institutions face constant attempts at data theft, transaction manipulation, and ransomware targeting high-value information.',
      }),
      whatYouGet: t('itemWhatYouGet1', {
        fallback:
          'Protected financial processes, continuous transaction integrity, and secure customer data managed under full compliance.',
      }),
    },
    {
      title: t('itemTitle2', { fallback: 'Insurance and Legal' }),
      risks: t('itemRisks2', {
        fallback:
          'Sensitive client information and contractual data make these industries prime targets for leaks, insider breaches, and unauthorised access.',
      }),
      whatYouGet: t('itemWhatYouGet2', {
        fallback:
          'Encrypted data storage, reliable client confidentiality, and optimised digital workflows for regulated environments.',
      }),
    },
    {
      title: t('itemTitle3', { fallback: 'E-Commerce and Retail' }),
      risks: t('itemRisks3', {
        fallback:
          'Payment systems and customer databases are vulnerable to phishing, fraud, and large-scale credential leaks.',
      }),
      whatYouGet: t('itemWhatYouGet3', {
        fallback:
          'Secured online transactions, safeguarded customer data, and stable digital infrastructure ready for growth and seasonal load peaks.',
      }),
    },
    {
      title: t('itemTitle4', { fallback: 'Telecom and Technology Providers' }),
      risks: t('itemRisks4', {
        fallback:
          'Network breaches, service interruptions, and data interception that can compromise millions of users simultaneously.',
      }),
      whatYouGet: t('itemWhatYouGet4', {
        fallback:
          'Hardened infrastructure, protected data traffic, and stable system uptime for uninterrupted service performance.',
      }),
    },
    {
      title: t('itemTitle5', { fallback: 'Crypto, iGaming, and Online Platforms' }),
      risks: t('itemRisks5', {
        fallback:
          'Frequent high-intensity cyberattacks, bot activity, and unauthorised data extraction targeting platforms with global user access.',
      }),
      whatYouGet: t('itemWhatYouGet5', {
        fallback:
          'Reinforced platform architecture, protected user environments, and constant system oversight to prevent operational risks.',
      }),
    },
    {
      title: t('itemTitle6', { fallback: 'Small and Medium Businesses' }),
      risks: t('itemRisks6', {
        fallback:
          'Limited in-house IT protection makes SMBs vulnerable to malware, ransomware, and data breaches.',
      }),
      whatYouGet: t('itemWhatYouGet6', {
        fallback:
          'Scalable protection, optimised IT performance, and cost-effective cybersecurity built for growing operations.',
      }),
    },
  ];

  return (
    <section className={styles.industries_details}>
      <div className={'_container'}>
        <div className={styles.industries_details__content}>
          <div className={styles.industries_details__items}>
            {items.map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.industries_details__item}
                key={item.title}
              >
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
                <Image
                  src={'/images/industries/icon1.svg'}
                  width={32}
                  height={32}
                  alt="industries"
                />
                <h3>{item.title}</h3>
                <p>
                  <b>{t('risks', { fallback: 'Risks' })}</b>
                  {item.risks}
                </p>
                <p>
                  <b>{t('whatYouGet', { fallback: 'What You Get' })}</b>
                  {item.whatYouGet}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
