import StoryWrapper from '@/components/user/StoryWrapper'
import HeroWithBgImage from '.'

export default {
  title: 'User/Tailwind/Heroes/HeroWithBgImage',
  component: HeroWithBgImage
}

const Template = (args) => (
  <StoryWrapper>
    <HeroWithBgImage {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
