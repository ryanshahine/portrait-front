/**
 * This function cleans the html by removing any editor specific elements.
 * Used before publishing a website.
 */
function cleanHtml(node) {
  const cleanedHtml = node.cloneNode(true)
  const componentIndicators = cleanedHtml.querySelectorAll('.component-indicator')
  const editableElements = cleanedHtml.querySelectorAll('[contenteditable]')

  componentIndicators.forEach((e) => {
    e.remove()
  })

  editableElements.forEach((e) => {
    e.removeAttribute('contenteditable')
  })

  return cleanedHtml
}

export default cleanHtml
