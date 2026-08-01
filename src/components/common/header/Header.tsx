import { Flex, Grid } from "antd"
import { motion } from "framer-motion"

import Logo from "./Logo"
import DesktopNavigation from "./DesktopNavigation"
import GithubButton from "./GithubButton"
import MobileNavigation from "./MobileNavigation"

const { useBreakpoint } = Grid

const MotionHeader = motion.header

const Header = () => {
  const screens = useBreakpoint()

  return (
    <MotionHeader
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        padding: screens.md ? "20px 32px" : "16px",
      }}
    >
      <Flex justify='center'>
        <Flex
          align='center'
          justify='space-between'
          style={{
            width: "100%",
            maxWidth: 1400,

            padding: screens.md ? "14px 24px" : "12px 16px",

            borderRadius: 20,

            backdropFilter: "blur(24px)",

            background: "rgba(15,23,42,.72)",

            border: "1px solid rgba(255,255,255,.08)",

            boxShadow: "0 12px 40px rgba(0,0,0,.35)",
          }}
        >
          <Logo />

          <Flex align='center' gap={20}>
            <DesktopNavigation />

            <GithubButton />

            <MobileNavigation />
          </Flex>
        </Flex>
      </Flex>
    </MotionHeader>
  )
}

export default Header

Header.displayName = "src/components/common/Header.tsx"
