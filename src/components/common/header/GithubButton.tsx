import { GithubOutlined } from "@ant-design/icons"
import { Button, Grid } from "antd"

const { useBreakpoint } = Grid

const GITHUB_REPOSITORY = "https://github.com/p4avinash/ai-document-chat"

const GithubButton = () => {
  const screens = useBreakpoint()

  if (!screens.md) {
    return null
  }

  const handleClick = () => {
    window.open(GITHUB_REPOSITORY, "_blank", "noopener,noreferrer")
  }

  return (
    <Button
      icon={<GithubOutlined />}
      onClick={handleClick}
      size='large'
      style={{
        height: 46,
        paddingInline: 22,
        borderRadius: 12,

        background: "rgba(255,255,255,.05)",
        border: "1px solid rgba(255,255,255,.10)",

        color: "#F8FAFC",
        fontWeight: 600,

        transition: "all .25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(99,102,241,.18)"
        e.currentTarget.style.border = "1px solid rgba(99,102,241,.45)"
        e.currentTarget.style.transform = "translateY(-2px)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,.05)"
        e.currentTarget.style.border = "1px solid rgba(255,255,255,.10)"
        e.currentTarget.style.transform = "translateY(0px)"
      }}
    >
      View Source
    </Button>
  )
}

export default GithubButton

GithubButton.displayName = "GithubButton"
