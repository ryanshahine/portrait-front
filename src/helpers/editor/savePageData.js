import LZString from 'lz-string'

/**
 * @param query QueryMethods from craft.js useEditor()
 */
function savePageData(query) {
  let data = query.serialize()
  data = LZString.compressToUTF16(data)
  localStorage.setItem('pageData', data)
}

export default savePageData
