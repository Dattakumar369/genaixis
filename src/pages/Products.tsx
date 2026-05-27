import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Layers,
  LineChart,
  Workflow,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const learnStackHub = [
  'Scalable content platform',
  'Role-based product experience',
  'Cloud-ready learning infrastructure',
  'AI Mock Interviews',
  'Assessment and scoring systems',
  'Analytics-ready user journeys',
  'Admin and content operations',
  'Product-grade UX architecture',
  'Developer community ecosystem',
];

const roadmap = [
  {
    icon: Bot,
    title: 'AI Automation Systems',
    desc: 'Workflow automation and AI integrations that help teams reduce repetitive work and improve operational speed.',
  },
  {
    icon: Layers,
    title: 'Scalable SaaS Platforms',
    desc: 'Cloud-based product platforms designed for long-term growth, strong architecture, and modern user experiences.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Intelligence',
    desc: 'Dashboards, reporting systems, and data products that turn business activity into useful decisions.',
  },
  {
    icon: Cloud,
    title: 'Cloud Product Ecosystems',
    desc: 'Connected digital ecosystems powered by cloud infrastructure, automation, and reliable product engineering.',
  },
];

export default function Products() {
  return (
    <main>
      <SEO
        title="Products | GENAIXIS LABS PRIVATE LIMITED"
        description="Explore GENAIXIS products and platform capabilities including LearnStackHub, AI systems, SaaS platforms, automation systems, and future product ecosystems."
        keywords="GENAIXIS products, LearnStackHub, LSH, learnstackhub, AI mock interview system, SaaS products, AI automation products, genaxis products"
        canonicalPath="/products"
      />
      <PageHero
        tag="Our Products"
        title="Product ecosystems for"
        titleHighlight="the AI era"
        description="GENAIXIS builds owned products and reusable platform systems across AI, automation, SaaS, cloud infrastructure, and intelligent digital experiences."
      >
        <Link
          to="/contact"
          className="premium-button inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
        >
          Discuss a Product
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="relative py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="premium-card rounded-2xl border border-emerald-300/15 bg-[#07101a] p-7"
          >
            <a
              href="https://www.learnstackhub.com/"
              target="_blank"
              rel="noreferrer"
              className="lsh-logo-float flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5"
              aria-label="Visit LearnStackHub"
            >
              <img src="/learnstackhub-logo.png" alt="LearnStackHub logo" className="h-full w-full object-contain" />
            </a>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Core Product</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">LearnStackHub</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              A product proof point from GENAIXIS: a full digital platform combining content workflows, AI-powered assessment, user journeys, analytics, and scalable product architecture.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {learnStackHub.map((feature) => (
                <div key={feature} className="premium-card flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-3 transition hover:-translate-y-0.5 hover:border-emerald-300/20">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                  <span className="text-sm text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="https://www.learnstackhub.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-5 py-3 text-sm font-bold text-emerald-200 transition hover:border-emerald-200/50 hover:bg-emerald-300/15 hover:text-white"
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
              <Brain className="h-7 w-7 text-cyan-300" />
              <h3 className="mt-5 text-2xl font-bold text-white">AI Mock Interview System</h3>
              <p className="mt-4 leading-7 text-slate-400">
                A working AI module with resume intelligence, generated question flows, answer scoring, camera-enabled practice sessions, and performance analytics.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Code2, label: 'Resume intelligence workflows' },
                { icon: Bot, label: 'AI-led interaction flows' },
                { icon: Workflow, label: 'Automated scoring pipelines' },
                { icon: LineChart, label: 'Performance analytics layer' },
              ].map((item) => (
                <div key={item.label} className="premium-card rounded-2xl border border-white/8 bg-white/[0.035] p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/20">
                  <item.icon className="h-5 w-5 text-cyan-300" />
                  <p className="mt-4 text-sm font-semibold text-slate-200">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#07101a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Product Roadmap</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
              More GENAIXIS products are being shaped across AI, SaaS, and cloud ecosystems.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="premium-card rounded-2xl border border-white/8 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/22"
              >
                <item.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Have a product idea that needs AI-first engineering?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            GENAIXIS can help shape intelligent products, scalable platforms, and automation systems from idea to launch.
          </p>
          <Link
            to="/contact"
            className="premium-button mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
