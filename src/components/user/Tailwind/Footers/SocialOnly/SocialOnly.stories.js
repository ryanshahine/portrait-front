import StoryWrapper from '@/components/user/StoryWrapper'
import SocialOnly from '.'

export default {
  title: 'User/Tailwind/Footers/SocialOnly',
  component: SocialOnly
}

const Template = (args) => (
  <StoryWrapper>
    <SocialOnly {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
