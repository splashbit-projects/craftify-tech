'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { LangSelector } from '@/shared/ui/components';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './Header.module.scss';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const t = useTranslations('header');

  useEffect(() => {
    setIsMobileMenuOpen(false);
    console.log(pathname);
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
            <Link href="/team" className={pathname === '/team' ? styles.active : ''}>
              {t('team', { fallback: 'Team' })}
            </Link>
            <Link
              href="/the-integrator-model"
              className={pathname === '/the-integrator-model' ? styles.active : ''}
            >
              {t('the-integrator-model', { fallback: 'The Integrator Model' })}
            </Link>
            <Link
              href="/expertise-and-services"
              className={pathname === '/expertise-and-services' ? styles.active : ''}
            >
              {t('expertise-and-services', { fallback: 'Expertise and Services' })}
            </Link>
            <Link href="/industries" className={pathname === '/industries' ? styles.active : ''}>
              {t('industries', { fallback: 'Industries' })}
            </Link>
            <Link href="/about-us" className={pathname === '/about-us' ? styles.active : ''}>
              {t('about-us', { fallback: 'About Us' })}
            </Link>
            <Link href="/insights" className={pathname === '/insights' ? styles.active : ''}>
              {t('insights-and-news', { fallback: 'Insights & News' })}
            </Link>
            <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
              {t('contact', { fallback: 'Contact' })}
            </Link>
          </nav>
          <div className={styles.header__contact}>
            <LangSelector />
            <Button variant="secondary" url="/consultation-request-form" type="link">
              {t('request-consultation', { fallback: 'Request Consultation' })}
            </Button>
          </div>
        </div>
      </div>
      <div className={`${styles.header__mobile_menu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav>
          <Link href="/team" className={pathname === '/team' ? styles.active : ''}>
            {t('team', { fallback: 'Team' })}
          </Link>
          <Link
            href="/the-integrator-model"
            className={pathname === '/the-integrator-model' ? styles.active : ''}
          >
            {t('the-integrator-model', { fallback: 'The Integrator Model' })}
          </Link>
          <Link
            href="/expertise-and-services"
            className={pathname === '/expertise-and-services' ? styles.active : ''}
          >
            {t('expertise-and-services', { fallback: 'Expertise and Services' })}
          </Link>
          <Link href="/industries" className={pathname === '/industries' ? styles.active : ''}>
            {t('industries', { fallback: 'Industries' })}
          </Link>
          <Link href="/about-us" className={pathname === '/about-us' ? styles.active : ''}>
            {t('about-us', { fallback: 'About Us' })}
          </Link>
          <Link href="/insights" className={pathname === '/insights' ? styles.active : ''}>
            {t('insights-and-news', { fallback: 'Insights & News' })}
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
            {t('contact', { fallback: 'Contact' })}
          </Link>
        </nav>
        <div className={styles.header__mobile_menu_contact}>
          <Button variant="secondary" url="/consultation-request-form" type="link">
            {t('request-consultation', { fallback: 'Request Consultation' })}
          </Button>
          <LangSelector />
        </div>
      </div>
    </header>
  );
};
