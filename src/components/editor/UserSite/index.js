import { useState, useEffect, useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { useEditor } from '@craftjs/core'
import Iframe, { useFrame } from 'react-frame-component'
import { Resizable } from 're-resizable'

import AppContext from '@/context/AppContext'

const SiteContent = ({ content, innerRef, onFrameScroll }) => {
  const { document: frameDocument, window: frameWindow } = useFrame()
  const [isTicking, setIsTicking] = useState(false)

  const handleScroll = useCallback(() => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        onFrameScroll(frameWindow.scrollY)
        setIsTicking(false)
      })

      setIsTicking(true)
    }
  }, [isTicking, onFrameScroll, frameWindow.scrollY])

  useEffect(() => {
    frameDocument.addEventListener('scroll', handleScroll)

    return () => {
      frameDocument.removeEventListener('scroll', handleScroll)
    }
  }, [frameDocument, handleScroll])

  return <div ref={innerRef}>{content}</div>
}

SiteContent.propTypes = {
  content: PropTypes.node.isRequired,
  onFrameScroll: PropTypes.func.isRequired
}

function UserSite({ wrapperRef, iframeRef, children }) {
  const { setFrameScrollY } = useContext(AppContext)

  const [userPageWidth, setUserPageWidth] = useState('100%')
  const [userPageHeight] = useState('100%')

  const { connectors } = useEditor((state) => ({
    enabled: state.options.enabled
  }))

  function handleFrameScroll(scrollY) {
    setFrameScrollY(scrollY)
  }

  return (
    <div
      className="w-full h-full p-12"
      ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
    >
      <Resizable
        size={{
          width: userPageWidth,
          height: userPageHeight
        }}
        minWidth={360}
        maxWidth="100%"
        bounds="parent"
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        }}
        onResizeStop={(e, direction, ref, d) => {
          setUserPageWidth({
            width: userPageWidth + d.width
          })
        }}
        handleStyles={{
          right: {
            right: '-10px'
          }
        }}
        handleClasses={{
          right: 'bg-gray-200'
        }}
      >
        <div
          ref={wrapperRef}
          className="relative w-full h-full overflow-hidden"
          style={{ width: `${userPageWidth}px` }}
        >
          <Iframe
            className="w-full h-full"
            initialContent="<!DOCTYPE html><html><head><link href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css' rel='stylesheet'></head><body><div></div></body></html>"
          >
            <SiteContent
              innerRef={iframeRef}
              content={children}
              onFrameScroll={handleFrameScroll}
            />
          </Iframe>
        </div>
      </Resizable>
    </div>
  )
}

UserSite.propTypes = {
  wrapperRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })])
    .isRequired,
  children: PropTypes.element.isRequired
}

export default UserSite
