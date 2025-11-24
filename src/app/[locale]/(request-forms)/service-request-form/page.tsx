'use client';

import { useTranslations } from 'next-intl';

import { useRequestFormStore } from '@/features/request-form/model/store';
import { RequestForm } from '@/features/request-form/ui/RequestForm';

import styles from './page.module.scss';

export default function RequestFormPage() {
  const t = useTranslations('requestFormServiceRequest');

  const { serviceName } = useRequestFormStore();

  return (
    <>
      <section className={styles.request_form}>
        <div className={'_container'}>
          <div className={styles.request_form__heading}>
            <h1>
              {t('title1', { fallback: 'Craftify Tech' })}
              {` `}
              {serviceName}
              {``}
              <br />
              {t('title2', { fallback: 'Request' })}
            </h1>
            <p>
              {t('subtitle1', {
                fallback: 'Our expert will contact you asap. Just provide a few details.',
              })}
            </p>
          </div>
          <div className={styles.request_form__content}>
            <RequestForm requestType="consultation" serviceName={serviceName} />
          </div>
        </div>
      </section>
    </>
  );
}
