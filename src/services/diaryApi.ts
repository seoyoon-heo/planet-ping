import type { Place } from '../types'

export type DiaryEntry = {
  id: string
  placeId: string
  place: Place
  memo: string
  photoUrl?: string
  createdAt: string
}

const BASE = '/api/diaries'

export async function fetchDiaries(): Promise<DiaryEntry[]> {
  const res = await fetch(BASE)
  if (!res.ok) throw new Error('다이어리 목록을 불러오지 못했어요')
  return res.json()
}

export async function fetchDiary(id: string): Promise<DiaryEntry> {
  const res = await fetch(`${BASE}/${id}`)
  if (!res.ok) throw new Error('다이어리를 불러오지 못했어요')
  return res.json()
}

export async function createDiary(
  entry: Omit<DiaryEntry, 'id' | 'createdAt'>
): Promise<DiaryEntry> {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
  })
  if (!res.ok) throw new Error('다이어리를 저장하지 못했어요')
  return res.json()
}

export async function updateDiary(
  id: string,
  patch: Partial<Pick<DiaryEntry, 'memo' | 'photoUrl'>>
): Promise<DiaryEntry> {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch),
  })
  if (!res.ok) throw new Error('다이어리를 수정하지 못했어요')
  return res.json()
}
