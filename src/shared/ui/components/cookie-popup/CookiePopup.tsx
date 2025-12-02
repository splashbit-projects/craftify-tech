'use client';
import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button/Button';

import styles from './CookiePopup.module.scss';

import { Link } from '@/i18n/navigation';

export const CookiePopup = () => {
  const t = useTranslations('cookiePopup');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    const hasDeclinedCookies = localStorage.getItem('cookiesDeclined');
    if (!hasAcceptedCookies && !hasDeclinedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesDeclined', 'true');
    setIsVisible(false);
  };

  return (
    <div
      className={classNames(styles.cookiePopup, {
        [styles.visible]: isVisible,
      })}
    >
      <h2>{t('title', { fallback: 'Cookie settings' })}</h2>
      <p>
        {t('text', {
          fallback:
            'Cookies help us improve our website. By clicking Accept, you agree to our use of cookies for functionality, analytics, and personalized content. Learn more in our ',
        })}{' '}
        <Link href="/legal/cookie-policy">{t('link', { fallback: 'Cookie Policy' })}</Link>.
      </p>
      <div className={styles.buttons}>
        <Button type="button" variant="secondary" onClick={handleDecline}>
          {t('decline', { fallback: 'Decline' })}
        </Button>
        <Button type="button" variant="primary" onClick={handleAccept}>
          {t('accept', { fallback: 'Accept' })}
        </Button>
      </div>
    </div>
  );
};
