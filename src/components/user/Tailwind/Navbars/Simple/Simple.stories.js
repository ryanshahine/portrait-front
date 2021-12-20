import StoryWrapper from '@/components/user/StoryWrapper'
import SimpleNavbar from '.'

export default {
  title: 'User/Tailwind/Navbars/Simple',
  component: SimpleNavbar
}

const Template = (args) => (
  <StoryWrapper>
    <SimpleNavbar {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
