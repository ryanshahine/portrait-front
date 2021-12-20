/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { useNode } from '@craftjs/core'

import Text from '@/components/user/Tailwind/Elements/Text'

function LeftTextRightCTA({ textUpper, textDown, buttonText, url }) {
  const {
    connectors: { connect },
    actions: { setProp }
  } = useNode()

  function handleChange(value, prop) {
    return setProp((props) => {
      // eslint-disable-next-line no-param-reassign
      props[prop] = value
    }, 500)
  }

  return (
    <div className="w-full" ref={connect}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">
            {textUpper ? (
              <Text text={textUpper} onChange={(value) => handleChange(value, 'textUpper')} />
            ) : null}
          </span>
          <span className="block text-indigo-600">
            {textDown ? (
              <Text text={textDown} onChange={(value) => handleChange(value, 'textDown')} />
            ) : null}
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href={url}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {buttonText ? (
                <Text
                  className=""
                  text={buttonText}
                  onChange={(value) => handleChange(value, 'buttonText')}
                />
              ) : null}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const defaultProps = {
  textUpper: 'Lightning fast',
  textDown: `Get started today`,
  buttonText: 'Get started',
  url: '#'
}

LeftTextRightCTA.craft = {
  props: {
    ...defaultProps
  }
}

LeftTextRightCTA.propTypes = {
  textUpper: PropTypes.string,
  textDown: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

LeftTextRightCTA.defaultProps = {
  ...defaultProps
}

export default LeftTextRightCTA
