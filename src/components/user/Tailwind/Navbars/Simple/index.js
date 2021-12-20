import { Disclosure } from '@headlessui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import { nanoid } from 'nanoid'
import { useNode } from '@craftjs/core'

function SimpleNavbar() {
  const {
    connectors: { connect, drag }
  } = useNode((node) => ({
    selected: node.events.selected
  }))

  const navLinks = [
    {
      label: 'Home',
      href: '#'
    },
    {
      label: 'About',
      href: '#'
    },
    {
      label: 'Pricing',
      href: '#'
    },
    {
      label: 'Contact',
      href: '#'
    }
  ]

  return (
    <nav className="relative bg-white shadow" ref={(ref) => connect(drag(ref))}>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex flex-1">
                  <div className="flex-shrink-0 flex items-center">
                    <p>Logo</p>
                  </div>
                  <div className="hidden sm:ml-auto sm:flex sm:space-x-8">
                    {navLinks.map((link) => (
                      <a
                        key={nanoid()}
                        href={link.href}
                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        // className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={nanoid()}
                    href={link.href}
                    className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    // className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  )
}

export default SimpleNavbar
