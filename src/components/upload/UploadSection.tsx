import { Typography } from "antd"
import { motion } from "framer-motion"
import { toast } from "react-hot-toast"

import { useUploadStore } from "../../store/upload.store"
import { uploadDocument } from "../../service/upload.service"

import SelectedFile from "./SelectedFile"
import UploadDropzone from "./UploadDropzone"
import UploadProgress from "./UploadProgress"

const { Title, Paragraph } = Typography

const API_BASE_URL = import.meta.env.VITE_API_URL

const UploadSection = () => {
  const {
    selectedFile,
    setSelectedFile,
    isUploading,
    setCurrentDocument,
    setUploading,
    setUploadProgress,
    setUploadStep,
  } = useUploadStore()

  const handleFileSelect = async (file: File) => {
    const clientId = crypto.randomUUID()

    setSelectedFile(file)
    setUploading(true)
    setUploadProgress(0)
    setUploadStep(0)

    const eventSource = new EventSource(
      `${API_BASE_URL}/upload-progress/${clientId}`,
    )

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data)

      console.log("Progress:", data)

      setUploadStep(data.step)
      setUploadProgress(data.progress)

      if (data.done) {
        eventSource.close()
      }
    }

    eventSource.onerror = () => {
      console.error("SSE connection lost.")
      eventSource.close()
    }

    try {
      const response = await uploadDocument(file, clientId)

      setCurrentDocument({
        id: response.document._id,
        fileName: response.document.fileName,
        pages: 0,
        chunks: response.document.totalChunks,
        indexedAt: response.document.createdAt,
      })

      toast.success("Document indexed successfully!")
    } catch (error) {
      console.error(error)

      toast.error("Upload failed.")

      setSelectedFile(null)
    } finally {
      eventSource.close()
      setUploading(false)
    }
  }

  return (
    <section className='relative px-5 py-24'>
      <div className='mx-auto max-w-5xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-12 text-center'
        >
          <Title level={2} className='!mb-3 !text-white'>
            Upload your PDF
          </Title>

          <Paragraph className='mx-auto max-w-3xl !text-lg !text-slate-400'>
            Upload any PDF and chat with it using AI, Semantic Search, Pinecone
            Vector Database and Retrieval Augmented Generation.
          </Paragraph>
        </motion.div>

        {!selectedFile ? (
          <UploadDropzone onFileSelect={handleFileSelect} />
        ) : isUploading ? (
          <UploadProgress />
        ) : (
          <SelectedFile
            file={selectedFile}
            onRemove={() => setSelectedFile(null)}
          />
        )}
      </div>
    </section>
  )
}

export default UploadSection

UploadSection.displayName = "UploadSection"
