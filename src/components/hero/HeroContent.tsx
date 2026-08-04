import { Flex, Grid, Typography } from "antd"
import HeroBadge from "./HeroBadge"
import HeroFeatures from "./HeroFeatures"
import HeroCTA from "./HeroCTA"
import TechStack from "./TechStack"

const { useBreakpoint } = Grid
const { Title, Paragraph } = Typography

const HeroContent = () => {
  const screens = useBreakpoint()

  const titleSize = screens.xl ? 44 : screens.lg ? 38 : screens.md ? 34 : 28

  const descriptionSize = screens.md ? 16 : 14

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
          lineHeight: 1.15,
          marginTop: 18,
          marginBottom: 12,
          fontWeight: 700,
        }}
      >
        Talk to your PDFs
      </Title>

      <Paragraph
        style={{
          color: "#94A3B8",
          fontSize: descriptionSize,
          lineHeight: 1.6,
          marginBottom: 20,
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
