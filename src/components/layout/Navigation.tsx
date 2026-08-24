import type { NavItem } from '../../types'

type Props = {
  items: NavItem[]
  activeId: string
  onSelect: (id: string) => void
}

export default function Navigation({ items, activeId, onSelect }: Props) {
  return (
    <nav className="flex flex-col gap-2 bg-white border-2 border-[#f48fb1] rounded-2xl p-3 shadow-sm">
      {items.map((item) => {
        const isActive = activeId === item.id
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={[
              'flex items-center gap-2.5 px-4 py-3 rounded-xl border-2 text-base font-bold cursor-pointer text-left transition-colors',
              isActive
                ? 'bg-gradient-to-br from-[#e91e8c] to-[#f06292] text-white border-[#c2185b]'
                : 'border-transparent text-[#c2185b] hover:bg-[#fce4ec]',
            ].join(' ')}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}
