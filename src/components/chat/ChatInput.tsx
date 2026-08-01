import { Button, Flex, Input } from "antd"
import { SendOutlined } from "@ant-design/icons"
import { useState } from "react"

const { TextArea } = Input

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading?: boolean
}

const ChatInput = ({ onSend, isLoading = false }: ChatInputProps) => {
  const [question, setQuestion] = useState("")

  const handleSend = () => {
    const trimmedQuestion = question.trim()

    if (!trimmedQuestion) return

    onSend(trimmedQuestion)

    setQuestion("")
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <Flex
      gap={12}
      align='end'
      style={{
        marginTop: 12,
      }}
    >
      <TextArea
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Ask anything about your document...'
        autoSize={{
          minRows: 1,
          maxRows: 5,
        }}
        variant='borderless'
        disabled={isLoading}
        styles={{
          textarea: {
            background: "#111827",
            color: "#ffffff",
            padding: "14px 16px",
            fontSize: 15,
            lineHeight: 1.5,
          },
        }}
        style={{
          background: "#111827",
          border: "1px solid #1f2937",
          borderRadius: 14,
        }}
      />

      <Button
        type='primary'
        onClick={handleSend}
        loading={isLoading}
        disabled={!question.trim() || isLoading}
        icon={
          <SendOutlined
            style={{
              fontSize: 18,
              color: "#ffffff",
            }}
          />
        }
        style={{
          width: 48,
          height: 48,
          minWidth: 48,
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      />
    </Flex>
  )
}

export default ChatInput

ChatInput.displayName = "ChatInput"
