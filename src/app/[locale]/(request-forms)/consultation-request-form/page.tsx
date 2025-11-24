import { getTranslations } from 'next-intl/server';

import { RequestForm } from '@/features/request-form/ui/RequestForm';

import styles from './page.module.scss';

export default async function RequestFormPage() {
  const t = await getTranslations('requestFormConsultation');
  return (
    <>
      <section className={styles.request_form}>
        <div className={'_container'}>
          <div className={styles.request_form__heading}>
            <h1>{t('title1', { fallback: 'Craftify Tech Consultation Request' })}</h1>
            <p>
              {t('subtitle1', {
                fallback: 'Our expert will contact you asap. Just provide a few details.',
              })}
            </p>
          </div>
          <div className={styles.request_form__content}>
            <RequestForm requestType="consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
