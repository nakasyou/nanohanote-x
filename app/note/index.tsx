import TextNote from "./components/TextNote.tsx"
import {
  IconPlayerPlay,
  IconEdit,
} from "@tabler/icons-react"
import { useState } from "react"
import classnames from "classnames"

export default () => {
  const [mode, setMode] = useState<"edit" | "play">("edit")
  
  return <>
    <div>This is app!</div>
    <TextNote mode={mode} />
    
    <div class="fixed bottom-0">
      {/* Navbar */}
      <div class="flex">
        <div class="flex justify-center items-center bg-stone-100 rounded-full">
          <button onClick={()=>setMode("edit")} className={classnames("p-4 rounded-full", { "bg-lime-300": mode === "edit" })}>
            <IconEdit />
          </button>
          <button onClick={()=>setMode("play")} className={classnames("p-4 rounded-full", { "bg-lime-300": mode === "play" })}>
            <IconPlayerPlay />
          </button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  </>
}
