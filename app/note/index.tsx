import TextNote from "./components/TextNote.tsx"
import {
  IconPlayerPlay,
  IconEdit,
  IconEye,
} from "@tabler/icons-react"
import { useState } from "react"
import classnames from "classnames"

export default () => {
  const [mode, setMode] = useState<"edit" | "play">("edit")
  const [isView, setIsView] = useState(false)

  
  return <>
    <div>This is app!</div>
    <TextNote mode={mode} isView={isView} />
    
    <div class="fixed bottom-0">
      {/* Navbar */}
      <div class="flex gap-4">
        <div class="flex justify-center items-center bg-stone-100 rounded-full">
          <button onClick={()=>setMode("edit")} className={classnames("p-4 rounded-full", { "bg-lime-300": mode === "edit" })}>
            <IconEdit />
          </button>
          <button onClick={()=>setMode("play")} className={classnames("p-4 rounded-full", { "bg-lime-300": mode === "play" })}>
            <IconPlayerPlay />
          </button>
        </div>
        <div class="flex justify-center items-center gap-2">
          <button onClick={()=>setIsView(!isView)} class="p-4 rounded-full drop-shadow-md bg-emerald-100 hover:bg-emerald-200">
            <IconEye />
          </button>
        </div>
      </div>
    </div>
  </>
}
