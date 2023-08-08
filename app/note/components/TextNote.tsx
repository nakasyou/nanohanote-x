import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TipTapPluginNanoha } from "../utils/tiptap-plugin-nanoha.ts"

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TipTapPluginNanoha,
    ],
    content: '<p>Hello World!</p>',
  })

  return (
    <EditorContent editor={editor} />
  )
}
