import { Week } from './types';

export function calculateWeeks(birthDate: Date): Week[] {
  const today = new Date();
  const weeks: Week[] = [];
  const totalWeeks = 90 * 52; // 90 years * 52 weeks

  for (let i = 0; i < totalWeeks; i++) {
    const weekStart = new Date(birthDate.getTime() + i * 7 * 24 * 60 * 60 * 1000);
    weeks.push({
      id: i,
      number: i + 1,
      startDate: weekStart,
      passed: weekStart < today,
    });
  }

  return weeks;
}