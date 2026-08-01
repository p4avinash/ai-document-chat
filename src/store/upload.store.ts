import { create } from "zustand"

interface UploadedDocument {
  id: string
  fileName: string
  pages: number
  chunks: number
  indexedAt: string
}

interface UploadStore {
  selectedFile: File | null
  currentDocument: UploadedDocument | null
  isUploading: boolean
  uploadProgress: number

  setSelectedFile: (file: File | null) => void

  setCurrentDocument: (document: UploadedDocument | null) => void

  setUploading: (uploading: boolean) => void

  setUploadProgress: (progress: number) => void

  resetUpload: () => void
}

export const useUploadStore = create<UploadStore>((set) => ({
  selectedFile: null,
  currentDocument: null,
  isUploading: false,
  uploadProgress: 0,

  setSelectedFile: (file) =>
    set({
      selectedFile: file,
    }),

  setCurrentDocument: (document) =>
    set({
      currentDocument: document,
    }),

  setUploading: (uploading) =>
    set({
      isUploading: uploading,
    }),

  setUploadProgress: (progress) =>
    set({
      uploadProgress: progress,
    }),

  resetUpload: () =>
    set({
      selectedFile: null,
      currentDocument: null,
      isUploading: false,
      uploadProgress: 0,
    }),
}))
