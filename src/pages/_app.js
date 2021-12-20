/* eslint-disable react/prop-types, react/jsx-props-no-spreading, import/no-extraneous-dependencies */
import 'tailwindcss/tailwind.css'
import { useState, useRef } from 'react'
import AppContext from '@/context/AppContext'

function App({ Component, pageProps }) {
  const [siteRef, setSiteRef] = useRef(null)
  const [frameScrollY, setFrameScrollY] = useState(0)

  const value = {
    siteRef,
    setSiteRef,
    frameScrollY,
    setFrameScrollY
  }

  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default App
