import { Container } from '@/components/Container'

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow py-10">
      <Container>{children}</Container>
    </main>
  )
}
