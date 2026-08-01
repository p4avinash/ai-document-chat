import { Card, Flex, Typography } from "antd"
import { MessageOutlined } from "@ant-design/icons"

const { Title, Text } = Typography

const EmptyChat = () => {
  return (
    <Card
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 20,
      }}
      styles={{
        body: {
          padding: "64px 32px",
        },
      }}
    >
      <Flex vertical align='center' justify='center' gap={20}>
        <Flex
          align='center'
          justify='center'
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
          }}
        >
          <MessageOutlined
            style={{
              fontSize: 32,
              color: "#fff",
            }}
          />
        </Flex>

        <Title
          level={3}
          style={{
            color: "#fff",
            margin: 0,
            textAlign: "center",
          }}
        >
          Start chatting with your document
        </Title>

        <Text
          style={{
            color: "#94A3B8",
            fontSize: 16,
            textAlign: "center",
            maxWidth: 550,
            lineHeight: 1.8,
          }}
        >
          Your document has been indexed successfully. Ask questions, request
          summaries, explain concepts, or extract important information using
          AI.
        </Text>
      </Flex>
    </Card>
  )
}

export default EmptyChat

EmptyChat.displayName = "EmptyChat"
