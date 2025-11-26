import { Link } from '@tanstack/react-router'

export function Navigation() {
  return (
    <ul>
      <li>
        <Link to={'/'} activeOptions={{ exact: true }}>
          Home
        </Link>
      </li>
      <li>
        <Link to={'/first'}>First</Link>
      </li>
      <li>
        <Link to={'/second'}>Second</Link>
      </li>
    </ul>
  )
}
