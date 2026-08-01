import { Flex, Tag } from "antd"
import { ThunderboltFilled } from "@ant-design/icons"

const HeroBadge = () => {
  return (
    <Flex>
      <Tag
        icon={<ThunderboltFilled />}
        bordered={false}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          width: "fit-content",
          padding: "8px 14px",
          borderRadius: 999,
          background: "rgba(99,102,241,.15)",
          color: "#C4B5FD",
          fontSize: 14,
          fontWeight: 600,
          border: "1px solid rgba(196,181,253,.25)",
        }}
      >
        Powered by RAG
      </Tag>
    </Flex>
  )
}

export default HeroBadge

HeroBadge.displayName = "HeroBadge"
