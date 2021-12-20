import React from 'react'
import { useNode } from '@craftjs/core'
import ToolboxTextInput from './elements/ToolboxTextInput'
import ToolboxImage from './elements/ToolboxImage'

const ToolboxItem = ({ propKey, type, onChange, index, label, ...props }) => {
  const {
    actions: { setProp },
    propValue
  } = useNode((node) => ({
    propValue: node.data.props[propKey]
  }))
  const value = propValue

  return (
    <div className="mb-4">
      {label ? <h4>{label}</h4> : null}
      {['text'].includes(type) ? (
        <ToolboxTextInput
          {...props}
          type={type}
          value={value}
          onChange={(value) =>
            setProp((props) => (props[propKey] = onChange ? onChange(value) : value))
          }
        />
      ) : type === 'image' ? (
        <ToolboxImage />
      ) : null}
    </div>
  )
}

export default ToolboxItem
