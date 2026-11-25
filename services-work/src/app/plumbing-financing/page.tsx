import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight, Check, Clock3, CreditCard, FileCheck2, HandCoins, House,
  Phone, ShieldCheck, Wallet, Wrench,
} from 'lucide-react';
import { SITE, orig } from '@/data/site';
import { buttonClasses } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Plumbing Financing & Payment Options',
  description: 'Explore plumbing financing options for repairs, replacements and home upgrades with Danika Plumbing & Electric in Everett, WA. Call to discuss your project.',
  alternates: { canonical: '/plumbing-financing' },
};

const benefits = [
  { icon: FileCheck2, title: 'Simple online application', text: 'Explore financing through a digital application process, without needing to visit a branch.' },
  { icon: ShieldCheck, title: 'Explore without an initial hard credit inquiry', text: 'The original financing program describes a soft credit check to review offers. Confirm the current application process and terms with the financing provider.' },
  { icon: Wallet, title: 'Payments over time', text: 'For approved applicants, financing can help spread eligible project costs into monthly payments.' },
  { icon: HandCoins, title: 'Options for larger projects', text: 'The original page describes financing for qualifying projects up to $55,000. Available amounts and offers may change.' },
  { icon: Clock3, title: 'Pay early flexibility', text: 'The original page states no early-payment penalties. Confirm this and all loan terms before accepting an offer.' },
];

const projectTypes = [
  { icon: Wrench, title: 'Unexpected plumbing repairs', text: 'Leaks, broken pipes and urgent repairs that need attention before they cause more damage.' },
  { icon: House, title: 'System replacements', text: 'Repiping, sewer work or replacing aging plumbing equipment before it fails.' },
  { icon: CreditCard, title: 'Water heater projects', text: 'Replacing a water heater when the old unit stops working or is no longer reliable.' },
  { icon: HandCoins, title: 'Kitchen & bathroom upgrades', text: 'Plumbing improvements as part of a remodel or a planned home upgrade.' },
];

const steps = [
  { n: '01', title: 'Talk through your project', text: 'Contact Danika and tell us what plumbing work you need. We’ll help arrange an assessment.' },
  { n: '02', title: 'Get an estimate', text: 'Review the scope of work and estimate before deciding how you want to proceed.' },
  { n: '03', title: 'Explore financing', text: 'If financing is a fit, follow the provider’s secure application process and review the available offers.' },
  { n: '04', title: 'Choose what works', text: 'Review payment terms carefully. Once you approve the project, we can schedule the work.' },
];

const questions = [
  { q: 'Who provides the financing?', a: 'Danika’s original financing page identifies Momnt as its financing partner. Consumer loans are arranged through Momnt and originated by participating financial institutions. Provider availability and terms should be confirmed when you apply.' },
  { q: 'What kinds of plumbing projects may be eligible?', a: 'Financing may be considered for eligible repairs, replacements, water heater work, repiping, sewer projects and plumbing remodels. Eligibility depends on the project and the financing provider.' },
  { q: 'Will applying affect my credit score?', a: 'The original page describes a soft credit check when exploring offers. Credit checks and eligibility can depend on the application stage and lender, so confirm the details with the provider before submitting.' },
  { q: 'How much can I finance?', a: 'The original page advertises project financing up to $55,000. That figure is not a guarantee of approval or an available loan amount; current limits, rates, terms and approval criteria are determined by the financing provider.' },
  { q: 'Can I pay my loan off early?', a: 'The original page says there are no early-payment penalties. Review the specific agreement you receive to verify whether that applies to your offer.' },
];

