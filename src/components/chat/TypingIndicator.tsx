import { Avatar, Card, Flex, Typography } from "antd"
import { RobotOutlined } from "@ant-design/icons"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import styles from "./TypingIndicator.module.css"

const { Text } = Typography

const STATUS_MESSAGES = [
  "Thinking",
  "Searching documents",
  "Analyzing sources",
  "Generating response",
  "Almost there",
]

const TypingIndicator = () => {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % STATUS_MESSAGES.length)
    }, 2400)

    return () => clearInterval(interval)
  }, [])

  return (
    <Flex justify='flex-start' id='typing-indicator'>
      <Flex gap={12} align='flex-start' style={{ maxWidth: "80%" }}>
        <Avatar
          size={40}
          icon={<RobotOutlined />}
          style={{
            background: "#7C3AED",
            flexShrink: 0,
          }}
        />

        <Card
          className={styles.card}
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: 18,
          }}
          styles={{
            body: {
              padding: "14px 18px",
            },
          }}
        >
          <Flex align='center' gap={10}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={messageIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Text
                  style={{
                    color: "#94A3B8",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {STATUS_MESSAGES[messageIndex]}
                </Text>
              </motion.div>
            </AnimatePresence>

            <span className={styles.dots} aria-hidden='true'>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </span>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  )
}

TypingIndicator.displayName = "TypingIndicator"

export default TypingIndicator
