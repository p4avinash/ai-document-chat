import { Avatar, Card, Flex, Tag, Typography } from "antd"
import {
  RobotOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons"

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
            <Flex
              vertical
              gap={10}
              style={{
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#94A3B8",
                  fontWeight: 600,
                }}
              >
                📚 Sources ({message.sources.length})
              </Text>

              {message.sources.map((source) => (
                <Card
                  key={source.chunkId}
                  hoverable
                  onClick={() => handleSourceClick(source)}
                  size='small'
                  style={{
                    background: "#0F172A",
                    border: "1px solid #1E293B",
                    cursor: "pointer",
                  }}
                  styles={{
                    body: {
                      padding: 12,
                    },
                  }}
                >
                  <Flex justify='space-between' align='center'>
                    <Flex gap={8} align='center'>
                      <FileTextOutlined
                        style={{
                          color: "#60A5FA",
                        }}
                      />

                      <Text
                        style={{
                          color: "#fff",
                        }}
                      >
                        {source.chunkId}
                      </Text>
                    </Flex>

                    <Tag color='blue'>{source.score}%</Tag>
                  </Flex>
                </Card>
              ))}
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
