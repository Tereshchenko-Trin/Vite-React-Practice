import { test, expect } from 'vitest'
import { z } from 'zod'

const natureSearchSchema = z.object({
  page: z.number().int().min(1).default(1),
})

test('natureSearchSchema must be validated with the correct page number', () => {
  const validData = { page: 5 }
  const result = natureSearchSchema.safeParse(validData)
  expect(result.success).toBe(true)
})

test('natureSearchSchema should fail when page is less than 1', () => {
  const invalidData = { page: 0 }
  const result = natureSearchSchema.safeParse(invalidData)
  expect(result.success).toBe(false)
})
