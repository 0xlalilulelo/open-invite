'use client'

import * as React from 'react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'

import { cn } from '../../lib/utils'
import { Button, buttonVariants } from './button'

interface CalendarProps {
  className?: string
  selected?: Date
  onSelect?: (date: Date | undefined) => void
}

function Calendar({
  className,
  selected,
  onSelect,
  ...props
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())
  
  const today = new Date()
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  
  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()
  
  const days = []
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null)
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const handleDayClick = (day: number) => {
    if (onSelect) {
      const selectedDate = new Date(year, month, day)
      onSelect(selectedDate)
    }
  }

  const isSelected = (day: number) => {
    if (!selected) return false
    return (
      selected.getDate() === day &&
      selected.getMonth() === month &&
      selected.getFullYear() === year
    )
  }

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    )
  }

  return (
    <div className={cn('bg-background p-3', className)} {...props}>
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={handlePrevMonth}>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <div className="font-semibold">
          {currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
        </div>
        <Button variant="ghost" onClick={handleNextMonth}>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="text-center">
            {day && (
              <Button
                variant={isSelected(day) ? 'default' : 'ghost'}
                size="sm"
                className={cn(
                  'h-8 w-8 p-0',
                  isToday(day) && !isSelected(day) && 'bg-accent text-accent-foreground',
                  isSelected(day) && 'bg-primary text-primary-foreground'
                )}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export { Calendar }