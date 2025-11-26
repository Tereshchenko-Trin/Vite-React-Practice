import { createFileRoute } from '@tanstack/react-router'
import { Second } from '@/pages/Second'

export const Route = createFileRoute('/second')({
  component: SecondPageComponent,
})

function SecondPageComponent() {
  return <Second />
}
