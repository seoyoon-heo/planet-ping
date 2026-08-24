import type { ComponentType, SVGProps } from 'react'

export type PixelIcon = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>

export type NavItem = {
  id: string
  label: string
  icon: PixelIcon
}

export type Place = {
  id: string
  name: string
  category: string
  date: string
  rating: number
  emoji: string
  memo?: string
  photoUrl?: string
}

export type Profile = {
  name: string
  title: string
  status: string
  placeCount: number
  bio: string[]
}
