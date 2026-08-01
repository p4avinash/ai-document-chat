import { create } from "zustand"
import type { Message } from "../types/chat"

interface ChatStore {
  messages: Message[]
  isLoading: boolean

  activeMessageId: string | null

  addMessage: (message: Message) => void

  clearMessages: () => void

  setLoading: (loading: boolean) => void

  setActiveMessage: (messageId: string | null) => void
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],

  isLoading: false,

  activeMessageId: null,

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  clearMessages: () =>
    set({
      messages: [],
      activeMessageId: null,
    }),

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),

  setActiveMessage: (messageId) =>
    set({
      activeMessageId: messageId,
    }),
}))
