import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { plumbingPages } from '@/data/plumbing-service-pages';
import { SITE } from '@/data/site';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Plumbing Services in Everett, WA | Danika Plumbing & Electric',
  description: 'Explore plumbing repair, drain cleaning, water heaters, sewer services, leak detection, repiping and more from Danika Plumbing & Electric in Everett, WA.',
  alternates: { canonical: '/plumbing-services/' },
};

export default function PlumbingServicesIndex() {
  return <main id="main">
    <section className="bg-primary text-white"><div className="container-x py-12 sm:py-16 lg:py-20"><Reveal><p className="eyebrow !text-white/80">Plumbing Services</p><h1 className="display mt-3 max-w-3xl text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.02] text-white">Plumbing help for the problems at home.</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">From a slow drain and dripping faucet to an urgent leak or larger plumbing project, find the service that fits your home.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><ButtonLink href={SITE.phoneHref} variant="light" size="lg"><Phone className="h-5 w-5" aria-hidden />Call {SITE.phone}</ButtonLink><ButtonLink href="/#quick-request" variant="outline-white" size="lg">Request a callback</ButtonLink></div></Reveal></div></section>
    <section className="section bg-white"><div className="container-x"><Reveal><p className="eyebrow">Choose a service</p><h2 className="h2">What can we help with?</h2><p className="lead">Each service page explains common symptoms, what we can check, the process and answers to frequently asked questions.</p></Reveal><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{plumbingPages.map((service, i) => {const Icon=service.icon;return <Reveal key={service.slug} index={i} as="article" className="h-full"><Link href={`/${service.slug}/`} className="group flex h-full flex-col rounded-card border border-line bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift sm:p-5"><span className="grid h-12 w-12 place-items-center rounded-ui bg-primary text-white"><Icon className="h-6 w-6" aria-hidden /></span><h3 className="mt-4 font-heading text-lg font-bold text-primary-dark">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-fg-soft">{service.summary}</p><span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-primary">View service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden /></span></Link></Reveal>})}</div></div></section>
    <section className="section surface surface-cream bg-cream"><div className="container-x grid gap-6 md:grid-cols-[1fr_auto] md:items-center"><Reveal><p className="eyebrow">Not sure which service?</p><h2 className="h2">Tell us what you’re noticing.</h2><p className="lead">Our team can help you identify the next step and arrange a visit.</p></Reveal><Reveal><ButtonLink href={SITE.phoneHref} variant="primary" size="lg"><Phone className="h-5 w-5" aria-hidden />Call Danika</ButtonLink></Reveal></div></section>
  </main>;
}
