import { test, expect } from 'vitest'
import { formatTagsList } from '@/utils/helpers'

test('formatTagsList must correctly format an array of tags into a string', () => {
  const tags = ['test1', 'test2', 'test3']
  expect(formatTagsList(tags)).toBe('#test1 #test2 #test3')
})

test('formatTagsList should return null if undefined or an empty array is passed', () => {
  expect(formatTagsList(undefined)).toBeNull()
  expect(formatTagsList([])).toBeNull()
})
