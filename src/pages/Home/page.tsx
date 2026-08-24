import { MapPin, Star, Label } from 'pixelarticons/react'
import DiaryCard from '../../components/diary/DiaryCard'
import { useDiaryStore } from '../../store/diaryStore'
import { useUserStore } from '../../store/userStore'
import { tw } from '../../styles/theme'
import type { StatItem } from './types'

export default function Home() {
  const { places } = useDiaryStore()
  const { profile } = useUserStore()

  const totalRating = places.reduce((sum, p) => sum + p.rating, 0)
  const avgRating    = places.length ? (totalRating / places.length).toFixed(1) : '0'
  const categoryCount = new Set(places.map(p => p.category)).size

  const stats: StatItem[] = [
    { icon: MapPin, value: places.length,  label: '저장한 장소' },
    { icon: Star,   value: avgRating,      label: '평균 별점' },
    { icon: Label,  value: categoryCount,  label: '카테고리' },
  ]

  return (
    <div className="flex flex-col gap-4">
      <section className={tw.section}>
        <h2 className={`${tw.sectionTitle} mb-3.5`}>✦ 소개글 ✦</h2>
        {profile.bio.map((line, i) => (
          <p key={i} className={tw.bodyText}>{line}</p>
        ))}
      </section>

      <div className="grid grid-cols-3 gap-3">
        {stats.map(s => (
          <div key={s.label} className={`${tw.dashedCard} p-5 flex flex-col items-center gap-1.5 text-center`}>
            <s.icon className="w-7 h-7 text-[#e91e8c]" />
            <span className="text-3xl font-bold text-[#e91e8c]">{s.value}</span>
            <span className={tw.mutedText}>{s.label}</span>
          </div>
        ))}
      </div>

      <section className={tw.section}>
        <h2 className={`${tw.sectionTitle} mb-4`}>✦ 최근 기록 ✦</h2>
        <ul>
          {places.map(place => (
            <DiaryCard key={place.id} place={place} />
          ))}
        </ul>
      </section>
    </div>
  )
}
