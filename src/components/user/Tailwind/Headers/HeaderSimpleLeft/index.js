import PropTypes from 'prop-types'
import { useNode } from '@craftjs/core'

import Text from '@/components/user/Tailwind/Elements/Text'

function HeaderSimpleLeft({ eyebrow, title, body }) {
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
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
        <p className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Take control of your team.
        </p>
        <p className="max-w-xl mt-5  text-xl text-gray-500">
          Start building for free, then add a site plan to go live. Account plans unlock additional
          features.
        </p>
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

HeaderSimpleLeft.craft = {
  props: {
    ...defaultProps
  }
}

HeaderSimpleLeft.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

HeaderSimpleLeft.defaultProps = {
  ...defaultProps
}

export default HeaderSimpleLeft
