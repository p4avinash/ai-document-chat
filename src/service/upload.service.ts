import api from "../lib/axios"
import type { UploadResponse } from "../types/document"

export const uploadDocument = async (file: File): Promise<UploadResponse> => {
  const formData = new FormData()

  formData.append("pdf", file)

  const { data } = await api.post<UploadResponse>("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

  return data
}
