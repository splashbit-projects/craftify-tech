import { z } from 'zod';

export const createRequestFormSchema = () =>
  z.object({
    firstName: z.string().nonempty('This field is required'),
    lastName: z.string().nonempty('This field is required'),
    phone: z.string().nonempty('This field is required'),
    businessEmail: z.string().email('Invalid email address'),
    company: z.string().nonempty('This field is required'),
    website: z.string().nonempty('This field is required'),
    requestDetails: z.string().nonempty('This field is required'),
    businessType: z.string().nonempty('This field is required'),
    requestType: z.enum(['assistance', 'consultation', 'expert-consultation', 'service-request']),
    serviceName: z.string().optional(),
    expertName: z.string().optional(),
    terms: z
      .boolean()
      .refine((data) => data, { message: 'You must accept the terms and conditions' }),
    recaptcha: z.string().nonempty('Please complete the reCAPTCHA verification'),
  });

export type RequestFormSchema = z.infer<ReturnType<typeof createRequestFormSchema>>;
