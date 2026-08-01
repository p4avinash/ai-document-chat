import { Flex } from "antd"

import { useChatStore } from "../../store/chat.store"

import MessageBubble from "./MessageBubble"

const ChatMessages = () => {
  const { messages } = useChatStore()

  return (
    <Flex
      vertical
      gap={20}
      style={{
        width: "100%",
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
