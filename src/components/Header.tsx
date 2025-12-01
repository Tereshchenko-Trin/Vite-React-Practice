import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'

export function Header() {
  return (
    <header className="bg-sky-900 py-4">
      <Container>
        <Navigation />
      </Container>
    </header>
  )
}
