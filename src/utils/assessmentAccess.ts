export const assessmentUrl = 'https://www.learnstackhub.com/assessment';

const ASSESSMENT_TIMEZONE = 'Asia/Kolkata';
const ASSESSMENT_DATE = '2026-07-01'; // 01-07-2026
const ASSESSMENT_OPEN_HOUR = 11;
const ASSESSMENT_OPEN_MINUTE = 0;

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

export function getAssessmentOpensAt(): Date {
  const hour = String(ASSESSMENT_OPEN_HOUR).padStart(2, '0');
  const minute = String(ASSESSMENT_OPEN_MINUTE).padStart(2, '0');

  return new Date(`${ASSESSMENT_DATE}T${hour}:${minute}:00+05:30`);
}

export function isAssessmentLinkOpen(): boolean {
  return Date.now() >= getAssessmentOpensAt().getTime();
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

export function getAssessmentOpenTimeLabel(): string {
  return getAssessmentOpensAt().toLocaleTimeString('en-IN', {
    timeZone: ASSESSMENT_TIMEZONE,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }) + ' IST';
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
