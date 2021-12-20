import { createElement } from 'react'
import { useEditor } from '@craftjs/core'

function Toolbox() {
  const { active, related } = useEditor((state) => ({
    active: state.events.selected,
    related: state.events.selected && state.nodes[state.events.selected].related
  }))

  return (
    <div className="hidden md:flex md:flex-shrink-0 bg-white border-r border-gray-100 font-medium text-sm shadow-sm">
      <div className="flex flex-col w-64">
        <div className="flex-col h-full">
          <div className="mt-4" mt="4">
            {active && related.toolbox && createElement(related.toolbox)}
            {!active ? (
              <div className="p-4">
                <p className="px-4 text-gray-500">Click on a component to start editing.</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

Toolbox.propTypes = {}

export default Toolbox
