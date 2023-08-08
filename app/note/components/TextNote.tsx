import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TipTapPluginNanoha } from "../utils/tiptap-plugin-nanoha.ts"
import {
  IconNote,
  IconNoteOff,
} from '@tabler/icons-react'
import {
  useRef,
  useEffect,
} from "react"

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
  const viewEditorRef = useRef(null)
  useEffect(() => {
    for (const nanohaSheetElement of (viewEditorRef?.current?.getElementsByClassName("nanoha-sheet") || [])) {
      nanohaSheetElement.dataset.isview = "true"
      nanohaSheetElement.style = ""
      const getIsView = (): boolean => (nanohaSheetElement.dataset.isview === "true")
      const reset = () => {
        if (getIsView()) {
          nanohaSheetElement.classList.add("bg-red-100")
          nanohaSheetElement.classList.remove("bg-red-500")
          nanohaSheetElement.classList.remove("text-transparent")
        } else {
          nanohaSheetElement.classList.remove("bg-red-100")
          nanohaSheetElement.classList.add("bg-red-500")
          nanohaSheetElement.classList.add("text-transparent")
        }
      }
      reset()
      nanohaSheetElement.onclick = () => {
        nanohaSheetElement.dataset.isview = !getIsView()
        const isView = getIsView()
        reset()
      }
    }
  }, [props.mode])
  return (
    <>
      <div class="mx-10">
        {editor?.getHTML()}
      {
        props.mode === "edit" ? 
          (<div>
              {/* Edit Mode */}
              <div class="p-4 rounded-md border">
                <EditorContent editor={editor} />
              </div>
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
                <div ref={viewEditorRef} dangerouslySetInnerHTML={{
                  __html: editor.getHTML()
                }}/>
              </div>
            </div>)
            }
      </div>
    </>
  )
}
