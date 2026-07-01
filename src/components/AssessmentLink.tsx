import { ReactNode, useEffect, useState } from 'react';
import { Lock } from 'lucide-react';
import {
  assessmentUrl,
  getAssessmentCloseTimeLabel,
  getAssessmentOpenTimeLabel,
  getAssessmentOpensAt,
  getAssessmentClosesAt,
  getAssessmentStatus,
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
    const sync = () => setIsOpen(isAssessmentLinkOpen());
    sync();

    const now = Date.now();
    const opensAt = getAssessmentOpensAt().getTime();
    const closesAt = getAssessmentClosesAt().getTime();
    const timers: number[] = [];

    if (now < opensAt) {
      timers.push(window.setTimeout(sync, opensAt - now));
    }
    if (now < closesAt) {
      timers.push(window.setTimeout(sync, closesAt - now));
    }

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return isOpen;
}

export default function AssessmentLink({ children, className = '', showLockIcon = true }: AssessmentLinkProps) {
  const isOpen = useAssessmentAccess();
  const status = getAssessmentStatus();
  const opensAtLabel = getAssessmentOpenTimeLabel();
  const closesAtLabel = getAssessmentCloseTimeLabel();
  const disabledTitle =
    status === 'closed' ? `Closed at ${closesAtLabel}` : `Opens ${opensAtLabel}`;

  if (!isOpen) {
    return (
      <span
        aria-disabled="true"
        title={disabledTitle}
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
