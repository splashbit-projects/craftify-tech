'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button/Button';

import styles from './Header.module.scss';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const t = useTranslations('header');

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={'_container'}>
        <div className={styles.header__row}>
          <Link href="/" className={styles.header__logo}>
            <Image src="/images/logo.svg" alt="Craftity Tech" width={149} height={28} />
          </Link>

          <button
            className={`${styles.header__mobile_menu_button} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Image src="/images/menu.svg" alt="Menu" width={24} height={24} />
          </button>

          <nav className={styles.header__menu}>
            <Link href="#">{t('team', { fallback: 'Team' })}</Link>
            <Link href="#">{t('the-integrator-model', { fallback: 'The Integrator Model' })}</Link>
            <Link href="#">
              {t('expertise-and-services', { fallback: 'Expertise and Services' })}
            </Link>
            <Link href="#">{t('industries', { fallback: 'Industries' })}</Link>
            <Link href="#">{t('about-us', { fallback: 'About Us' })}</Link>
            <Link href="#">{t('insights-and-news', { fallback: 'Insights & News' })}</Link>
            <Link href="#">{t('contact', { fallback: 'Contact' })}</Link>
          </nav>
          <div className={styles.header__contact}>
            <Button variant="secondary" url="#" type="link">
              {t('request-consultation', { fallback: 'Request Consultation' })}
            </Button>
          </div>
        </div>
      </div>
      <div className={`${styles.header__mobile_menu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav>
          <Link href="#">{t('team', { fallback: 'Team' })}</Link>
          <Link href="#">{t('the-integrator-model', { fallback: 'The Integrator Model' })}</Link>
          <Link href="#">
            {t('expertise-and-services', { fallback: 'Expertise and Services' })}
          </Link>
          <Link href="#">{t('industries', { fallback: 'Industries' })}</Link>
          <Link href="#">{t('about-us', { fallback: 'About Us' })}</Link>
          <Link href="#">{t('insights-and-news', { fallback: 'Insights & News' })}</Link>
          <Link href="#">{t('contact', { fallback: 'Contact' })}</Link>
        </nav>
        <div className={styles.header__mobile_menu_contact}>
          <Button variant="secondary" url="#" type="link">
            {t('request-consultation', { fallback: 'Request Consultation' })}
          </Button>
        </div>
      </div>
    </header>
  );
};
