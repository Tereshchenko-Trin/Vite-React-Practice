import { useQuery } from '@tanstack/react-query'
import { useAlerts } from '@/hooks/useAlerts'
import { fetchPosts } from '@/services/api'
import { WebSocketProvider } from '@/lib/webSocketProvider'
import type { IPostData } from '@/types/common'
import { Spinner } from '@/components/ui/spinner'
import { PostCard } from '@/components/PostCard'
import { PostsList } from '@/components/PostsList'
import { AddPostForm } from '@/components/AddPostForm'
import { ToggleChatWrapper } from '@/components/ToggleChatWrapper'
import { Alert } from '@/components/Alert'
import { AnimatePresence } from 'framer-motion'

export function Home() {
  const { alerts, addAlert } = useAlerts()
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery<IPostData[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="size-8 text-blue-900" />
      </div>
    )

  if (isError)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Posts not found</h1>
      </div>
    )

  function renderPosts(posts: IPostData[] | undefined) {
    if (posts === undefined) return null

    return posts.map((post: IPostData) => {
      return <PostCard key={post.id} {...post} />
    })
  }

  return (
    <>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
        <AnimatePresence initial={false}>
          {alerts.map((alert) => (
            <Alert key={alert.id} id={alert.id} type={alert.type}>
              {alert.message}
            </Alert>
          ))}
        </AnimatePresence>
      </div>

      <h1 className="text-2xl font-bold">Home page</h1>
      <div className="flex gap-5 justify-between my-6 flex-wrap lg:flex-nowrap">
        <PostsList>{renderPosts(posts)}</PostsList>
        <div className="flex flex-col gap-5 min-w-xs">
          <AddPostForm
            onAddPostSuccess={(message) => addAlert('success', message)}
            onAddPostError={(message) => addAlert('error', message)}
          />
          <WebSocketProvider>
            <ToggleChatWrapper />
          </WebSocketProvider>
        </div>
      </div>
    </>
  )
}
