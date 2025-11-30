import { useForm } from '@tanstack/react-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '@/services/api'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface IAddPostFormProps {
  onAddPostSuccess: (message: string) => void
  onAddPostError: (message: string) => void
}

export function AddPostForm({
  onAddPostSuccess,
  onAddPostError,
}: IAddPostFormProps) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      onAddPostSuccess('Post has been published.')
      form.reset()
    },
    onError: (error) => {
      console.error('Some error occured:', error)
      onAddPostError('Failed to publish post. Please try again later.')
    },
  })

  const form = useForm({
    defaultValues: {
      title: '',
      body: '',
    },
    onSubmit: async ({ value }) => {
      mutation.mutate({
        title: value.title,
        body: value.body,
        userId: 1,
      })
    },
  })

  return (
    <Card className="w-full max-w-lg">
      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            event.stopPropagation()
            form.handleSubmit()
          }}
          className="flex flex-col gap-3"
        >
          <form.Field
            name="title"
            validators={{
              onChange: ({ value }) =>
                value.length < 5
                  ? 'The title must be longer than 5 characters'
                  : undefined,
            }}
          >
            {({ state, handleChange, handleBlur }) => (
              <>
                <Label htmlFor="title">Title:</Label>
                <Input
                  value={state.value}
                  onChange={(event) => handleChange(event.target.value)}
                  onBlur={handleBlur}
                  disabled={mutation.isPending}
                  type="text"
                  id="title"
                  name="title"
                />
                {state.meta.errors && (
                  <p className="text-red-500 text-sm">
                    {state.meta.errors.join(', ')}
                  </p>
                )}
              </>
            )}
          </form.Field>
          <form.Field name="body">
            {({ state, handleChange, handleBlur }) => (
              <>
                <Label htmlFor="body">Description:</Label>
                <Input
                  value={state.value}
                  onChange={(event) => handleChange(event.target.value)}
                  onBlur={handleBlur}
                  disabled={mutation.isPending}
                  type="text"
                  id="body"
                  name="description"
                />
                {state.meta.errors && (
                  <p className="text-red-500 text-sm">
                    {state.meta.errors.join(', ')}
                  </p>
                )}
              </>
            )}
          </form.Field>
          <Button type="submit" disabled={mutation.isPending} variant="outline">
            {mutation.isPending ? 'Publication...' : 'Add post'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
