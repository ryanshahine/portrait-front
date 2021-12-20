/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { useNode } from '@craftjs/core'

import Text from '@/components/user/Tailwind/Elements/Text'

function StatsBgPrimary({ eyebrow, title, body }) {
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
    <div className="bg-blue-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl">
            Trusted by developers from over 80 planets
          </h2>
        </div>
        <dl className="mt-6 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col mt-2 sm:mt-0 bg-white shadow-xlg rounded-xl p-4">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">Available</dt>
            <div className="flex flex-col sm:mt-0 text-6xl mb-2">🤩</div>
            <dd className="order-1 text-5xl font-extrabold text-blue-600 tracking-tighter">24/7</dd>
          </div>
          <div className="flex flex-col mt-3 sm:mt-0 bg-white shadow-xlg rounded-xl p-4">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">Co-workers</dt>
            <div className="flex flex-col sm:mt-0 text-6xl  mb-2">🤩</div>
            <dd className="order-1 text-5xl font-extrabold text-blue-600 tracking-tighter">10+</dd>
          </div>
          <div className="flex flex-col mt-3 sm:mt-0 bg-white shadow-xlg rounded-xl p-4">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-700">Calories</dt>
            <div className="flex flex-col sm:mt-0 text-6xl  mb-2">🤩</div>
            <dd className="order-1 text-5xl font-extrabold text-blue-600 tracking-tighter">100k</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

const defaultProps = {
  eyebrow: 'Lightning fast',
  title: `Stay on top of customer support`,
  body: `Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada
  faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis
  sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.`
}

StatsBgPrimary.craft = {
  props: {
    ...defaultProps
  }
}

StatsBgPrimary.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

StatsBgPrimary.defaultProps = {
  ...defaultProps
}

export default StatsBgPrimary
