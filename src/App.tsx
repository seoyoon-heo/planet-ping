import { useState } from 'react'

import { navItems } from './data'
import { useUserStore } from './store/userStore'

import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import TipBox from './components/layout/TipBox'
import Footer from './components/layout/Footer'

import Home from './pages/Home/page'
import CalendarPage from './pages/Calendar/page'
import DiaryDetail from './pages/DiaryDetail/page'
import Profile from './pages/Profile/page'

const pages: Record<string, React.ReactNode> = {
  home:     <Home />,
  calendar: <DiaryDetail />,
  places:   <CalendarPage />,
  profile:  <Profile />,
}

export default function App() {
  const [activeNav, setActiveNav] = useState('home')
  const { profile } = useUserStore()

  return (
    <div className="min-h-screen bg-[#fce4ec] p-6">
      <div className="max-w-[1100px] mx-auto">
        <Header />

        <div className="grid grid-cols-[260px_1fr] gap-5 items-start">
          <aside className="flex flex-col gap-3">
            <div className="bg-white border-2 border-[#f48fb1] rounded-2xl p-6 text-center shadow-sm">
              <div className="w-[68px] h-[68px] bg-[#e91e8c] rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                🌸
              </div>
              <p className="text-base font-bold text-[#c2185b] mb-1">{profile.name}</p>
              <p className="text-sm text-[#f06292] mb-0.5">{profile.title}</p>
              <p className="text-sm text-[#f06292]">{profile.status}</p>
              <hr className="border-0 border-t border-[#fce4ec] my-3.5" />
              <p className="text-sm font-bold text-[#e91e8c]">장소 {profile.placeCount}곳 기록 중 ✦</p>
            </div>

            <Navigation items={navItems} activeId={activeNav} onSelect={setActiveNav} />

            <TipBox />
          </aside>

          <main>
            {pages[activeNav] ?? <Home />}
          </main>
        </div>

        <Footer />
      </div>
    </div>
  )
}
