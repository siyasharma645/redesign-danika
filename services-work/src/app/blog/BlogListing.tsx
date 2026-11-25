'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import { blogCategories, blogPosts } from '@/data/blog-posts';

const imagePaths: Record<string, string> = {
  plumberUnderSink: '/images/stock/plumber-under-sink.webp',
  electricianWiring: '/images/stock/electrician-wiring-wall.webp',
  electricalPanel: '/images/stock/electrician-breaker-panel.webp',
};

export default function BlogListing() {
  const [category, setCategory] = useState('All Articles');
  const [query, setQuery] = useState('');
  const [shown, setShown] = useState(12);
  const filtered = useMemo(() => blogPosts.filter((post) => {
    const categoryMatch = category === 'All Articles' || post.category === category;
    const searchMatch = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(query.toLowerCase().trim());
    return categoryMatch && searchMatch;
  }), [category, query]);
  const featured = blogPosts[0];
  const featuredHref = `https://danikaplumbing.com/${featured.slug}/`;

  return (
    <>
      <section className="container-x pb-10 pt-9 sm:pb-14 sm:pt-12">
        <div className="grid gap-6 overflow-hidden rounded-[1.6rem] bg-primary-dark text-white md:grid-cols-[1.08fr_.92fr]">
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.16em] text-white/65">Danika home guides</p>
            <h2 className="display max-w-2xl text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">Good answers for the things that go wrong at home.</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">Clear, practical plumbing advice from the questions homeowners ask us every day, with local knowledge from Everett and the surrounding communities.</p>
            <a href="#articles" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-primary-dark transition hover:bg-cream">Explore articles <ArrowRight className="h-4 w-4" /></a>
          </div>
          <a href={featuredHref} className="group relative min-h-[250px] sm:min-h-[330px]" aria-label={`Read featured article: ${featured.title}`}>
            <Image src={imagePaths[featured.image]} alt="Plumbing service work in a residential home" fill priority className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 45vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <span className="rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-semibold text-white">Featured guide</span>
              <h3 className="display mt-3 max-w-xl text-2xl leading-tight text-white sm:text-3xl">{featured.title}</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">Read article <ArrowRight className="h-4 w-4" /></span>
            </div>
          </a>
        </div>
      </section>

      <section id="articles" className="container-x pb-16 sm:pb-20">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xs font-bold uppercase tracking-[.14em] text-primary">Browse the library</p><h2 className="display mt-2 text-3xl text-fg sm:text-4xl">Tips, answers & how-to guides</h2></div>
          <div className="relative w-full md:max-w-xs"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-soft"/><input value={query} onChange={(e) => { setQuery(e.target.value); setShown(12); }} placeholder="Search plumbing topics" className="w-full rounded-xl border border-line bg-white py-3 pl-10 pr-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" aria-label="Search blog articles"/></div>
        </div>
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filter articles by category">
          {blogCategories.map((item) => <button key={item} onClick={() => { setCategory(item); setShown(12); }} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${category === item ? 'border-primary bg-primary text-white' : 'border-line bg-white text-fg hover:border-primary/50 hover:text-primary'}`} aria-pressed={category === item}>{item}</button>)}
        </div>
        <div className="mb-4 flex items-center justify-between text-sm text-fg-soft"><span>{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}</span><span className="inline-flex items-center gap-1.5"><SlidersHorizontal className="h-4 w-4"/> Showing {Math.min(shown, filtered.length)}</span></div>
        {filtered.length === 0 ? <div className="rounded-2xl border border-line bg-cream p-8 text-center"><h3 className="display text-2xl">No matching guides found</h3><p className="mt-2 text-sm text-fg-soft">Try a different search or category.</p><button onClick={() => { setQuery(''); setCategory('All Articles'); }} className="mt-4 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">Clear filters</button></div> :
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, shown).map((post, index) => <article key={post.slug} className="group overflow-hidden rounded-2xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(35,25,20,.08)]">
              <a href={`https://danikaplumbing.com/${post.slug}/`} className="relative block aspect-[16/10] overflow-hidden bg-cream"><Image src={imagePaths[post.image]} alt="Illustrative home plumbing service photo" fill className="object-cover transition duration-500 group-hover:scale-[1.04]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"/><span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-primary-dark">{post.category}</span></a>
              <div className="flex min-h-[225px] flex-col p-5"><h3 className="display text-xl leading-snug text-fg"><a href={`https://danikaplumbing.com/${post.slug}/`} className="underline-offset-4 group-hover:text-primary group-hover:underline">{post.title}</a></h3><p className="mt-3 line-clamp-3 text-sm leading-relaxed text-fg-soft">{post.excerpt}</p><a href={`https://danikaplumbing.com/${post.slug}/`} className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></a></div>
            </article>)}
          </div>}
        {filtered.length > shown && <div className="mt-9 flex justify-center"><button onClick={() => setShown((n) => n + 12)} className="rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-white">Load more articles <span className="ml-1">({filtered.length - shown} remaining)</span></button></div>}
      </section>
    </>
  );
}
