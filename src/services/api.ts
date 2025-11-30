import { get, post } from '@/utils/client'
import { POSTS_ENDPOINT, ADD_POSTS_ENDPOINT } from '@/services/config'
import type { IPostData, IFetchPostsResponse } from '@/types/common'

export const fetchPosts = async (): Promise<IPostData[]> => {
  const responce = await get<IFetchPostsResponse>(
    `${POSTS_ENDPOINT}?limit=${10}&skip=${0}`
  )
  return responce.data.posts
}

export const createPost = async (
  newPostData: Omit<IPostData, 'id' | 'reactions' | 'tags' | 'views'>
): Promise<IPostData> => {
  const responce = await post<IPostData>(
    ADD_POSTS_ENDPOINT,
    JSON.stringify({
      ...newPostData,
    })
  )
  return responce.data
}
