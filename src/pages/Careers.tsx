import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Lightbulb,
  Mail,
  MapPin,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react';
import SEO from '../components/SEO';

const highlights = [
  { value: 'AI', label: 'First product culture' },
  { value: '01', label: 'Hyderabad innovation hub' },
  { value: '360', label: 'Product ownership mindset' },
];

const roleFamilies = [
  {
    icon: Code2,
    title: 'Software Engineering',
    desc: 'Full-stack, backend, frontend, cloud, APIs, and scalable platform development.',
    skills: ['React', 'Java', 'Spring Boot', 'Cloud', 'APIs'],
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'LLM workflows, AI assistants, scoring engines, workflow automation, and intelligent product modules.',
    skills: ['LLM workflows', 'Automation', 'Analytics', 'AI systems'],
  },
  {
    icon: Laptop,
    title: 'Product & Design',
    desc: 'Product strategy, user experience, interface systems, client-facing flows, and launch-ready product polish.',
    skills: ['UX', 'Product thinking', 'Design systems', 'Research'],
  },
  {
    icon: Briefcase,
    title: 'Business & Operations',
    desc: 'Client success, partnerships, delivery coordination, growth systems, and operational excellence.',
    skills: ['Delivery', 'Growth', 'Client success', 'Strategy'],
  },
];

const benefits = [
  { icon: Rocket, title: 'Meaningful Product Work', desc: 'Build AI-first products, SaaS platforms, and automation systems with real business use cases.' },
  { icon: Target, title: 'Ownership From Day One', desc: 'Work in focused teams where your decisions, craft, and execution directly shape the product.' },
  { icon: Lightbulb, title: 'Learning Velocity', desc: 'Grow across AI, cloud, software architecture, product design, and modern engineering practices.' },
  { icon: ShieldCheck, title: 'Quality-Led Culture', desc: 'We value reliable systems, thoughtful UX, secure implementation, and clean engineering standards.' },
  { icon: HeartHandshake, title: 'Respectful Collaboration', desc: 'A practical, transparent environment where feedback is direct, useful, and focused on growth.' },
  { icon: Building2, title: 'Modern Work Environment', desc: 'Work from our Hyderabad base with a team building for national and global digital opportunities.' },
];

const process = [
  { icon: SearchCheck, title: 'Profile Review', desc: 'We review your portfolio, skills, experience, and alignment with our current roadmap.' },
  { icon: Code2, title: 'Practical Evaluation', desc: 'A role-focused technical discussion, design review, case task, or product thinking round.' },
  { icon: Users, title: 'Leadership Conversation', desc: 'We discuss ownership, communication, ambition, collaboration style, and long-term fit.' },
  { icon: BadgeCheck, title: 'Offer & Onboarding', desc: 'Selected candidates receive clear role scope, expectations, joining plan, and onboarding support.' },
];

const principles = [
  'Build with clarity before speed',
  'Own outcomes, not just tasks',
  'Design for users and clients',
  'Keep learning visible',
  'Raise the product standard',
];

const companyAddress =
  'Ground Floor, Krishe Emerald, Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500081';

function CareersHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-40">
      <div className="absolute inset-0 grid-pattern opacity-35" />
      <div className="hero-aurora absolute inset-0" />
      <div className="hero-particles absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Careers at GENAIXIS
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Build What the Next Generation of Businesses Will Use
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Join an AI-first product engineering company building intelligent software, automation systems, SaaS platforms, and enterprise-grade digital experiences.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:careers@genaixis.com?subject=Career%20Application%20-%20GENAIXIS"
              className="premium-button inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-white"
            >
              Send Your Profile
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#openings"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
            >
              Explore Role Areas
              <Briefcase className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative min-h-[500px] sm:min-h-[540px]"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_38%,rgba(34,211,238,0.34),rgba(16,185,129,0.14)_36%,transparent_72%)] blur-2xl" />
          <div className="premium-card absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101a]/92 shadow-2xl shadow-cyan-950/30">
            <div className="absolute inset-0 grid-pattern opacity-35" />
            <div className="absolute inset-x-8 top-10 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
          </div>

          <div className="relative p-6 sm:p-8">
            <div className="premium-card rounded-2xl border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <Workflow className="h-7 w-7 text-cyan-200" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Work With Us</p>
                  <h2 className="mt-1 text-xl font-bold text-white">Product teams for AI-era software</h2>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="premium-card rounded-2xl border border-white/8 bg-[#07111c]/85 p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/20">
                  <p className="text-3xl font-bold text-cyan-100">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="premium-card mt-5 rounded-2xl border border-white/10 bg-[#07111c]/90 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">What You Will Build</p>
              <div className="mt-5 grid gap-3">
                {[
                  'AI product modules and automation workflows',
                  'SaaS dashboards, admin systems, and platform APIs',
                  'Cloud-ready applications for business operations',
                  'Premium client-facing digital experiences',
                ].map((item) => (
                  <div key={item} className="premium-card flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-3 transition hover:-translate-y-0.5 hover:border-emerald-300/20">
                    <CheckCircle2 className="h-4 w-4 flex-none text-emerald-300" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card mt-5 flex items-start gap-3 rounded-2xl border border-amber-300/15 bg-amber-300/[0.045] p-5">
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-amber-200" />
              <div>
                <p className="text-sm font-semibold text-white">Primary location</p>
                <p className="mt-1 text-sm text-slate-400">{companyAddress}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Careers() {
  return (
    <main>
      <SEO
        title="Careers | GENAIXIS LABS PRIVATE LIMITED"
        description="Join GENAIXIS LABS PRIVATE LIMITED and build AI products, SaaS platforms, automation systems, cloud solutions, and enterprise software with an AI-first product engineering team."
        keywords="GENAIXIS careers, genaxis jobs, gen aixis careers, AI software jobs Hyderabad, SaaS engineering careers, LearnStackHub careers"
        canonicalPath="/careers/"
      />
      <CareersHero />

      <section id="openings" className="relative border-y border-white/8 bg-[#07101a] py-24">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Role Areas</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
                Find your path inside an AI-first product company.
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-400">
              We publish official vacancies when hiring opens. Until then, strong profiles can join our talent pool for upcoming engineering, product, AI, design, and operations roles.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {roleFamilies.map((role, index) => (
              <motion.article
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="premium-card group rounded-2xl border border-white/8 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.055]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
                    <role.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Talent Pool
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{role.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{role.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span key={skill} className="premium-card rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Life At GENAIXIS</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
              A workplace for builders who care about product quality.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="premium-card rounded-2xl border border-white/8 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/22"
              >
                <benefit.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-5 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/8 bg-[#07101a] py-24">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">How We Hire</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Clear steps, practical evaluation, respectful communication.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Our hiring process is designed to understand your strengths through real work conversations, not unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="premium-card rounded-2xl border border-white/8 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-300/22"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
                    <step.icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.24em] text-slate-600">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="premium-card rounded-2xl border border-white/10 bg-[#091522] p-8">
            <GraduationCap className="h-8 w-8 text-cyan-300" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">What We Value</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              The standard is simple: think clearly, build carefully, improve continuously.
            </h2>
          </div>

          <div className="grid gap-3">
            {principles.map((item) => (
              <div key={item} className="premium-card flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-emerald-300/20">
                <CheckCircle2 className="h-4 w-4 flex-none text-emerald-300" />
                <span className="text-sm font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#07101a] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Mail className="mx-auto h-9 w-9 text-cyan-300" />
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Join Our Talent Pool</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            Want to build AI-first products with GENAIXIS?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Send your resume, portfolio, GitHub, LinkedIn, or a short note about the role area you are interested in.
          </p>
          <a
            href="mailto:careers@genaixis.com?subject=Career%20Application%20-%20GENAIXIS"
            className="premium-button mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            careers@genaixis.com
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
