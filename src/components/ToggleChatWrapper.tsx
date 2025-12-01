import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChatModule } from '@/components/ChatModule'

export function ToggleChatWrapper() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Button type="button" onClick={toggleChat} className="ml-auto block">
        {isOpen ? 'Close chat' : 'Open chat'}
      </Button>

      {isOpen && (
        <div className="mt-2">
          <ChatModule />
        </div>
      )}
    </div>
  )
}
