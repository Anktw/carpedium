import { differenceInWeeks } from 'date-fns'

// Life expectancy data from World Bank (2021)
const lifeExpectancy = {
  male: 70.8,
  female: 75.6,
}

export function calculateRemainingWeeks(dateOfBirth: Date, gender: 'male' | 'female'): number {
  const today = new Date()
  const ageInWeeks = differenceInWeeks(today, dateOfBirth)
  const lifeExpectancyInWeeks = lifeExpectancy[gender] * 52
  const remainingWeeks = Math.max(0, lifeExpectancyInWeeks - ageInWeeks)
  return Math.round(remainingWeeks)
}

