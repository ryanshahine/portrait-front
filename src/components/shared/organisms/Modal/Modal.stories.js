import StoryWrapper from '@/components/user/StoryWrapper'
import { useAddonState } from '@storybook/client-api'
import Modal from '.'

export default {
  title: 'Shared/Organisms/Modal',
  component: Modal
}

const Template = (args) => {
  const [isModalOpen, setIsModalOpen] = useAddonState('modal', true)

  function closeModal() {
    console.log('Closing modal')
    setIsModalOpen(false)
  }

  return (
    <StoryWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        button={{ text: 'Button text', onClick: () => closeModal() }}
        {...args}
      />
    </StoryWrapper>
  )
}

export const Success = Template.bind({})
Success.args = {
  variant: 'success',
  title: 'Success',
  body: "Well done, you've successfully completed the action that opened this sucess modal."
}
