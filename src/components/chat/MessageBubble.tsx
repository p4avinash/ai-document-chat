import { Avatar, Card, Flex, Typography } from "antd"
import { RobotOutlined, UserOutlined } from "@ant-design/icons"

import type { Message } from "../../types/chat"

const { Text } = Typography

interface MessageBubbleProps {
  message: Message
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === "user"

  return (
    <Flex justify={isUser ? "flex-end" : "flex-start"}>
      <Flex
        gap={12}
        align='flex-start'
        style={{
          maxWidth: "80%",
          flexDirection: isUser ? "row-reverse" : "row",
        }}
      >
        <Avatar
          size={40}
          icon={isUser ? <UserOutlined /> : <RobotOutlined />}
          style={{
            background: isUser ? "#2563EB" : "#7C3AED",
            flexShrink: 0,
          }}
        />

        <Card
          id={message.id}
          style={{
            background: isUser ? "#2563EB" : "#111827",
            border: isUser ? "none" : "1px solid #1f2937",
            borderRadius: 18,
          }}
          styles={{
            body: {
              padding: "14px 18px",
            },
          }}
        >
          <Text
            style={{
              color: "#fff",
              whiteSpace: "pre-wrap",
              lineHeight: 1.8,
            }}
          >
            {message.content}
          </Text>
        </Card>
      </Flex>
    </Flex>
  )
}

export default MessageBubble

MessageBubble.displayName = "MessageBubble"
