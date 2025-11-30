export interface IPostData {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: IReactions
  views: number
  userId: number
}

export interface IReactions {
  likes: number
  dislikes: number
}

export interface IFetchPostsResponse {
  posts: IPostData[]
  total: number
  skip: number
  limit: number
}

export interface IAlertState {
  id: number
  type: 'success' | 'error' | 'info'
  message: string
}
