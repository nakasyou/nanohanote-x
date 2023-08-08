import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { PluginNanoha } from "../utils/tiptap-plugin-nanoha.ts"

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      PluginNanoha,
    ],
    content: '<p>Hello World!</p>',
  })

  return (
    <EditorContent editor={editor} />
  )
}
