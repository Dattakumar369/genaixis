import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeroProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  children?: ReactNode;
}

export default function PageHero({ tag, title, titleHighlight, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pb-12 pt-24 sm:pb-20 sm:pt-32">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute left-1/2 top-16 h-32 w-[38rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500/18 via-brand-600/14 to-white/8 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/35 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/25 bg-white/[0.055] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-700" />
              {tag}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-[1.75rem] font-bold font-display leading-snug text-white sm:text-5xl sm:leading-tight lg:text-6xl"
        >
          {titleHighlight ? (
            <>
              {title}{' '}
              <span className="text-gradient">{titleHighlight}</span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-lg sm:leading-relaxed"
        >
          {description}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 w-full max-w-md mx-auto sm:max-w-none"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
