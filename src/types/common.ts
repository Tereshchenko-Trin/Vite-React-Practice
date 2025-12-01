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

export interface IChatMessage {
  id: string
  sender: 'user' | 'server'
  text: string
  timestamp: number
}

export interface IWebSocketContextType {
  sendMessage: (message: string) => void
  messages: IChatMessage[]
  connectionStatus: 'connecting' | 'open' | 'closing' | 'closed'
}
