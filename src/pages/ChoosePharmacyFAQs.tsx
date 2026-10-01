import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { RoadmapFooter } from '../components/RoadmapFooter';
import { BackToTop } from '../components/BackToTop';
import { useLanguage } from '../lib/i18n';

interface FAQItem {
  id: string;
  question: { cy: string; en: string };
  answer: { cy: React.ReactNode; en: React.ReactNode };
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'release-date',
    question: {
      cy: 'Dyddiad Rhyddhau',
      en: 'Release Date',
    },
    answer: {
      cy: (
        <>
          <strong>Q: Pryd yn realistig y byddwn yn meddwl, y bydd defnyddwyr cynnar yn dechrau defnyddio&rsquo;r system newydd?</strong>
          <br />
          <br />
          <strong>A:</strong> Ni chyhoeddwyd unrhyw amserlenni eto. Cyn gynted ag y bydd gennym ddealltwriaeth gliriach o&rsquo;r amserlen, byddwn yn cyhoeddi hyn yn eang i&rsquo;r holl randdeiliaid.
        </>
      ),
      en: (
        <>
          <strong>Q: When do we realistically think, early adopters will start using the new system?</strong>
          <br />
          <br />
          <strong>A:</strong> No timelines have been published yet. As soon as we have a clearer understanding of the timeframe, we will communicate this widely with stakeholders.
        </>
      ),
    },
  },
  {
    id: 'mvp-features',
    question: {
      cy: 'Nodweddion MVP',
      en: 'MVP Features',
    },
    answer: {
      cy: (
        <>
          <strong>Q: Dangosodd y trywydd mewnforio cyffuriau ar gyfer DMR nad yw yn yr MVP. A allwch chi esbonio&rsquo;n union beth y mae hyn yn ei olygu. Ai mai dyma yw&rsquo;r pwynt nad ydym yn gallu mewnforio meddyginiaethau o&rsquo;r DAL?</strong>
          <br />
          <br />
          <strong>A:</strong> Ie, dyna&rsquo;s iawn.
          <br />
          <br />
          Y rheswm dros hyn, yw bod y mecanwaith ar gyfer gofal eilaidd yn anfon DAL&rsquo;s yn newid gyda&rsquo;r cyflwyniad o systemau newydd fel Nerve Centre. Gan nad yw&rsquo;r tirlun newydd wedi&rsquo;i ddatblygu&rsquo;n llawn, nid ydym yn gallu echdynnu&rsquo;r data gan ni fydd dim ond yn derbyn DAL&rsquo;s mewn fformat PDF felly ni fydd yr echdyniad data ar gael.
        </>
      ),
      en: (
        <>
          <strong>Q: Roadmap showed drug import for DMR not in MVP. Please can you explain exactly what this means. Is it that we can&rsquo;t import meds from the DAL?</strong>
          <br />
          <br />
          <strong>A:</strong> Yes, that&rsquo;s correct.
          <br />
          <br />
          The reason for this, is that the mechanism for secondary care sending DAL&rsquo;s is changing with the introduction of new systems such as Nerve Centre. As the new landscape is not fully developed, we are unable to extract the data as we will only be receiving DAL&rsquo;s in PDF format so the data extract will not be available.
        </>
      ),
    },
  },
  {
    id: 'prescribing',
    question: {
      cy: 'Presgripsiwn',
      en: 'Prescribing',
    },
    answer: {
      cy: (
        <>
          <strong>Q: Beth yw&rsquo;r cynllun ar gyfer presgripsiwn?</strong>
          <br />
          <br />
          <strong>A:</strong> Mae integreiddiadau, gan gynnwys swyddogaeth bresgripsiwn, ar y trywydd ond nid ydynt yn cael eu cynllunio ar gyfer eu cynnwys yn y rhyddhau MVP.
        </>
      ),
      en: (
        <>
          <strong>Q: What is the plan for prescribing? Will there be EPS prescription functionality or paper printing and, if so, will it include 2D Rx barcodes (or integration with third-party EPS solutions such as Cleo EPS)?</strong>
          <br />
          <br />
          <strong>A:</strong> Integrations, including prescribing-related functionality, are on the roadmap but are not planned for inclusion within the MVP release.
          <br />
          <br />
          <strong>Q: Can we ensure that prescriptions can be printed before completion of the consultation, as this is currently a significant operational barrier?</strong>
          <br />
          <br />
          <strong>A:</strong> Following review of feedback, we have amended the CCM IPS pathway to allow prescriptions to be generated before consultation completion. Clinical assessment notes will be validated at the Consultation Summary stage rather than earlier in the journey, enabling prescriptions to be produced sooner while still requiring all mandatory information before finalisation. Symptoms and a diagnosis/condition remain mandatory prior to prescription generation. This enhancement is progressing through the development backlog.
          <br />
          <br />
          <strong>Q: We also need to ensure that when printing scripts that the drug description does not include a pack size</strong>
          <br />
          <br />
          <strong>A:</strong> Pack size will not form part of the drug description.
          <br />
          <br />
          <strong>Q: There was work in NHS Digital on dose syntax. Did that not result in a standardised approach?</strong>
          <br />
          <br />
          <strong>A:</strong> Teams within DHCW are reviewing and investigating dosage syntax standards that are available.
        </>
      ),
    },
  },
  {
    id: 'gp-record',
    question: {
      cy: 'Cofnod GP',
      en: 'GP Record',
    },
    answer: {
      cy: (
        <>
          <strong>Q: A yw&rsquo;r materion o ganlyniadau profion nad ydynt yn dangos mewn trefn amseryddol wedi&rsquo;u datrys yn y golwg WGPR yn y Dewis newydd?</strong>
          <br />
          <br />
          <strong>A:</strong> Mae&rsquo;r Ymchwiliadau a canlyniadau profion bellach wedi&rsquo;u rhannu i&rsquo;w tab eu hunain sy&rsquo;n cael eu dangos mewn trefn amseryddol yn seiliedig ar ddyddiad canlyniad y prawf neu ddyddiad y prawf. Y prif achos y broblem yn y Dewis presennol oedd bod yr wybodaeth mewn un tab.
          <br />
          <br />
          <strong>Q: Oes unrhyw gynlluniau i gysylltu â chofresi GP cleifion Lloegr?</strong>
          <br />
          <br />
          <strong>A:</strong> Mae DHCW wedi&rsquo;i ymrwymo i wella rhannu gwybodaeth iechyd trawsffiniol ac yn cefnogi&rsquo;n weithredol fenter sy&rsquo;n galluogi clinigwyr i gael mynediad at wybodaeth cleifion berthnasol y tu allan i Gymru lle&rsquo;n briodol. Fodd bynnag, mae integreiddio uniongyrchol, amser-real â chofresi GP Lloegr yn dibynnu ar drefniadau rhyng-weithrededd ehangach rhwng NHS Cymru a NHS Lloegr, gan gynnwys safonau technegol, llywodraethu, a chytundebau rhannu data. Er bod cynnydd yn parhau yn y maes hwn, nid oes cynlluniau nac amserlenni cadarnhawyd ar hyn o bryd ar gyfer mynediad llawn at gofresi GP Lloegr yn fyw o fewn systemau clinigol Cymru.
        </>
      ),
      en: (
        <>
          <strong>Q: Has the issues of test result not showing in chronological order been resolved in WGPR view in new Choose?</strong>
          <br />
          <br />
          <strong>A:</strong> The Investigations and test results are now split into their own tabs which are displayed in chronological order based on the test result date or test date. The issue in the current Choose was due to the information being in one tab.
          <br />
          <br />
          <strong>Q: Any plans to connect with English patients GP records?</strong>
          <br />
          <br />
          <strong>A:</strong> DHCW is committed to improving cross-border health information sharing and is actively supporting initiatives that enable clinicians to access relevant patient information from outside Wales where appropriate. However, direct, real-time integration with English GP records depends on wider interoperability arrangements between NHS Wales and NHS England, including technical standards, governance, and data-sharing agreements. While progress continues in this area, there are currently no confirmed plans or timelines for full access to live English GP records within Welsh clinical systems.
        </>
      ),
    },
  },
  {
    id: 'search-and-data',
    question: {
      cy: 'Chwilio a Data',
      en: 'Search and Data',
    },
    answer: {
      cy: (
        <>
          <strong>Q: A fydd swyddogaeth chwilio claf yn gweithio gyda llythrennau cyntaf yn unig (nid enwau llawn), fel y mae&rsquo;r Dewis presennol yn ei wneud?</strong>
          <br />
          <br />
          <strong>A:</strong> Gan y byddwn yn symud i&rsquo;r Care Data Repository (CDR) yn hytrach na&rsquo;r Welsh Demographics Service (WDS) rydym wedi cadarnhau bod chwilio claf yn gallu cael ei gwblhau gyda llythrennau enw cyntaf a chynaf.
          <br />
          <br />
          <strong>Q: Chwilio meddyginiaethau - a ydym wedi sicrhau ei bod wrth chwilio am generig yn unig y dangosir yr enw generig (heb brand) - VMP. Ar hyn o bryd mae dewis yn dangos pob brand generig sengl (amp) sy&rsquo;n broblemati</strong>
          <br />
          <br />
          <strong>A:</strong> Bydd gan chwiliad meddyginiaeth switsh toggle Generig/Branded. Yna bydd y meddyginiaethau a ddangosir yn unol â&rsquo;r hyn a ddewiswyd. Bydd maint y pecyn yn rhestr dropdown yn seiliedig ar y maint sydd ar gael ar gyfer y VMPP/AMPP. Bydd y DMD yn diweddaru&rsquo;r wythnosol yn unol â data TRUD
          <br />
          <br />
          <strong>Q: A yw hynny&rsquo;n golygu y bydd y data sy&rsquo;n dychwelyd i NWSSP ar AVP, MVP yn unig yr enw generig at ddibenion prisio?</strong>
          <br />
          <br />
          <strong>A:</strong> Byddwn yn darparu NWSSP gyda&rsquo;r set lawn o wybodaeth sy&rsquo;n gysylltiedig â meddyginiaethau sy&rsquo;n angenrheidiol ar gyfer ad-dalu, gan gynnwys pob safonau codio perthnasol a manylion maint y pecyn. Trwy ddarparu&rsquo;r ystod lawn o godau sy&rsquo;n gysylltiedig â&rsquo;r meddyginiaeth a rhyddhawyd, bydd gan NWSSP yr wybodaeth sydd ei hangen i bennu a phrosesu&rsquo;r taliad ad-dalu priodol yn gywir.
        </>
      ),
      en: (
        <>
          <strong>Q: Will the patient search function work with initials only (not full names), as the current Choose does?</strong>
          <br />
          <br />
          <strong>A:</strong> As we will be moving to the Care Data Repository (CDR) as opposed to the Welsh Demographics Service (WDS) we have confirmed that a patient search can be completed with first and last name initials.
          <br />
          <br />
          <strong>Q: Medicines search - have we ensured that when searching generic only the generic name (without brand) shows - VMP. Currently choose shows every single generic brand (amp) which is problematic</strong>
          <br />
          <br />
          <strong>A:</strong> The medication search will have a Generic/Branded toggle switch. The medications then displayed will be inline with what is selected. Pack size will then be a drop down based on the available sizes for the VMPP/AMPP. The DMD will weekly update inline with TRUD data
          <br />
          <br />
          <strong>Q: Does that mean the data heading back to NWSSP on AVP, MVP will just be the generic name for pricing purposes?</strong>
          <br />
          <br />
          <strong>A:</strong> We will provide NWSSP with the full set of medicine-related information required for reimbursement, including all relevant coding standards and pack size details. By supplying the complete range of codes associated with the dispensed medicine, NWSSP will have the information needed to determine and process the appropriate reimbursement payment accurately.
        </>
      ),
    },
  },
  {
    id: 'validation',
    question: {
      cy: 'Dilysu',
      en: 'Validation',
    },
    answer: {
      cy: (
        <>
          <strong>Q: A all dyddiad yn y dyfodol gael ei nodi yn y dyddiad ac amser y ymgynghoriad yn nhudalen manylion ymgynghoriad yr EMS?</strong>
          <br />
          <br />
          <strong>A:</strong> Na, bydd rheolau dilysu yn atal defnyddwyr rhag nodi dyddiad yn y dyfodol ar gyfer ymgynghoriad EMS.
          <br />
          <br />
          <strong>Q: A fydd y system yn dangos Presgripsiwn Annibynnol yn unig os yw&rsquo;r person wedi&rsquo;i ardystio?</strong>
          <br />
          <br />
          <strong>A:</strong> Bydd yr ap yn caniatáu Presgripsiwn Annibynnol yn unig os yw&rsquo;r defnyddiwr yn cael ei restru fel IP a gynhelir gan NWSSP.
        </>
      ),
      en: (
        <>
          <strong>Q: Can a future date be entered into the date and time of consultation in the in the EMS consultation details page?</strong>
          <br />
          <br />
          <strong>A:</strong> No, the validation rules will prevent users from entering a future date for an EMS consultation.
          <br />
          <br />
          <strong>Q: Will the system only show Independent Prescribing if the person is accredited?</strong>
          <br />
          <br />
          <strong>A:</strong> The application will only allow Independent Prescribing if the user is listed as an IP held by NWSSP.
        </>
      ),
    },
  },
];

