import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Clock3, FileText } from 'lucide-react';
import { plumbingPages, plumbingPageBySlug } from '@/data/plumbing-service-pages';
import { SITE } from '@/data/site';
import { getImage } from '@/lib/images';
import { ButtonLink } from '@/components/ui/Button';
import { QuoteForm } from '@/components/QuoteForm';
import { StockImage } from '@/components/StockImage';
import { Reveal } from '@/components/ui/Reveal';

export function generateStaticParams() {
  return plumbingPages.map((service) => ({ slug: service.slug }));
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = plumbingPageBySlug[slug];
  if (!service) return {};
  return {
    title: `${service.title} in Everett, WA | Danika Plumbing & Electric`,
    description: `${service.summary} Serving Everett and Snohomish County. Call Danika Plumbing & Electric at ${SITE.phone}.`,
    alternates: { canonical: `/${service.slug}/` },
  };
}


function ServiceFAQ({ questions }: { questions: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {questions.map((item, i) => (
        <details key={item.q} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-fg marker:hidden sm:text-lg">
            <span>{item.q}</span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream text-primary transition-transform group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-fg-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export default async function PlumbingServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = plumbingPageBySlug[slug];
  if (!service) notFound();
  const Icon = service.icon;
  const related = service.related.map((key) => plumbingPageBySlug[key]).filter(Boolean);
  const serviceImage = service.imageKey ? getImage(service.imageKey) : null;
  const structured = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: service.title, description: service.summary,
    provider: { '@type': 'Plumber', name: SITE.name, telephone: SITE.phone, address: { '@type': 'PostalAddress', streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: SITE.address.region, postalCode: SITE.address.postal, addressCountry: 'US' } },
    areaServed: ['Everett, WA', 'Snohomish County, WA', 'King County, WA'],
    url: `${SITE.url}/${service.slug}/`,
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
      <section className="relative isolate overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20">{serviceImage ? <Image src={serviceImage.src} alt="" fill sizes="100vw" className="object-cover" /> : <StockImage slot="plumberUnderSink" sizes="100vw" />}</div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/95 to-primary/65" aria-hidden />
        <div className="container-x relative grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-20">
          <Reveal className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/75"><Link href="/" className="underline-offset-4 hover:underline">Home</Link><span className="mx-2">/</span><Link href="/#services" className="underline-offset-4 hover:underline">Plumbing Services</Link><span className="mx-2">/</span><span aria-current="page" className="text-white">{service.title}</span></nav>
            <p className="eyebrow !text-white/85">{service.eyebrow}</p>
            <h1 className="display mt-3 max-w-xl text-[clamp(2.4rem,4vw,4.25rem)] leading-[1.02] text-white">{service.headline}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">{service.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={SITE.phoneHref} variant="light" size="lg"><Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}</ButtonLink>
              <ButtonLink href="#service-request" variant="outline-white" size="lg">Request Service <ArrowRight className="h-5 w-5" aria-hidden /></ButtonLink>
            </div>
            <ul className="mt-7 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0" aria-hidden /> Licensed plumbing contractor</li>
              <li className="flex items-center gap-2"><Clock3 className="h-4 w-4 shrink-0" aria-hidden /> 24/7 emergency plumbing</li>
              <li className="flex items-center gap-2"><FileText className="h-4 w-4 shrink-0" aria-hidden /> Written estimate before work</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden /> 1-year parts and labor warranty</li>
            </ul>
          </Reveal>
          <Reveal className="relative mx-auto w-full max-w-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-white/20 bg-primary-dark shadow-lift">
              {serviceImage ? <Image src={serviceImage.src} alt={serviceImage.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /> : <StockImage slot="plumberUnderSink" sizes="(min-width: 1024px) 40vw, 100vw" />}
            </div>
            <p className="mt-2 text-right text-xs text-white/65">{serviceImage ? 'Danika project photo' : 'Illustrative stock photo'}</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_.82fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Service overview</p>
            <h2 className="h2">Plumbing help for the problem you’re seeing</h2>
            <p className="lead">Every visit starts by understanding the symptoms, checking the plumbing and explaining the options. We provide a written price before approved work begins.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.scope.map((item) => <div key={item} className="flex items-start gap-3 rounded-ui border border-line bg-cream/60 p-3.5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden /><span className="text-sm font-medium">{item}</span></div>)}
            </div>
          </Reveal>
          <Reveal className="rounded-card border border-line bg-cream p-5 sm:p-6">
            <div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-ui bg-primary text-white"><Icon className="h-6 w-6" aria-hidden /></span><div><p className="eyebrow !mb-0">Common signs</p><h3 className="font-heading text-xl font-bold">What may need attention</h3></div></div>
            <ul className="mt-5 space-y-3">{service.symptoms.map((symptom) => <li key={symptom} className="flex gap-2.5 text-sm leading-relaxed"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden /><span>{symptom}</span></li>)}</ul>
            <a href={SITE.phoneHref} className="mt-5 inline-flex items-center gap-2 font-bold text-primary underline-offset-4 hover:underline">Discuss your issue <ArrowRight className="h-4 w-4" aria-hidden /></a>
          </Reveal>
        </div>
      </section>

      <section className="section surface surface-cream bg-cream">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center"><p className="eyebrow justify-center">The Danika way</p><h2 className="h2">What to expect from your service visit</h2><p className="lead">Clear steps, options and pricing before the work starts.</p></Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {service.steps.map((step, i) => <Reveal key={step} index={i} className="rounded-card border border-line bg-white p-4 shadow-card"><span className="display text-3xl text-primary">0{i + 1}</span><p className="mt-2 text-sm font-semibold leading-snug">{step}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_.8fr]">
          <Reveal><p className="eyebrow">Questions homeowners ask</p><h2 className="h2 mb-5">Frequently asked questions</h2><ServiceFAQ questions={service.faq} /></Reveal>
          <Reveal className="rounded-card bg-primary p-6 text-white sm:p-8"><p className="eyebrow !text-white/80">Need help with this service?</p><h2 className="h3-compact !text-white">Talk with Danika</h2><p className="mt-3 leading-relaxed text-white/90">Tell us what you’re noticing. We’ll help you figure out the next step and schedule a visit.</p><a href={SITE.phoneHref} className="mt-5 flex items-center gap-3 font-heading text-2xl font-bold text-white"><Phone className="h-6 w-6" aria-hidden />{SITE.phone}</a><ButtonLink href="#service-request" variant="light" className="mt-5 w-full">Request a service callback</ButtonLink><p className="mt-4 text-xs text-white/75">Written estimate before work begins · One-year parts and labor warranty</p></Reveal>
        </div>
      </section>

      {related.length > 0 && <section className="section surface surface-cream bg-cream"><div className="container-x"><Reveal><p className="eyebrow">Related plumbing services</p><h2 className="h2">More ways we can help</h2></Reveal><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/${item.slug}/`} className="group flex items-center justify-between gap-3 rounded-card border border-line bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"><span><span className="block font-heading font-bold text-primary-dark">{item.title}</span><span className="mt-1 block text-sm text-fg-soft">{item.summary}</span></span><ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden /></Link>)}<Link href="/plumbing-financing/" className="group flex items-center justify-between gap-3 rounded-card border border-primary/20 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"><span><span className="block font-heading font-bold text-primary-dark">Plumbing Financing</span><span className="mt-1 block text-sm text-fg-soft">Explore monthly payment options for qualifying projects.</span></span><ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden /></Link></div></div></section>}

      <section id="service-request" className="section bg-white"><div className="container-x grid gap-8 lg:grid-cols-[.8fr_1fr] lg:items-start"><Reveal><p className="eyebrow">Request a callback</p><h2 className="h2">Let’s take a look at your plumbing.</h2><p className="lead">Share a few details and our team can follow up about your {service.title.toLowerCase()} request.</p><p className="mt-4 text-sm text-fg-soft">For urgent plumbing emergencies, call <a href={SITE.phoneHref} className="font-bold text-primary underline">{SITE.phone}</a>.</p></Reveal><div className="rounded-card border border-line bg-cream p-4 sm:p-6"><QuoteForm type="callback" /></div></div></section>
    </main>
  );
}
