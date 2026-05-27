import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Cloud,
  Cpu,
  Layers,
  LineChart,
  Lock,
  Network,
  Shield,
  Workflow,
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const capabilities = [
  {
    icon: Brain,
    title: 'AI Product Development',
    desc: 'AI-powered platforms, assistants, automation tools, and intelligent product experiences designed for real users.',
  },
  {
    icon: Layers,
    title: 'SaaS Platform Engineering',
    desc: 'Cloud-ready SaaS systems with clean architecture, role-based flows, dashboards, and scalable product foundations.',
  },
  {
    icon: Shield,
    title: 'Enterprise Software',
    desc: 'Secure, maintainable, high-performance applications for business workflows, operations, and long-term growth.',
  },
  {
    icon: Workflow,
    title: 'Automation Systems',
    desc: 'AI integrations and workflow automation that reduce manual effort and make business operations faster.',
  },
];

const standards = [
  { icon: Cpu, label: 'AI-first architecture' },
  { icon: Cloud, label: 'Cloud-native platforms' },
  { icon: Lock, label: 'Security-conscious systems' },
  { icon: LineChart, label: 'Measurable product value' },
];

const proofPoints = [
  { value: '01', label: 'Discovery to launch', desc: 'From product strategy and UX to engineering, cloud deployment, and measurable release planning.' },
  { value: 'AI', label: 'Intelligence layer', desc: 'LLM workflows, automation, scoring, recommendations, and decision support built into real products.' },
  { value: 'SaaS', label: 'Platform depth', desc: 'Role-based systems, dashboards, APIs, analytics, admin tools, and scalable foundations.' },
];

const process = [
  {
    step: '01',
    title: 'Understand the product',
    desc: 'We study the business goal, users, workflow, and market expectation before engineering the solution.',
  },
  {
    step: '02',
    title: 'Design the system',
    desc: 'We shape the architecture, user experience, data flow, integrations, and AI layer with clarity.',
  },
  {
    step: '03',
    title: 'Build for scale',
    desc: 'We develop modern full-stack products with clean backend systems, automation, cloud readiness, and performance.',
  },
];

const reasons = [
  'AI-first product mindset',
  'Modern scalable architecture',
  'Premium client-facing user experience',
  'Cloud-ready delivery and deployment',
  'High-performance enterprise systems',
  'Product strategy with engineering depth',
];

const stack = ['AI Systems', 'SaaS', 'Cloud', 'Automation', 'Analytics', 'DevOps', 'Full Stack', 'Product Design'];

function ProductShowcase() {
  const orbitItems = [
    { icon: Brain, title: 'AI Products', className: 'left-4 top-16 sm:left-8' },
    { icon: Layers, title: 'SaaS Platforms', className: 'right-4 top-20 sm:right-8' },
    { icon: Workflow, title: 'Automation', className: 'left-5 bottom-40 sm:left-10' },
    { icon: LineChart, title: 'Analytics', className: 'right-5 bottom-40 sm:right-10' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="scene-3d relative min-h-[390px] sm:min-h-[500px] lg:min-h-[560px]"
    >
      <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.42),rgba(16,185,129,0.18)_34%,rgba(8,15,28,0)_72%)] blur-2xl" />
      <div className="premium-card absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#071321]/88 shadow-2xl shadow-cyan-950/40">
        <div className="absolute inset-0 grid-pattern opacity-35" />
        <div className="absolute inset-x-10 top-10 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
        <div className="data-stream absolute left-8 top-24 h-px w-72 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
        <div className="data-stream absolute bottom-28 right-8 h-px w-80 bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="absolute left-1/2 top-[42%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]">
        <div className="neural-orb absolute inset-0 rounded-full opacity-95" />
        <div className="orbit-3d-center absolute left-1/2 top-1/2 h-[240px] w-[240px] rounded-full border border-cyan-200/22 sm:h-[310px] sm:w-[310px] lg:h-[350px] lg:w-[350px]">
          <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-cyan-100 shadow-lg shadow-cyan-200/60" />
        </div>
        <div className="orbit-3d-center absolute left-1/2 top-1/2 h-[190px] w-[190px] rounded-full border border-emerald-200/18 sm:h-[245px] sm:w-[245px] lg:h-[270px] lg:w-[270px]" style={{ animationDirection: 'reverse', animationDuration: '18s' }}>
          <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-100 shadow-lg shadow-emerald-200/50" />
        </div>
      </div>

      <div className="platform-3d absolute left-1/2 top-[43%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 sm:h-52 sm:w-52 lg:h-60 lg:w-60">
        <div className="platform-layer layer-back" />
        <div className="platform-layer layer-mid">
          <div className="absolute left-9 top-9 h-2 w-28 rounded-full bg-cyan-100/60" />
          <div className="absolute right-9 top-[4.25rem] h-2 w-20 rounded-full bg-emerald-200/45" />
          <div className="absolute bottom-9 left-9 right-9 h-14 rounded-2xl border border-white/14 bg-white/[0.055]" />
        </div>
        <div className="platform-layer layer-front">
          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-100/40 bg-cyan-200/15 shadow-2xl shadow-cyan-300/30">
            <Brain className="h-10 w-10 text-cyan-50" />
          </div>
        </div>
      </div>

      {orbitItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35 + index * 0.1, duration: 0.55 }}
          className={`hero-chip-3d absolute ${item.className} hidden w-36 rounded-2xl border border-white/10 bg-white/[0.065] p-3.5 shadow-2xl backdrop-blur-md sm:block lg:w-40 lg:p-4`}
        >
          <item.icon className="h-5 w-5 text-cyan-200" />
          <p className="mt-3 text-sm font-bold text-white">{item.title}</p>
        </motion.div>
      ))}

      <div className="absolute bottom-5 left-1/2 z-20 w-[88%] -translate-x-1/2 rounded-2xl border border-cyan-200/15 bg-[#07111c]/95 p-4 shadow-2xl shadow-cyan-950/25 backdrop-blur sm:bottom-7 sm:w-[78%] sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">AI Product Engineering</p>
            <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">Intelligent platforms, automation systems, and SaaS products</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-200 shadow-lg shadow-emerald-200/50" />
            Live AI Pulse
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-40">
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="hero-aurora absolute inset-0" />
      <div className="hero-particles absolute inset-0 opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="reveal-soft max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            AI Product Engineering for Ambitious Businesses
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            GENAIXIS designs and builds premium AI-powered software, SaaS platforms, automation systems, and enterprise-grade digital products for companies that want to move faster.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Strategy, product design, cloud engineering, and intelligent automation come together here so clients get more than code: they get a launch-ready technology partner.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Link
              to="/products"
              className="premium-button inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-white"
            >
              View Capabilities
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <ProductShowcase />
      </div>
    </section>
  );
}

