import StoryWrapper from '@/components/user/StoryWrapper'
import Text from '.'

export default {
  title: 'User/Tailwind/Elements/Text',
  component: Text
}

const Template = (args) => (
  <StoryWrapper>
    <Text text="Hello world" {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
