import { Flex } from "antd"
import { useEffect, type RefObject } from "react"

import { useChatStore } from "../../store/chat.store"

import MessageBubble from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"

interface ChatMessagesProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>
}

const ChatMessages = ({ scrollContainerRef }: ChatMessagesProps) => {
  const { messages, activeMessageId, isLoading } = useChatStore()

  useEffect(() => {
    const container = scrollContainerRef.current

    if (!container) return

    if (isLoading) {
      const element = document.getElementById("typing-indicator")

      if (!element) return

      const offset =
        element.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop

      container.scrollTo({
        top: offset,
        behavior: "smooth",
      })

      return
    }

    if (!activeMessageId) return

    const element = document.getElementById(activeMessageId)

    if (!element) return

    const offset =
      element.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop

    container.scrollTo({
      top: offset,
      behavior: "smooth",
    })
  }, [activeMessageId, isLoading, scrollContainerRef])

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

      {isLoading && <TypingIndicator />}
    </Flex>
  )
}

export default ChatMessages

ChatMessages.displayName = "ChatMessages"
