import { useQuery } from '@tanstack/react-query'
import { fetchPostsByTag } from '@/services/api'
import type {
  IPostData,
  IFetchPostsResponse,
  IPaginationProps,
} from '@/types/common'
import { Spinner } from '@/components/ui/spinner'
import { PostCard } from '@/components/PostCard'
import { PostsList } from '@/components/PostsList'
import { Pagination } from '@/components/Pagination'

export function TagPosts({ currentPage, handleChangePage }: IPaginationProps) {
  const category: string = 'nature'
  const itemsPerPage = 5
  const skipItems = (currentPage - 1) * itemsPerPage
  const { data, isLoading, isError } = useQuery<IFetchPostsResponse>({
    queryKey: ['posts', category, { page: currentPage }],
    queryFn: () =>
      fetchPostsByTag({ category, skip: skipItems, limit: itemsPerPage }),
  })

  const posts = data?.posts
  const totalPosts = data?.total || 0
  const totalPages = Math.ceil(totalPosts / itemsPerPage)

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
      <h1 className="text-2xl font-bold">Nature posts</h1>
      <div className="flex gap-5 justify-between my-6 flex-wrap lg:flex-nowrap">
        <PostsList>{renderPosts(posts)}</PostsList>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleChangePage={handleChangePage}
      />
    </>
  )
}
