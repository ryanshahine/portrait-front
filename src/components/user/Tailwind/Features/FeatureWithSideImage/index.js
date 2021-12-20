/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { Element, useNode } from '@craftjs/core'

import Text from '@/components/user/Tailwind/Elements/Text'

function FeatureWithSideImage({ eyebrow, title, body }) {
  const {
    connectors: { connect }
  } = useNode()

  return (
    <div className="bg-white pt-16 pb-32 overflow-hidden" ref={connect}>
      <div>
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              {eyebrow ? (
                <div className="mb-1">
                  <Element
                    id="eyebrow_text"
                    is={Text}
                    text={eyebrow}
                    className="text-base font-semibold text-blue-600 tracking-wide uppercase"
                  />
                </div>
              ) : null}
              <div>
                <Element
                  id="title_text"
                  is={Text}
                  text={title}
                  type="h2"
                  className="text-3xl font-extrabold tracking-tight text-gray-900"
                />
                <Element
                  id="body_text"
                  is={Text}
                  text={body}
                  className="mt-4 text-lg text-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://via.placeholder.com/2560x1536"
                width="2560"
                height="1536"
                alt="Inbox user interface"
              />
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

FeatureWithSideImage.craft = {
  props: {
    ...defaultProps
  }
}

FeatureWithSideImage.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

FeatureWithSideImage.defaultProps = {
  ...defaultProps
}

export default FeatureWithSideImage
