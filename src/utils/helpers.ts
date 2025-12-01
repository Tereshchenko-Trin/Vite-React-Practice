// renderListItems from '@/components/PostCard' for test
export function formatTagsList(arr: string[] | undefined): string | null {
  if (arr === undefined || arr?.length === 0) return null
  return arr.map((item) => `#${item}`).join(' ')
}
