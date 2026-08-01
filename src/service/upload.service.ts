import api from "../lib/axios"
import type { UploadResponse } from "../types/document"

export const uploadDocument = async (
  file: File,
  clientId: string,
): Promise<UploadResponse> => {
  const formData = new FormData()

  formData.append("pdf", file)
  formData.append("clientId", clientId)

  const { data } = await api.post<UploadResponse>("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

  return data
}
