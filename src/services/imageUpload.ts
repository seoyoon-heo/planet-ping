export type UploadResult = {
  url: string
  fileName: string
}

export async function uploadImage(file: File): Promise<UploadResult> {
  const formData = new FormData()
  formData.append('image', file)

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })
  if (!res.ok) throw new Error('이미지 업로드에 실패했어요')
  return res.json()
}

export function validateImageFile(file: File): string | null {
  const MAX_MB = 5
  if (!file.type.startsWith('image/')) return '이미지 파일만 업로드할 수 있어요'
  if (file.size > MAX_MB * 1024 * 1024) return `${MAX_MB}MB 이하의 파일만 업로드할 수 있어요`
  return null
}
