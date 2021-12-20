import PropTypes from 'prop-types'
import { Element, useNode } from '@craftjs/core'

import Text from '@/components/user/Tailwind/Elements/Text'

function HeaderSimple({ eyebrow, title, body }) {
  const {
    connectors: { connect }
  } = useNode()

  return (
    <div className="bg-white" ref={connect}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {eyebrow ? (
            <Element
              id="eyebrow_text"
              is={Text}
              text={eyebrow}
              type="h2"
              className="text-base font-semibold text-blue-600 tracking-wide uppercase"
            />
          ) : null}
          <Element
            id="title_text"
            is={Text}
            text={title}
            className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
          />
          <Element
            id="body_text"
            is={Text}
            text={body}
            className="max-w-xl mt-5 mx-auto text-xl text-gray-500"
          />
        </div>
      </div>
    </div>
  )
}

const defaultProps = {
  eyebrow: 'Next Generation',
  title: `Main heading tagline, let's go.`,
  body: `Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
  ridiculus mus. Vivamus eget blandit augue.`
}

HeaderSimple.craft = {
  props: {
    ...defaultProps
  }
}

HeaderSimple.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

HeaderSimple.defaultProps = {
  ...defaultProps
}

export default HeaderSimple
