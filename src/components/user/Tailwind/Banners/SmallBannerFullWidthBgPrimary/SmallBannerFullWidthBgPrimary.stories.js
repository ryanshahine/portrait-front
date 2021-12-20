import StoryWrapper from '@/components/user/StoryWrapper'
import SmallBannerFullWidthBgPrimary from '.'

export default {
  title: 'User/Tailwind/Banners/SmallBannerFullWidthBgPrimary',
  component: SmallBannerFullWidthBgPrimary
}

const Template = (args) => (
  <StoryWrapper>
    <SmallBannerFullWidthBgPrimary {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
