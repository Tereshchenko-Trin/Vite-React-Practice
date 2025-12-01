import type { IPostData } from '@/types/common'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// TODO: open post page on click button read more
export function PostCard({ title, body, tags }: IPostData) {
  function renderListItems(arr: string[]): React.ReactNode {
    if (arr === undefined || arr?.length === 0) return null

    return arr.map((item) => {
      return `#${item} `
    })
  }

  return (
    <Card className="w-full min-w-xs">
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription>{renderListItems(tags)}</CardDescription>
        <CardContent className="line-clamp-4">{body}</CardContent>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <Button type="button" className="w-full ">
          Read more
        </Button>
      </CardFooter>
    </Card>
  )
}
