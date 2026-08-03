import { Card, Flex, Typography } from "antd"
import { MessageOutlined, FileTextOutlined, BulbOutlined, QuestionCircleOutlined, ThunderboltOutlined } from "@ant-design/icons"

const { Title, Text } = Typography

interface EmptyChatProps {
  onSelectPrompt?: (prompt: string) => void
}

const QUICK_PROMPTS = [
  {
    icon: <FileTextOutlined style={{ color: "#60A5FA" }} />,
    title: "Summarize Document",
    prompt: "Can you provide a concise summary of this document?",
  },
  {
    icon: <BulbOutlined style={{ color: "#F59E0B" }} />,
    title: "Key Takeaways",
    prompt: "What are the main key takeaways and core insights from this document?",
  },
  {
    icon: <QuestionCircleOutlined style={{ color: "#A855F7" }} />,
    title: "Main Topics",
    prompt: "What are the primary topics and concepts covered in this document?",
  },
  {
    icon: <ThunderboltOutlined style={{ color: "#10B981" }} />,
    title: "Action Items",
    prompt: "Extract all actionable recommendations or next steps mentioned in this document.",
  },
]

const EmptyChat = ({ onSelectPrompt }: EmptyChatProps) => {
  return (
    <Card
      style={{
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: 20,
      }}
      styles={{
        body: {
          padding: "32px 16px",
        },
      }}
    >
      <Flex vertical align='center' justify='center' gap={24}>
        <Flex
          align='center'
          justify='center'
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
          }}
        >
          <MessageOutlined
            style={{
              fontSize: 28,
              color: "#fff",
            }}
          />
        </Flex>

        <Flex vertical align='center' gap={8}>
          <Title
            level={3}
            style={{
              color: "#fff",
              margin: 0,
              textAlign: "center",
              fontSize: "clamp(18px, 4vw, 24px)",
            }}
          >
            Start chatting with your document
          </Title>

          <Text
            style={{
              color: "#94A3B8",
              fontSize: 14,
              textAlign: "center",
              maxWidth: 520,
              lineHeight: 1.6,
            }}
          >
            Ask questions, request summaries, explain concepts, or extract key insights using AI.
          </Text>
        </Flex>

        <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {QUICK_PROMPTS.map((item, index) => (
            <div
              key={index}
              onClick={() => onSelectPrompt?.(item.prompt)}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1E293B]/70 border border-[#334155]/60 hover:bg-[#1E293B] hover:border-[#60A5FA]/40 active:scale-[0.99] cursor-pointer transition-all duration-200"
            >
              <div className="text-lg flex-shrink-0">{item.icon}</div>
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-xs font-semibold text-slate-200 truncate">
                  {item.title}
                </span>
                <span className="text-[11px] text-slate-400 truncate">
                  {item.prompt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Flex>
    </Card>
  )
}

export default EmptyChat

EmptyChat.displayName = "EmptyChat"
