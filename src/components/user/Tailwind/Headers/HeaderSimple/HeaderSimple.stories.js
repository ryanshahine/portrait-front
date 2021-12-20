import StoryWrapper from '@/components/user/StoryWrapper'
import HeaderSimple from '.'

export default {
  title: 'User/Tailwind/Headers/Simple',
  component: HeaderSimple
}

const Template = (args) => (
  <StoryWrapper>
    <HeaderSimple {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
