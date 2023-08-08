import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TipTapPluginNanoha } from "../utils/tiptap-plugin-nanoha.ts"
import {
  IconNote,
  IconNoteOff,
} from '@tabler/icons-react'

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TipTapPluginNanoha,
    ],
    content: '<p>TextNote</p>',
  })

  return (
    <>
      <div>
        {/* Edit Mode */}
        <EditorContent editor={editor} />
        <div>
          {/* コントロールパネル */}
          <div>
            <button class="flex p-2 rounded-full justify-center items-center" onClick={() => {
              editor?.chain().focus().toggleBold().run()
            }}>
              <IconNote />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
