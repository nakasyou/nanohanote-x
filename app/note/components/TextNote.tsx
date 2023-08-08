import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TipTapPluginNanoha } from "../utils/tiptap-plugin-nanoha.ts"
import {
  IconNote,
  IconNoteOff,
} from '@tabler/icons-react'

export interface Props {
  mode: "edit" | "view"
}
export default (props: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TipTapPluginNanoha,
    ],
    content: '<p>TextNote</p>',
  })

  return (
    <>
      <div class="mx-10">
      {
        props.mode === "edit" ? 
          (<div>
              {/* Edit Mode */}
              <EditorContent editor={editor} class="p-4 rounded-md border" />
              <div>
                {/* コントロールパネル */}
                <div>
                  <button class="flex p-2 rounded-full justify-center items-center" onClick={() => {
                    editor?.chain().focus().toggleSheet().run()
                  }}>
                    <IconNote />
                  </button>
                </div>
              </div>
             </div>) : 
            (<div>
               {/* View Mode */}
              <div class="p-4 roundedxmd border">
                <div dangerouslySetInnerHTML={{
                  __html: editor.content
                }}/>
              </div>
            </div>)
            }
      </div>
    </>
  )
}
