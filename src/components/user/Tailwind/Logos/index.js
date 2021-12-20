/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { useNode } from '@craftjs/core'

import Text from '@/components/user/Tailwind/Elements/Text'

function LogosCenterBgSecondary({ eyebrow, title, body }) {
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
    <div className="bg-indigo-200 bg-opacity-25">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid-cols-2 lg:gap-8">
          <div className="flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-around lg:-ml-4">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg"
                  alt="Workcation"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg"
                  alt="Tuple"
                />
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg"
                  alt="Level"
                />
              </div>
            </div>
          </div>
        </div>
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

LogosCenterBgSecondary.craft = {
  props: {
    ...defaultProps
  }
}

LogosCenterBgSecondary.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

LogosCenterBgSecondary.defaultProps = {
  ...defaultProps
}

export default LogosCenterBgSecondary
