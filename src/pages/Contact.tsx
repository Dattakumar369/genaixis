import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Building2, CheckCircle2, Headphones, Mail,
  MapPin, MessageSquare, Send, Sparkles, UserRound,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import SEO from '../components/SEO';

const contacts = [
  { icon: Building2, label: 'Business Inquiries', email: 'contact@genaixis.com' },
  { icon: UserRound, label: 'Careers', email: 'careers@genaixis.com' },
  { icon: Headphones, label: 'Support', email: 'support@genaixis.com' },
];

const companyAddress =
  'Ground Floor, Krishe Emerald, Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500081';

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <SEO
        title="Contact | GENAIXIS LABS PRIVATE LIMITED"
        description="Contact GENAIXIS LABS PRIVATE LIMITED in Kondapur, Hyderabad for AI product development, SaaS platforms, automation systems, cloud solutions, enterprise software, careers, and support."
        keywords="contact GENAIXIS, GENAIXIS Hyderabad, genaxis contact, gen aixis contact, gen axis software company, AI product development Hyderabad, LearnStackHub contact"
        canonicalPath="/contact/"
      />
      <PageHero
        tag="Contact"
        title="Let us build your"
        titleHighlight="AI advantage"
        description="Tell us what you want to create. We partner with startups and enterprises to design, build, and scale intelligent software products."
      />

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <SectionHeader
                tag="Reach Us"
                title="Start with a"
                titleHighlight="conversation"
                description="Whether you need a new AI product, an enterprise platform, hiring support, or product engineering capacity, our team is ready to help."
                centered={false}
              />

              <div className="space-y-4">
                {contacts.map((contact) => (
                  <a
                    key={contact.email}
                    href={`mailto:${contact.email}`}
                    className="premium-card group flex items-center gap-4 rounded-2xl bg-glass p-5 border border-white/5 hover:-translate-y-0.5 hover:border-brand-500/25 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20 group-hover:bg-brand-500/20">
                      <contact.icon className="h-5 w-5 text-brand-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{contact.label}</p>
                      <p className="font-semibold text-slate-100 group-hover:text-brand-300">{contact.email}</p>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="premium-card group flex items-start gap-4 rounded-2xl bg-glass p-5 border border-white/5 hover:-translate-y-0.5 hover:border-brand-500/25 transition-all duration-300"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20 group-hover:bg-brand-500/20">
                  <MapPin className="h-5 w-5 text-brand-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Office Location</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-slate-200 group-hover:text-brand-100">
                    {companyAddress}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                    Open in Google Maps
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>

              <div className="premium-card animated-gradient-surface rounded-2xl bg-gradient-to-br from-brand-500/10 via-blue-500/10 to-brand-700/10 border border-brand-500/20 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Sparkles className="h-5 w-5 text-brand-300" />
                </div>
                <h2 className="text-xl font-bold font-display text-white">Company inquiry</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Planning an AI product, SaaS platform, automation system, or cloud transformation? Share the goal and we will help shape the next step.
                </p>
                <a
                  href="mailto:contact@genaixis.com?subject=Company Inquiry"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
                >
                  Send company inquiry
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.aside>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="premium-card rounded-2xl bg-glass border border-white/5 p-6 sm:p-8 shadow-2xl shadow-brand-950/20"
            >
              <div className="mb-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-blue-600 shadow-lg shadow-brand-500/20">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-display text-white">Tell us about your project</h2>
                <p className="mt-2 text-sm text-slate-400">
                  This demo form captures your details on the page. You can also email us directly at contact@genaixis.com.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
                  <input
                    required
                    name="name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400/60 focus:bg-white/8"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400/60 focus:bg-white/8"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Subject</span>
                <input
                  required
                  name="subject"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400/60 focus:bg-white/8"
                  placeholder="AI product development inquiry"
                />
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-400/60 focus:bg-white/8"
                  placeholder="Tell us about the product, platform, automation, or software system you want to build."
                />
              </label>

              <button
                type="submit"
                className="premium-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 hover:from-brand-400 hover:to-blue-500 transition-all duration-300"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>

              {submitted && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-brand-500/20 bg-brand-500/10 p-4 text-sm text-brand-200">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <span>Thanks. Your inquiry is ready for the GENAIXIS team to review.</span>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#03050e] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mail className="mx-auto mb-5 h-9 w-9 text-brand-400" />
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Build your next intelligent product with GENAIXIS.
            </h2>
            <p className="mt-4 text-slate-400">
              From strategic discovery to cloud deployment, we bring the product, engineering, and AI expertise to move fast with confidence.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
