import { Flex, Typography } from "antd"
import { RobotOutlined } from "@ant-design/icons"

const { Title, Text } = Typography

const Logo = () => {
  const scrollToTop = () => {
    document.getElementById("hero-section")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <Flex
      align='center'
      gap={12}
      onClick={scrollToTop}
      style={{
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Flex
        align='center'
        justify='center'
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
          boxShadow: "0 10px 25px rgba(99,102,241,.35)",
        }}
      >
        <RobotOutlined
          style={{
            fontSize: 24,
            color: "#fff",
          }}
        />
      </Flex>

      <Flex vertical gap={0}>
        <Title
          level={4}
          style={{
            margin: 0,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          AI Document Chat
        </Title>

        <Text
          style={{
            color: "#94A3B8",
            fontSize: 13,
          }}
        >
          RAG Powered Search
        </Text>
      </Flex>
    </Flex>
  )
}

export default Logo
Logo.displayName = "src/components/common/header/Logo.tsx"
