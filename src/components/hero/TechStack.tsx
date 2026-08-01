import { Flex, Grid, Tag, Typography } from "antd"
import { TECH_STACK } from "./data"

const { Text } = Typography
const { useBreakpoint } = Grid

const TechStack = () => {
  const screens = useBreakpoint()

  return (
    <Flex
      vertical
      gap={16}
      style={{
        marginTop: 48,
      }}
    >
      <Text
        style={{
          color: "#64748B",
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: 1.2,
          textTransform: "uppercase",
        }}
      >
        Built With
      </Text>

      <Flex wrap gap={12}>
        {TECH_STACK.map((tech) => (
          <Tag
            key={tech}
            bordered={false}
            style={{
              margin: 0,
              padding: screens.md ? "8px 16px" : "6px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)",
              color: "#CBD5E1",
              fontWeight: 500,
              fontSize: screens.md ? 14 : 13,
              cursor: "default",
              transition: ".25s",
            }}
          >
            {tech}
          </Tag>
        ))}
      </Flex>
    </Flex>
  )
}

export default TechStack
TechStack.displayName = "TechStack"
