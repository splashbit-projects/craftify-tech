import Link from 'next/link';

import { cn } from '@/shared/lib/helpers/styles';

import styles from './Button.module.scss';

export const Button = ({
  children,
  variant,
  url,
  type,
}: {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  url: string;
  type: 'button' | 'submit' | 'link';
}) => {
  return type === 'link' ? (
    <Link href={url} className={cn(styles.button, styles[variant], styles.link)}>
      {children}
    </Link>
  ) : (
    <button type={type} className={cn(styles.button, styles[variant])}>
      {children}
    </button>
  );
};
