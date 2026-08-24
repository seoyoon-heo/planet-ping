import { create } from 'zustand'
import type { Place } from '../types'
import { recentPlaces } from '../data'

type DiaryState = {
  places: Place[]
  selectedPlaceId: string | null
  selectedDate: string | null
}

type DiaryActions = {
  addPlace: (place: Place) => void
  removePlace: (id: string) => void
  selectPlace: (id: string | null) => void
  setSelectedDate: (date: string | null) => void
}

type DiaryStore = DiaryState & DiaryActions

export const useDiaryStore = create<DiaryStore>((set) => ({
  // state
  places: recentPlaces,
  selectedPlaceId: null,
  selectedDate: null,

  // actions
  addPlace: (place) =>
    set((s) => ({ places: [place, ...s.places] })),

  removePlace: (id) =>
    set((s) => ({ places: s.places.filter((p) => p.id !== id) })),

  selectPlace: (id) =>
    set({ selectedPlaceId: id }),

  setSelectedDate: (date) =>
    set({ selectedDate: date }),
}))
