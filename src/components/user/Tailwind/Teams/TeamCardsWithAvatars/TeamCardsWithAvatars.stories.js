import StoryWrapper from '@/components/user/StoryWrapper'
import TeamCardsWithAvatars from '.'

export default {
  title: 'User/Tailwind/Teams/TeamCardsWithAvatars',
  component: TeamCardsWithAvatars
}

const Template = (args) => (
  <StoryWrapper>
    <TeamCardsWithAvatars {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
