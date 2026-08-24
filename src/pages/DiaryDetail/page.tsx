import Rating from '../../components/ui/Rating'
import PhotoUploader from '../../components/diary/PhotoUploader'
import { useDiaryStore } from '../../store/diaryStore'
import { tw } from '../../styles/theme'

export default function DiaryDetail() {
  const { selectedPlaceId, places } = useDiaryStore()
  const place = places.find(p => p.id === selectedPlaceId)

  if (!place) {
    return (
      <div className={`${tw.section} text-center py-12 text-[#f48fb1]`}>
        장소를 선택해주세요 🌸
      </div>
    )
  }

  return (
    <div className={`${tw.card} p-6 flex flex-col gap-5`}>
      <div className="flex items-center gap-4">
        <span className="text-4xl">{place.emoji}</span>
        <div>
          <h2 className={`text-xl ${tw.nameText} mb-1`}>{place.name}</h2>
          <p className={tw.metaText}>{place.category} · {place.date}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className={`text-sm font-bold text-[#e91e8c]`}>별점</span>
        <Rating rating={place.rating} />
      </div>

      <PhotoUploader />

      {place.memo && (
        <div>
          <p className={`text-sm font-bold text-[#e91e8c] mb-2`}>메모</p>
          <p className="text-sm text-[#ad1457] leading-relaxed bg-[#fdf2f6] rounded-xl p-3.5">
            {place.memo}
          </p>
        </div>
      )}
    </div>
  )
}
