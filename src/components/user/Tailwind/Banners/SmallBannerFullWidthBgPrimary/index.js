/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { useNode } from '@craftjs/core'

import Text from '@/components/user/Tailwind/Elements/Text'

function SmallBannerFullWidthBgPrimary({ title, buttonText, url }) {
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
    <div className="bg-blue-600" ref={connect}>
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center">
            <p className="font-medium text-white truncate">
              <span className="hidden md:inline">{title}</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href={url}
              className="flex items-center content-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50"
            >
              {buttonText ? (
                <Text
                  className="pr-2"
                  text={buttonText}
                  onChange={(value) => handleChange(value, 'buttonText')}
                />
              ) : null}
              →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const defaultProps = {
  title: `Stay on top of customer support`,
  buttonText: `Go`,
  url: '#'
}

SmallBannerFullWidthBgPrimary.craft = {
  props: {
    ...defaultProps
  }
}

SmallBannerFullWidthBgPrimary.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

SmallBannerFullWidthBgPrimary.defaultProps = {
  ...defaultProps
}

export default SmallBannerFullWidthBgPrimary
