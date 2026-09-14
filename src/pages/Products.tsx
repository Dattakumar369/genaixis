import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Code2,
  Globe2,
  Leaf,
  Users,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';
import { genaixisProducts, type GenaixisProduct } from '../data/genaixisProducts';

const productIcons: Record<string, typeof Brain> = {
  learnstackhub: Brain,
  peopleaixis: Users,
  bhuvedam: Leaf,
  ctrlaltsolve: Code2,
};

function ProductCard({ product, index }: { product: GenaixisProduct; index: number }) {
  const Icon = productIcons[product.id] ?? Globe2;
  const isLive = product.status === 'Live';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="premium-card flex h-full flex-col rounded-2xl border border-white/8 bg-glass p-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <a
          href={product.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${product.name}`}
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-brand-500/20 bg-white p-1.5"
        >
          {product.logo ? (
            <img src={product.logo} alt={`${product.name} logo`} className="h-full w-full object-contain" />
          ) : (
            <Icon className="h-7 w-7 text-brand-300" />
          )}
        </a>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            isLive
              ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300'
              : 'border-amber-400/25 bg-amber-500/10 text-amber-200'
          }`}
        >
          {product.status}
        </span>
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">{product.category}</p>
      <h2 className="mt-3 text-2xl font-bold text-white">{product.name}</h2>
      <p className="mt-1 text-sm font-medium text-brand-200">{product.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{product.description}</p>

      <div className="mt-5 grid gap-2">
        {product.features.slice(0, 4).map((feature) => (
          <div key={feature} className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <a
        href={product.url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-300 transition hover:text-white"
      >
        Visit {product.name}
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.article>
  );
}

export default function Products() {
  const learnStackHub = genaixisProducts.find((product) => product.id === 'learnstackhub');

  return (
    <main>
      <SEO
        title="Products | GENAIXIS LABS PRIVATE LIMITED"
        description="Explore GENAIXIS products: LearnStackHub, PeopleAixis, BHUVEDAM, and Ctrl Alt Solve — spanning developer learning, HR tech, AgriTech, and engineering knowledge."
        keywords="GENAIXIS products, LearnStackHub, PeopleAixis, BHUVEDAM, Ctrl Alt Solve, learnstackhub, peopleaixis, bhuvedam, ctrlaltsolve, AI products, SaaS platforms"
        canonicalPath="/products/"
      />
      <PageHero
        tag="Our Products"
        title="Product ecosystems for"
        titleHighlight="the AI era"
        description="GENAIXIS builds owned products across developer learning, HR technology, agriculture AI, and real-world engineering knowledge — each designed with product-grade UX and scalable architecture."
      >
        <Link
          to="/contact/"
          className="premium-button inline-flex items-center gap-2 rounded-xl bg-brand-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
        >
          Discuss a Product
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="relative border-b border-white/8 py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Product Portfolio"
            title="GENAIXIS"
            titleHighlight="projects & products"
            description="Four owned platforms — live products and active initiatives — built under GENAIXIS LABS PRIVATE LIMITED."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {genaixisProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {learnStackHub && (
        <section className="relative py-20">
          <div className="absolute inset-0 grid-pattern opacity-25" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="premium-card rounded-2xl border border-brand-500/15 bg-genaixis-panel p-7"
            >
              <a
                href={learnStackHub.url}
                target="_blank"
                rel="noreferrer"
                className="lsh-logo-float flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5"
                aria-label="Visit LearnStackHub"
              >
                <img src={learnStackHub.logo} alt="LearnStackHub logo" className="h-full w-full object-contain" />
              </a>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Flagship Product</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">{learnStackHub.name}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">{learnStackHub.description}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {learnStackHub.features.map((feature) => (
                  <div
                    key={feature}
                    className="premium-card flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-3 transition hover:-translate-y-0.5 hover:border-brand-500/20"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                    <span className="text-sm text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href={learnStackHub.url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-brand-500/25 bg-brand-600/10 px-5 py-3 text-sm font-bold text-brand-200 transition hover:border-brand-400/50 hover:bg-brand-600/15 hover:text-white"
              >
                Visit LearnStackHub
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="space-y-5"
            >
              <div className="premium-card rounded-2xl border border-white/10 bg-white/[0.035] p-7">
                <Brain className="h-7 w-7 text-brand-300" />
                <h3 className="mt-5 text-2xl font-bold text-white">AI Mock Interview System</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  A working AI module inside LearnStackHub with resume intelligence, generated question flows, answer
                  scoring, camera-enabled practice sessions, and performance analytics.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  'Resume intelligence workflows',
                  'AI-led interaction flows',
                  'Automated scoring pipelines',
                  'Performance analytics layer',
                ].map((label) => (
                  <div
                    key={label}
                    className="premium-card rounded-2xl border border-white/8 bg-white/[0.035] p-5 transition hover:-translate-y-0.5 hover:border-brand-300/20"
                  >
                    <CheckCircle2 className="h-5 w-5 text-brand-300" />
                    <p className="mt-4 text-sm font-semibold text-slate-200">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Have a product idea that needs AI-first engineering?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            GENAIXIS can help shape intelligent products, scalable platforms, and automation systems from idea to launch.
          </p>
          <Link
            to="/contact/"
            className="premium-button mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-300 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
