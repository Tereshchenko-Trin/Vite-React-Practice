import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { PostCard } from '@/components/PostCard'

const mockPostData = {
  id: 1,
  title: 'Test title',
  body: 'Test description',
  tags: ['test1', 'test2', 'test3'],
  reactions: {
    likes: 3,
    dislikes: 10,
  },
  views: 100,
  userId: 2,
}

test('Snapshot компонента PostCard должен быть корректным', () => {
  const { asFragment } = render(<PostCard {...mockPostData} />)

  expect(asFragment()).toMatchSnapshot()
})
