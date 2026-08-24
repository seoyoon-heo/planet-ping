import type { Place } from '../../../types'
import Rating from '../../ui/Rating'

type Props = {
  place: Place
  onClick?: (id: string) => void
}

export default function DiaryCard({ place, onClick }: Props) {
  return (
    <li
      onClick={() => onClick?.(place.id)}
      className="flex items-center gap-3.5 py-3.5 px-1 border-b border-[#fce4ec] last:border-b-0 cursor-pointer rounded-lg hover:bg-[#fdf2f6] transition-colors list-none"
    >
      <span className="text-2xl shrink-0">{place.emoji}</span>
      <div className="flex-1">
        <p className="text-base font-bold text-[#ad1457] mb-0.5">{place.name}</p>
        <p className="text-xs text-[#f48fb1]">{place.category} · {place.date}</p>
      </div>
      <Rating rating={place.rating} />
    </li>
  )
}
