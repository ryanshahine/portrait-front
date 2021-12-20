import { Disclosure } from '@headlessui/react'
import Icon from '@mdi/react'
import { mdiMenuDown } from '@mdi/js'

const ToolboxSection = ({ title, children }) => {
  return (
    <Disclosure defaultOpen className="border-b border-gray-200">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center w-full px-4 py-3 text-sm font-medium text-left text-gray-900 bg-white hover:bg-gray-50  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
            <Icon path={mdiMenuDown} size="1rem" rotate={open ? 0 : -90} />
            <h5 className="text-sm text-gray-700 text-left font-medium text-dark-gray ml-1">
              {title}
            </h5>
          </Disclosure.Button>
          <Disclosure.Panel className="bg-white p-4">
            <div>{children}</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default ToolboxSection
