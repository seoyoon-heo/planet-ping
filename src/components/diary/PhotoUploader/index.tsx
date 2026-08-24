import { useRef, useState } from 'react'

type Props = {
  onUpload?: (file: File) => void
  preview?: string
}

export default function PhotoUploader({ onUpload, preview }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [localPreview, setLocalPreview] = useState<string | null>(preview ?? null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setLocalPreview(URL.createObjectURL(file))
    onUpload?.(file)
  }

  return (
    <div
      onClick={() => inputRef.current?.click()}
      className="border-2 border-dashed border-[#f48fb1] rounded-2xl cursor-pointer min-h-[140px] flex items-center justify-center bg-white hover:border-[#e91e8c] hover:bg-[#fdf2f6] transition-all overflow-hidden"
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      {localPreview ? (
        <img src={localPreview} alt="업로드된 사진" className="w-full h-[200px] object-cover" />
      ) : (
        <div className="flex flex-col items-center gap-1.5 p-6">
          <span className="text-3xl">📷</span>
          <p className="text-sm font-bold text-[#e91e8c]">사진을 추가해요</p>
          <p className="text-xs text-[#f48fb1]">클릭하면 파일을 선택할 수 있어요</p>
        </div>
      )}
    </div>
  )
}
