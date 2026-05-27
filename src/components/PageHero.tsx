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
    <section className="relative overflow-hidden border-b border-white/8 pt-32 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-5"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {tag}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight"
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
          className="mt-5 text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
