import { Button, Flex, Grid } from "antd"
import { UploadOutlined, MessageOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const { useBreakpoint } = Grid

const MotionDiv = motion.div

const HeroCTA = () => {
  const screens = useBreakpoint()

  const handleUploadClick = () => {
    document.getElementById("upload")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const handleChatClick = () => {
    document.getElementById("chat")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <MotionDiv
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <Flex gap={16} wrap='wrap'>
        <Button
          type='primary'
          size={screens.md ? "large" : "middle"}
          icon={<UploadOutlined />}
          onClick={handleUploadClick}
          style={{
            height: 46,
            paddingInline: 24,
            borderRadius: 12,
            fontWeight: 600,
            background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
            border: "none",
            boxShadow: "0 10px 30px rgba(99,102,241,.35)",
          }}
        >
          Upload your PDF
        </Button>

        <Button
          size={screens.md ? "large" : "middle"}
          icon={<MessageOutlined />}
          onClick={handleChatClick}
          style={{
            height: 46,
            paddingInline: 24,
            borderRadius: 12,
            fontWeight: 600,
            background: "transparent",
            color: "#fff",
            border: "1px solid rgba(255,255,255,.18)",
          }}
        >
          Start Chat
        </Button>
      </Flex>
    </MotionDiv>
  )
}

export default HeroCTA

HeroCTA.displayName = "HeroCTA"
