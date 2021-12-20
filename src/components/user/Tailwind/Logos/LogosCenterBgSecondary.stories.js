import StoryWrapper from '@/components/user/StoryWrapper'
import LogosCenterBgSecondary from '.'

export default {
  title: 'User/Tailwind/Logos/LogosCenterBgSecondary',
  component: LogosCenterBgSecondary
}

const Template = (args) => (
  <StoryWrapper>
    <LogosCenterBgSecondary {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