/**
 * FAQ page with collapsible questions and answers.
 * Styled to match the Roadmap page with the same header, footer, and design language.
 */
export function ChoosePharmacyFAQs() {
  const { lang } = useLanguage();
  const cy = lang === 'cy';
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        {cy ? (
          <span lang="cy">Neidio i&rsquo;r prif gynnwys</span>
        ) : (
          'Skip to content'
        )}
      </a>

      <span id="top" />
      <RoadmapHeader />

      <main id="main-content">
        {/* FAQ Page Header */}
        <section className="bg-surface-subtle px-4 py-12 sm:px-6 pt-32">
          <div className="mx-auto max-w-content">
            <h1 className="text-4xl font-bold text-heading">
              {cy ? 'Cwestiynau Cyffredin' : 'Frequently Asked Questions'}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-700">
              {cy
                ? 'Darganfyddwch atebion i gwestiynau a godwyd gan ddefnyddwyr a rhanddeiliaid am y cymhwysiad Dewis Fferyllfa newydd, gan gynnwys ei nodweddion, trywydd, a chyfeiriad y dyfodol.'
                : 'Find answers to questions raised by users and stakeholders about the new Choose Pharmacy application, including its features, roadmap, and future direction.'}
            </p>
          </div>
        </section>

        {/* FAQ Items */}
        <section
          id="faq"
          className="border-t border-border bg-surface px-4 py-12 sm:px-6"
        >
          <div className="mx-auto max-w-content">
            <div className="space-y-4">
              {FAQ_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-card border border-border bg-white transition-all duration-200"
                >
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full px-6 py-4 text-left hover:bg-surface-subtle focus:outline-none"
                    aria-expanded={expandedId === item.id}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-heading">
                        {cy ? item.question.cy : item.question.en}
                      </h2>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-ink-500 transition-transform duration-200 ${
                          expandedId === item.id ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {expandedId === item.id && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="border-t border-border px-6 py-4 text-ink-900"
                    >
                      {cy ? item.answer.cy : item.answer.en}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <RoadmapFooter />
      <BackToTop />
    </>
  );
}

export default ChoosePharmacyFAQs;
