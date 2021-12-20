import ToolboxSection from '@/components/editor/Toolbox/ToolboxSection'
import ToolboxItem from '@/components/editor/Toolbox/ToolboxItem'

function ImageSettings() {
  return (
    <ToolboxSection title="Image">
      <ToolboxItem type="image" propKey="src" label="Image source" />
    </ToolboxSection>
  )
}

export default ImageSettings
