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
    <TextNote />
    <div class="sticky bottom-0">
      <div class="flex justify-center items-center">
        <button onClick={()=>setMode("edit")} className={classnames({ "bg-lime-300": mode === "edit" })}>
          <IconEdit />
        </button>
        <button onClick={()=>setMode("view")} className={classnames({ "bg-lime-300": mode === "view" })}>
          <IconEye />
        </button>
        { mode }
      </div>
    </div>
  </>
}
