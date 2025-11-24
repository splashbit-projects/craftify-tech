import type { RequestFormSchema } from '../model/RequestForm.schema';

export const submitRequestForm = async (data: RequestFormSchema) => {
  const type = data.requestType;

  let url = '';
  if (type === 'consultation') {
    url = '/api/consultation-request';
  } else if (type === 'assistance') {
    url = '/api/assistance-request';
  } else if (type === 'expert-consultation') {
    url = '/api/expert-consultation-request';
  } else if (type === 'service-request') {
    url = '/api/service-request';
  }
  if (!url) {
    throw new Error('Invalid request type');
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Submission failed');
  }
};
