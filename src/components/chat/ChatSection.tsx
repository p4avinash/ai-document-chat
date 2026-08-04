import { useRef } from "react"
import { toast } from "react-hot-toast"

import { askQuestion } from "../../service/chat.service"

import { useChatStore } from "../../store/chat.store"
import { useUploadStore } from "../../store/upload.store"

import type { Message } from "../../types/chat"

import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import EmptyChat from "./EmptyChat"

const ChatSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const { messages, addMessage, isLoading, setLoading, setActiveMessage } =
    useChatStore()

  const { currentDocument } = useUploadStore()

  const handleSend = async (question: string) => {
    if (!currentDocument) {
      toast.error("Please upload a PDF document first to start asking questions.")
      return
    }

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
        sources: response.sources,
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
      className='w-full bg-[#111827] border border-[#1f2937] rounded-2xl p-3 sm:p-5 md:p-6 min-h-[580px] h-[calc(100dvh-90px)] md:h-[calc(100vh-110px)] flex flex-col'
    >
      <div
        ref={scrollContainerRef}
        style={{
          flex: 1,
          overflowY: "auto",
          minHeight: 0,
          paddingBottom: 16,
        }}
      >
        {messages.length === 0 ? (
          <EmptyChat onSelectPrompt={handleSend} />
        ) : (
          <ChatMessages scrollContainerRef={scrollContainerRef} />
        )}
      </div>

      <div
        style={{
          flexShrink: 0,
          paddingTop: 12,
          background: "#111827",
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
