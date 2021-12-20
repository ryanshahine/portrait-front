import PropTypes from 'prop-types'
import { Editor, Frame } from '@craftjs/core'

function StoryWrapper({ children }) {
  return (
    <Editor>
      <Frame>{children}</Frame>
    </Editor>
  )
}

StoryWrapper.propTypes = {
  children: PropTypes.element.isRequired
}

export default StoryWrapper
