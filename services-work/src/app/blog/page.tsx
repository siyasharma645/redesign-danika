import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import BlogListing from './BlogListing';

export const metadata: Metadata = {
  title: 'Plumbing Tips & Guides | Danika Plumbing & Electric',
  description: 'Helpful plumbing tips, troubleshooting guides and homeowner advice from Danika Plumbing & Electric in Everett and surrounding communities.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <main id="main">
      <section aria-labelledby="blog-title" className="surface surface-cream bg-cream py-8 sm:py-10">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-fg-soft"><ol className="flex items-center gap-1.5"><li><Link href="/" className="underline-offset-4 hover:underline">Home</Link></li><li aria-hidden><ChevronRight className="h-3.5 w-3.5" /></li><li aria-current="page" className="font-semibold text-primary-dark">Blog</li></ol></nav>
          <div className="max-w-3xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.14em] text-primary">Helpful homeowner resources</p><h1 id="blog-title" className="display text-4xl leading-[1.05] text-fg sm:text-5xl lg:text-6xl">Plumbing tips & guides</h1><p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-soft sm:text-lg">Practical answers for everyday plumbing questions, unexpected problems and home maintenance, written with local homeowners in mind.</p></div>
        </div>
      </section>
      <BlogListing />
    </main>
  );
}
