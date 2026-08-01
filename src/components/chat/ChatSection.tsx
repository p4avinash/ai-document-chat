import { Flex } from "antd"

import { useChatStore } from "../../store/chat.store"

import EmptyChat from "./EmptyChat"
import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"

const ChatSection = () => {
  const { messages } = useChatStore()

  return (
    <Flex
      vertical
      gap={24}
      style={{
        width: "100%",
        maxWidth: 1000,
        margin: "120px auto 0",
        padding: "0 24px",
      }}
    >
      {messages.length === 0 ? <EmptyChat /> : <ChatMessages />}

      <ChatInput />
    </Flex>
  )
}

export default ChatSection
ChatSection.displayName = "ChatSection"
