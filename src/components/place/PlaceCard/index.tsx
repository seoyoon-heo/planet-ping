import type { Place } from '../../../types'
import Rating from '../../ui/Rating'

type Props = {
  place: Place
  onClick?: (id: string) => void
}

export default function PlaceCard({ place, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.(place.id)}
      className="bg-white border-2 border-[#f48fb1] rounded-2xl p-4 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="text-3xl mb-2.5">{place.emoji}</div>
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold text-[#ad1457]">{place.name}</p>
        <p className="text-xs text-[#e91e8c] bg-[#fce4ec] inline-block px-2 py-0.5 rounded-full w-fit">
          {place.category}
        </p>
        <p className="text-xs text-[#f48fb1]">{place.date}</p>
        <Rating rating={place.rating} />
      </div>
    </div>
  )
}
