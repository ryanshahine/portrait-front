import { useEffect, useState } from 'react'

const ToolboxImage = ({ onChange, value, prefix, label, type, ...props }) => {
  const [internalValue, setInternalValue] = useState(value)
  const [active, setActive] = useState(false)

  useEffect(() => {
    // if (value !== internalValue) {
    const val = value
    setInternalValue(val)
    // }
  }, [value, type])

  return (
    <div
      style={{ width: '100%', position: 'relative' }}
      onClick={() => {
        setActive(true)
      }}
    >
      <label>{label}</label>
      <input
        type="file"
        value={internalValue || ''}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onChange(e.target.value)
          }
        }}
        onChange={(e) => {
          setInternalValue(e.target.value)
        }}
        {...props}
      />
    </div>
  )
}

export default ToolboxImage