export default function PlumbingFinancingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(255,255,255,.12),transparent_45%),linear-gradient(135deg,rgba(143,51,40,.45),transparent_65%)]" aria-hidden />
        <div className="container-x relative grid gap-9 py-12 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14 lg:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.12em] text-white/90">Flexible payment options</p>
            <h1 className="display max-w-3xl text-[clamp(2.7rem,8vw,5.25rem)] leading-[.98] text-white">Plumbing repairs shouldn’t have to wait on your budget.</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">When an unexpected repair or home upgrade comes up, financing may help you get the work done now and pay over time. Ask Danika about available options through our financing partner.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={SITE.phoneHref} className={buttonClasses('light', 'lg', 'w-full sm:w-auto')}><Phone className="h-5 w-5" aria-hidden />Call {SITE.phone}</a>
              <a href={orig('/contact-us/')} className={buttonClasses('outline-white', 'lg', 'w-full sm:w-auto')}>Request an estimate <ArrowRight className="h-4 w-4" aria-hidden /></a>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/65">Financing is subject to application, approval and provider terms. Not all applicants or projects qualify.</p>
          </div>
          <div className="relative min-h-[290px] overflow-hidden rounded-card border border-white/15 bg-white/5 sm:min-h-[390px]">
            <Image src="/images/stock/plumber-under-sink.webp" alt="Plumber working on residential sink plumbing" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-card border border-white/15 bg-primary-dark/75 p-4 backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[.12em] text-white/70">Your home. Your plan.</p>
              <p className="mt-1 font-heading text-xl font-bold text-white sm:text-2xl">Get the estimate first. Then explore payment options.</p>
            </div>
            <span className="absolute right-3 top-3 rounded bg-primary-dark/70 px-2 py-1 text-[10px] font-semibold text-white/80">Illustrative image</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Plumbing financing</p>
            <h2 className="h2">Make room in your budget for the work your home needs.</h2>
          </div>
          <div className="space-y-4 text-fg-soft">
            <p>Plumbing problems can show up at the worst possible time. A failed water heater, leaking pipe or major replacement can become an expense you weren’t planning for.</p>
            <p>Danika Plumbing &amp; Electric works with <strong className="text-primary-dark">Momnt</strong> to offer financing options for qualifying plumbing projects. Talk with our team, review your estimate and explore whether financing fits your needs.</p>
          </div>
        </div>
      </section>


      {/* Benefits */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Explore your options</p>
            <h2 className="h2">Financing features to ask about</h2>
            <p className="lead mx-auto">The original Danika financing page outlines these features. Your actual options depend on the current program and lender approval.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card motion-lift p-5 sm:p-6">
                <span className="grid h-11 w-11 place-items-center rounded-ui bg-primary/10 text-primary"><Icon className="h-5 w-5" aria-hidden /></span>
                <h3 className="mt-4 font-heading text-lg font-bold text-primary-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-soft">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Project types */}
      <section className="section bg-white">
        <div className="container-x">
          <p className="eyebrow">What might financing help with?</p>
          <h2 className="h2 max-w-3xl">For the plumbing work you need today, or the project you’ve been planning.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-card border border-line bg-white p-5 transition hover:border-primary/40 hover:shadow-card">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 font-heading text-lg font-bold text-primary-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-soft">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-primary-dark text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow !text-cream">The process</p>
            <h2 className="h2 !text-white">Four straightforward steps</h2>
            <p className="mt-3 text-white/80">Start with your plumbing needs and an estimate. Financing is a separate decision, so you can review your options before moving forward.</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="border-t border-white/25 pt-4">
                <span className="display text-3xl text-white/55">{step.n}</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* FAQs */}
      <section className="section bg-white" aria-labelledby="financing-faq-title">
        <div className="container-x mx-auto max-w-4xl">
          <p className="eyebrow">Helpful details</p>
          <h2 id="financing-faq-title" className="h2">Plumbing financing FAQs</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {questions.map(({ q, a }) => (
              <details key={q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 font-heading text-base font-bold text-primary-dark sm:text-lg [&::-webkit-details-marker]:hidden">
                  {q}<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-primary transition group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg-soft sm:text-base">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-cream">
        <div className="container-x">
          <div className="overflow-hidden rounded-card bg-primary p-6 text-white sm:p-9 lg:p-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.14em] text-white/75">Let’s talk about your project</p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl">Need plumbing help? Start with an estimate.</h2>
                <p className="mt-3 max-w-2xl text-white/85">Our team can help you understand the work needed and talk through financing questions. There’s no need to make a financing decision before you know the project scope.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={SITE.phoneHref} className={buttonClasses('light', 'md', 'whitespace-nowrap')}><Phone className="h-5 w-5" aria-hidden />Call Danika</a>
                <a href={orig('/contact-us/')} className={buttonClasses('outline-white', 'md', 'whitespace-nowrap')}>Contact us <ArrowRight className="h-4 w-4" aria-hidden /></a>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-4xl text-center text-xs leading-relaxed text-fg-soft">Financing information is provided for general guidance. Loans are subject to credit approval, lender requirements and the terms of the agreement. Rates, amounts, payment schedules and availability are not guaranteed and may change. Momnt Technologies, Inc. arranges consumer loans used to purchase goods and services from participating merchants; loans are originated by participating financial institutions.</p>
        </div>
      </section>
    </main>
  );
}
