import { Flex, Grid, Tag, Typography } from "antd"
import { TECH_STACK } from "./data"

const { Text } = Typography
const { useBreakpoint } = Grid

const TechStack = () => {
  const screens = useBreakpoint()

  return (
    <Flex
      vertical
      gap={10}
      style={{
        marginTop: 24,
      }}
    >
      <Text
        style={{
          color: "#64748B",
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: 1.1,
          textTransform: "uppercase",
        }}
      >
        Built With
      </Text>

      <Flex wrap gap={8}>
        {TECH_STACK.map((tech) => (
          <Tag
            key={tech}
            bordered={false}
            style={{
              margin: 0,
              padding: screens.md ? "5px 12px" : "4px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.08)",
              color: "#CBD5E1",
              fontWeight: 500,
              fontSize: screens.md ? 13 : 12,
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
