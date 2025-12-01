import { useState, useRef, useEffect } from 'react'
import { useWebSocket } from '@/hooks/useWebSocket'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

export function ChatModule() {
  const [inputMessage, setInputMessage] = useState('')
  const { sendMessage, messages, connectionStatus } = useWebSocket()
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesContainerRef.current?.scrollTo({
      top: messagesContainerRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (inputMessage.trim() && connectionStatus === 'open') {
      sendMessage(inputMessage)
      setInputMessage('')
    }
  }

  function getStatusColor(status: typeof connectionStatus) {
    switch (status) {
      case 'open':
        return 'text-green-500'
      case 'connecting':
        return 'text-yellow-500'
      case 'closed':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <Card className="w-full max-w-md h-fit">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Chat with WSS
          <span className={`text-sm ${getStatusColor(connectionStatus)}`}>
            {connectionStatus}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent
        ref={messagesContainerRef}
        className="h-48 overflow-y-auto space-y-2 bg-gray-50"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs p-2 rounded-lg shadow-sm ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div />
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
          <Input
            type="text"
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            placeholder="Enter your message..."
            disabled={connectionStatus !== 'open'}
          />
          <Button type="submit" disabled={connectionStatus !== 'open'}>
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
