import { Flex } from "antd"
import { useEffect } from "react"

import { useChatStore } from "../../store/chat.store"

import MessageBubble from "./MessageBubble"

const ChatMessages = () => {
  const { messages, activeMessageId } = useChatStore()

  const scrollToMessage = (id: string) => {
    const element = document.getElementById(id)

    if (!element) return

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  useEffect(() => {
    if (!activeMessageId) return

    // scrollToMessage(activeMessageId)
  }, [activeMessageId])

  return (
    <Flex
      vertical
      gap={20}
      style={{
        width: "100%",
        paddingRight: 8,
      }}
    >
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </Flex>
  )
}

export default ChatMessages

ChatMessages.displayName = "ChatMessages"
