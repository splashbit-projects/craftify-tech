import { z } from 'zod';

type TranslateFn = (key: string, options?: { fallback?: string }) => string;

export const createContactFormSchema = (t: TranslateFn) =>
  z.object({
    firstName: z.string().nonempty(t('required', { fallback: 'This field is required' })),
    lastName: z.string().nonempty(t('required', { fallback: 'This field is required' })),
    phone: z.string().nonempty(t('required', { fallback: 'This field is required' })),
    businessEmail: z.string().email(t('invalidEmail', { fallback: 'Invalid email address' })),
    company: z.string().nonempty(t('required', { fallback: 'This field is required' })),
    website: z.string().nonempty(t('required', { fallback: 'This field is required' })),
    question: z.string(),
  });

export type ContactFormSchema = z.infer<ReturnType<typeof createContactFormSchema>>;
