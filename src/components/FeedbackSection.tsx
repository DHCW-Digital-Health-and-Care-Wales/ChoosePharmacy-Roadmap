import feedbackQr from '../assets/feedback-qr.png';
import { useLanguage } from '../lib/i18n';

/**
 * Feedback section with QR code on the left and text on the right.
 * Encourages users to provide feedback on the roadmap.
 */
export function FeedbackSection() {
  const { lang } = useLanguage();
  const cy = lang === 'cy';
  const headingId = 'feedback-heading';

  return (
    <section
      id="feedback"
      aria-labelledby={headingId}
      className="border-t border-border bg-surface px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-content">
        <h2 id={headingId} className="text-2xl font-bold text-heading">
          {cy ? 'Adborth' : 'Feedback'}
        </h2>
        
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center">
          {/* QR Code - Left side */}
          <div className="flex-shrink-0 md:w-48">
            <img
              src={feedbackQr}
              alt={cy ? 'Cod QR adborth' : 'Feedback QR code'}
              className="h-auto w-full rounded-lg shadow-sm"
            />
          </div>

          {/* Text - Right side */}
          <div className="flex-1">
            <p className="max-w-2xl leading-relaxed text-ink-900">
              {cy
                ? 'Rydym yn croesawu eich adborth ar y Trywydd Dewis Fferyllfa. Ple sganiwch y cod QR i rannu eich safbwyntiau a helpu i lunio blaenoriaethau, gwelliannau a datblygiadau yn y dyfodol'
                : 'We welcome your feedback on the Choose Pharmacy Roadmap. Please scan the QR code to share your views and help shape future priorities, improvements and developments'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
