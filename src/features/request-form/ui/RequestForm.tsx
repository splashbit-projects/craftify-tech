'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import { excludedCountries } from '@/shared/lib/countries';
import { Button } from '@/shared/ui/kit/button/Button';

import { submitRequestForm } from '../api/submitRequestForm';
import { createRequestFormSchema, type RequestFormSchema } from '../model/RequestForm.schema';
import styles from './RequestForm.module.scss';
import { RequestFormSuccess } from './RequestFormSuccess';

import 'react-phone-input-2/lib/style.css';

type RequestFormType = 'assistance' | 'consultation' | 'expert-consultation' | 'service-request';

export const RequestForm = ({
  requestType = 'assistance',
  serviceName = '',
  expertName = '',
}: {
  requestType?: RequestFormType;
  serviceName?: string;
  expertName?: string;
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const t = useTranslations('contactForm');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createRequestFormSchema()),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      businessEmail: '',
      company: '',
      website: '',
      requestDetails: '',
      businessType: '',
      requestType: requestType,
      serviceName: serviceName,
      expertName: expertName,
      recaptcha: '',
    },
  });

  const onSubmit = (data: RequestFormSchema) => {
    try {
      setIsLoading(true);
      console.log(data);
      submitRequestForm(data);
      setTimeout(() => {
        setIsSuccess(true);
        reset();
        recaptchaRef.current?.reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      recaptchaRef.current?.reset();
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setValue('recaptcha', token || '', { shouldValidate: true });
  };

  return (
    <>
      <div className={styles.contactForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formRow}>
            <h4>{t('yourData', { fallback: 'Your Data' })}</h4>
            <div className={styles.formGroup}>
              <input
                id="contact-form-name"
                type="text"
                {...register('firstName')}
                placeholder={t('firstName', { fallback: 'First Name' })}
                className={errors.firstName ? styles.errorInput : ''}
              />
              {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
            </div>
            <div className={styles.formGroup}>
              <input
                id="contact-form-lastName"
                type="text"
                {...register('lastName')}
                placeholder={t('lastName', { fallback: 'Last Name' })}
                className={errors.lastName ? styles.errorInput : ''}
              />
            </div>

            <div className={styles.formGroup}>
              <PhoneInput
                country="gb"
                inputClass={errors.phone ? styles.errorInput : ''}
                containerClass={styles.phoneInputContainer}
                buttonClass={styles.phoneInputButton}
                dropdownClass={styles.phoneInputDropdown}
                onChange={(value) => setValue('phone', value)}
                value={watch('phone')}
                placeholder={t('phone', { fallback: 'Phone' })}
                inputProps={{
                  id: 'contact-form-phone',
                }}
                excludeCountries={excludedCountries}
              />
              {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <input
                id="contact-form-businessEmail"
                type="email"
                {...register('businessEmail')}
                placeholder={t('businessEmail', { fallback: 'Business Email' })}
                className={errors.businessEmail ? styles.errorInput : ''}
              />
              {errors.businessEmail && (
                <p className={styles.error}>{errors.businessEmail.message}</p>
              )}
            </div>
          </div>

          <div className={styles.formRow}>
            <h4>{t('companyAndWebsite', { fallback: 'Company and Website' })}</h4>
            <div className={styles.formGroup}>
              <input
                id="contact-form-company"
                type="text"
                {...register('company')}
                placeholder={t('company', { fallback: 'Company' })}
                className={errors.company ? styles.errorInput : ''}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                id="contact-form-website"
                type="text"
                {...register('website')}
                placeholder={t('website', { fallback: 'Website' })}
                className={errors.website ? styles.errorInput : ''}
              />
              {errors.website && <p className={styles.error}>{errors.website.message}</p>}
            </div>
          </div>

          <div className={styles.formRow}>
            <h4>{t('requestTitle', { fallback: 'Your Request' })}</h4>
            <div className={styles.formGroup + ' ' + styles.textarea}>
              <textarea
                id="contact-form-request"
                {...register('requestDetails')}
                placeholder={t('request', { fallback: 'Description' })}
                className={errors.requestDetails ? styles.errorInput : ''}
              />
              {errors.requestDetails && (
                <p className={styles.error}>{errors.requestDetails.message}</p>
              )}
            </div>
          </div>

          <div className={styles.formRow}>
            <h4>{t('businessTypeText', { fallback: 'Your Business' })}</h4>
            <div className={styles.formGroup + ' ' + styles.textarea}>
              <textarea
                id="contact-form-businessType"
                {...register('businessType')}
                placeholder={t('businessType', { fallback: 'Description' })}
                className={errors.businessType ? styles.errorInput : ''}
              />
              {errors.businessType && <p className={styles.error}>{errors.businessType.message}</p>}
            </div>
          </div>

          <div className={styles.checkboxRow}>
            <input type="checkbox" {...register('terms')} />
            <p>
              {t('terms1', { fallback: 'I accept the ' })}
              <Link href="/terms-and-conditions">
                {t('terms2', { fallback: 'Terms and Conditions' })}
              </Link>
              {t('terms3', { fallback: ' and ' })}
              <Link href="/privacy-policy">
                {t('privacyPolicy', { fallback: 'Privacy Policy' })}
              </Link>
            </p>
          </div>

          <div className={styles.formGroup}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              onChange={handleRecaptchaChange}
            />
            {errors.recaptcha && <p className={styles.error}>{errors.recaptcha.message}</p>}
          </div>

          <Button type="submit" variant="primary">
            {isLoading
              ? t('loading', { fallback: 'Loading...' })
              : t('submit', { fallback: 'Submit' })}
          </Button>
        </form>
      </div>
      {isSuccess && <RequestFormSuccess onClose={() => setIsSuccess(false)} />}
    </>
  );
};
