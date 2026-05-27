import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers,
  Network,
  Shield,
  Workflow,
  Zap,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const systems = [
  {
    icon: Brain,
    name: 'AI Engine',
    desc: 'The intelligence layer for assistants, recommendations, workflow automation, scoring, and adaptive product behavior.',
    modules: ['LLM workflows', 'Data intelligence', 'AI actions', 'Scoring systems'],
  },
  {
    icon: Layers,
    name: 'Platform Core',
    desc: 'Reusable product foundation for SaaS dashboards, user roles, content systems, analytics, and admin operations.',
    modules: ['Auth & roles', 'Dashboards', 'Admin systems', 'Product APIs'],
  },
  {
    icon: Workflow,
    name: 'Automation OS',
    desc: 'Workflow engines that connect tasks, data, alerts, AI actions, business rules, and internal operations.',
    modules: ['Workflow builder', 'AI triggers', 'Task pipelines', 'Integrations'],
  },
  {
    icon: Cloud,
    name: 'Cloud Layer',
    desc: 'Infrastructure patterns for deployment, observability, scale, storage, APIs, and production reliability.',
    modules: ['Deployment', 'Monitoring', 'Storage', 'Scale'],
  },
];

const architecture = [
  { icon: Code2, label: 'Product UI', detail: 'React interfaces and product flows' },
  { icon: Cpu, label: 'Application Core', detail: 'Business logic and platform modules' },
  { icon: Database, label: 'Data Layer', detail: 'Structured data, analytics, and storage' },
  { icon: Shield, label: 'Trust Layer', detail: 'Security, roles, quality, and reliability' },
];

const roadmap = [
  'Owned SaaS and platform ecosystems',
  'AI assessment and scoring engine',
  'SaaS platform foundation',
  'Automation workflow systems',
  'Analytics and intelligence dashboards',
  'Client-ready cloud ecosystems',
];

function TechnologyVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className="scene-3d relative min-h-[500px]"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.32),rgba(16,185,129,0.13)_36%,transparent_72%)] blur-2xl" />
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101a]/90 shadow-2xl shadow-cyan-950/30">
        <div className="absolute inset-0 grid-pattern opacity-35" />
        <div className="hero-particles absolute inset-0 opacity-50" />
        <div className="data-stream absolute left-0 top-24 h-px w-96 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
        <div className="data-stream absolute bottom-24 right-0 h-px w-96 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="absolute left-1/2 top-[45%] h-72 w-72 -translate-x-1/2 -translate-y-1/2">
        <div className="neural-orb absolute inset-0 rounded-full opacity-75" />
        <div className="platform-3d absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2">
          <div className="platform-layer layer-back" />
          <div className="platform-layer layer-mid" />
          <div className="platform-layer layer-front">
            <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-cyan-100/30 bg-cyan-200/15">
              <Network className="h-8 w-8 text-cyan-100" />
            </div>
          </div>
        </div>
      </div>

      {architecture.map((item, index) => {
        const positions = ['left-7 top-16', 'right-7 top-20', 'left-8 bottom-24', 'right-8 bottom-24'];
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25 + index * 0.1, duration: 0.5 }}
            className={`hero-chip-3d absolute ${positions[index]} hidden w-44 rounded-2xl border border-white/10 bg-white/[0.065] p-4 shadow-2xl backdrop-blur-md sm:block`}
          >
            <item.icon className="h-5 w-5 text-cyan-200" />
            <p className="mt-3 text-sm font-bold text-white">{item.label}</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">{item.detail}</p>
          </motion.div>
        );
      })}

      <div className="absolute bottom-8 left-1/2 w-[82%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#07111c]/90 p-5 backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">GENAIXIS Technology Stack</p>
        <p className="mt-1 text-sm text-slate-300">AI engine, platform core, automation OS, cloud layer</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <main>
      <SEO
        title="Technology | GENAIXIS LABS PRIVATE LIMITED"
        description="Explore the GENAIXIS technology system: AI engine, platform core, automation OS, cloud layer, product architecture, and future software ecosystems."
        keywords="GENAIXIS technology, AI engine, SaaS platform development, automation OS, cloud software development, enterprise software services, genai technology, genx software"
        canonicalPath="/services"
      />

      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-40">
        <div className="absolute inset-0 grid-pattern opacity-35" />
        <div className="hero-aurora absolute inset-0" />
        <div className="hero-particles absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              <Zap className="h-4 w-4" />
              Technology behind GENAIXIS products
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
              A product technology system for AI-first software.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              GENAIXIS is built around reusable AI engines, platform foundations, automation workflows, cloud infrastructure, and product experience systems that power our digital products.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-white"
              >
                View Capabilities
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                Company Vision
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <TechnologyVisual />
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#07101a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Technology System"
            title="Core product"
            titleHighlight="building blocks"
            description="These are the internal technology pillars behind GENAIXIS products, platforms, and AI-first software ecosystems."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {systems.map((system, index) => (
              <motion.article
                key={system.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                className="group overflow-hidden rounded-2xl border border-white/8 bg-white/[0.035] transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.055]"
              >
                <div className="relative min-h-36 bg-gradient-to-br from-cyan-300/18 via-blue-300/8 to-emerald-300/12 p-6">
                  <div className="absolute inset-0 grid-pattern opacity-25" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#07111c]/70">
                    <system.icon className="h-6 w-6 text-cyan-100" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white">{system.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{system.desc}</p>
                  <div className="mt-5 grid gap-2">
                    {system.modules.map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.035] px-3 py-2">
                        <CheckCircle2 className="h-4 w-4 flex-none text-cyan-300" />
                        <span className="text-xs font-medium text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Product Roadmap</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Built around owned products and long-term technology ecosystems.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              GENAIXIS is shaping long-term product ecosystems across AI automation, SaaS platforms, analytics, intelligent cloud systems, and enterprise-grade digital operations.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {roadmap.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4">
                <CheckCircle2 className="h-4 w-4 flex-none text-emerald-300" />
                <span className="text-sm font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#07101a] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">GENAIXIS Labs</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            Product engineering, AI systems, and platform technology under one company.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Explore our products and technology direction to understand what GENAIXIS is building for the AI era.
          </p>
          <Link
            to="/products"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            View Product Ecosystem
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
