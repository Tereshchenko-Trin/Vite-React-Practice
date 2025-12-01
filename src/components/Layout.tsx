import { Outlet } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  )
}
