import { useTranslations } from 'next-intl';

export type Service = {
  id: number;
  title: string;
  service_title: string;
  what_you_get: string;
  typical_engagements: string;
  key_outcomes: string;
  delivery_modes: { title: string; description: string }[];
};

export const useServices = (): Service[] => {
  const t = useTranslations('services');
  return [
    {
      id: 1,
      title: `<b>${t('title-1', { fallback: 'Cyber defense, monitoring' })}</b> ${t('title-1-2', { fallback: '& SOC / MDR operations' })}`,
      service_title: t('service_title-1', {
        fallback: 'Cyber defense, monitoring & SOC / MDR operations',
      }),
      what_you_get: t('what_you_get-1', {
        fallback:
          'Continuous detection, triage and containment plus operational runbooks and tuned detection content.',
      }),
      typical_engagements: t('typical_engagements-1', {
        fallback:
          'MDR 24×7, SOC Build & Tuning, Threat Hunting Retainer, EDR Rollout & Policy Hardening.',
      }),
      key_outcomes: t('key_outcomes-1', {
        fallback: 'MTTA / MTTR, incidents closed, coverage %, false-positive trend.',
      }),
      delivery_modes: [
        {
          title: t('delivery_mode-1-1-title', { fallback: 'One-time' }),
          description: t('delivery_mode-1-1-description', { fallback: '(SOC build, EDR rollout)' }),
        },
        {
          title: t('delivery_mode-1-2-title', { fallback: 'Regular' }),
          description: t('delivery_mode-1-2-description', { fallback: '(MDR, Hunting retainer)' }),
        },
      ],
    },
    {
      id: 2,
      title: `<b>${t('title-2', { fallback: 'Cloud' })}</b> ${t('title-2-2', { fallback: '& network hardening' })}<br/><br/>`,
      service_title: t('service_title-2', { fallback: 'Cloud & network hardening' }),
      what_you_get: t('what_you_get-2', {
        fallback:
          'Secure, compliant cloud and network posture across hybrid and multi-cloud environments.',
      }),
      typical_engagements: t('typical_engagements-2', {
        fallback:
          'Cloud Security Baseline, Zero Trust Quickstart, Cloud Security Operations, WAF/CDN & DDoS protection.',
      }),
      key_outcomes: t('key_outcomes-2', {
        fallback: 'Misconfiguration reduction, CSPM posture, MFA coverage, blocked attacks.',
      }),
      delivery_modes: [
        {
          title: t('delivery_mode-2-1-title', { fallback: 'One-time' }),
          description: t('delivery_mode-2-1-description', {
            fallback: '(baseline, Zero Trust quickstart, WAF setup)',
          }),
        },
        {
          title: t('delivery_mode-2-2-title', { fallback: 'Regular' }),
          description: t('delivery_mode-2-2-description', { fallback: '(cloud ops)' }),
        },
      ],
    },
    {
      id: 3,
      title: `<b>${t('title-3', { fallback: 'Incident response' })}</b> ${t('title-3-2', { fallback: '& forensics' })}<br/><br/>`,
      service_title: t('service_title-3', { fallback: 'Incident response & forensics' }),
      what_you_get: t('what_you_get-3', {
        fallback:
          'Rapid containment, forensic evidence, and operational recovery with post-incident learning.',
      }),
      typical_engagements: t('typical_engagements-3', {
        fallback:
          'IR Readiness & Tabletop, IR Retainer (SLA), Digital Forensics, Compromise Assessment.',
      }),
      key_outcomes: t('key_outcomes-3', {
        fallback: 'Time-to-contain, case turnaround, evidence quality, recurrence.',
      }),
      delivery_modes: [
        {
          title: t('delivery_mode-3-1-title', { fallback: 'One-time' }),
          description: t('delivery_mode-3-1-description', {
            fallback: '(tabletop, compromise assessment, forensics)',
          }),
        },
        {
          title: t('delivery_mode-3-2-title', { fallback: 'Regular' }),
          description: t('delivery_mode-3-2-description', { fallback: '(IR retainer)' }),
        },
      ],
    },
    {
      id: 4,
      title: `<b>${t('title-4', { fallback: 'DevSecOps' })}</b> ${t('title-4-2', { fallback: '& CI/CD protection' })}<br/><br/>`,
      service_title: t('service_title-4', { fallback: 'DevSecOps & CI/CD protection' }),
      what_you_get: t('what_you_get-4', {
        fallback:
          'Security integrated into development pipelines, secrets control and automated gates for safer releases.',
      }),
      typical_engagements: t('typical_engagements-4', {
        fallback:
          'CI/CD Security Hardening, Secrets Management Program, SBOM & Supply Chain Controls, DevSecOps Continuous (managed).',
      }),
      key_outcomes: t('key_outcomes-4', {
        fallback: 'Gate pass %, secret exposure trend, vulnerable dependency SLA.',
      }),
      delivery_modes: [
        {
          title: t('delivery_mode-4-1-title', { fallback: 'One-time' }),
          description: t('delivery_mode-4-1-description', {
            fallback: '(pipeline review, secrets program, SBOM)',
          }),
        },
        {
          title: t('delivery_mode-4-2-title', { fallback: 'Regular' }),
          description: t('delivery_mode-4-2-description', { fallback: '(DevSecOps continuous)' }),
        },
      ],
    },
    {
      id: 5,
      title: `<b>${t('title-5', { fallback: 'Compliance' })}</b> ${t('title-5-2', { fallback: '& governance programs' })}`,
      service_title: t('service_title-5', { fallback: 'Compliance & governance programs' }),
      what_you_get: t('what_you_get-5', {
        fallback:
          'Practical control frameworks, audit readiness, and ongoing control evidence for regulators and auditors.',
      }),
      typical_engagements: t('typical_engagements-5', {
        fallback:
          'ISO/PCI/GDPR Readiness, Compliance-as-a-Service, GRC fast-track packages, Privacy & Risk Program.',
      }),
      key_outcomes: t('key_outcomes-5', {
        fallback: 'Audit readiness %, controls green %, evidence freshness.',
      }),
      delivery_modes: [
        {
          title: t('delivery_mode-5-1-title', { fallback: 'One-time' }),
          description: t('delivery_mode-5-1-description', { fallback: '(readiness, policy pack)' }),
        },
        {
          title: t('delivery_mode-5-2-title', { fallback: 'Regular' }),
          description: t('delivery_mode-5-2-description', {
            fallback: '(compliance-as-a-service)',
          }),
        },
      ],
    },
    {
      id: 6,
      title: `<b>${t('title-6', { fallback: 'AI' })}</b> ${t('title-6-2', { fallback: '& data security audits' })}<br/><br/>`,
      service_title: t('service_title-6', { fallback: 'AI & data security audits' }),
      what_you_get: t('what_you_get-6', {
        fallback:
          'Targeted testing and hardening for LLM/RAG systems, data classification and DLP controls.',
      }),
      typical_engagements: t('typical_engagements-6', {
        fallback: 'LLM/RAG Security Assessment, DLP Program, AI Security Monitoring (managed).',
      }),
      key_outcomes: t('key_outcomes-6', {
        fallback: 'Guardrail pass %, leakage alerts, DLP coverage.',
      }),
      delivery_modes: [
        {
          title: t('delivery_mode-6-1-title', { fallback: 'One-time' }),
          description: t('delivery_mode-6-1-description', {
            fallback: '(security assessment, DLP rollout)',
          }),
        },
        {
          title: t('delivery_mode-6-2-title', { fallback: 'Regular' }),
          description: t('delivery_mode-6-2-description', { fallback: '(AI monitoring)' }),
        },
      ],
    },
  ];
};
