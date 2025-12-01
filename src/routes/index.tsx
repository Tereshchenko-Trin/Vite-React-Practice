import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Home } from '@/pages/Home'
import { z } from 'zod'

const natureSearchSchema = z.object({
  page: z.number().int().min(1).default(1),
})

export const Route = createFileRoute('/')({
  validateSearch: natureSearchSchema,
  component: HomeComponent,
})

function HomeComponent() {
  const { page } = Route.useSearch()
  const navigate = useNavigate()

  function handleChangePage(newPage: number) {
    if (newPage < 1) return

    navigate({
      to: '/',
      search: (prev) => ({
        ...prev,
        page: newPage,
      }),
      replace: true,
    })
  }

  return <Home currentPage={page} handleChangePage={handleChangePage} />
}
