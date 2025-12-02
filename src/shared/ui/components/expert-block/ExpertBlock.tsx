import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { Camera, Close, Microphone, Pencil } from '@/shared/ui/icons';

import styles from './ExpertBlock.module.scss';

import { Link } from '@/i18n/navigation';

export const ExpertBlock = () => {
  const t = useTranslations('expertBlockSingle');

  return (
    <div className={styles.expert_block}>
      <Image
        src="/images/topLeft.svg"
        alt="top left corner"
        width={20}
        height={20}
        className={styles.top_left}
      />
      <Image
        src="/images/topRight.svg"
        alt="top right corner"
        width={20}
        height={20}
        className={styles.top_right}
      />
      <Image
        src="/images/bottomLeft.svg"
        alt="bottom left corner"
        width={20}
        height={20}
        className={styles.bottom_left}
      />
      <Image
        src="/images/bottomRight.svg"
        alt="bottom right corner"
        width={20}
        height={20}
        className={styles.bottom_right}
      />
      <div className={styles.expert_details}>
        <Image
          src="/images/integrator/expert.png"
          alt="expert photo"
          width={64}
          height={64}
          className={styles.expert_photo}
        />
        <div>
          <h3>{t('expertName', { fallback: 'Liam Brooks' })}</h3>
          <p>{t('expertTitle', { fallback: 'Cyber Threat Analyst' })}</p>
        </div>
      </div>
      <div className={styles.expert_divider}></div>
      <div className={styles.expert_buttons}>
        <Link href="/request-assistance-form">
          <Camera />
        </Link>
        <Link href="/request-assistance-form">
          <Microphone />
        </Link>
        <Link href="/request-assistance-form">
          <Pencil />
        </Link>
        <Link href="/request-assistance-form" className={styles.close_button}>
          <Close />
        </Link>
      </div>
    </div>
  );
};
