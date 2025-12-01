import { test, expect } from 'vitest'
import { formatTagsList } from '@/utils/helpers'

test('formatTagsList должен корректно форматировать массив тегов в строку', () => {
  const tags = ['test1', 'test2', 'test3']
  expect(formatTagsList(tags)).toBe('#test1 #test2 #test3')
})

test('formatTagsList должен возвращать null, если передан undefined или пустой массив', () => {
  expect(formatTagsList(undefined)).toBeNull()
  expect(formatTagsList([])).toBeNull()
})
