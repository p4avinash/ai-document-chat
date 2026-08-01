import { create } from "zustand"
import type { Message } from "../types/chat"

interface ChatStore {
  messages: Message[]
  isLoading: boolean

  addMessage: (message: Message) => void

  clearMessages: () => void

  setLoading: (loading: boolean) => void
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],

  isLoading: false,

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  clearMessages: () =>
    set({
      messages: [],
    }),

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),
}))
