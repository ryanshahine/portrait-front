/* eslint-disable no-console */
import { MdDesktopMac, MdTabletMac, MdPhoneIphone } from 'react-icons/md'
import PropTypes from 'prop-types'

import Button from '@/components/shared/atoms/Button'

function Header({ onPublish, handleExport }) {
  return (
    <header className="flex bg-white shadow-sm h-16 px-6 items-center justify-end text-sm z-1000">
      <div className="flex h-full items-center">
        <div className="h-10 p-0.5 flex rounded-lg bg-gray-100 hover:bg-gray-200">
          <button
            type="button"
            className="inline-flex w-9 min-w-min p-1.5 rounded-md items-center justify-center"
          >
            <MdPhoneIphone size="1.25em" />
          </button>
          <button
            type="button"
            className="inline-flex w-9 min-w-min p-1.5 rounded-md items-center justify-center"
          >
            <MdTabletMac size="1.25em" />
          </button>
          <button
            type="button"
            className="inline-flex w-9 min-w-min p-1.5 rounded-md items-center justify-center bg-white shadow-sm"
          >
            <MdDesktopMac size="1.25em" />
          </button>
        </div>

        <div className="w-px h-full bg-gray-200 mx-6" />

        <div>
          <Button size="md" variant="secondary" onClick={handleExport}>
            Export to html
          </Button>
          <Button size="md" className="ml-2" onClick={onPublish}>
            Publish Site
          </Button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  onPublish: PropTypes.func.isRequired,
  handleExport: PropTypes.func.isRequired
}

export default Header
