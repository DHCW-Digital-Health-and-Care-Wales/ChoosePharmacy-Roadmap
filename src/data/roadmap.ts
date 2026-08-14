/**
 * Single source of roadmap content.
 *
 * Updating the roadmap is a content edit here, not a code change. Every piece
 * of display text is language-keyed so Welsh and English are both supported.
 * Welsh values are left empty for now; the UI falls back to English when a
 * Welsh string is empty (see src/lib/i18n.ts).
 */

export type Horizon = 'now' | 'next' | 'later';
export type ItemStatus = 'exploring' | 'in-progress' | 'shipped';

/** Every piece of display text is language-keyed. */
export interface Localised {
  cy: string; // Welsh
  en: string; // English
}

export interface Category {
  id: string;
  name: Localised;
  headline: Localised;
  description: Localised;
  accent: string;
}

export interface RoadmapItem {
  id: string;
  title: Localised;
  summary: Localised;
  categoryId: string;
  horizon: Horizon;
  status: ItemStatus;
  phase?: string;
  phaseKind?: 'discovery';
  outcome?: string;
  metric?: string;
  capabilities?: { label: string; items: string[] };
  services?: string[];
  updated: string;
}

/**
 * A single item in a delivered work section.
 * Items are populated by Joshua from real delivery records only.
 */
export interface DeliveredItem {
  id: string;
  title: Localised;
  summary: Localised;
  metric?: string;
  capabilities?: { label: string; items: string[] };
}

/**
 * A delivered work section (Recently delivered / Other work this year).
 * Items must come from a real delivery source. Leave items empty and
 * use the placeholder text until Joshua confirms the content.
 */
export interface DeliveredSectionData {
  id: string;
  heading: Localised;
  description: Localised;
  /** Visible on-page placeholder shown when items is empty. */
  placeholder: Localised;
  items: DeliveredItem[];
}

export interface RoadmapMeta {
  title: Localised;
  /**
   * Agreed verbatim wording — do not edit.
   * Stored here so it is language-keyed alongside all other copy.
   */
  vision: Localised;
  /**
   * Agreed verbatim wording — do not edit.
   * Stored here so it is language-keyed alongside all other copy.
   */
  serviceDescription: Localised;
  intro: Localised;
  horizonNote: Localised;
  owner: string;
  lastUpdated: string;
  reviewNote: Localised;
  statusLabel: string;
  /** Short explainer of the public beta and our longer-term goal. */
  betaNote: Localised;
}

export interface Roadmap {
  meta: RoadmapMeta;
  horizons: { id: Horizon; label: Localised; definition: Localised }[];
  categories: Category[];
  items: RoadmapItem[];
  recentlyDelivered: DeliveredSectionData;
  otherDelivered: DeliveredSectionData;
  notRightNow: DeliveredSectionData;
}

const TODO_CY = '';
const UPDATED_AT = '2026-08-12';
const CATEGORY_ID = 'choose-pharmacy';

const localised = (en: string): Localised => ({ cy: TODO_CY, en });

