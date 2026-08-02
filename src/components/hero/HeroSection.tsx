import { Flex } from "antd"
import HeroContent from "./HeroContent"
import HeroIllustration from "./HeroIllustration"

const HeroSection = () => {
  return (
    <section
      id='hero'
      style={{
        maxWidth: 1400,
        margin: "48px auto",
        padding: "48px",
        borderRadius: 24,
        background:
          "linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(17,24,39,1) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          right: -150,
          top: -100,
          borderRadius: "50%",
          background: "rgba(139,92,246,.18)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          left: -120,
          bottom: -120,
          borderRadius: "50%",
          background: "rgba(59,130,246,.08)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <Flex
        justify='space-between'
        align='center'
        gap={64}
        wrap='wrap'
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <HeroContent />

        <HeroIllustration />
      </Flex>
    </section>
  )
}

export default HeroSection

HeroSection.displayName = "src/components/hero/HeroSection.tsx"
