import {
  FilePdfOutlined,
  MessageOutlined,
  RobotOutlined,
} from "@ant-design/icons"
import { Card, Flex, Grid, Tag, Typography } from "antd"
import { motion } from "framer-motion"

const { Title, Text } = Typography
const { useBreakpoint } = Grid

const MotionDiv = motion.div

const HeroIllustration = () => {
  const screens = useBreakpoint()

  return (
    <MotionDiv
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      style={{
        flex: 1,
        width: "100%",
        maxWidth: 520,
      }}
    >
      <Card
        bordered={false}
        style={{
          background: "#111827",
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,.08)",
          overflow: "hidden",
        }}
        styles={{
          body: {
            padding: screens.md ? 32 : 20,
          },
        }}
      >
        <Flex vertical gap={24}>
          {/* PDF */}

          <Card
            size='small'
            bordered={false}
            style={{
              background: "#1E293B",
            }}
          >
            <Flex align='center' gap={16}>
              <FilePdfOutlined
                style={{
                  fontSize: 42,
                  color: "#EF4444",
                }}
              />

              <div>
                <Title
                  level={5}
                  style={{
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Resume.pdf
                </Title>

                <Text
                  style={{
                    color: "#94A3B8",
                  }}
                >
                  Indexed Successfully
                </Text>
              </div>
            </Flex>
          </Card>

          {/* AI */}

          <Card
            bordered={false}
            style={{
              background: "#172554",
            }}
          >
            <Flex gap={16} align='start'>
              <RobotOutlined
                style={{
                  color: "#60A5FA",
                  fontSize: 28,
                  marginTop: 6,
                }}
              />

              <Flex vertical>
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  AI Response
                </Text>

                <Text
                  style={{
                    color: "#CBD5E1",
                    marginTop: 10,
                    lineHeight: 1.7,
                  }}
                >
                  Candidate has 5+ years experience in React, TypeScript,
                  GraphQL and modern frontend architecture.
                </Text>
              </Flex>
            </Flex>
          </Card>

          {/* Source */}

          <Flex justify='space-between' align='center'>
            <Tag color='green' bordered={false}>
              Chunk #4
            </Tag>

            <Tag color='blue' bordered={false}>
              98% Similarity
            </Tag>
          </Flex>

          {/* User */}

          <Card
            size='small'
            bordered={false}
            style={{
              background: "#1E293B",
            }}
          >
            <Flex gap={12} align='center'>
              <MessageOutlined />

              <Text
                style={{
                  color: "#fff",
                }}
              >
                Summarize this resume
              </Text>
            </Flex>
          </Card>
        </Flex>
      </Card>
    </MotionDiv>
  )
}

export default HeroIllustration

HeroIllustration.displayName = "HeroIllustration"
