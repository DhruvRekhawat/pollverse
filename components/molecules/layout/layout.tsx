import { ReactNode } from 'react'
import { CreatePollCard } from './create-poll-card'
import { ProfileCard } from './profile-card'
import { TrendingCard } from './trending-card'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
    

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-20">
              <ProfileCard />
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-6">
            <CreatePollCard />
            {children}
          </main>

          {/* Right Sidebar */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-20">
              <TrendingCard />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

