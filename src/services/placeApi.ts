import type { Place } from '../types'

const BASE = '/api/places'

export async function fetchPlaces(): Promise<Place[]> {
  const res = await fetch(BASE)
  if (!res.ok) throw new Error('장소 목록을 불러오지 못했어요')
  return res.json()
}

export async function fetchPlace(id: string): Promise<Place> {
  const res = await fetch(`${BASE}/${id}`)
  if (!res.ok) throw new Error('장소를 불러오지 못했어요')
  return res.json()
}

export async function createPlace(place: Omit<Place, 'id'>): Promise<Place> {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(place),
  })
  if (!res.ok) throw new Error('장소를 저장하지 못했어요')
  return res.json()
}

export async function deletePlace(id: string): Promise<void> {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('장소를 삭제하지 못했어요')
}
