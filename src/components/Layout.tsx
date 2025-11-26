import { Outlet } from '@tanstack/react-router'
import { Navigation } from '@/components/Navigation'

export function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}
