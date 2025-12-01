import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { TagPosts } from '@/pages/TagPosts'
import { z } from 'zod'

const natureSearchSchema = z.object({
  page: z.number().int().min(1).default(1),
})

export const Route = createFileRoute('/nature')({
  validateSearch: natureSearchSchema,
  component: TagPostsPageComponent,
})

function TagPostsPageComponent() {
  const { page } = Route.useSearch()
  const navigate = useNavigate()

  function handleChangePage(newPage: number) {
    if (newPage < 1) return

    navigate({
      to: '/nature',
      search: (prev) => ({
        ...prev,
        page: newPage,
      }),
      replace: true,
    })
  }

  return <TagPosts currentPage={page} handleChangePage={handleChangePage} />
}
