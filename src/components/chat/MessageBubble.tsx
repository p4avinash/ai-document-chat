import { Avatar, Card, Flex, Typography } from "antd"
import {
  RobotOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons"

import { toast } from "react-hot-toast"

import { useState } from "react"

import SourceModal from "./SourceModal"

import type { Source } from "../../types/chat"
import { IoCopyOutline } from "react-icons/io5"
import { IoShareOutline } from "react-icons/io5"
import { IoDownloadOutline } from "react-icons/io5"
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

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content)
    toast.success("Copied to clipboard")
  }

  const handleShare = () => {
    // open share menu to share the copied content
    const shareData = {
      title: "Share",
      text: message.content,
    }
    if (navigator.share) {
      navigator.share(shareData)
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = URL.createObjectURL(
      new File([message.content], "message.txt", { type: "text/plain" }),
    )
    link.download = "message.txt"
    link.click()
  }

  return (
    <Flex justify={isUser ? "flex-end" : "flex-start"}>
      <div
        className={`flex gap-2 sm:gap-3 items-start max-w-[94%] sm:max-w-[85%] md:max-w-[80%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <Avatar
          size={36}
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
            overflow: "hidden",
          }}
          styles={{
            body: {
              padding: "12px 16px",
            },
          }}
        >
          <Flex gap={4} vertical>
            {!isUser && (
              <Flex gap={12} justify='flex-end' align='center' style={{ marginBottom: 4 }}>
                <button
                  onClick={() => handleCopy()}
                  title="Copy"
                  className="text-slate-400 hover:text-white p-1 rounded transition-colors active:scale-95 cursor-pointer"
                >
                  <IoCopyOutline style={{ fontSize: 16 }} />
                </button>
                <button
                  onClick={() => handleShare()}
                  title="Share"
                  className="text-slate-400 hover:text-white p-1 rounded transition-colors active:scale-95 cursor-pointer"
                >
                  <IoShareOutline style={{ fontSize: 16 }} />
                </button>
                <button
                  onClick={() => handleDownload()}
                  title="Download"
                  className="text-slate-400 hover:text-white p-1 rounded transition-colors active:scale-95 cursor-pointer"
                >
                  <IoDownloadOutline style={{ fontSize: 16 }} />
                </button>
              </Flex>
            )}
            <Text
              style={{
                color: "#fff",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              {message.content}
            </Text>
          </Flex>
          {!!message.sources?.length && (
            <Flex vertical gap={8} style={{ marginTop: 14 }}>
              <Flex align='center' gap={6}>
                <FileTextOutlined
                  style={{
                    color: "#60A5FA",
                    fontSize: 12,
                  }}
                />
                <Text
                  style={{
                    color: "#94A3B8",
                    fontWeight: 600,
                    fontSize: 11,
                  }}
                >
                  Sources ({message.sources.length})
                </Text>
              </Flex>

              <Flex wrap gap={4} style={{ width: "100%" }}>
                {message.sources.map((source) => (
                  <Flex
                    key={source.chunkId}
                    align='center'
                    gap={3}
                    onClick={() => handleSourceClick(source)}
                    style={{
                      cursor: "pointer",
                      padding: "1px 6px",
                      background: "#0F172A",
                      border: "1px solid #1E293B",
                      borderRadius: 4,
                      fontSize: 10,
                      lineHeight: "14px",
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
                    <Text
                      ellipsis={{ tooltip: source.chunkId }}
                      style={{
                        color: "#E2E8F0",
                        fontSize: 10,
                        maxWidth: 85,
                      }}
                    >
                      {source.chunkId}
                    </Text>
                    <Text
                      style={{
                        color: "#60A5FA",
                        fontSize: 10,
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
      </div>
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
