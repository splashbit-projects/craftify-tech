'use client';

import { useTranslations } from 'next-intl';

import styles from './Footer.module.scss';

export const Footer = () => {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={'_container'}>
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
