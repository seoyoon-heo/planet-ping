import { Home, Map, Calendar, User } from 'pixelarticons/react'
import type { NavItem, Place, Profile } from './types'

export const profile: Profile = {
  name: 'mimi',
  title: '핑크탐험가 🌸',
  status: '오늘도 탐방 중 🗺️',
  placeCount: 3,
  bio: [
    '설레는 장소들을 기록하자~ 🌷',
    '좋아하는 곳에서 좋아하는 시간을 보내기!',
  ],
}

export const navItems: NavItem[] = [
  { id: 'home',     label: '홈',     icon: Home },
  { id: 'calendar', label: '지도',   icon: Map },
  { id: 'places',   label: '캘린더', icon: Calendar },
  { id: 'profile',  label: '프로필', icon: User },
]

export const recentPlaces: Place[] = [
  {
    id: '1',
    name: '성수 카페 오르에르',
    category: '카페',
    date: '2024-11-15',
    rating: 5,
    emoji: '☕',
    memo: '분위기 너무 좋았어요. 라떼가 맛있었음!',
  },
  {
    id: '2',
    name: '북촌 한옥마을',
    category: '관광지',
    date: '2024-10-08',
    rating: 4,
    emoji: '🏯',
  },
  {
    id: '3',
    name: '연남동 경의선숲길',
    category: '산책',
    date: '2024-09-22',
    rating: 5,
    emoji: '🌿',
  },
]
