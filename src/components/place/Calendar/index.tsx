import { useState } from 'react'

type Props = {
  markedDates?: string[]
  onDateSelect?: (date: string) => void
}

const DAYS = ['일', '월', '화', '수', '목', '금', '토']

export default function Calendar({ markedDates = [], onDateSelect }: Props) {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const toDateStr = (day: number) =>
    `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`

  const prev = () => {
    if (month === 0) {
      setYear(y => y - 1)
      setMonth(11)
    } else {
      setMonth(m => m - 1)
    }
  }

  const next = () => {
    if (month === 11) {
      setYear(y => y + 1)
      setMonth(0)
    } else {
      setMonth(m => m + 1)
    }
  }

  const getCellClass = (day: number) => {
    const dateStr = toDateStr(day)
    const isMarked = markedDates.includes(dateStr)
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()

    if (isToday) return 'bg-[#e91e8c] text-white font-bold text-sm p-1.5 rounded-full cursor-pointer text-center'
    if (isMarked) return 'marked-dot bg-[#fce4ec] text-[#e91e8c] font-bold text-sm p-1.5 rounded-full cursor-pointer text-center hover:bg-[#fce4ec]'
    return 'text-sm text-[#ad1457] p-1.5 rounded-full cursor-pointer text-center hover:bg-[#fce4ec]'
  }

  return (
    <div className="bg-white border-2 border-[#f48fb1] rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prev}
          className="text-xl text-[#f48fb1] cursor-pointer px-2 py-1 rounded-lg hover:bg-[#fce4ec] border-none bg-transparent"
        >
          ‹
        </button>
        <span className="text-base font-bold text-[#e91e8c]">{year}년 {month + 1}월</span>
        <button
          onClick={next}
          className="text-xl text-[#f48fb1] cursor-pointer px-2 py-1 rounded-lg hover:bg-[#fce4ec] border-none bg-transparent"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {DAYS.map(d => (
          <div key={d} className="text-xs font-bold text-[#f48fb1] py-1">{d}</div>
        ))}
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />
          return (
            <div
              key={toDateStr(day)}
              className={getCellClass(day)}
              onClick={() => onDateSelect?.(toDateStr(day))}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}
