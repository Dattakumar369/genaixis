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
  Lightbulb,
  Network,
  Rocket,
  Target,
  Users,
  Workflow,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const foundations = [
  'Artificial Intelligence',
  'Product Engineering',
  'Cloud Technologies',
  'Automation',
  'Scalable Software Architecture',
  'Modern User Experiences',
];

const goals = [
  {
    icon: Brain,
    title: 'Build Innovative AI Products',
    desc: 'Create intelligent software products powered by modern AI technologies.',
  },
  {
    icon: Cloud,
    title: 'Develop Scalable SaaS Platforms',
    desc: 'Build cloud-ready platforms that can scale globally.',
  },
  {
    icon: Target,
    title: 'Create Real Digital Impact',
    desc: 'Develop products that solve practical business and user problems.',
  },
  {
    icon: Lightbulb,
    title: 'Support Future Technologies',
    desc: 'Work on AI, automation, cloud systems, analytics, and next-generation software solutions.',
  },
  {
    icon: Network,
    title: 'Build Strong Technology Ecosystems',
    desc: 'Create platforms that connect innovation, business operations, software, and intelligent systems.',
  },
];

const learnStackHubFeatures = [
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

const leaders = [
  {
    name: 'Dattakumar Pandi',
    role: 'Co-Founder & Director',
    icon: Brain,
    initials: 'DP',
    accent: 'from-cyan-300/25 via-blue-400/10 to-emerald-300/20',
    bio: 'Dattakumar Pandi is a software engineer, product builder, and technology entrepreneur with strong expertise in Java, Spring Boot, scalable backend systems, AI-driven platforms, cloud technologies, and full-stack product development.',
    extra: 'He is the founder of LearnStackHub, a developer-focused digital product that combines platform engineering, AI-powered assessment, content workflows, and user experience systems.',
    focus: 'With a strong focus on innovation and product development, he aims to build intelligent software platforms and scalable technology ecosystems that create real digital impact.',
    areas: [
      'Artificial Intelligence',
      'Product Engineering',
      'Java & Spring Boot',
      'SaaS Platforms',
      'Cloud & DevOps',
      'Scalable System Design',
      'AI-Based Interview Platforms',
      'Enterprise Software Solutions',
    ],
  },
  {
    name: 'Satya Saibaba',
    role: 'Co-Founder & Director',
    icon: Users,
    initials: 'SS',
    accent: 'from-emerald-300/25 via-cyan-400/10 to-amber-300/20',
    bio: 'Satya Saibaba is a technology enthusiast and business-focused leader passionate about innovation, digital transformation, and building scalable technology solutions.',
    extra: 'As Co-Founder and Director of GENAIXIS, he plays an important role in strategic growth, product vision, operational planning, and business development initiatives.',
    focus: 'His focus is on helping build a strong technology-driven organization capable of delivering modern digital products, scalable platforms, and future-ready software ecosystems.',
    areas: [
      'Business Strategy',
      'Product Vision',
      'Technology Operations',
      'Digital Innovation',
      'Organizational Growth',
      'Future Technology Ecosystems',
    ],
  },
];

const leadershipVision = [
  'AI-first digital products',
  'Scalable SaaS ecosystems',
  'Intelligent automation systems',
  'High-performance software platforms',
  'Future-ready technology solutions',
];

export default function About() {
  return (
    <main>
      <SEO
        title="About | GENAIXIS LABS PRIVATE LIMITED"
        description="GENAIXIS LABS PRIVATE LIMITED is a futuristic AI and software innovation company building products, SaaS platforms, enterprise systems, and AI-powered digital ecosystems."
        keywords="about GENAIXIS, GENAIXIS LABS PRIVATE LIMITED, genaxis company, gen aixis company, gen axis AI company, LearnStackHub founder, AI software innovation company"
        canonicalPath="/about"
      />
      <PageHero
        tag="About GENAIXIS"
        title="A product-focused AI"
        titleHighlight="innovation company"
        description="GENAIXIS LABS PRIVATE LIMITED was founded to build intelligent digital products, scalable platforms, and software ecosystems that solve real-world problems."
      />

      <section className="relative py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Company Story</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
              We are not just a service-based company.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
              <p>
                GENAIXIS LABS PRIVATE LIMITED is a futuristic AI and software innovation company founded with the vision of building intelligent digital products that solve real-world problems.
              </p>
              <p>
                The company was started with a strong belief that the future belongs to businesses and platforms powered by artificial intelligence, automation, scalable cloud systems, and modern software engineering.
              </p>
              <p>
                At GENAIXIS, we focus on developing our own products, SaaS platforms, enterprise systems, AI-powered applications, and digital ecosystems designed for the next generation of technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-2xl border border-white/10 bg-[#07101a] p-7"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10">
              <Rocket className="h-6 w-6 text-cyan-300" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white">Why We Started GENAIXIS</h3>
            <p className="mt-4 leading-7 text-slate-400">
              GENAIXIS was created to build meaningful technology products that can create real impact. Our goal is to build long-term platforms, intelligent systems, and product ecosystems.
            </p>
            <p className="mt-4 leading-7 text-slate-400">
                We aim to build intelligent products, scalable platforms, and futuristic software ecosystems that help businesses, teams, developers, and organizations grow using technology and AI.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {foundations.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-3">
                  <CheckCircle2 className="h-4 w-4 flex-none text-cyan-300" />
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#07101a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Our Goals"
            title="Building long-term"
            titleHighlight="digital solutions"
            description="Innovation sits at the center of how GENAIXIS thinks, designs, and engineers."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.55 }}
                className="rounded-2xl border border-white/8 bg-white/[0.035] p-5"
              >
                <goal.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-5 text-base font-semibold leading-6 text-white">{goal.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.04] p-7"
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
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Our Product</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white">LearnStackHub</h2>
            <p className="mt-5 leading-7 text-slate-300">
              LearnStackHub is one of the core products developed under GENAIXIS. It demonstrates our ability to build a complete digital platform with AI workflows, product-grade UX, content operations, analytics, and scalable cloud-ready architecture.
            </p>
            <div className="mt-7 grid gap-3">
              {learnStackHubFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-3">
                  <CheckCircle2 className="h-4 w-4 flex-none text-emerald-300" />
                  <span className="text-sm text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="https://www.learnstackhub.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 hover:text-white"
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
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">AI Mock Interview System</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
              A working AI product module with intelligent scoring and guided user flows.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              One of the major features of LearnStackHub is an AI-powered interaction system. It shows how GENAIXIS builds intelligent flows that understand user input, generate structured experiences, score responses, and deliver useful analytics.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Code2, text: 'Upload or paste resumes' },
                { icon: Brain, text: 'Get AI-generated interview questions' },
                { icon: Bot, text: 'Practice interviews with camera interaction' },
                { icon: Layers, text: 'Receive answer-based scoring' },
                { icon: Workflow, text: 'Review final performance analysis' },
              ].map((item) => (
                <div key={item.text} className="rounded-xl border border-white/8 bg-white/[0.035] p-4">
                  <item.icon className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-sm font-medium text-slate-200">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#07101a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Leadership Team"
            title="Meet Our"
            titleHighlight="Directors"
            description="GENAIXIS LABS PRIVATE LIMITED is led by passionate technology-driven founders focused on innovation, product engineering, artificial intelligence, and future-ready digital solutions."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {leaders.map((leader, index) => (
              <motion.article
                key={leader.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
              >
                <div className={`relative min-h-72 bg-gradient-to-br ${leader.accent} p-6`}>
                  <div className="absolute inset-0 grid-pattern opacity-25" />
                  <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
                  <div className="relative flex h-60 items-end justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#06111d]/80 shadow-2xl shadow-cyan-950/25">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.22),transparent_45%)]" />
                    <div className="absolute bottom-0 h-44 w-44 rounded-full bg-cyan-300/10 blur-2xl" />
                    <div className="relative mb-8 flex h-32 w-32 items-center justify-center rounded-full border border-cyan-200/25 bg-[#0b1b2b] text-4xl font-bold text-cyan-100 shadow-2xl shadow-cyan-500/20">
                      {leader.initials}
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{leader.role}</p>
                  </div>

                  <div className="mt-7 space-y-4 leading-7 text-slate-300">
                    <p>{leader.bio}</p>
                    <p>{leader.extra}</p>
                    <p>{leader.focus}</p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {leader.areas.map((area) => (
                      <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] p-7">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">Our Leadership Vision</p>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Building with innovation, user experience, and long-term product value.
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {leadershipVision.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] p-3">
                    <CheckCircle2 className="h-4 w-4 flex-none text-amber-200" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#07101a] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Future Vision</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            GENAIXIS is being built for the future of intelligent technology.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We believe the future of technology belongs to AI-powered systems, intelligent automation, scalable digital platforms, and product-focused innovation.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            Build With Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
