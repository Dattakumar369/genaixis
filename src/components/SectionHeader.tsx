import { motion } from 'framer-motion';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  titleHighlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${centered ? 'text-center' : ''}`}
    >
      {tag && (
        <div className={`flex mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
        {titleHighlight ? (
          <>
            {title}{' '}
            <span className="text-gradient">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className={`mt-4 text-slate-400 text-base sm:text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
