import { Link } from '@tanstack/react-router'

interface INavItem {
  to: string
  children: string
}

const navItems: INavItem[] = [
  {
    to: '/',
    children: 'Home',
  },
  {
    to: '/first',
    children: 'First',
  },
  {
    to: '/second',
    children: 'Second',
  },
]

export function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8">
        {navItems.map((item: INavItem, index: number) => (
          <li key={index} className="text-white">
            <Link to={item.to}>{item.children}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
