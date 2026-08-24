import { Pencil } from 'pixelarticons/react'
import { useUserStore } from '../../store/userStore'
import { tw } from '../../styles/theme'

export default function Profile() {
  const { profile, updateBio } = useUserStore()

  const handleEditBio = () => {
    const newBio = prompt('소개글을 수정해요', profile.bio.join('\n'))
    if (newBio !== null) updateBio(newBio.split('\n').filter(Boolean))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className={`${tw.card} px-6 py-7 text-center`}>
        <div className="w-20 h-20 bg-[#e91e8c] rounded-full flex items-center justify-center text-4xl mx-auto mb-3.5">
          🌸
        </div>
        <h2 className="text-xl font-bold text-[#c2185b] mb-1">{profile.name}</h2>
        <p className={tw.mutedText}>{profile.title}</p>
        <p className={tw.mutedText}>{profile.status}</p>
      </div>

      <section className={tw.section}>
        <h3 className={`${tw.sectionTitle} mb-3`}>✦ 소개글 ✦</h3>
        {profile.bio.map((line, i) => (
          <p key={i} className={tw.bodyText}>{line}</p>
        ))}
        <button
          onClick={handleEditBio}
          className="mt-3.5 flex items-center gap-1.5 bg-[#fce4ec] border-2 border-[#f48fb1] rounded-xl px-5 py-2 text-sm font-bold text-[#e91e8c] cursor-pointer hover:bg-[#f8bbd0] transition-colors font-['Nanum_Gothic']"
        >
          <Pencil className="w-4 h-4" />
          수정하기
        </button>
      </section>
    </div>
  )
}
