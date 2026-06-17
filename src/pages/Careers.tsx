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
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const talentEmail = 'talent-acquisition@genaixis.com';
const talentPoolMailto = `mailto:${talentEmail}?subject=GENAIXIS%20Talent%20Pool%20-%20Future%20Opportunities`;

const companyStats = [
  { value: 'Hyderabad', label: 'Primary work location' },
  { value: 'AI-First', label: 'Product engineering culture' },
  { value: 'No Openings', label: 'Current hiring status' },
];

const futureRoleAreas = [
  {
    icon: Code2,
    title: 'Software Engineering',
    summary: 'Full-stack development, backend systems, APIs, and cloud-ready platform engineering.',
    skills: ['React', 'Java', 'Spring Boot', 'REST APIs', 'Cloud'],
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    summary: 'LLM workflows, intelligent automation, scoring systems, and AI product modules.',
    skills: ['LLM workflows', 'Automation', 'Python', 'AI systems'],
  },
  {
    icon: Laptop,
    title: 'Product & Design',
    summary: 'Product UX, interface systems, user journeys, and client-facing digital experiences.',
    skills: ['UX design', 'UI systems', 'Product thinking', 'Research'],
  },
  {
    icon: Briefcase,
    title: 'Business & Operations',
    summary: 'Delivery coordination, client success, partnerships, and operational excellence.',
    skills: ['Operations', 'Client success', 'Communication', 'Strategy'],
  },
];

const benefits = [
  { icon: Rocket, title: 'Meaningful Product Work', desc: 'Contribute to AI products, SaaS platforms, and automation systems with real business impact.' },
  { icon: Target, title: 'Ownership & Accountability', desc: 'Work in focused teams where your decisions directly shape product quality and delivery.' },
  { icon: Lightbulb, title: 'Continuous Learning', desc: 'Grow across AI, cloud architecture, software engineering, and modern product practices.' },
  { icon: ShieldCheck, title: 'Quality-Led Engineering', desc: 'We value secure systems, thoughtful UX, reliable code, and strong engineering standards.' },
  { icon: HeartHandshake, title: 'Respectful Culture', desc: 'Transparent communication, practical feedback, and collaboration built on trust.' },
  { icon: Building2, title: 'Modern Workplace', desc: 'Work from our Hyderabad office with a team building for national and global opportunities.' },
];

const hiringSteps = [
  { icon: SearchCheck, step: '01', title: 'Application Review', desc: 'We review your resume, portfolio, and alignment with the role area.' },
  { icon: Code2, step: '02', title: 'Skills Evaluation', desc: 'A practical discussion, technical round, or role-focused assessment.' },
  { icon: Users, step: '03', title: 'Team Interview', desc: 'Conversation on ownership, communication, collaboration, and long-term fit.' },
  { icon: BadgeCheck, step: '04', title: 'Offer & Onboarding', desc: 'Clear role scope, expectations, and a structured onboarding plan.' },
];

const principles = [
  'Build with clarity before speed',
  'Own outcomes, not just tasks',
  'Design for users and business value',
  'Keep learning visible in your work',
  'Raise the product standard every release',
];

const companyAddress =
  'Ground Floor, Krishe Emerald, Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500081';

