'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { WEBSITE_EMAIL, WEBSITE_REGISTERED_ADDRESS } from '@/shared/lib/constants/constants';

import styles from './Footer.module.scss';

export const Footer = () => {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={'_container'}>
        <div className={styles.footer__row}>
          <div className={styles.footer__col_1}>
            <div className={styles.logo}>
              <Link href="/" className={styles.header__logo}>
                <Image src="/images/logo.svg" alt="Craftity Tech" width={149} height={28} />
              </Link>
              <p className={styles.subtitle}>
                {t('subtitle', { fallback: 'Where Cybersecurity Expertise Becomes Architecture.' })}
              </p>
            </div>
            <div className={styles.address}>
              <h3 className={styles.title}>
                {t('registered-address', { fallback: 'Registered Address:' })}
              </h3>
              <p>{WEBSITE_REGISTERED_ADDRESS}</p>
            </div>
            <div className={styles.contact}>
              {t('email', { fallback: 'Have a question? Ask our experts at ' })}
              <Link href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</Link>
            </div>
            <div className={styles.social}>
              <Link href="#">
                <Image src="/images/icons/linkedin.svg" alt="Linkedin" width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className={styles.footer__col_2}>
            <div className={styles.menu}>
              <h3 className={styles.title}>{t('solutions', { fallback: 'Solutions' })}</h3>
              <ul>
                <li>
                  <Link href="/the-integrator-model">
                    {t('the-integrator-model', { fallback: 'The Integrator Model' })}
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    {t('expertise-and-services', { fallback: 'Expertise and Services' })}
                  </Link>
                </li>
                <li>
                  <Link href="#">{t('industries', { fallback: 'Industries' })}</Link>
                </li>
              </ul>
            </div>
            <div className={styles.menu}>
              <h3 className={styles.title}>{t('company', { fallback: 'Company' })}</h3>
              <ul>
                <li>
                  <Link href="/team">{t('team', { fallback: 'Team' })}</Link>
                </li>
                <li>
                  <Link href="/about-us">{t('about-us', { fallback: 'About Us' })}</Link>
                </li>
                <li>
                  <Link href="#">{t('insights-and-news', { fallback: 'Insights & News' })}</Link>
                </li>
                <li>
                  <Link href="#">{t('contact', { fallback: 'Contact' })}</Link>
                </li>
              </ul>
            </div>
            <div className={styles.menu}>
              <h3 className={styles.title}>{t('legal', { fallback: 'Legal' })}</h3>
              <ul>
                <li>
                  <Link href="#">
                    {t('terms-and-conditions', { fallback: 'Terms and Conditions' })}
                  </Link>
                </li>
                <li>
                  <Link href="#">{t('privacy-policy', { fallback: 'Privacy Policy' })}</Link>
                </li>
                <li>
                  <Link href="#">{t('cookie-policy', { fallback: 'Cookie Policy' })}</Link>
                </li>
                <li>
                  <Link href="#">{t('refund-policy', { fallback: 'Refund Policy' })}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer__divider}></div>
        <div className={styles.footer__copy}>
          <p>
            Craftify Labs Technologies SRL. {year}.{' '}
            {t('copyright', { fallback: 'All rights cybersecured.' })}
          </p>
        </div>
      </div>
    </footer>
  );
};
