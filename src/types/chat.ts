export type MessageRole = "user" | "assistant"

export interface Source {
  id: number
  chunkId: string
  score: number
  text: string
  documentId: string
}

export interface Message {
  id: string
  role: MessageRole
  content: string
  sources?: Source[]
  createdAt: string
}
