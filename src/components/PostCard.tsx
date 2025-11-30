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

export function PostCard({ id, title, body, tags, reactions }: IPostData) {
  function renderListItems(arr: string[]): React.ReactNode {
    if (!arr) return null

    return arr.map((item) => {
      return `#${item} `
    })
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{renderListItems(tags)}</CardDescription>
        <CardContent>{body}</CardContent>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <Button type="button" className="w-full ">
          Read more
        </Button>
      </CardFooter>
    </Card>
  )
}
