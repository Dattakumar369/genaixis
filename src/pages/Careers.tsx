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
  ClipboardCheck,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';
import AssessmentLink, { useAssessmentAccess } from '../components/AssessmentLink';
import {
  getAssessmentDateLabel,
  getAssessmentDayLabel,
  getAssessmentOpenTimeLabel,
  getAssessmentCloseTimeLabel,
  getAssessmentStatus,
  getAssessmentWindowLabel,
} from '../utils/assessmentAccess';

const talentEmail = 'talent-acquisition@genaixis.com';
const applyMailto = `mailto:${talentEmail}?subject=Java%20Developer%20Application%20-%20GENAIXIS`;

const companyStats = (windowLabel: string, dayLabel: string, status: ReturnType<typeof getAssessmentStatus>) => [
  {
    value: windowLabel.replace(' IST', ''),
    label:
      status === 'open'
        ? 'Virtual assessment is live today'
        : status === 'closed'
          ? 'Virtual assessment window ended'
          : `Virtual assessment opens ${dayLabel.toLowerCase()}`,
  },
  { value: 'Hyderabad', label: 'Work location' },
];

const openRoles = [
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
  const assessmentDateLabel = getAssessmentDateLabel();
  const assessmentDayLabel = getAssessmentDayLabel();
  const assessmentOpenTimeLabel = getAssessmentOpenTimeLabel();
  const assessmentCloseTimeLabel = getAssessmentCloseTimeLabel();
  const assessmentWindowLabel = getAssessmentWindowLabel();
  const assessmentStatus = getAssessmentStatus();
  const assessmentIsOpen = useAssessmentAccess();

  return (
    <main>
      <SEO
        title="Careers | GENAIXIS LABS PRIVATE LIMITED"
        description="GENAIXIS careers in Hyderabad. Explore our workplace, hiring process, and future role areas across AI, product, and engineering."
        keywords="GENAIXIS careers, genaxis jobs, gen aixis careers, AI software jobs Hyderabad, SaaS engineering careers, LearnStackHub careers"
        canonicalPath="/careers/"
      />

      <PageHero
        tag="Careers"
        title="Build the next generation of"
        titleHighlight="intelligent products"
        description="Build with GENAIXIS in Hyderabad. We are not actively hiring for the Java Developer role right now, but you can explore our culture, process, and future opportunities."
      >
        <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <a
            href="#open-roles"
            className="premium-button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:from-brand-400 hover:to-violet-400 sm:w-auto sm:px-6"
          >
            View Roles
            <Briefcase className="h-4 w-4 flex-shrink-0" />
          </a>
          <AssessmentLink
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-600 sm:w-auto sm:px-6"
          >
            <span className="text-center">Start Virtual L1 Assessment</span>
            <ArrowRight className="h-4 w-4 flex-shrink-0" />
          </AssessmentLink>
          <a
            href="#l1-assessment"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-600 sm:w-auto sm:px-6"
          >
            Assessment Details
            <ClipboardCheck className="h-4 w-4 flex-shrink-0" />
          </a>
        </div>
      </PageHero>

      <section id="l1-assessment" className="relative border-b border-white/8 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-brand-400/30 bg-gradient-to-r from-brand-500/15 via-violet-500/10 to-brand-600/15 p-4 shadow-lg shadow-brand-500/10 sm:p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-400/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-500/20 sm:h-14 sm:w-14">
                  <ClipboardCheck className="h-6 w-6 text-brand-300 sm:h-7 sm:w-7" />
                </div>
                <div className="min-w-0">
                  <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 sm:text-xs">
                    Virtual Assessment — {assessmentDayLabel}
                  </span>
                  <h2 className="mt-3 text-xl font-bold leading-snug text-white sm:text-3xl">
                    Virtual L1 Assessment
                  </h2>
                  <p className="mt-1 text-sm font-medium text-brand-200 sm:text-base">{assessmentDateLabel}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    {assessmentStatus === 'open'
                      ? `GENAIXIS is conducting the virtual L1 assessment today, ${assessmentDateLabel}. Use the official LearnStackHub link below to participate before ${assessmentCloseTimeLabel}.`
                      : assessmentStatus === 'closed'
                        ? `The virtual L1 assessment window on ${assessmentDateLabel} has ended. The link was available from ${assessmentWindowLabel}.`
                        : `GENAIXIS is conducting the virtual L1 assessment on ${assessmentDateLabel}. Participate online through the official LearnStackHub link, available from ${assessmentWindowLabel}.`}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
                      This is a virtual assessment — you can complete it online from any location.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
                      {assessmentStatus === 'open'
                        ? `The assessment link is live until ${assessmentCloseTimeLabel} today.`
                        : assessmentStatus === 'closed'
                          ? `The assessment link was available from ${assessmentWindowLabel} on ${assessmentDateLabel}.`
                          : `The assessment link will be available from ${assessmentWindowLabel} on ${assessmentDateLabel}.`}
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
                      Complete the assessment only through the official link shared on this page.
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
                </div>
              </div>

              <AssessmentLink
                className="premium-button inline-flex w-full flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-brand-600 to-violet-500 px-5 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:from-brand-400 hover:to-violet-400 sm:w-auto sm:px-7 sm:py-4 lg:max-w-xs"
              >
                <span className="leading-snug">
                  {assessmentStatus === 'open'
                    ? 'Go to Virtual L1 Assessment'
                    : assessmentStatus === 'closed'
                      ? `Closed ${assessmentCloseTimeLabel}`
                      : `Opens ${assessmentOpenTimeLabel}`}
                </span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </AssessmentLink>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-b border-white/8 py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:gap-4 sm:px-6 lg:px-8">
          {companyStats(assessmentWindowLabel, assessmentDayLabel, assessmentStatus).map((stat) => (
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
            tag="Roles"
            title="Java Developer"
            titleHighlight="position closed"
            description="Applications for the Java Developer role are currently closed. We may reopen this position in the future."
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
                      </div>
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
                        href={`${applyMailto}&body=Role%20Interest%3A%20${encodeURIComponent(role.title)}`}
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
                    <AssessmentLink
                      className="inline-flex h-fit w-full items-center justify-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-5 py-3 text-center text-sm font-semibold text-brand-200 transition hover:border-brand-400/40 hover:bg-brand-500/15 sm:w-auto"
                    >
                      Take Virtual L1 Assessment
                      <ClipboardCheck className="h-4 w-4 flex-shrink-0" />
                    </AssessmentLink>
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
              description="These are not open right now. We are not actively hiring for any roles at the moment."
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
            tag="Stay Connected"
            title="Interested in"
            titleHighlight="future roles?"
            description="The Java Developer position is currently closed. For general career enquiries, reach out to our talent team."
          />
          <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
            <span
              aria-disabled="true"
              title="Applications for the Java Developer role are currently closed"
              className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-slate-500 opacity-70 sm:w-auto sm:px-7"
            >
              <span>Apply Now — Closed</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </span>
            <a
              href={`mailto:${talentEmail}?subject=Future%20Career%20Enquiry%20-%20GENAIXIS`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-5 py-3.5 text-sm font-semibold text-brand-200 transition hover:border-brand-400/40 hover:bg-brand-500/15 sm:w-auto sm:px-7"
            >
              Contact Talent Team
              <Mail className="h-4 w-4 flex-shrink-0" />
            </a>
            <AssessmentLink
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-500/20 bg-brand-500/10 px-5 py-3.5 text-sm font-semibold text-brand-200 transition hover:border-brand-400/40 hover:bg-brand-500/15 sm:w-auto sm:px-7"
            >
              Virtual L1 Assessment
              <ClipboardCheck className="h-4 w-4 flex-shrink-0" />
            </AssessmentLink>
          </div>
          <p className="mx-auto mt-6 flex max-w-xl items-start justify-center gap-2 px-2 text-center text-sm text-slate-400 sm:px-0 sm:text-left">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400/70" />
            <span>{companyAddress}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