export default function Careers() {
  return (
    <main>
      <SEO
        title="Careers | GENAIXIS LABS PRIVATE LIMITED"
        description="Learn about careers at GENAIXIS LABS PRIVATE LIMITED. We currently have no open positions, but you can share your profile for future opportunities in AI product engineering."
        keywords="GENAIXIS careers, genaxis jobs, gen aixis careers, AI software jobs Hyderabad, SaaS engineering careers, LearnStackHub careers"
        canonicalPath="/careers/"
      />

      <PageHero
        tag="Careers"
        title="Build the next generation of"
        titleHighlight="intelligent products"
        description="GENAIXIS LABS PRIVATE LIMITED is an AI-first product engineering company. We do not have open positions right now, but we welcome strong profiles for future opportunities."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={talentPoolMailto}
            className="premium-button inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:from-brand-400 hover:to-violet-400"
          >
            Share Your Profile
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#hiring-status"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-600"
          >
            Hiring Status
            <Briefcase className="h-4 w-4" />
          </a>
        </div>
      </PageHero>

      <section className="relative border-b border-white/8 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {companyStats.map((stat) => (
            <div
              key={stat.label}
              className="premium-card rounded-2xl border border-white/8 bg-glass p-5 text-center"
            >
              <p className="text-2xl font-bold font-display text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="hiring-status" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Hiring Status"
            title="No open positions"
            titleHighlight="at this time"
            description="GENAIXIS is not actively hiring for any roles right now. When new opportunities open, they will be published on this page."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="premium-card mx-auto max-w-3xl rounded-2xl border border-white/8 bg-glass p-8 text-center sm:p-10"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
              <Briefcase className="h-7 w-7 text-slate-500" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">Currently no job openings</h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              We are not accepting applications for active roles at the moment. If you would like to be considered for
              future opportunities, you may share your resume, portfolio, GitHub, or LinkedIn profile with our team.
            </p>
            <a
              href={talentPoolMailto}
              className="premium-button mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-6 py-3.5 text-sm font-semibold text-brand-200 transition hover:border-brand-400/40 hover:bg-brand-500/15"
            >
              Share Profile for Future Roles
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="mt-14">
            <SectionHeader
              tag="Future Areas"
              title="Role areas we may hire for"
              titleHighlight="in the future"
              description="These are not open positions. They reflect the kind of talent we may look for when hiring resumes."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {futureRoleAreas.map((area, index) => (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="premium-card rounded-2xl border border-white/8 bg-glass p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10">
                      <area.icon className="h-6 w-6 text-brand-400" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-white">{area.title}</h3>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                          Not Open
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{area.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {area.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/8 bg-genaixis-panel py-20">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Why Join Us"
            title="A workplace for people who care about"
            titleHighlight="product quality"
            description="GENAIXIS is built for engineers, designers, and operators who want to create software that businesses actually use."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="premium-card rounded-2xl border border-white/8 bg-white/[0.035] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10">
                  <benefit.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Hiring Process"
            title="Clear, respectful, and"
            titleHighlight="role-focused"
            description="Our process is designed to understand your strengths through practical conversations, not unnecessary complexity."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="premium-card relative rounded-2xl border border-white/8 bg-glass p-6"
              >
                <span className="text-xs font-bold tracking-[0.24em] text-brand-300">{step.step}</span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10">
                  <step.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/8 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="premium-card rounded-2xl border border-white/8 bg-glass p-8">
            <GraduationCap className="h-8 w-8 text-brand-400" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">What We Value</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Think clearly, build carefully, improve continuously.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              We look for people who take ownership, communicate well, and care about the quality of what they ship.
            </p>
          </div>

          <div className="grid gap-3">
            {principles.map((item) => (
              <div
                key={item}
                className="premium-card flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-4"
              >
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-400" />
                <span className="text-sm font-medium text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-100">
                <ShieldAlert className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-rose-950">Recruitment Fraud Alert</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  GENAIXIS does not ask for any payments for job offers. If you receive suspicious messages claiming to be
                  from us, contact only our official channels:
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-6">
                  <a href="mailto:hr@genaixis.com" className="inline-flex items-center gap-2 text-sm font-medium text-rose-700 hover:text-rose-900">
                    <Mail className="h-4 w-4" />
                    hr@genaixis.com
                  </a>
                  <a href="mailto:talent-acqusition@genaixis.com" className="inline-flex items-center gap-2 text-sm font-medium text-rose-700 hover:text-rose-900">
                    <Mail className="h-4 w-4" />
                    talent-acqusition@genaixis.com
                  </a>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Please report any fraudulent recruitment activity to us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-genaixis-panel py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10">
            <Sparkles className="h-7 w-7 text-brand-400" />
          </div>
          <SectionHeader
            tag="Talent Pool"
            title="Interested in working with"
            titleHighlight="GENAIXIS?"
            description="We are not hiring for open roles right now. You may still share your profile for future consideration when positions become available."
          />
          <a
            href={talentPoolMailto}
            className="premium-button inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:from-brand-400 hover:to-violet-400"
          >
            {talentEmail}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mx-auto mt-6 flex max-w-xl items-start justify-center gap-2 text-sm text-slate-400">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400/70" />
            <span>{companyAddress}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
