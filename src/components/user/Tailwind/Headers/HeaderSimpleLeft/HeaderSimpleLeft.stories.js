import StoryWrapper from '@/components/user/StoryWrapper'
import HeaderSimpleLeft from '.'

export default {
  title: 'User/Tailwind/Headers/HeaderSimpleLeft',
  component: HeaderSimpleLeft
}

const Template = (args) => (
  <StoryWrapper>
    <HeaderSimpleLeft {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
