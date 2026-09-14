import { useState } from 'react';
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
  ChevronDown,
  ClipboardCheck,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';
import AssessmentLink from '../components/AssessmentLink';
import {
  getAssessmentDateLabel,
  getAssessmentOpenTimeLabel,
  getAssessmentCloseTimeLabel,
  getAssessmentStatus,
  getAssessmentWindowLabel,
} from '../utils/assessmentAccess';

const applyEmail = 'contact@genaixis.com';

function getApplyMailto(roleTitle: string) {
  return `mailto:${applyEmail}?subject=${encodeURIComponent(`${roleTitle} Application - GENAIXIS`)}&body=Role%20Interest%3A%20${encodeURIComponent(roleTitle)}`;
}

type CareerRole = {
  icon: typeof Code2;
  title: string;
  department: string;
  type: string;
  location: string;
  isOpen: boolean;
  summary: string;
  skills: string[];
  positions?: string;
  duration?: string;
  eligibility?: string;
};

const openRoles: CareerRole[] = [
  {
    icon: GraduationCap,
    title: 'Intern',
    department: 'Engineering & Product',
    type: 'Internship',
    location: 'Work From Home (WFH)',
    isOpen: true,
    positions: '5 positions',
    duration: '3 months',
    eligibility: 'Final year students are also eligible',
    summary:
      'Join GENAIXIS as an intern and work on real AI products, SaaS platforms, and software engineering tasks with mentor-led guidance in a remote-friendly setup.',
    skills: ['Software Engineering', 'Web Development', 'Java', 'Python', 'AI Basics', 'Git'],
  },
  {
    icon: Code2,
    title: 'Java Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hyderabad, India',
    isOpen: false,
    summary:
      'Build scalable backend systems, REST APIs, and enterprise-grade Java applications using Spring Boot and modern engineering practices.',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'SQL', 'Git'],
  },
];
const companyStats = [
  { value: '5', label: 'Intern positions open — WFH' },
  { value: '3 months', label: 'Internship duration' },
];

