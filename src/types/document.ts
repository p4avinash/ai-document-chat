export interface Document {
  id: string
  fileName: string
  totalChunks: number
  createdAt: string
  pineconeIds: string[]
  updatedAt: string
  _id: string
}

export interface UploadResponse {
  success: boolean
  document: Document
}
