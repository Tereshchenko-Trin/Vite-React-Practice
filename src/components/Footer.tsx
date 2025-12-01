import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="bg-sky-900 py-8">
      <Container>
        <div className="flex justify-between flex-wrap gap-5">
          <p className="text-sm text-white">©2025 Vite-React-Practice</p>
          <p className="text-sm text-white ">All rights reserved</p>
        </div>
      </Container>
    </footer>
  )
}
