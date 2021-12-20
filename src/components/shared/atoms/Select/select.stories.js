import StoryWrapper from '@/components/user/StoryWrapper'
import Select from '.'

export default {
  title: 'Shared/Atoms/Select',
  component: Select
}

const Template = (args) => (
  <StoryWrapper>
    <Select {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
Default.args = {
  options: [
    {
      value: 'First'
    },
    {
      value: 'Second'
    },
    {
      value: 'Third'
    }
  ]
}
