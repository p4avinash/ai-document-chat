import { useState } from "react"
import { Typography } from "antd"
import { motion } from "framer-motion"
import { toast } from "react-hot-toast"

import { useUploadStore } from "../../store/upload.store"
import { uploadDocument } from "../../service/upload.service"

import SelectedFile from "./SelectedFile"
import UploadDropzone from "./UploadDropzone"

const { Title, Paragraph } = Typography

const UploadSection = () => {
  const { selectedFile, setSelectedFile } = useUploadStore()
  const { setCurrentDocument, setUploading } = useUploadStore()

  const handleFileSelect = async (file: File) => {
    try {
      setSelectedFile(file)
      setUploading(true)

      const response = await uploadDocument(file)

      setCurrentDocument(response)

      toast.success("Document indexed successfully!")
    } catch (error) {
      console.log("error --- ", error)
      toast.error("Upload failed.")
      setSelectedFile(null)
    } finally {
      setUploading(false)
    }
  }

  return (
    <section className='relative px-5 py-24'>
      <div className='mx-auto max-w-5xl'>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
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

        {selectedFile ? (
          <UploadDropzone onFileSelect={handleFileSelect} />
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
