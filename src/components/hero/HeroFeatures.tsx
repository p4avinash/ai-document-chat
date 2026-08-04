import { CheckCircleFilled } from "@ant-design/icons"
import { Flex, Grid, Typography } from "antd"
import { HERO_FEATURES } from "./data"

const { Text } = Typography
const { useBreakpoint } = Grid

const HeroFeatures = () => {
  const screens = useBreakpoint()

  return (
    <Flex
      vertical
      gap={screens.md ? 12 : 10}
      style={{
        marginBottom: 24,
      }}
    >
      {HERO_FEATURES.map((feature) => (
        <Flex key={feature} align='center' gap={10}>
          <CheckCircleFilled
            style={{
              color: "#22C55E",
              fontSize: screens.md ? 16 : 14,
              flexShrink: 0,
            }}
          />

          <Text
            style={{
              color: "#CBD5E1",
              fontSize: screens.md ? 15 : 14,
              lineHeight: 1.5,
            }}
          >
            {feature}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

export default HeroFeatures

HeroFeatures.displayName = "HeroFeatures"
