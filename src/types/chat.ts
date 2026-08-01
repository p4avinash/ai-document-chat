export type MessageRole = "user" | "assistant"

export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  sources?: string[]
  createdAt: string
}
