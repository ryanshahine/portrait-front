import { useEffect, useState } from 'react'

const ToolboxTextInput = ({ onChange, value, prefix, label, type, ...props }) => {
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
      <p className="block text-sm font-medium text-gray-700 mb-1">{label}</p>
      <div>
        <input
          type="text"
          value={internalValue || ''}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onChange(e.target.value)
            }
          }}
          onChange={(e) => {
            setInternalValue(e.target.value)
          }}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...props}
        />
      </div>
    </div>
  )
}

export default ToolboxTextInput
