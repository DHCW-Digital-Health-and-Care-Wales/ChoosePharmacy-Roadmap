import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { RoadmapFooter } from '../components/RoadmapFooter';
import { BackToTop } from '../components/BackToTop';
import { useLanguage } from '../lib/i18n';

interface FAQItem {
  id: string;
  question: { cy: string; en: string };
  answer: { cy: string; en: string };
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'release-date',
    question: {
      cy: 'Dyddiad Rhyddhau',
      en: 'Release Date',
    },
    answer: {
      cy: 'Q: Pryd yn realistig y byddwn yn meddwl, y bydd defnyddwyr cynnar yn dechrau defnyddio\'r system newydd?\n\nA: Ni chyhoeddwyd unrhyw amserlenni eto. Cyn gynted ag y bydd gennym ddealltwriaeth gliriach o\'r amserlen, byddwn yn cyhoeddi hyn yn eang i\'r holl randdeiliaid.\n\nQ: Dangosodd y trywydd mewnforio cyffuriau ar gyfer DMR nad yw yn yr MVP. A allwch chi esbonio\'n union beth y mae hyn yn ei olygu. Ai mai dyma yw\'r pwynt nad ydym yn gallu mewnforio meddyginiaethau o\'r DAL?\n\nA: Ie, dyna\'s iawn.\n\nY rheswm dros hyn, yw bod y mecanwaith ar gyfer gofal eilaidd yn anfon DAL\'s yn newid gyda\'r cyflwyniad o systemau newydd fel Nerve Centre. Gan nad yw\'r tirlun newydd wedi\'i ddatblygu\'n llawn, nid ydym yn gallu echdynnu\'r data gan ni fydd dim ond yn derbyn DAL\'s mewn fformat PDF felly ni fydd yr echdyniad data ar gael.',
      en: 'Q: When do we realistically think, early adopters will start using the new system?\n\nA: No timelines have been published yet. As soon as we have a clearer understanding of the timeframe, we will communicate this widely with stakeholders.\n\nQ: Roadmap showed drug import for DMR not in MVP. Please can you explain exactly what this means. Is it that we can\'t import meds from the DAL?\n\nA: Yes, that\'s correct.\n\nThe reason for this, is that the mechanism for secondary care sending DAL\'s is changing with the introduction of new systems such as Nerve Centre. As the new landscape is not fully developed, we are unable to extract the data as we will only be receiving DAL\'s in PDF format so the data extract will not be available.',
    },
  },
  {
    id: 'mvp-features',
    question: {
      cy: 'Nodweddion MVP',
      en: 'MVP Features',
    },
    answer: {
      cy: 'Mae\'r Cynnyrch Lleiaflyd Hyfyw (MVP) yn cynnwys darganfod fferyllfeydd lleol, gwybodaeth am wasanaethau, a manylion cysylltu. Byddwn yn ychwanegu mwy o nodweddion yn y dyfodol.',
      en: 'The Minimum Viable Product (MVP) includes discovering local pharmacies, service information, and contact details. We will add more features in the future.',
    },
  },
  {
    id: 'prescribing',
    question: {
      cy: 'Presgripsiwn',
      en: 'Prescribing',
    },
    answer: {
      cy: 'Mae\'r cynlluniau ar gyfer integreiddio gwasanaethau presgripsiwn yn cael eu datblygu. Byddwn yn darparu mwy o fanylion wrth i\'r gwaith symud ymlaen.',
      en: 'Plans for integrating prescribing services are under development. We will provide more details as work progresses.',
    },
  },
  {
    id: 'gp-record',
    question: {
      cy: 'Cofnod GP',
      en: 'GP Record',
    },
    answer: {
      cy: 'Rydym yn gweithio ar integreiddio â chofresi GP i ddarparu gwybodaeth fwy cydgysylltiedig. Byddwn yn cyhoeddi diweddariadau ar y datblygiad hwn.',
      en: 'We are working on integration with GP records to provide more connected information. We will publish updates on this development.',
    },
  },
  {
    id: 'search-and-data',
    question: {
      cy: 'Chwilio a Data',
      en: 'Search and Data',
    },
    answer: {
      cy: 'Mae\'r nodwedd chwilio wedi\'i optimeiddio i ddod o hyd i fferyllfeydd yn gyflym yn ôl lleoliad a gwasanaethau. Defnyddiwn ddata cywir ac up-to-date.',
      en: 'The search feature is optimized to find pharmacies quickly by location and services. We use accurate and up-to-date data.',
    },
  },
  {
    id: 'validation',
    question: {
      cy: 'Dilysu',
      en: 'Validation',
    },
    answer: {
      cy: 'Rydym yn dilysu\'r holl ddata gyda fferyllfeydd a chyrff iechyd perthnasol i sicrhau cywirdeb a chonau\'r gwybodaeth.',
      en: 'We validate all data with relevant pharmacies and health bodies to ensure accuracy and reliability of information.',
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
                ? 'Darganfyddwch atebion i gwestiynau am y cymhwysiad Dewis Fferyllfa newydd sy\'n cael ei ddatblygu ar hyn o bryd'
                : 'Find answers to questions about the new Choose Pharmacy application currently being developed'}
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
