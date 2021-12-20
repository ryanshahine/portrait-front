import StoryWrapper from '@/components/user/StoryWrapper'
import FeatureWithSideimage from '.'

export default {
  title: 'User/Tailwind/Features/FeatureWithSideimage',
  component: FeatureWithSideimage
}

const Template = (args) => (
  <StoryWrapper>
    <FeatureWithSideimage {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
