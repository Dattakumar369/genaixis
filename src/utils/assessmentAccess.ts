export const assessmentUrl = 'https://www.learnstackhub.com/assessment';

const ASSESSMENT_TIMEZONE = 'Asia/Kolkata';
const ASSESSMENT_DATE = '2026-07-01'; // 01-07-2026
const ASSESSMENT_OPEN_HOUR = 11;
const ASSESSMENT_OPEN_MINUTE = 0;
const ASSESSMENT_CLOSE_HOUR = 15;
const ASSESSMENT_CLOSE_MINUTE = 0;

function getDatePartsInIst(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: ASSESSMENT_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);

  const [year, month, day] = parts.split('-').map(Number);
  return { year, month, day };
}

function getAssessmentInstant(hour: number, minute: number): Date {
  const hourStr = String(hour).padStart(2, '0');
  const minuteStr = String(minute).padStart(2, '0');

  return new Date(`${ASSESSMENT_DATE}T${hourStr}:${minuteStr}:00+05:30`);
}

export function getAssessmentOpensAt(): Date {
  return getAssessmentInstant(ASSESSMENT_OPEN_HOUR, ASSESSMENT_OPEN_MINUTE);
}

export function getAssessmentClosesAt(): Date {
  return getAssessmentInstant(ASSESSMENT_CLOSE_HOUR, ASSESSMENT_CLOSE_MINUTE);
}

export type AssessmentStatus = 'upcoming' | 'open' | 'closed';

export function getAssessmentStatus(now = Date.now()): AssessmentStatus {
  if (now < getAssessmentOpensAt().getTime()) return 'upcoming';
  if (now < getAssessmentClosesAt().getTime()) return 'open';
  return 'closed';
}

export function isAssessmentLinkOpen(): boolean {
  return getAssessmentStatus() === 'open';
}

export function getAssessmentOpensAtLabel(): string {
  return getAssessmentOpensAt().toLocaleString('en-IN', {
    timeZone: ASSESSMENT_TIMEZONE,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function getAssessmentDateLabel(): string {
  return getAssessmentOpensAt().toLocaleDateString('en-IN', {
    timeZone: ASSESSMENT_TIMEZONE,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatAssessmentTime(date: Date): string {
  return date.toLocaleTimeString('en-IN', {
    timeZone: ASSESSMENT_TIMEZONE,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function getAssessmentOpenTimeLabel(): string {
  return `${formatAssessmentTime(getAssessmentOpensAt())} IST`;
}

export function getAssessmentCloseTimeLabel(): string {
  return `${formatAssessmentTime(getAssessmentClosesAt())} IST`;
}

export function getAssessmentWindowLabel(): string {
  return `${formatAssessmentTime(getAssessmentOpensAt())} – ${formatAssessmentTime(getAssessmentClosesAt())} IST`;
}

export function getAssessmentDayLabel(): string {
  const { year, month, day } = getDatePartsInIst();
  const opensOn = getDatePartsInIst(getAssessmentOpensAt());

  if (opensOn.year === year && opensOn.month === month && opensOn.day === day) {
    return 'Today';
  }

  if (
    opensOn.year < year ||
    (opensOn.year === year && opensOn.month < month) ||
    (opensOn.year === year && opensOn.month === month && opensOn.day < day)
  ) {
    return 'Completed';
  }

  return 'Upcoming';
}
