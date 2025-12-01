import { test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/Navigation'

interface IProp {
  to: string
  children: React.ReactNode
}

vi.mock('@tanstack/react-router', () => ({
  Link: (props: IProp) => <a href={props.to}>{props.children}</a>,
}))

test('Navigation рендерит все навигационные ссылки с правильными href и текстом', () => {
  render(<Navigation />)

  const homeLink = screen.getByText('Home')
  const natureLink = screen.getByText('Nature')

  expect(homeLink).toBeInTheDocument()
  expect(natureLink).toBeInTheDocument()

  expect(homeLink).toHaveAttribute('href', '/')
  expect(natureLink).toHaveAttribute('href', '/nature')
})