export const roadmap: Roadmap = {
  meta: {
    title: localised('Choose Pharmacy roadmap'),

    // Agreed verbatim wording — do not edit.
    vision: localised(
      'Establish Choose Pharmacy as a leading platform for digital transformation in community pharmacy, empowering pharmacy professionals to deliver high-quality, patient-centred care with greater efficiency, clarity, and confidence.',
    ),

    // Agreed verbatim wording — do not edit.
    serviceDescription: localised(
      'Choose Pharmacy is the digital platform enabling community pharmacies across Wales to deliver connected, accessible healthcare to patients.',
    ),

    intro: localised(
      "This roadmap shows what we're working on now, what's coming next and the direction we expect to take later.",
    ),
    horizonNote: localised(
      "Now is what we are actively working on. Next is what we expect to pick up soon. Later is the direction we're setting as we learn more with users, pharmacies and partners. We don't put dates on this work, and the order isn't a priority list.",
    ),
    owner: 'Choose Pharmacy Team, DHCW',
    lastUpdated: UPDATED_AT,
    reviewNote: localised(
      'We update this roadmap as plans develop and we learn from delivery.',
    ),
    statusLabel: 'Beta (Feedback Welcome)',
    betaNote: localised(
      'We are trialling a public beta of our roadmap here. Our long-term goal is to make these available through our website.',
    ),
  },

  horizons: [
    {
      id: 'now',
      label: localised('Now'),
      definition: localised(
        'Work that is underway now and shaping the next changes to the service.',
      ),
    },
    {
      id: 'next',
      label: localised('Next'),
      definition: localised(
        'Work we expect to pick up soon as current delivery moves forward.',
      ),
    },
    {
      id: 'later',
      label: localised('Later'),
      definition: localised(
        'Longer-term direction that will keep evolving as we learn more.',
      ),
    },
  ],

  categories: [
    {
      id: CATEGORY_ID,
      name: localised('Choose Pharmacy'),
      headline: localised('Now, Next and Later for Choose Pharmacy'),
      description: localised(
        'A simple view of the work shaping Choose Pharmacy across Wales, from active delivery now to the longer-term direction ahead.',
      ),
      accent: '#006747',
    },
  ],

  items: [
    {
      id: 'platform-and-security',
      title: localised('Platform and Security'),
      summary: localised(
        'Provide a modern cloud based, secure and reliable platform for Choose Pharmacy.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Choose Pharmacy application is operating on a fast, robust, secure and expandable platform.',
      updated: UPDATED_AT,
    },
    {
      id: 'pharmacy-hub',
      title: localised('Pharmacy Hub'),
      summary: localised(
        'Create a hub to highlight key information for pharmacies and provide quick access to outstanding actions.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Pharmacy teams will have a central hub for managing activities, notifications and service information.',
      updated: UPDATED_AT,
    },
    {
      id: 'patient-search-add-patient',
      title: localised('Patient Search/Add Patient'),
      summary: localised(
        'Patient identification via integration with the Care Data Repository (CDR). Allow users to add patients manually if not found in the CDR using tools such as the Welsh Address Matching Service (WAMS).',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Enable pharmacists to quickly identify and register patients using national services, ensuring accurate patient records and safe care delivery.',
      updated: UPDATED_AT,
    },
    {
      id: 'patient-hub',
      title: localised('Patient Hub'),
      summary: localised(
        'A centralised patient hub showing key patient information, including a consolidated patient history, allergy and intolerance management including Shared Medicines Record (SMR) integration and adverse reaction recording.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Pharmacy teams will have access to a single, consolidated view of key patient information to support safe, informed clinical decision-making.',
      capabilities: {
        label: 'Included Information',
        items: [
          'Patient Overview',
          'Patient Detail',
          'Patient History',
          'Welsh GP Record (WGPR)',
          'Adverse Reactions Management',
          'Service Registration Management',
        ],
      },
      updated: UPDATED_AT,
    },
    {
      id: 'clinical-services',
      title: localised('Clinical Services'),
      summary: localised(
        'Provide structured digital, user centred designed and verified workflows to enable pharmacy teams to deliver NHS commissioned services to patients.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Pharmacy teams can deliver NHS commissioned services safely, consistently and efficiently, contributing to better patient outcomes.',
      capabilities: {
        label: 'Included Services',
        items: [
          'Clinical Conditions Management (CCM)',
          '   Common Ailments Service (CAS)',
          '      Sore Throat Test and Treat (STTT)',
          '      Urinary Tract Infection (UTI)',
          '   Independent Prescribers Service (IPS)',
          'Emergency Medicines Supply (EMS)',
          'Contraception Service (CS)',
          'Discharge Medicines Review (DMR)',
        ],
      },
      updated: UPDATED_AT,
    },
    {
      id: 'user-management',
      title: localised('User Management'),
      summary: localised(
        'Add role based access controls (RBAC) and user profile management.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Provide secure, role-based access controls that protect patient information and ensure users can only access the features and data appropriate to their role.',
      updated: UPDATED_AT,
    },
    {
      id: 'reporting',
      title: localised('Reporting'),
      summary: localised(
        'Add reports to show core operational information and statistics for pharmacy teams.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Provide pharmacy teams with operational oversight through core reporting functions.',
      updated: UPDATED_AT,
    },
    {
      id: 'clinical-coding-snomed-ct',
      title: localised('Clinical Coding (SNOMED CT)'),
      summary: localised(
        'Provide SNOMED CT clinical coding functionality to ensure that all clinical information recorded is standardised.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Recording clinical information using standardised SNOMED CT codes improves data quality, supports safer clinical decision-making, and enables seamless information sharing across NHS Wales services.',
      updated: UPDATED_AT,
    },
    {
      id: 'medication-coding-dmd',
      title: localised('Medication Coding (DM+D)'),
      summary: localised(
        'Provide Dictionary of Medicines and Devices (DM+D) search functionality, so all medications supplied are coded.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Recording medications using standardised DM+D codes improves medicines safety, supports accurate reimbursement to pharmacies, and enables consistent and reliable sharing of medication information across NHS Wales services.',
      updated: UPDATED_AT,
    },
    {
      id: 'welsh-immunisation-service-wis',
      title: localised('Welsh Immunisation Service (WIS)'),
      summary: localised(
        'Integration with the Welsh Immunisation Service (WIS), allowing pharmacy teams to view vaccine eligibility information and vaccine data, with a seamless pass through to provide and record vaccination services.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Pharmacy teams will be able to deliver vaccinations alongside other NHS commissioned services via one route.',
      updated: UPDATED_AT,
    },
    {
      id: 'clinical-data-repository-cdr',
      title: localised('Clinical Data Repository (CDR)'),
      summary: localised(
        'Store all Choose Pharmacy consultation data as coded, structured information within the national Care Data Repository (CDR).',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Pharmacy consultations form part of a comprehensive patient record, improving visibility of care provided across healthcare settings in Wales, improving patient safety and outcomes.',
      updated: UPDATED_AT,
    },
    {
      id: 'discharge-medicines-review-dmr',
      title: localised('Discharge Medicines Review (DMR)'),
      summary: localised(
        'Enhance the functionality of the Discharge Medicines Review journey by enabling the import of discharge medicines information from the Shared Medicines Record (SMR).',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Pharmacists will be able to import current medication information, reducing the risk of transcription error and duplication, improving accuracy, and supporting effective Discharge Medicines Reviews.',
      updated: UPDATED_AT,
    },
    {
      id: 'sodium-valproate-forms',
      title: localised('Sodium Valproate Forms'),
      summary: localised(
        'Provide pharmacy teams with access to Sodium Valproate forms.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Improve clinical safety by providing access to structured Sodium Valproate monitoring and risk acknowledgement forms to support safe prescribing, regulatory compliance, and improved patient outcomes.',
      updated: UPDATED_AT,
    },
    {
      id: 'data-dashboards',
      title: localised('Data Dashboards'),
      summary: localised(
        'Create rich data dashboards for Choose Pharmacy data tailored to user roles.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'The data will provide service insights and performance metrics that help users and stakeholders monitor services, make informed decisions, drive improvements in patient care and outcomes.',
      updated: UPDATED_AT,
    },
    {
      id: 'appointment-booking',
      title: localised('Appointment Booking'),
      summary: localised(
        'Develop an appointment booking system to allow NHS commissioned services to be booked through Choose Pharmacy.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Patients can access NHS commissioned pharmacy services more easily through digital appointment booking, helping pharmacy teams plan workloads effectively, optimise capacity, and improve patient experience.',
      updated: UPDATED_AT,
    },
    {
      id: 'nhs-111-integration',
      title: localised('NHS 111 Integration'),
      summary: localised(
        'Build integrations with NHS 111 to allow sharing of information between NHS 111 and Choose Pharmacy, including referral information.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Enable referral information to be shared seamlessly between NHS 111 and Choose Pharmacy, helping patients access the most appropriate care, reducing the need to repeat information, and easing pressure on other services.',
      updated: UPDATED_AT,
    },
    {
      id: 'nhs-wales-app-integration',
      title: localised('NHS Wales App Integration'),
      summary: localised(
        'Build integrations with the NHS Wales App, ensuring patient information can be shared with Choose Pharmacy and enabling patients to book appointments through the app and make nominations.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Enable patients to manage their interactions with community pharmacy through the NHS Wales App, including booking appointments and nominating services, while ensuring information is shared securely.',
      updated: UPDATED_AT,
    },
    {
      id: 'yellowcard-reporting',
      title: localised('Yellowcard Reporting'),
      summary: localised(
        'Provide an integration with the Yellowcard reporting system for adverse reactions.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Enable pharmacy teams to quickly and securely report suspected adverse drug reactions, supporting patient safety, national medicines monitoring, and improved health outcomes.',
      updated: UPDATED_AT,
    },
    {
      id: 'clinical-template-expansion',
      title: localised('Clinical Template Expansion'),
      summary: localised(
        'Develop further clinical templates for use by pharmacy teams, devised from data collected from Choose Pharmacy and user research.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Provide pharmacy teams with streamlined, evidence-based clinical templates that reduce administrative effort, improve consultation efficiency, and enable patients to receive care more quickly.',
      updated: UPDATED_AT,
    },
    {
      id: 'common-symptoms-quick-picks',
      title: localised('Common Symptoms Quick Picks'),
      summary: localised(
        'Using Choose Pharmacy data, identify the most common symptoms recorded within specific consultation journeys and develop a quick pick system for pharmacy teams.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Enable pharmacy teams to initiate consultations more quickly by selecting from commonly recorded symptoms, reducing administrative effort, streamlining workflows, and helping patients receive care faster.',
      updated: UPDATED_AT,
    },
    {
      id: 'electronic-prescribing-service-eps',
      title: localised('Electronic Prescribing Service (EPS)'),
      summary: localised(
        'Send prescriptions generated within Choose Pharmacy via the Electronic Prescribing Service (EPS).',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Prescriptions generated within Choose Pharmacy will be transferred electronically to dispensing systems, reducing manual administration, streamlining pharmacy workflows, and helping patients get medicines faster.',
      updated: UPDATED_AT,
    },
    {
      id: 'patient-medication-record-pmr',
      title: localised('Patient Medication Record (PMR)'),
      summary: localised(
        'Share consultation information with pharmacy back-end Patient Medication Record (PMR) systems used for dispensing medicines.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Streamlined dispensing workflows by automatically sharing consultation information with PMR systems, reducing administrative burden and freeing pharmacy teams to spend more time with patients.',
      updated: UPDATED_AT,
    },
    {
      id: 'gp-system-writeback',
      title: localised('GP System Writeback'),
      summary: localised(
        'Write consultation information directly to GP systems using clinically coded messages.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Consultation information will be shared directly with GP systems using clinically coded messages, reducing administrative effort, eliminating manual transcription, improving the timeline for GPs to receive information, and improving patient safety.',
      updated: UPDATED_AT,
    },
  ],

  recentlyDelivered: {
    id: 'recently-delivered',
    heading: localised('Recently delivered'),
    description: localised(
      "Work we've completed recently and that is now live in the service.",
    ),
    placeholder: localised(
      'Content to be confirmed. This section will list recently delivered work once reviewed and agreed with the service team.',
    ),
    items: [],
  },

  otherDelivered: {
    id: 'other-delivered',
    heading: localised('Other work delivered this year'),
    description: localised(
      'A broader view of the delivery this year that sits outside the main roadmap horizons.',
    ),
    placeholder: localised(
      'Content to be confirmed. This section will capture wider delivery this year once reviewed and agreed with the service team.',
    ),
    items: [],
  },

  notRightNow: {
    id: 'not-right-now',
    heading: localised('Not now'),
    description: localised(
      'Being clear about what we are not doing keeps the focus where it matters.',
    ),
    placeholder: localised(
      'Content to be confirmed. This section will explain what is out of scope for now once reviewed and agreed with the service team.',
    ),
    items: [],
  },
};
