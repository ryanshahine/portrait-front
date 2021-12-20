/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { useNode } from '@craftjs/core'

import Text from '@/components/user/Tailwind/Elements/Text'

function TestimonialBgWhite({ eyebrow, title, body }) {
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
    <section className="bg-white overflow-hidden" ref={connect}>
      <div className=" flex justify-center max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative lg:ml-10">
          <svg
            className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 144 144"
            aria-hidden="true"
          >
            <path
              strokeWidth="2"
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
            />
          </svg>
          <blockquote className="relative">
            <div className="text-2xl max-w-7xl leading-9 font-medium text-gray-900">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
                culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex">
                <div className="ml-4 lg:ml-0">
                  <div className="text-base font-medium text-gray-900">Judith Black</div>
                  <div className="text-base font-medium text-indigo-600">CEO, Tuple</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

const defaultProps = {
  eyebrow: 'Lightning fast',
  title: `Stay on top of customer support`,
  body: `Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada
  faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis
  sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.`
}

TestimonialBgWhite.craft = {
  props: {
    ...defaultProps
  }
}

TestimonialBgWhite.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

TestimonialBgWhite.defaultProps = {
  ...defaultProps
}

export default TestimonialBgWhite
