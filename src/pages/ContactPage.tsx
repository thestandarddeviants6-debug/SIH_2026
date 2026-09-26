import React, { useState } from "react";
import { Mail, Headset, MapPin, Clock, ChevronDown, Send } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Breadcrumb from "../components/Breadcrumb";

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const infoCards = [
    {
      icon: Mail,
      title: t.contactPage.emailTitle,
      lines: [t.contactPage.emailDesc, t.contactPage.emailValue],
      bg: "bg-skyLight",
      fg: "text-brandBlue",
    },
    {
      icon: Headset,
      title: t.contactPage.helpdeskTitle,
      lines: [t.contactPage.helpdeskDesc, t.contactPage.helpdeskHours, t.contactPage.helpdeskValue],
      bg: "bg-greenFaint",
      fg: "text-brandGreen",
    },
    {
      icon: MapPin,
      title: t.contactPage.addressTitle,
      lines: [t.contactPage.addressLine1, t.contactPage.addressLine2],
      bg: "bg-[#FDF1E2]",
      fg: "text-saffron",
    },
    {
      icon: Clock,
      title: t.contactPage.hoursTitle,
      lines: [t.contactPage.hoursLine1, t.contactPage.hoursLine2, t.contactPage.hoursLine3],
      bg: "bg-[#E5F6F5]",
      fg: "text-teal",
    },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: wire this up to the real contact/support endpoint.
    setSubmitted(true);
  }

  return (
    <>
      <Breadcrumb current={t.nav.contact} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
        <div className="mx-auto max-w-content px-4 py-16 text-center sm:px-6 lg:px-10 lg:py-20">
          <h1 className="animate-fade-slide-up text-[36px] font-extrabold leading-tight text-navy sm:text-[48px]">
            {t.contactPage.heroTitle}
          </h1>
          <p
            className="animate-fade-slide-up mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#33507A] sm:text-lg"
            style={{ animationDelay: "0.08s" }}
          >
            {t.contactPage.heroDescription}
          </p>
        </div>
      </section>

      {/* Four info cards */}
      <section className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map(({ icon: Icon, title, lines, bg, fg }) => (
            <div
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-[#EAEFF5] bg-white p-6 text-center shadow-sm sm:text-left"
            >
              <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${bg} sm:mx-0`}>
                <Icon size={22} className={fg} aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-navy">{title}</h3>
              {lines.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-[#4C6386]">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="mx-auto max-w-content px-4 py-8 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-[28px]">{t.contactPage.formHeading}</h2>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-navy">
                  {t.contactPage.fieldName}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="focus-ring w-full rounded-lg border border-[#DCE9F7] px-4 py-2.5 text-sm text-navy outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-navy">
                  {t.contactPage.fieldEmail}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="focus-ring w-full rounded-lg border border-[#DCE9F7] px-4 py-2.5 text-sm text-navy outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-usertype" className="mb-1.5 block text-sm font-semibold text-navy">
                  {t.contactPage.fieldUserType}
                </label>
                <select
                  id="contact-usertype"
                  required
                  defaultValue=""
                  className="focus-ring w-full rounded-lg border border-[#DCE9F7] bg-white px-4 py-2.5 text-sm text-navy outline-none"
                >
                  <option value="" disabled>
                    —
                  </option>
                  <option value="officer">{t.modals.userTypeOfficer}</option>
                  <option value="admin">{t.modals.userTypeAdmin}</option>
                  <option value="new">{t.modals.userTypeNew}</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-semibold text-navy">
                  {t.contactPage.fieldSubject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  className="focus-ring w-full rounded-lg border border-[#DCE9F7] px-4 py-2.5 text-sm text-navy outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-navy">
                  {t.contactPage.fieldMessage}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  className="focus-ring w-full resize-none rounded-lg border border-[#DCE9F7] px-4 py-2.5 text-sm text-navy outline-none"
                />
              </div>
              <button
                type="submit"
                className="focus-ring mt-2 flex items-center justify-center gap-2 rounded-lg bg-brandGreen px-4 py-3 text-sm font-bold text-white transition hover:brightness-110"
              >
                <Send size={16} aria-hidden="true" />
                {t.contactPage.submitButton}
              </button>
              {submitted && (
                <p role="status" className="text-sm font-medium text-brandGreen">
                  ✓ Thanks — this is a placeholder form, so nothing was sent yet.
                </p>
              )}
            </form>
          </div>

          {/* FAQ accordion */}
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-[28px]">{t.contactPage.faqHeading}</h2>
            <div className="mt-6 flex flex-col gap-3">
              {t.contactPage.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.q} className="overflow-hidden rounded-xl border border-[#EAEFF5] bg-white">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="focus-ring flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-bold text-navy">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-navy/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-4 text-sm leading-relaxed text-[#4C6386]">{faq.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Office location */}
      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-10">
        <h2 className="text-2xl font-extrabold text-navy sm:text-[28px]">{t.contactPage.officeHeading}</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-[#EAEFF5] lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col justify-center gap-3 bg-skyFaint p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <MapPin size={22} className="text-brandBlue" aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-navy">{t.contactPage.officeText}</p>
          </div>
          <div className="relative min-h-[220px] bg-[#EAF6FF]">
            <svg viewBox="0 0 400 220" className="h-full w-full" role="img" aria-label="Map showing the MoSPI office location in New Delhi">
              <rect width="400" height="220" fill="#EAF6FF" />
              <g opacity="0.5" stroke="#BEDAF2" strokeWidth="1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="220" />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 44} x2="400" y2={i * 44} />
                ))}
              </g>
              <circle cx="200" cy="110" r="10" fill="#0878D1" />
              <circle cx="200" cy="110" r="20" fill="#0878D1" opacity="0.2" />
              <path d="M200 90 L200 60 M200 60 l-6 10 M200 60 l6 10" stroke="#082B63" strokeWidth="2" fill="none" />
              <text x="200" y="145" textAnchor="middle" fontSize="12" fontWeight="700" fill="#082B63" fontFamily="Inter, sans-serif">
                New Delhi – 110001
              </text>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
