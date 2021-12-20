import StoryWrapper from '@/components/user/StoryWrapper'
import TestimonialSingle from '.'

export default {
  title: 'User/Tailwind/Testimonials/TestimonialSingle',
  component: TestimonialSingle
}

const Template = (args) => (
  <StoryWrapper>
    <TestimonialSingle {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