const futureRoleAreas = [
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
  const [showAssessmentDetails, setShowAssessmentDetails] = useState(false);
  const assessmentDateLabel = getAssessmentDateLabel();
  const assessmentOpenTimeLabel = getAssessmentOpenTimeLabel();
  const assessmentCloseTimeLabel = getAssessmentCloseTimeLabel();
  const assessmentWindowLabel = getAssessmentWindowLabel();
  const assessmentStatus = getAssessmentStatus();

  return (
    <main>
      <SEO
        title="Careers | GENAIXIS LABS PRIVATE LIMITED"
        description="GENAIXIS is hiring interns — 5 WFH positions, 3-month internship. Final year students are eligible. Explore open and past roles on our careers page."
        keywords="GENAIXIS careers, genaxis jobs, gen aixis careers, GENAIXIS intern hiring, software intern WFH, AI software jobs Hyderabad, SaaS engineering careers"
        canonicalPath="/careers/"
      />

      <PageHero
        tag="Careers"
        title="Build the next generation of"
        titleHighlight="intelligent products"
        description="GENAIXIS is hiring interns for a 3-month WFH program — 5 positions open. Final year students are also eligible."
      >
        <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <a
            href="#open-roles"
            className="premium-button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:from-brand-400 hover:to-violet-400 sm:w-auto sm:px-6"
          >
            View Open Roles
            <Briefcase className="h-4 w-4 flex-shrink-0" />
          </a>
        </div>
      </PageHero>

      <section className="relative border-b border-white/8 py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:gap-4 sm:px-6 lg:px-8">
          {companyStats.map((stat) => (
            <div
              key={stat.label}
              className="premium-card rounded-2xl border border-white/8 bg-glass p-4 text-center sm:p-5"
            >
              <p className="text-xl font-bold font-display text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="open-roles" className="relative overflow-hidden py-12 sm:py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Open Roles"
            title="We are hiring"
            titleHighlight="Interns"
            description="5 WFH intern positions for a 3-month program. Final year students are also eligible. The Java Developer role remains listed below but applications are currently closed."
          />

          <div className="grid gap-5">
            {openRoles.map((role, index) => (
              <motion.article
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="premium-card rounded-2xl border border-white/8 bg-glass p-4 sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex min-w-0 flex-col gap-4 sm:flex-row">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10">
                      <role.icon className="h-6 w-6 text-brand-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-white">{role.title}</h3>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                            role.isOpen
                              ? 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300'
                              : 'border-slate-200 bg-slate-50 text-slate-600'
                          }`}
                        >
                          {role.isOpen ? 'Now Hiring' : 'Closed'}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4 text-brand-400/70" />
                          {role.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-brand-400/70" />
                          {role.location}
                        </span>
                        <span>{role.type}</span>
                        {role.positions && <span>{role.positions}</span>}
                        {role.duration && <span>{role.duration}</span>}
                      </div>
                      {role.eligibility && (
                        <p className="mt-3 text-sm font-medium text-brand-200">{role.eligibility}</p>
                      )}
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                        {role.summary}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
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

                  <div className="flex w-full flex-col gap-3 lg:w-auto lg:flex-col">
                    {role.isOpen ? (
                      <a
                        href={getApplyMailto(role.title)}
                        className="premium-button inline-flex h-fit w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:from-brand-400 hover:to-violet-400 sm:w-auto"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        title="Applications for this role are currently closed"
                        className="inline-flex h-fit w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-500 opacity-70 sm:w-auto"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14">
            <SectionHeader
              tag="Future Areas"
              title="Other role areas we may hire for"
              titleHighlight="later"
              description="These are not open right now. We are currently hiring for the Intern role."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

      <section className="relative border-y border-white/8 bg-genaixis-panel py-12 sm:py-20">
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

      <section className="py-12 sm:py-20">
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

      <section className="relative border-y border-white/8 py-12 sm:py-20">
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
                  <a href="mailto:talent-acquisition@genaixis.com" className="inline-flex items-center gap-2 text-sm font-medium text-rose-700 hover:text-rose-900">
                    <Mail className="h-4 w-4" />
                    talent-acquisition@genaixis.com
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

      <section className="border-t border-white/8 bg-genaixis-panel py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10">
            <Sparkles className="h-7 w-7 text-brand-400" />
          </div>
          <SectionHeader
            tag="Apply Now"
            title="Ready to join as an"
            titleHighlight="Intern?"
            description="Send your resume and college details to our team at contact@genaixis.com. Final year students are welcome to apply for the 3-month WFH intern program."
          />
          <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <a
              href={getApplyMailto('Intern')}
              className="premium-button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:from-brand-400 hover:to-violet-400 sm:w-auto sm:px-7"
            >
              <span>Apply for Intern</span>
              <span className="hidden sm:inline">— {applyEmail}</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </a>
            <a
              href={`mailto:${applyEmail}?subject=Future%20Career%20Enquiry%20-%20GENAIXIS`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-5 py-3.5 text-sm font-semibold text-brand-200 transition hover:border-brand-400/40 hover:bg-brand-500/15 sm:w-auto sm:px-7"
            >
              Contact Us
              <Mail className="h-4 w-4 flex-shrink-0" />
            </a>
          </div>
          <p className="mx-auto mt-6 flex max-w-xl items-start justify-center gap-2 px-2 text-center text-sm text-slate-400 sm:px-0 sm:text-left">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400/70" />
            <span>{companyAddress}</span>
          </p>
        </div>
      </section>

      <section id="l1-assessment" className="border-t border-white/8 py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setShowAssessmentDetails((open) => !open)}
            aria-expanded={showAssessmentDetails}
            aria-controls="l1-assessment-details"
            className="premium-card flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-left transition hover:border-brand-400/25 hover:bg-white/[0.05] sm:p-6"
          >
            <div className="flex min-w-0 items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10">
                <ClipboardCheck className="h-5 w-5 text-brand-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-300">Past Assessment</p>
                <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">Virtual L1 Assessment Details</h2>
                <p className="mt-1 text-sm text-slate-400">
                  {assessmentDateLabel} · {assessmentWindowLabel}
                </p>
              </div>
            </div>
            <ChevronDown
              className={`h-5 w-5 flex-shrink-0 text-brand-300 transition-transform ${showAssessmentDetails ? 'rotate-180' : ''}`}
            />
          </button>

          {showAssessmentDetails && (
            <motion.div
              id="l1-assessment-details"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative mt-4 overflow-hidden rounded-2xl border border-brand-400/20 bg-gradient-to-r from-brand-500/10 via-violet-500/5 to-brand-600/10 p-5 sm:p-8"
            >
              <span className="inline-flex rounded-full border border-slate-400/30 bg-slate-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300 sm:text-xs">
                {assessmentStatus === 'closed' ? 'Assessment Completed' : 'Assessment Record'}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">Virtual L1 Assessment</h3>
              <p className="mt-1 text-sm font-medium text-brand-200 sm:text-base">{assessmentDateLabel}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                {assessmentStatus === 'closed'
                  ? `GENAIXIS conducted the virtual L1 assessment on ${assessmentDateLabel}. The assessment link was available from ${assessmentWindowLabel}. This record is kept here for reference.`
                  : assessmentStatus === 'open'
                    ? `GENAIXIS conducted the virtual L1 assessment on ${assessmentDateLabel}. The link is currently live until ${assessmentCloseTimeLabel}.`
                    : `GENAIXIS scheduled the virtual L1 assessment on ${assessmentDateLabel}, available from ${assessmentWindowLabel}.`}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
                  This was a virtual assessment completed online through LearnStackHub.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
                  {assessmentStatus === 'closed'
                    ? `The assessment window was ${assessmentWindowLabel} on ${assessmentDateLabel}.`
                    : assessmentStatus === 'open'
                      ? `The assessment link is live until ${assessmentCloseTimeLabel} today.`
                      : `The assessment link was scheduled for ${assessmentWindowLabel} on ${assessmentDateLabel}.`}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
                  Candidates were asked to complete the assessment only through the official link shared on this page.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
                  For queries, contact{' '}
                  <a href="mailto:contact@genaixis.com" className="font-medium text-brand-200 hover:text-brand-100">
                    contact@genaixis.com
                  </a>
                  .
                </li>
              </ul>
              <div className="mt-6">
                <AssessmentLink
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-500/25 bg-brand-600/10 px-5 py-3 text-sm font-semibold text-brand-200 transition hover:border-brand-400/40 hover:bg-brand-500/15 hover:text-white"
                >
                  {assessmentStatus === 'open'
                    ? 'Go to Virtual L1 Assessment'
                    : assessmentStatus === 'closed'
                      ? `Assessment Closed — ${assessmentCloseTimeLabel}`
                      : `Opens ${assessmentOpenTimeLabel}`}
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </AssessmentLink>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
