import { createContext } from 'react'

const AppContext = createContext({
  siteRef: null,
  setSiteRef: () => {},
  frameScrollY: 0,
  setFrameScrollY: () => {}
})

export default AppContext
