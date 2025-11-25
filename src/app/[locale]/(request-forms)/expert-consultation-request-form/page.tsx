'use client';

import { useTranslations } from 'next-intl';

import { useRequestFormStore } from '@/features/request-form/model/store';
import { RequestForm } from '@/features/request-form/ui/RequestForm';

import styles from './page.module.scss';

export default function RequestFormPage() {
  const t = useTranslations('requestFormExpertConsultation');
  const { expertName } = useRequestFormStore();
  return (
    <>
      <section className={styles.request_form}>
        <div className={'_container'}>
          <div className={styles.request_form__heading}>
            <h1>
              {t('title1', { fallback: 'Craftify Tech' })}
              {` `}
              {expertName}
              {``}
              <br />
              {t('title2', { fallback: 'Assistance Request' })}
            </h1>
            <p>
              {t('subtitle1', {
                fallback: 'Our expert will contact you asap. Just provide a few details.',
              })}
            </p>
          </div>
          <div className={styles.request_form__content}>
            <RequestForm requestType="expert-consultation" expertName={expertName} />
          </div>
        </div>
      </section>
    </>
  );
}
