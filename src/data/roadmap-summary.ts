/**
 * Summarized roadmap for presentations and one-page views.
 * This provides a simplified view of the roadmap suitable for PowerPoint slides
 * with Now, Next, and Later columns showing key initiatives only.
 */

import { Localised } from './roadmap';

export interface SummarizedRoadmapItem {
  title: Localised;
  summary: Localised;
}

export interface SummarizedRoadmapHorizon {
  id: 'now' | 'next' | 'later';
  label: Localised;
  items: SummarizedRoadmapItem[];
}

export interface SummarizedRoadmap {
  title: Localised;
  horizons: SummarizedRoadmapHorizon[];
}

const localised = (en: string): Localised => ({ cy: '', en });

export const summarizedRoadmap: SummarizedRoadmap = {
  title: localised('Choose Pharmacy Roadmap'),

  horizons: [
    {
      id: 'now',
      label: localised('Now'),
      items: [
        {
          title: localised('Platform and Security'),
          summary: localised(
            'Modern cloud-based, secure and reliable platform for Choose Pharmacy'
          ),
        },
        {
          title: localised('Pharmacy Hub'),
          summary: localised(
            'Centralised hub with services, messages, tasks, and operational information'
          ),
        },
        {
          title: localised('Patient Search/Add Patient'),
          summary: localised(
            'Patient identification via CDR integration with manual add functionality'
          ),
        },
        {
          title: localised('Patient Hub'),
          summary: localised(
            'Consolidated patient view with history, allergies, and adverse reactions'
          ),
        },
        {
          title: localised('Clinical Services'),
          summary: localised(
            'Digital workflows for NHS commissioned services (CCM, CAS, STTT, UTI, EMS, CS, DMR)'
          ),
        },
        {
          title: localised('User Management'),
          summary: localised(
            'Role-based access controls (RBAC) and user profile management'
          ),
        },
        {
          title: localised('Reporting'),
          summary: localised(
            'Core operational reports and statistics for pharmacy teams'
          ),
        },
        {
          title: localised('Clinical Coding (SNOMED CT)'),
          summary: localised(
            'Standardised clinical coding functionality for data quality'
          ),
        },
        {
          title: localised('Medication Coding (DM+D)'),
          summary: localised(
            'Dictionary of Medicines and Devices coding for safe medicines management'
          ),
        },
      ],
    },
    {
      id: 'next',
      label: localised('Next'),
      items: [
        {
          title: localised('Welsh Immunisation Service (WIS)'),
          summary: localised(
            'Integration to view vaccine eligibility and deliver vaccination services'
          ),
        },
        {
          title: localised('Clinical Data Repository (CDR)'),
          summary: localised(
            'Store consultation data as coded information in the national Care Data Repository'
          ),
        },
        {
          title: localised('Discharge Medicines Review (DMR)'),
          summary: localised(
            'Enhanced DMR functionality with import of discharge medicines from SMR'
          ),
        },
        {
          title: localised('Sodium Valproate Forms'),
          summary: localised(
            'Structured monitoring and risk acknowledgement forms for safer prescribing'
          ),
        },
        {
          title: localised('Data Dashboards'),
          summary: localised(
            'Rich, role-tailored data dashboards for insights and performance monitoring'
          ),
        },
      ],
    },
    {
      id: 'later',
      label: localised('Later'),
      items: [
        {
          title: localised('Appointment Booking'),
          summary: localised(
            'Digital appointment booking system for NHS commissioned services'
          ),
        },
        {
          title: localised('NHS 111 Integration'),
          summary: localised(
            'Seamless sharing of referral information between NHS 111 and Choose Pharmacy'
          ),
        },
        {
          title: localised('NHS Wales App Integration'),
          summary: localised(
            'Enable patients to book appointments and make nominations via NHS Wales App'
          ),
        },
        {
          title: localised('Yellowcard Reporting'),
          summary: localised(
            'Integration with Yellowcard system for reporting adverse drug reactions'
          ),
        },
        {
          title: localised('Clinical Template Expansion'),
          summary: localised(
            'Additional clinical templates based on data and user research'
          ),
        },
        {
          title: localised('Common Symptoms Quick Picks'),
          summary: localised(
            'Quick pick system for common symptoms to streamline consultations'
          ),
        },
        {
          title: localised('Electronic Prescribing Service (EPS)'),
          summary: localised(
            'Send prescriptions via EPS to reduce manual administration'
          ),
        },
        {
          title: localised('Patient Medication Record (PMR)'),
          summary: localised(
            'Share consultation information with pharmacy PMR systems for dispensing'
          ),
        },
        {
          title: localised('GP System Writeback'),
          summary: localised(
            'Direct clinically coded consultation information to GP systems'
          ),
        },
      ],
    },
  ],
};
