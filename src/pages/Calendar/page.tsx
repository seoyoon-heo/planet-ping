import CalendarWidget from '../../components/place/Calendar'
import DiaryCard from '../../components/diary/DiaryCard'
import { useDiaryStore } from '../../store/diaryStore'
import { tw } from '../../styles/theme'

export default function CalendarPage() {
  const { places, selectedDate, setSelectedDate } = useDiaryStore()

  const markedDates = places.map(p => p.date)
  const filtered    = selectedDate ? places.filter(p => p.date === selectedDate) : []

  return (
    <div className="flex flex-col gap-4">
      <CalendarWidget markedDates={markedDates} onDateSelect={setSelectedDate} />

      {selectedDate && (
        <section className={tw.section}>
          <h2 className={`${tw.sectionTitle} mb-3`}>{selectedDate} 기록</h2>
          {filtered.length === 0 ? (
            <p className={`${tw.metaText} text-center py-5`}>이 날의 기록이 없어요 🌸</p>
          ) : (
            <ul>
              {filtered.map(p => <DiaryCard key={p.id} place={p} />)}
            </ul>
          )}
        </section>
      )}
    </div>
  )
}
