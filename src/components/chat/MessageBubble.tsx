import { Avatar, Card, Flex, Typography } from "antd"
import { RobotOutlined, UserOutlined, FileTextOutlined } from "@ant-design/icons"

import { useState } from "react"

import SourceModal from "./SourceModal"

import type { Source } from "../../types/chat"

import type { Message } from "../../types/chat"

const { Text } = Typography

interface MessageBubbleProps {
  message: Message
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const [selectedSource, setSelectedSource] = useState<Source | null>(null)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSourceClick = (source: Source) => {
    setSelectedSource(source)

    setIsModalOpen(true)
  }
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

          {!!message.sources?.length && (
            <Flex vertical gap={10} style={{ marginTop: 16 }}>
              <Flex align='center' gap={8}>
                <FileTextOutlined
                  style={{
                    color: "#60A5FA",
                    fontSize: 14,
                  }}
                />
                <Text
                  style={{
                    color: "#94A3B8",
                    fontWeight: 600,
                    fontSize: 12,
                  }}
                >
                  Sources ({message.sources.length})
                </Text>
              </Flex>

              <Flex wrap gap={8}>
                {message.sources.map((source) => (
                  <Flex
                    key={source.chunkId}
                    align='center'
                    gap={6}
                    onClick={() => handleSourceClick(source)}
                    style={{
                      cursor: "pointer",
                      padding: "4px 10px",
                      background: "#0F172A",
                      border: "1px solid #1E293B",
                      borderRadius: 8,
                      fontSize: 12,
                      lineHeight: "18px",
                      transition:
                        "border-color 0.2s ease, background 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#334155"
                      e.currentTarget.style.background = "#1E293B"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#1E293B"
                      e.currentTarget.style.background = "#0F172A"
                    }}
                  >
                    <Text style={{ color: "#E2E8F0", fontSize: 12 }}>
                      {source.chunkId}
                    </Text>
                    <Text
                      style={{
                        color: "#60A5FA",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {source.score}%
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          )}
        </Card>
      </Flex>
      <SourceModal
        open={isModalOpen}
        source={selectedSource}
        onClose={() => setIsModalOpen(false)}
      />
    </Flex>
  )
}

export default MessageBubble

MessageBubble.displayName = "MessageBubble"
