// eslint-disable-next-line no-unused-vars
import { useCallback, useContext } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { useNode, useEditor } from '@craftjs/core'

import Icon from '@mdi/react'
import { mdiCursorMove, mdiDelete } from '@mdi/js'

// import AppContext from '@/context/AppContext'

import Button from '@/components/shared/atoms/Button'

// eslint-disable-next-line react/prop-types, no-unused-vars
const RenderNode = ({ render, container, iframe }) => {
  // const { frameScrollY } = useContext(AppContext)

  const { actions, query } = useEditor()

  const {
    id,
    isActive,
    isHover,
    dom,
    moveable,
    deletable,
    connectors: { drag }
  } = useNode((node) => ({
    isActive: node.events.selected,
    isHover: node.events.hovered,
    isDragged: node.events.dragged,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    props: node.data.props
  }))

  // eslint-disable-next-line no-shadow
  const getPos = useCallback((dom) => {
    // eslint-disable-next-line no-unused-vars
    const { width, height, top, left, right, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 }

    const posTop = dom.offsetTop

    return {
      width: `${width}px`,
      height: `${height}px`,
      transform: `translate(${left}px, ${posTop}px)`,
      posTop
      // top: `${top > 0 ? userSitePos.top + top : userSitePos.top}px`,
      // left: `${userSitePos.left + left}px`
    }
  }, [])

  return (
    <>
      {/* {console.log(drag)} */}
      {isHover || isActive
        ? ReactDOM.createPortal(
            <div className="component-indicator absolute w-full h-full top-0 left-0 pointer-events-none">
              <div
                className="absolute w-full h-full"
                // style={{ top: `-${frameScrollY}px` }}
              >
                {/* Rectangle */}
                <div
                  className={`
                      border pointer-events-none
                      ${isActive ? 'border-solid border-blue-600' : 'border-dashed border-blue-500'}
                    `}
                  style={{
                    width: getPos(dom).width,
                    height: getPos(dom).height,
                    transform: getPos(dom).transform,
                    zIndex: 100
                  }}
                >
                  {/* Toolbar */}
                  <div className="absolute h-10 text-white bg-blue-600 flex items-center pointer-events-auto">
                    {/* <h2 className="flex-1 mx-4">{name}</h2> */}
                    {moveable ? (
                      <Button className="mr-2 cursor-move" ref={drag}>
                        <Icon path={mdiCursorMove} size="1.25rem" />
                      </Button>
                    ) : null}
                    {deletable ? (
                      <Button
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation()
                          actions.delete(id)
                        }}
                      >
                        <Icon path={mdiDelete} size="1.25rem" />
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>,
            iframe
          )
        : null}
      {render}
    </>
  )
}

RenderNode.propTypes = {
  render: PropTypes.element.isRequired
}

export default RenderNode
