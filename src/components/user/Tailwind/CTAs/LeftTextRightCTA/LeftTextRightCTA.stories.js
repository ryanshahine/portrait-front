import StoryWrapper from '@/components/user/StoryWrapper'
import LeftTextRightCTA from '.'

export default {
  title: 'User/Tailwind/CTAs/LeftTextRightCTA',
  component: LeftTextRightCTA
}

const Template = (args) => (
  <StoryWrapper>
    <LeftTextRightCTA {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
