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
    id: 'what-is-choose-pharmacy',
    question: {
      cy: 'Beth yw Dewis Fferyllfa?',
      en: 'What is Choose Pharmacy?',
    },
    answer: {
      cy: 'Dewis Fferyllfa yw gwasanaeth sydd yn helpu cleifion yng Nghymru ddarganfod a chysylltu â fferyllfeydd lleol. Mae\'n rhoi gwybodaeth am wasanaethau, amseroedd agor, a ffyrdd o gysylltu.',
      en: 'Choose Pharmacy is a service that helps patients in Wales discover and connect with local pharmacies. It provides information about services, opening times, and ways to get in touch.',
    },
  },
  {
    id: 'how-to-find-pharmacy',
    question: {
      cy: 'Sut ydw i\'n dod o hyd i fferyllfa?',
      en: 'How do I find a pharmacy?',
    },
    answer: {
      cy: 'Gallwch ddefnyddio\'r chwiliad lleoli ar ein gwefan i ddarganfod fferyllfeydd agosaf atynt. Gallwch hidlo yn ôl enw\'r fferyllfa, lleoliad, neu\'r gwasanaethau sydd gan angen arnoch.',
      en: 'You can use the location search on our website to find the nearest pharmacies to you. You can filter by pharmacy name, location, or the services you need.',
    },
  },
  {
    id: 'what-services-available',
    question: {
      cy: 'Pa wasanaethau sydd ar gael?',
      en: 'What services are available?',
    },
    answer: {
      cy: 'Mae gan fferyllfeydd amrywiol wasanaethau megis presgripsiwn, cyngor ar iechyd, nwyddau cymorth cyntaf, a mwy. Gallwch wirio gwefan pob fferyllfa am y gwasanaethau penodol maen nhw\'n cynnig.',
      en: 'Pharmacies offer various services including prescriptions, health advice, first aid supplies, and more. You can check each pharmacy\'s website for the specific services they provide.',
    },
  },
  {
    id: 'opening-hours',
    question: {
      cy: 'Beth yw amseroedd agor y fferyllfa?',
      en: 'What are the pharmacy opening hours?',
    },
    answer: {
      cy: 'Mae amseroedd agor yn amrywio\'n ôl y fferyllfa. Mae\'r rhan fwyaf yn agored yn y dyddiau gwaith, gydag ychydig yn agored ar benwythnosau. Ewch i\'r tudalen fferyllfa benodol am y manylion diweddaraf.',
      en: 'Opening hours vary by pharmacy. Most are open on weekdays, with some open on weekends. Visit the specific pharmacy page for the latest details.',
    },
  },
  {
    id: 'emergency-pharmacy',
    question: {
      cy: 'Beth ydw i\'n gwneud mewn achos brys?',
      en: 'What do I do in an emergency?',
    },
    answer: {
      cy: 'Os ydych mewn achos brys meddygol, ffoniwch 999. Ar gyfer cyngor meddygol nad yw\'n frys, ffoniwch 111 neu ewch i\'r gwefan NHS 111 Wales.',
      en: 'If you are in a medical emergency, call 999. For non-emergency medical advice, call 111 or visit the NHS 111 Wales website.',
    },
  },
  {
    id: 'prescription-process',
    question: {
      cy: 'Sut mae\'r broses presgripsiwn yn gweithio?',
      en: 'How does the prescription process work?',
    },
    answer: {
      cy: 'Cewch ganiatâd presgripsiwn gan eich meddyg. Yna gallwch fynd i unrhyw fferyllfa i dderbyn eich meddyginiaethau. Mae rhai fferyllfeydd hefyd yn cynnig gwasanaethau e-presgripsiwn.',
      en: 'You receive a prescription from your doctor. You can then visit any pharmacy to obtain your medications. Some pharmacies also offer e-prescription services.',
    },
  },
  {
    id: 'access-support',
    question: {
      cy: 'Ble gallaf i gael cymorth ar hygyrchedd?',
      en: 'Where can I get accessibility support?',
    },
    answer: {
      cy: 'Os oes gennych anabledd neu anghenion penodol, cysylltwch â\'r fferyllfa yn uniongyrchol. Gallant ddarparu help ag ar y safle, llinellau ffôn, neu wasanaethau cyfieithu.',
      en: 'If you have a disability or specific needs, contact the pharmacy directly. They can provide on-site help, phone support, or translation services.',
    },
  },
  {
    id: 'feedback-complaints',
    question: {
      cy: 'Sut ydw i\'n rhoi adborth neu gwŷn?',
      en: 'How do I give feedback or make a complaint?',
    },
    answer: {
      cy: 'Gallwch roi adborth neu gwŷn drwy gyswllt â\'r fferyllfa yn uniongyrchol neu drwy ddefnyddio ein ffurflen adborth ar-lein. Ewch i\'r dudalen adborth am fwy o fanylion.',
      en: 'You can provide feedback or make a complaint by contacting the pharmacy directly or by using our online feedback form. Visit the feedback page for more details.',
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
                ? 'Darganfyddwch atebion i gwestiynau am y gwasanaeth Dewis Fferyllfa a sut i ddefnyddio\'r platfform.'
                : 'Find answers to questions about the Choose Pharmacy service and how to use the platform.'}
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
