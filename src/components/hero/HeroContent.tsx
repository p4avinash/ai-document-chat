import { Flex, Grid, Typography } from "antd"
import HeroBadge from "./HeroBadge"
import HeroFeatures from "./HeroFeatures"
import HeroCTA from "./HeroCTA"
import TechStack from "./TechStack"

const { useBreakpoint } = Grid
const { Title, Paragraph } = Typography

const HeroContent = () => {
  const screens = useBreakpoint()

  const titleSize = screens.xl ? 64 : screens.lg ? 56 : screens.md ? 48 : 38

  const descriptionSize = screens.md ? 22 : 18

  return (
    <Flex
      vertical
      justify='center'
      style={{
        flex: 1,
        maxWidth: 560,
        width: "100%",
      }}
    >
      <HeroBadge />

      <Title
        level={1}
        style={{
          color: "#fff",
          fontSize: titleSize,
          lineHeight: 1.1,
          marginTop: 28,
          marginBottom: 20,
          fontWeight: 700,
        }}
      >
        Talk to your PDFs
      </Title>

      <Paragraph
        style={{
          color: "#94A3B8",
          fontSize: descriptionSize,
          lineHeight: 1.8,
          marginBottom: 36,
          maxWidth: 500,
        }}
      >
        Get answers from your documents using Retrieval-Augmented Generation,
        semantic search and grounded AI responses.
      </Paragraph>

      <HeroFeatures />

      <HeroCTA />

      <TechStack />
    </Flex>
  )
}

export default HeroContent

HeroContent.displayName = "src/components/hero/HeroContent.tsx"
