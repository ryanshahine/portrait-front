/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { memo } from 'react'

import ImageSettings from './ImageSettings'

const Image = memo(function Image({ src, width, height, alt, className }) {
  return (
    <img
      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  )
})

// https://via.placeholder.com/2560x1536

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

Image.defaultProps = {
  className: ''
}

Image.craft = {
  props: {},
  related: {
    toolbox: ImageSettings
  }
}

export default Image
