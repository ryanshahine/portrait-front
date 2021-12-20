/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import { Element, useNode } from '@craftjs/core'

import Text from '@/components/user/Tailwind/Elements/Text'

const teamMembers = [
  {
    id: 'team_member_1',
    image: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80`,
    name: 'Jeff Jefferson',
    role: 'Staff Engineer, Acme Inc.'
  },
  {
    id: 'team_member_2',
    image: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80`,
    name: 'Jeff Jefferson',
    role: 'Staff Engineer, Acme Inc.'
  },
  {
    id: 'team_member_3',
    image: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80`,
    name: 'Jeff Jefferson',
    role: 'Staff Engineer, Acme Inc.'
  }
]

function TeamCardsWithAvatars({ title, subTitle, body }) {
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
    <div className="bg-white" ref={connect}>
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 mx-auto text-center lg:max-w-3xl xl:max-w-none">
            <Element
              id="title_text"
              is={Text}
              tag="h2"
              text={title}
              className="text-3xl font-extrabold tracking-tighter sm:text-4xl"
            />
            <Element
              id="subtitle_text"
              is={Text}
              text={subTitle}
              className="text-xl text-gray-500"
            />
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {teamMembers.map(({ id, image, name, role }) => {
              return (
                <li key={id}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <figure className="bg-gray-100 max-w-6xl rounded-lg p-8 card">
                        <img
                          className="w-48 h-48 shadow-2xl rounded-full mx-auto"
                          src={image}
                          alt=""
                          width="384"
                          height="512"
                        />
                        <div className="pt-6 space-y-4">
                          <figcaption className="text-center">
                            <Element
                              id={`${id}-name`}
                              is={Text}
                              text={name}
                              className="font-medium text-gray-800 text-xl"
                            />
                            <Element
                              id={`${id}-role`}
                              is={Text}
                              text={role}
                              className="text-gray-500 font-normal"
                            />
                          </figcaption>
                        </div>
                      </figure>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const defaultProps = {
  eyebrow: 'Lightning fast',
  title: `Our team`,
  subTitle: `Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec
  risus sodales. Tempus quis et.`,
  body: `Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada
  faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis
  sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.`
}

TeamCardsWithAvatars.craft = {
  props: {
    ...defaultProps
  }
}

TeamCardsWithAvatars.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

TeamCardsWithAvatars.defaultProps = {
  ...defaultProps
}

export default TeamCardsWithAvatars
