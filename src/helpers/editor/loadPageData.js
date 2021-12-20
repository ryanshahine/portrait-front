import LZString from 'lz-string'
import { isEmpty } from 'lodash'
import { isJsonString } from '@/utils'

function loadPageData() {
  let data = localStorage.getItem('pageData')
  data = LZString.decompressFromUTF16(data)

  const parsedData = isJsonString(data) ? JSON.parse(data) : null

  // Valid JSON and not empty
  if (parsedData && !isEmpty(parsedData)) {
    return data
  }

  localStorage.setItem('pageData', null)
  return null
}

export default loadPageData
