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
    to: '/nature',
    children: 'Nature',
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
