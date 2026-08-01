import { useState } from "react"
import { Button, Drawer, Flex, Grid } from "antd"

import { MenuOutlined, GithubOutlined } from "@ant-design/icons"

import { NAVIGATION_ITEMS } from "./NavigationItems"

const { useBreakpoint } = Grid

const GITHUB_REPOSITORY = "https://github.com/p4avinash/ai-document-chat"

const MobileNavigation = () => {
  const screens = useBreakpoint()

  const [open, setOpen] = useState(false)

  if (screens.lg) {
    return null
  }

  const navigate = (target: string) => {
    setOpen(false)

    setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 150)
  }

  return (
    <>
      <Button
        icon={<MenuOutlined />}
        size='large'
        onClick={() => setOpen(true)}
        style={{
          borderRadius: 12,

          background: "rgba(255,255,255,.05)",

          border: "1px solid rgba(255,255,255,.10)",

          color: "#fff",
        }}
      />

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement='right'
        width={280}
        title='Navigation'
        styles={{
          body: {
            background: "#0F172A",
          },

          header: {
            background: "#0F172A",

            color: "#fff",

            borderBottom: "1px solid rgba(255,255,255,.08)",
          },

          content: {
            background: "#0F172A",
          },
        }}
      >
        <Flex vertical gap={16}>
          {NAVIGATION_ITEMS.map((item) => (
            <Button
              key={item.key}
              type='text'
              block
              onClick={() => navigate(item.target)}
              style={{
                textAlign: "left",

                justifyContent: "flex-start",

                color: "#E2E8F0",

                height: 48,

                fontSize: 16,
              }}
            >
              {item.label}
            </Button>
          ))}

          <Button
            icon={<GithubOutlined />}
            size='large'
            onClick={() =>
              window.open(GITHUB_REPOSITORY, "_blank", "noopener,noreferrer")
            }
            style={{
              marginTop: 20,

              height: 46,

              borderRadius: 10,

              background: "linear-gradient(135deg,#6366F1,#8B5CF6)",

              color: "#fff",

              border: "none",
            }}
          >
            View Source
          </Button>
        </Flex>
      </Drawer>
    </>
  )
}

export default MobileNavigation

MobileNavigation.displayName = "MobileNavigation"
