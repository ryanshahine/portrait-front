/* eslint-disable react/jsx-props-no-spreading */
import Button from '.'

export default {
  title: 'Shared/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary']
    },
    size: { table: { disable: true } },
    children: { table: { disable: true } }
  }
}

const Template = (args) => (
  <div>
    <Button size="xs" {...args}>
      XS Button
    </Button>
    <Button size="sm" {...args}>
      SM Button
    </Button>
    <Button size="md" {...args}>
      MD Button
    </Button>
    <Button size="lg" {...args}>
      LG Button
    </Button>
    <Button size="xl" {...args}>
      XL Button
    </Button>
  </div>
)

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }
