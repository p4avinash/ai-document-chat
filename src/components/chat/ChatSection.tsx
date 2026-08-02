import { askQuestion } from "../../service/chat.service"

import { useChatStore } from "../../store/chat.store"
import { useUploadStore } from "../../store/upload.store"

import type { Message } from "../../types/chat"

import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import EmptyChat from "./EmptyChat"

const ChatSection = () => {
  const { messages, addMessage, isLoading, setLoading, setActiveMessage } =
    useChatStore()

  const { currentDocument } = useUploadStore()

  const handleSend = async (question: string) => {
    if (!currentDocument) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
      createdAt: new Date().toISOString(),
    }

    addMessage(userMessage)
    setActiveMessage(userMessage.id)

    try {
      setLoading(true)

      const response = await askQuestion(question, currentDocument.id)

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.answer,
        createdAt: new Date().toISOString(),
      }

      addMessage(assistantMessage)
      setActiveMessage(assistantMessage.id)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      id='chat'
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 16,
        padding: 24,
        height: "calc(100vh - 170px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          minHeight: 0,
          paddingBottom: 20,
        }}
      >
        {messages.length === 0 ? <EmptyChat /> : <ChatMessages />}
      </div>

      <div
        style={{
          flexShrink: 0,
          paddingTop: 16,
          background: "#0f172a",
          position: "sticky",
          bottom: 0,
          zIndex: 100,
        }}
      >
        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default ChatSection
ChatSection.displayName = "ChatSection"
