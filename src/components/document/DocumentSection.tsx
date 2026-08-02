import { Card, Divider, Flex, Tag, Typography } from "antd"
import {
  FilePdfOutlined,
  CheckCircleFilled,
  CalendarOutlined,
  DatabaseOutlined,
} from "@ant-design/icons"

import { useUploadStore } from "../../store/upload.store"

const { Title, Text } = Typography

const DocumentSection = () => {
  const { currentDocument } = useUploadStore()

  // if (!currentDocument) return null

  return (
    <Card
      id='document'
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 20,
        // height: "100%",
      }}
      styles={{
        body: {
          padding: 24,
        },
      }}
    >
      <Flex vertical gap={18}>
        <Title
          level={3}
          style={{
            color: "#fff",
            margin: 0,
          }}
        >
          Uploaded Document
        </Title>

        <Divider
          style={{
            margin: 0,
            borderColor: "#1f2937",
          }}
        />

        <Flex gap={12} align='center'>
          <FilePdfOutlined
            style={{
              color: "#ef4444",
              fontSize: 20,
            }}
          />

          <Flex vertical>
            <Text style={{ color: "#94a3b8" }}>File Name</Text>

            <Text
              style={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {currentDocument?.fileName}
            </Text>
          </Flex>
        </Flex>

        <Flex gap={12} align='center'>
          <DatabaseOutlined
            style={{
              color: "#60a5fa",
              fontSize: 20,
            }}
          />

          <Flex vertical>
            <Text style={{ color: "#94a3b8" }}>Chunks</Text>

            <Text
              style={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {currentDocument?.chunks}
            </Text>
          </Flex>
        </Flex>

        <Flex gap={12} align='center'>
          <CalendarOutlined
            style={{
              color: "#fbbf24",
              fontSize: 20,
            }}
          />

          <Flex vertical>
            <Text style={{ color: "#94a3b8" }}>Uploaded</Text>

            <Text
              style={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {new Date(currentDocument?.indexedAt)?.toLocaleString()}
            </Text>
          </Flex>
        </Flex>

        <Divider
          style={{
            margin: 0,
            borderColor: "#1f2937",
          }}
        />

        <Tag
          color='success'
          icon={<CheckCircleFilled />}
          style={{
            width: "fit-content",
            padding: "6px 12px",
            borderRadius: 999,
          }}
        >
          Indexed Successfully
        </Tag>
      </Flex>
    </Card>
  )
}

export default DocumentSection

DocumentSection.displayName = "DocumentSection"

DocumentSection.displayName = "DocumentSection"
