import PropTypes from 'prop-types'
import { useNode } from '@craftjs/core'

import Button from '@/components/shared/atoms/Button'

function UserButton({ children, ...props }) {
  const {
    connectors: { connect, drag }
  } = useNode()

  return (
    <Button ref={(ref) => connect(drag(ref))} {...props}>
      {children}
    </Button>
  )
}

UserButton.propTypes = {
  children: PropTypes.string.isRequired
}

export default UserButton
