import { Button, Input } from "antd"
import type { InputRef } from "antd"
import { SendOutlined } from "@ant-design/icons"
import { useEffect, useRef, useState } from "react"

const { TextArea } = Input

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading?: boolean
}

const ChatInput = ({ onSend, isLoading = false }: ChatInputProps) => {
  const [question, setQuestion] = useState("")
  const inputRef = useRef<InputRef>(null)
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    if (!isLoading) {
      inputRef.current?.focus({ preventScroll: true })
    }
  }, [isLoading])

  const handleSend = () => {
    const trimmedQuestion = question.trim()

    if (!trimmedQuestion) return

    onSend(trimmedQuestion)

    setQuestion("")

    setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true })
    }, 0)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  return (
    <div className='flex items-end gap-2 sm:gap-3 bg-[#1E293B] border border-[#334155] rounded-2xl p-1.5 sm:p-2 shadow-lg'>
      <TextArea
        ref={inputRef}
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
            background: "transparent",
            color: "#ffffff",
            padding: "8px 12px",
            fontSize: 15,
            lineHeight: 1.5,
            outline: "none",
            boxShadow: "none",
          },
        }}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          boxShadow: "none",
          flex: 1,
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
              fontSize: 16,
              color: "#ffffff",
            }}
          />
        }
        style={{
          width: 40,
          height: 40,
          minWidth: 40,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: question.trim() && !isLoading ? "#2563EB" : "#334155",
          borderColor: "transparent",
          boxShadow: question.trim() && !isLoading ? "0 2px 8px rgba(37, 99, 235, 0.4)" : "none",
        }}
      />
    </div>
  )
}

export default ChatInput

ChatInput.displayName = "ChatInput"
