import { createRootRouteWithContext } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Layout } from '@/components/Layout'
import { NotFound } from '@/pages/NotFound'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
    notFoundComponent: () => {
      return <NotFound />
    },
  }
)

function RootComponent() {
  return (
    <>
      <Layout />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
