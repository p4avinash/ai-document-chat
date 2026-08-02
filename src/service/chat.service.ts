import api from "../lib/axios"
import type { Source } from "../types/chat"

interface ChatResponse {
  answer: string
  sources: Source[]
}

export const askQuestion = async (
  message: string,
  documentId: string,
): Promise<ChatResponse> => {
  const { data } = await api.post<ChatResponse>("/chat", {
    message,
    documentId,
  })

  return data
}