function StandardsStrip() {
  return (
    <section className="border-y border-white/8 bg-[#07101a] py-8">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {standards.map((item) => (
          <div key={item.label} className="premium-card flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/20">
            <item.icon className="h-5 w-5 text-cyan-300" />
            <span className="text-sm font-semibold text-slate-200">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Company Standard</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            A product company mindset for serious digital platforms.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <p>
            At GENAIXIS, technology is not only about solving problems. It is about creating opportunities, accelerating innovation, and shaping products that can grow with the future.
          </p>
          <p>
            Our mission is to build powerful AI-first products and scalable software systems that help businesses, teams, and organizations launch faster and operate smarter.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="relative bg-[#07101a] py-24">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="What We Do"
          title="AI-first systems,"
          titleHighlight="built to scale"
          description="A focused engineering practice for digital products, SaaS platforms, enterprise software, and intelligent automation."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="premium-card group rounded-2xl border border-white/8 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.055]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
                <item.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientProof() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="premium-card overflow-hidden rounded-2xl border border-white/10 bg-[#091522]"
        >
          <div className="animated-gradient-surface relative min-h-64 border-b border-white/10 bg-gradient-to-br from-cyan-300/16 via-slate-900 to-emerald-300/10 p-6">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Client Delivery Model</p>
                <h3 className="mt-4 max-w-sm text-3xl font-bold leading-tight text-white">Strategy, design, engineering, and AI in one build cycle.</h3>
              </div>
              <div className="hidden h-20 w-20 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 sm:flex">
                <Workflow className="h-10 w-10 text-cyan-100" />
              </div>
            </div>
            <div className="relative mt-9 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div key={item.label} className="premium-card rounded-xl border border-white/10 bg-[#07111c]/80 p-4 transition hover:-translate-y-0.5 hover:border-cyan-200/25">
                  <p className="text-2xl font-bold text-cyan-100">{item.value}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 p-6">
            {proofPoints.map((item) => (
              <div key={item.desc} className="premium-card flex gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-emerald-300/20">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                <div>
                  <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Built For Clients</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            A premium technology partner for AI-first business products.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Your website should feel like a company clients can hire for serious product engineering. GENAIXIS now leads with business outcomes: faster operations, smarter platforms, better user experiences, and software that can scale.
          </p>
          <p className="mt-4 leading-7 text-slate-400">
            LearnStackHub remains a strong owned product proof point, but the homepage frames it as evidence of platform capability rather than the center of the brand.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-white"
          >
            Explore technology capabilities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-y border-white/8 bg-[#07101a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Engineering Culture"
          title="How we build"
          titleHighlight="future-ready products"
          description="A clear product engineering process gives clients confidence before a single line of code is written."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {process.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="premium-card rounded-2xl border border-white/8 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-cyan-300/22"
            >
              <p className="text-sm font-bold text-cyan-300">{item.step}</p>
              <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionAndWhy() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="premium-card rounded-2xl border border-white/10 bg-white/[0.035] p-8 transition hover:-translate-y-1 hover:border-amber-200/20 sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-300/10">
            <Network className="h-6 w-6 text-amber-300" />
          </div>
          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Our Vision</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Building impactful products that transform business operations and digital experiences.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            To become a globally recognized AI and software innovation company building impactful products through intelligent technology.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Why GENAIXIS</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Built like a product company.</h2>
          <div className="mt-7 space-y-3">
            {reasons.map((reason) => (
              <div key={reason} className="premium-card flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/20">
                <Cpu className="h-5 w-5 text-cyan-300" />
                <span className="text-sm font-medium text-slate-200">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStrip() {
  return (
    <section className="border-y border-white/8 bg-[#07101a] py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 sm:px-6 lg:px-8">
        {stack.map((item) => (
          <span key={item} className="premium-card rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Build with GENAIXIS</p>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
          Ready to create an AI-first product or scalable software platform?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          Let us shape your idea into a modern digital product with strong architecture, thoughtful design, and intelligent automation.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="premium-button inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/[0.08]"
          >
            Learn About GENAIXIS
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <SEO
        title="GENAIXIS LABS PRIVATE LIMITED | AI Product Engineering Company"
        description="GENAIXIS builds AI-first products, SaaS platforms, intelligent automation systems, and enterprise software for ambitious businesses."
        keywords="genaixis, genaxis, gen aixis, gen axis, genai software company, genx technology company, lsh, learnstackhub, AI product engineering, SaaS development company"
        canonicalPath="/"
      />
      <Hero />
      <StandardsStrip />
      <Intro />
      <WhatWeDo />
      <ClientProof />
      <Process />
      <VisionAndWhy />
      <TechStrip />
      <ContactCTA />
    </main>
  );
}
