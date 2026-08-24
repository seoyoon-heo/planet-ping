import { Star } from 'pixelarticons/react'

type Props = {
  rating: number
  max?: number
}

export default function Rating({ rating, max = 5 }: Props) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-[#e91e8c]' : 'text-[#f8bbd0]'}`}
        />
      ))}
    </div>
  )
}
