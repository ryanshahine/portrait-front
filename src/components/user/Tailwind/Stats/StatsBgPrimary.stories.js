import StoryWrapper from '@/components/user/StoryWrapper'
import StatsBgPrimary from '.'

export default {
  title: 'User/Tailwind/Stats/StatsBgPrimary',
  component: StatsBgPrimary
}

const Template = (args) => (
  <StoryWrapper>
    <StatsBgPrimary {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
