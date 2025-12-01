import { test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Alert } from '@/components/Alert'

test('Snapshot of the Alert component of type "success" must be correct', () => {
  const { asFragment } = render(
    <Alert type="success" id={1}>
      Everything is fine.
    </Alert>
  )

  expect(asFragment()).toMatchSnapshot()
})
