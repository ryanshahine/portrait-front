import ToolboxSection from '@/components/editor/Toolbox/ToolboxSection'
import ToolboxItem from '@/components/editor/Toolbox/ToolboxItem'

function TextSettings() {
  return (
    <ToolboxSection title="Typography">
      <ToolboxItem type="text" propKey="color" label="Color" />
      <ToolboxItem type="text" propKey="fontSize" label="Font size" />
      <ToolboxItem type="text" propKey="fontWeight" label="Font weight" />
      {/* <ToolboxItem type="text" propKey="align" label="Align" /> */}
    </ToolboxSection>
  )
}

export default TextSettings
