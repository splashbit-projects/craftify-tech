import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button/Button';

import type { Service } from '../../model/services';
import styles from './ServiceCard.module.scss';

export const ServiceCard = ({ service }: { service: Service }) => {
  const t = useTranslations('servicesSingle');

  return (
    <div className={styles.service_card}>
      <div className={styles.service_card__top}>
        <h3 dangerouslySetInnerHTML={{ __html: service.title }} />
        <div>
          <h4>{t('what_you_get', { fallback: 'What you get' })}</h4>
          <p dangerouslySetInnerHTML={{ __html: service.what_you_get }} />
        </div>
        <div>
          <h4>{t('typical_engagements', { fallback: 'Typical engagements' })}</h4>
          <p dangerouslySetInnerHTML={{ __html: service.typical_engagements }} />
        </div>
        <div>
          <h4>{t('key_outcomes', { fallback: 'Key outcomes / KPIs' })}</h4>
          <p dangerouslySetInnerHTML={{ __html: service.key_outcomes }} />
        </div>
        <div>
          <h4>{t('delivery_modes', { fallback: 'Delivery modes' })}</h4>
          <ul>
            {service.delivery_modes.map((mode) => (
              <li key={mode.title}>
                <b>{mode.title}</b> <span dangerouslySetInnerHTML={{ __html: mode.description }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.service_card__bottom}>
        <Button
          variant="primary"
          url="/service-request-form"
          service={service.service_title}
          type="link"
        >
          {t('button', { fallback: 'Request Now' })}
        </Button>
      </div>
    </div>
  );
};
