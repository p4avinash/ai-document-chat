import { Card, Flex, Progress, Typography } from "antd"
import { motion } from "framer-motion"
import { CheckCircleFilled, LoadingOutlined } from "@ant-design/icons"

import { uploadSteps } from "../../constants/uploadSteps"

import { useUploadStore } from "../../store/upload.store"

const { Text, Title } = Typography

const UploadProgress = () => {
  const { selectedFile, uploadProgress, uploadStep } = useUploadStore()

  if (!selectedFile) return null

  return (
    <Card
      style={{
        maxWidth: 520,
        margin: "0 auto",
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 20,
      }}
      styles={{
        body: {
          padding: 24,
        },
      }}
    >
      <Flex vertical gap={20}>
        <Title
          level={4}
          style={{
            color: "#fff",
            textAlign: "center",
            margin: 0,
          }}
        >
          {uploadSteps[uploadStep]}...
        </Title>

        <Flex justify='space-between' align='center'>
          <Text
            style={{
              color: "#fff",
              fontWeight: 600,
            }}
          >
            {selectedFile.name}
          </Text>

          <Text
            style={{
              color: "#94a3b8",
            }}
          >
            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </Text>
        </Flex>

        <Progress
          percent={uploadProgress}
          showInfo={false}
          strokeColor='#7C3AED'
        />

        <Flex vertical gap={12}>
          {uploadSteps.map((step, index) => {
            const completed = index < uploadStep
            const active = index === uploadStep

            return (
              <Flex key={step} gap={12} align='center'>
                {completed ? (
                  <CheckCircleFilled
                    style={{
                      color: "#22c55e",
                    }}
                  />
                ) : active ? (
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                    }}
                  >
                    <LoadingOutlined
                      style={{
                        color: "#7C3AED",
                      }}
                    />
                  </motion.div>
                ) : (
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      border: "2px solid #475569",
                    }}
                  />
                )}

                <Text
                  style={{
                    color: completed || active ? "#fff" : "#64748b",
                  }}
                >
                  {step}
                </Text>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </Card>
  )
}

export default UploadProgress

UploadProgress.displayName = "UploadProgress"
