import { Button, Input, Tooltip } from "antd"
import type { InputRef } from "antd"
import { SendOutlined } from "@ant-design/icons"
import { useEffect, useRef, useState } from "react"
import { useUploadStore } from "../../store/upload.store"

const { TextArea } = Input

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading?: boolean
}

const ChatInput = ({ onSend, isLoading = false }: ChatInputProps) => {
  const [question, setQuestion] = useState("")
  const inputRef = useRef<InputRef>(null)
  const isMounted = useRef(false)
  const { currentDocument } = useUploadStore()

  const isDisabled = !currentDocument || isLoading
  const tooltipText = !currentDocument
    ? "Please upload a PDF document first to start asking questions."
    : ""

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    if (!isLoading && currentDocument) {
      inputRef.current?.focus({ preventScroll: true })
    }
  }, [isLoading, currentDocument])

  const handleSend = () => {
    const trimmedQuestion = question.trim()

    if (!trimmedQuestion || !currentDocument) return

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
    <Tooltip title={tooltipText} placement='top' mouseEnterDelay={0.1}>
      <div
        className={`flex items-end gap-2 sm:gap-3 bg-[#1E293B] border border-[#334155] rounded-2xl p-1.5 sm:p-2 shadow-lg ${
          !currentDocument ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        <TextArea
          ref={inputRef}
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            !currentDocument
              ? "Upload a PDF first to start asking questions..."
              : "Ask anything about your document..."
          }
          autoSize={{
            minRows: 1,
            maxRows: 5,
          }}
          variant='borderless'
          disabled={isDisabled}
          styles={{
            textarea: {
              background: "transparent",
              color: "#ffffff",
              padding: "8px 12px",
              fontSize: 15,
              lineHeight: 1.5,
              outline: "none",
              boxShadow: "none",
              cursor: !currentDocument ? "not-allowed" : "text",
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
          disabled={isDisabled || !question.trim()}
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
            background:
              currentDocument && question.trim() && !isLoading
                ? "#2563EB"
                : "#334155",
            borderColor: "transparent",
            boxShadow:
              currentDocument && question.trim() && !isLoading
                ? "0 2px 8px rgba(37, 99, 235, 0.4)"
                : "none",
            cursor: !currentDocument ? "not-allowed" : undefined,
          }}
        />
      </div>
    </Tooltip>
  )
}

export default ChatInput

ChatInput.displayName = "ChatInput"
