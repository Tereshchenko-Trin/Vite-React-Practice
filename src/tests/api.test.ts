import { test, expect, vi } from 'vitest'
import { fetchPosts, createPost } from '@/services/api'
import * as apiClient from '@/utils/client'
import { POSTS_ENDPOINT, ADD_POSTS_ENDPOINT } from '@/services/config'

const getMock = vi.spyOn(apiClient, 'get')
const postMock = vi.spyOn(apiClient, 'post')

test('fetchPosts должен вызывать get с правильным URL и параметрами', async () => {
  const mockData = { posts: [], total: 0, skip: 0, limit: 10 }
  getMock.mockResolvedValueOnce({ data: mockData })

  await fetchPosts({ limit: 10, skip: 0 })

  expect(getMock).toHaveBeenCalledTimes(1)
  expect(getMock).toHaveBeenCalledWith(`${POSTS_ENDPOINT}?limit=10&skip=0`)
})

test('createPost должен вызывать post с правильным URL и данными', async () => {
  const newPostData = { title: 'New Post', body: 'Body', userId: 1 }
  const mockResponse = {
    id: 101,
    reactions: 0,
    tags: [],
    views: 0,
    ...newPostData,
  }

  postMock.mockResolvedValueOnce({ data: mockResponse })

  await createPost(newPostData)

  expect(postMock).toHaveBeenCalledTimes(1)
  expect(postMock).toHaveBeenCalledWith(
    ADD_POSTS_ENDPOINT,
    JSON.stringify(newPostData)
  )
})
