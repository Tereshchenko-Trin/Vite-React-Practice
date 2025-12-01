import { get, post } from '@/utils/client'
import {
  POSTS_ENDPOINT,
  TAG_POSTS_ENDPOINT,
  ADD_POSTS_ENDPOINT,
} from '@/services/config'
import type {
  IPostData,
  IFetchPostsResponse,
  IFetchParams,
} from '@/types/common'

export const fetchPosts = async ({
  limit = 10,
  skip = 0,
}: IFetchParams): Promise<IFetchPostsResponse> => {
  const responce = await get<IFetchPostsResponse>(
    `${POSTS_ENDPOINT}?limit=${limit}&skip=${skip}`
  )
  return responce.data
}

export const fetchPostsByTag = async ({
  category,
  limit = 10,
  skip = 0,
}: IFetchParams): Promise<IFetchPostsResponse> => {
  const responce = await get<IFetchPostsResponse>(
    `${TAG_POSTS_ENDPOINT}${category}?limit=${limit}&skip=${skip}`
  )
  return responce.data
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
