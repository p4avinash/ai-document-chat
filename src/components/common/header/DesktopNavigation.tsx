import { Button, Flex, Grid } from "antd"
import { NAVIGATION_ITEMS } from "./NavigationItems"

const { useBreakpoint } = Grid

const DesktopNavigation = () => {
  const screens = useBreakpoint()

  if (!screens.lg) {
    return null
  }

  const handleNavigation = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <Flex align='center' gap={8}>
      {NAVIGATION_ITEMS.map((item) => (
        <Button
          key={item.key}
          type='text'
          onClick={() => handleNavigation(item.target)}
          style={{
            color: "#CBD5E1",
            fontWeight: 500,
            fontSize: 15,
            height: 42,
            paddingInline: 18,
            borderRadius: 10,
            transition: "all .25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,.06)"
            e.currentTarget.style.color = "#ffffff"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent"
            e.currentTarget.style.color = "#CBD5E1"
          }}
        >
          {item.label}
        </Button>
      ))}
    </Flex>
  )
}

export default DesktopNavigation

DesktopNavigation.displayName = "DesktopNavigation"
