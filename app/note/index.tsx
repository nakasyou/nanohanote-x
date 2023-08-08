import TextNote from "./components/TextNote.tsx"
import {
  IconEye,
  IconEdit,
} from "@tabler/icons-react"
import { useState } from "react"
import classnames from "classnames"

export default () => {
  const [mode, setMode] = useState<"edit" | "view">("edit")
  
  return <>
    <div>This is app!</div>
    <TextNote mode={mode} />
    
    <div class="fixed bottom-0">
      {/* Navbar */}
      <div class="flex justify-center items-center">
        <button onClick={()=>setMode("edit")} className={classnames("p-4 rounded-full", { "bg-lime-300": mode === "edit" })}>
          <IconEdit />
        </button>
        <button onClick={()=>setMode("view")} className={classnames("p-4 rounded-full", { "bg-lime-300": mode === "view" })}>
          <IconEye />
        </button>
      </div>
    </div>
  </>
}
