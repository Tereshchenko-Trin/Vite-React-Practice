import { createContext, useEffect, useRef, useState } from 'react'
import type { IWebSocketContextType, IChatMessage } from '@/types/common'

export const WebSocketContext = createContext<
  IWebSocketContextType | undefined
>(undefined)

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<IChatMessage[]>([])
  const [connectionStatus, setConnectionStatus] = useState<
    'connecting' | 'open' | 'closing' | 'closed'
  >('connecting')
  const ws = useRef<WebSocket | null>(null)
  const reconnectTimeout = useRef<number | null>(null)
  const WSS_URL: string = 'wss://ws.ifelse.io'
  const RECONNECT_TIME: number = 3000

  function handleCloseOrError() {
    setConnectionStatus('closed')
    if (reconnectTimeout.current) {
      clearTimeout(reconnectTimeout.current)
    }
    reconnectTimeout.current = setTimeout(establishConnection, RECONNECT_TIME)
  }

  function establishConnection() {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) return

    ws.current = new WebSocket(WSS_URL)
    setConnectionStatus('connecting')

    ws.current.onopen = () => {
      setConnectionStatus('open')
      setMessages((message) => [
        ...message,
        {
          id: Date.now().toString() + '-conn',
          sender: 'server',
          text: 'Connection established',
          timestamp: Date.now(),
        },
      ])
    }

    ws.current.onmessage = (event) => {
      const newMessage: IChatMessage = {
        id: Date.now().toString(),
        sender: 'server',
        text: event.data,
        timestamp: Date.now(),
      }
      setMessages((message) => [...message, newMessage])
    }

    ws.current.onclose = handleCloseOrError
    ws.current.onerror = handleCloseOrError
  }

  useEffect(() => {
    establishConnection()

    return () => {
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current)
      }

      if (ws.current) {
        ws.current.onclose = null
        ws.current.close()
      }
    }
  }, [])

  function sendMessage(message: string) {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(message)

      const userMessage: IChatMessage = {
        id: Date.now().toString() + '-user',
        sender: 'user',
        text: message,
        timestamp: Date.now(),
      }

      setMessages((message) => [...message, userMessage])
    } else {
      console.error('WebSocket is not connected. Unable to send message.')
    }
  }

  return (
    <WebSocketContext.Provider
      value={{ sendMessage, messages, connectionStatus }}
    >
      {children}
    </WebSocketContext.Provider>
  )
}
