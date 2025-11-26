import { createFileRoute } from '@tanstack/react-router'
import { First } from '@/pages/First'

export const Route = createFileRoute('/first')({
  component: FirstPageComponent,
})

function FirstPageComponent() {
  return <First></First>
}
