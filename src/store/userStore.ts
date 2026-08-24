import { create } from 'zustand'
import type { Profile } from '../types'
import { profile as initialProfile } from '../data'

type UserState = {
  profile: Profile
}

type UserActions = {
  updateBio: (bio: string[]) => void
  updateStatus: (status: string) => void
}

type UserStore = UserState & UserActions

export const useUserStore = create<UserStore>((set) => ({
  // state
  profile: initialProfile,

  // actions
  updateBio: (bio) =>
    set((s) => ({ profile: { ...s.profile, bio } })),

  updateStatus: (status) =>
    set((s) => ({ profile: { ...s.profile, status } })),
}))
