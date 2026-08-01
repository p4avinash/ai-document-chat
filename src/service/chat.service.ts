import api from "../lib/axios"

interface ChatResponse {
  answer: string
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
