import PropTypes from 'prop-types'
import ContentEditable from 'react-contenteditable'
import { useNode } from '@craftjs/core'

import TextSettings from './TextSettings'

function Text({ text, color, fontSize, fontWeight, align, type = 'p', className }) {
  const {
    connectors: { connect },
    setProp
  } = useNode()

  function handleChange(e) {
    setProp((prop) => (prop.text = e.target.value), 500)
  }

  return (
    <ContentEditable
      innerRef={connect}
      html={text}
      tagName={type}
      className={className}
      onChange={handleChange}
    />
  )
}

Text.craft = {
  props: {
    text: 'Hello world'
  },
  related: {
    toolbox: TextSettings
  }
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
}

Text.defaultProps = {
  color: null,
  fontSize: null,
  fontWeight: null,
  className: '',
  type: 'p'
}

export default Text
