import {
  CheckCircleFilled,
  DeleteOutlined,
  FilePdfFilled,
  LoadingOutlined,
} from "@ant-design/icons"
import { Button, Progress, Space, Tag, Typography, Flex } from "antd"
import { motion } from "framer-motion"
import { useUploadStore } from "../../store/upload.store"

const { Title, Text } = Typography

interface SelectedFileProps {
  file: File
  isUploading?: boolean
  progress?: number
  onRemove: () => void
}

const formatFileSize = (size: number) => {
  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`
  }

  return `${(size / (1024 * 1024)).toFixed(2)} MB`
}

const SelectedFile = ({
  file,
  isUploading = false,
  progress = 0,
  onRemove,
}: SelectedFileProps) => {
  const { currentDocument } = useUploadStore()
  const isUploaded = Boolean(currentDocument && !isUploading)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Flex className='rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl '>
        <Space className='w-full' direction='vertical' size='large'>
          {/* ===============================
              File Information
          =============================== */}

          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between p-6'>
            <div className='flex items-center gap-5'>
              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/15'>
                <FilePdfFilled className='text-4xl text-red-500' />
              </div>

              <div>
                <Title level={4} className='!mb-1 !text-white'>
                  {file?.name}
                </Title>

                <Text className='!text-slate-400'>
                  {formatFileSize(file?.size)}
                </Text>

                <div className='mt-3 flex flex-wrap gap-2'>
                  <Tag color='processing'>PDF</Tag>

                  <Tag color='purple'>AI Ready</Tag>

                  <Tag color='geekblue'>Pinecone</Tag>

                  <Tag color='cyan'>RAG</Tag>
                </div>
              </div>
            </div>

            {!isUploading && (
              <Button
                danger
                type='primary'
                size='medium'
                icon={<DeleteOutlined />}
                onClick={onRemove}
              >
                Remove
              </Button>
            )}
          </div>

          {/* ===============================
              Upload Status
          =============================== */}

          <div className='rounded-2xl border border-slate-700 bg-slate-800/60 p-5'>
            {isUploading ? (
              <Space direction='vertical' className='w-full' size='middle'>
                <div className='flex items-center gap-3'>
                  <LoadingOutlined className='text-lg text-violet-500' />

                  <Text className='!text-white'>
                    Uploading & Creating Embeddings...
                  </Text>
                </div>

                <Progress
                  percent={progress}
                  status='active'
                  strokeColor='#7C5CFF'
                />

                <Text className='!text-slate-400'>
                  Indexing document into Pinecone Vector Database...
                </Text>
              </Space>
            ) : isUploaded ? (
              <div className='flex items-center gap-3'>
                <CheckCircleFilled className='text-xl text-green-500' />

                <div>
                  <Text className='!block !font-medium !text-white'>
                    Uploaded & Indexed Successfully
                  </Text>

                  <Text className='!text-slate-400'>
                    Your document is processed and ready for AI chat.
                  </Text>
                </div>
              </div>
            ) : (
              <div className='flex items-center gap-3'>
                <CheckCircleFilled className='text-xl text-green-500' />

                <div>
                  <Text className='!block !font-medium !text-white'>
                    Ready to Upload
                  </Text>

                  <Text className='!text-slate-400'>
                    Your document is ready. Upload will begin automatically.
                  </Text>
                </div>
              </div>
            )}
          </div>
        </Space>
      </Flex>
    </motion.div>
  )
}

export default SelectedFile

SelectedFile.displayName = "SelectedFile"
