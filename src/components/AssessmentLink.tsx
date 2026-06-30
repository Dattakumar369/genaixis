import { ReactNode, useEffect, useState } from 'react';
import { Lock } from 'lucide-react';
import {
  assessmentUrl,
  getAssessmentOpenTimeLabel,
  getAssessmentOpensAt,
  isAssessmentLinkOpen,
} from '../utils/assessmentAccess';

interface AssessmentLinkProps {
  children: ReactNode;
  className?: string;
  showLockIcon?: boolean;
}

export function useAssessmentAccess() {
  const [isOpen, setIsOpen] = useState(isAssessmentLinkOpen());

  useEffect(() => {
    if (isOpen) return;

    const delay = getAssessmentOpensAt().getTime() - Date.now();
    if (delay <= 0) {
      setIsOpen(true);
      return;
    }

    const timer = window.setTimeout(() => setIsOpen(true), delay);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  return isOpen;
}

export default function AssessmentLink({ children, className = '', showLockIcon = true }: AssessmentLinkProps) {
  const isOpen = useAssessmentAccess();
  const opensAtLabel = getAssessmentOpenTimeLabel();

  if (!isOpen) {
    return (
      <span
        aria-disabled="true"
        title={`Opens ${opensAtLabel}`}
        className={`inline-flex cursor-not-allowed items-center justify-center gap-2 text-center leading-snug opacity-60 ${className}`}
      >
        {showLockIcon && <Lock className="h-4 w-4" />}
        {children}
      </span>
    );
  }

  return (
    <a href={assessmentUrl} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
