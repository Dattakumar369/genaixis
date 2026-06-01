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
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/25 bg-white/[0.055] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-400 to-brand-700" />
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold font-display leading-tight text-white sm:text-4xl lg:text-5xl">
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
        <p className={`mt-4 text-sm leading-7 text-slate-400 sm:text-lg sm:leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
