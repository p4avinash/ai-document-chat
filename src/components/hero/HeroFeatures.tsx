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
      gap={screens.md ? 18 : 14}
      style={{
        marginBottom: 40,
      }}
    >
      {HERO_FEATURES.map((feature) => (
        <Flex key={feature} align='center' gap={14}>
          <CheckCircleFilled
            style={{
              color: "#22C55E",
              fontSize: screens.md ? 20 : 18,
              flexShrink: 0,
            }}
          />

          <Text
            style={{
              color: "#CBD5E1",
              fontSize: screens.md ? 18 : 16,
              lineHeight: 1.6,
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
