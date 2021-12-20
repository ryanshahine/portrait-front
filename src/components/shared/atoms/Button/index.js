import PropTypes from 'prop-types'
import { oneLine } from 'common-tags'
import React from 'react'

import { buttons } from '@/theme'

const Button = React.forwardRef(
  ({ variant = 'primary', size = 'md', className, onClick, children }, ref) => {
    const {
      base: buttonBase,
      variants: { [variant]: buttonVariant },
      sizes: { [size]: buttonSize }
    } = buttons

    return (
      <button
        type="button"
        className={oneLine`
        ${buttonBase}
        ${buttonVariant}
        ${buttonSize}
        ${className || null}
      `}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(buttons.variants)),
  size: PropTypes.oneOf(Object.keys(buttons.sizes)),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  className: null,
  onClick: null
}

export default Button
