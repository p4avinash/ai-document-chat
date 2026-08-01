import { InboxOutlined } from "@ant-design/icons"
import { Card, Typography } from "antd"
import { motion } from "framer-motion"
import { useCallback, type FC } from "react"
import { useDropzone } from "react-dropzone"
import toast from "react-hot-toast"

const { Title, Paragraph, Text } = Typography

const MAX_FILE_SIZE = 10 * 1024 * 1024

interface IProps {
  onFileSelect: (file: File) => void
}

const UploadDropzone: FC<IProps> = ({ onFileSelect }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return

    const file = acceptedFiles[0]

    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.")
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("Maximum file size is 10MB.")
      return
    }

    console.log(file)
    onFileSelect(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
    },
  })

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Card
        bordered={false}
        style={{
          background: "#111827",
          borderRadius: 24,
          overflow: "hidden",
        }}
        bodyStyle={{
          padding: 0,
        }}
      >
        <div
          {...getRootProps()}
          className={`cursor-pointer border-2 border-dashed transition-all duration-300 ${
            isDragActive
              ? "border-violet-500 bg-violet-500/10"
              : "border-slate-700 hover:border-violet-500 hover:bg-slate-800"
          }`}
        >
          <input {...getInputProps()} />
          <div className='flex flex-col items-center justify-center px-8 py-20 text-center'>
            {/* Upload Icon */}

            <motion.div
              animate={{
                y: isDragActive ? -8 : 0,
                scale: isDragActive ? 1.08 : 1,
              }}
              transition={{
                duration: 0.25,
              }}
              className='mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-[0_15px_45px_rgba(124,92,255,.35)]'
            >
              <InboxOutlined
                style={{
                  fontSize: 42,
                  color: "white",
                }}
              />
            </motion.div>

            {/* Title */}

            <Title
              level={3}
              style={{
                color: "white",
                marginBottom: 10,
              }}
            >
              {isDragActive ? "Drop your PDF here" : "Drag & Drop your PDF"}
            </Title>

            {/* Subtitle */}

            <Paragraph
              style={{
                color: "#94A3B8",
                maxWidth: 520,
                marginBottom: 28,
              }}
            >
              Upload a PDF and chat with it using AI, semantic search, Pinecone
              Vector Database and Retrieval Augmented Generation.
            </Paragraph>

            {/* Browse Button */}

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              type='button'
              className='rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-500'
            >
              Browse Files
            </motion.button>

            {/* Supported Files */}

            <div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
              <span className='rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300'>
                PDF
              </span>

              <span className='rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300'>
                Max 10 MB
              </span>

              <span className='rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300'>
                Semantic Search
              </span>

              <span className='rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300'>
                RAG
              </span>
            </div>

            {/* Footer Hint */}

            <Text
              style={{
                marginTop: 32,
                color: "#64748B",
              }}
            >
              Supported format: PDF only
            </Text>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default UploadDropzone

UploadDropzone.displayName = "UploadDropzone"
