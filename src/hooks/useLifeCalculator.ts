import { useState } from 'react'
import { calculateRemainingWeeks } from '@/utils/calculateRemaningWeeks'

export function useLifeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>()
  const [gender, setGender] = useState<'male' | 'female' | undefined>()
  const [remainingWeeks, setRemainingWeeks] = useState<number | null>(null)

  const calculateWeeks = () => {
    if (dateOfBirth && gender) {
      const weeks = calculateRemainingWeeks(dateOfBirth, gender)
      setRemainingWeeks(weeks)
    }
  }

  return {
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    remainingWeeks,
    calculateWeeks,
  }
}

