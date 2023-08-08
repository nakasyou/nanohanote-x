import * as esbuild from "https://deno.land/x/esbuild@v0.17.12/mod.js"
import * as fs from "https://deno.land/std@0.192.0/fs/mod.ts"
import * as path from "https://deno.land/std@0.192.0/path/mod.ts"

import esbuildCachePlugin from 'https://deno.land/x/esbuild_plugin_cache_deno';
import lockMap from './lock.json' assert { type: 'json' };
import importMap from "../import_map.json" assert { type: "json" }

for await (const entry of fs.expandGlob("./**/*")) {
  const distPath = path.join("dist",entry.path.replace(Deno.cwd(), ""))
  if (entry.path.includes("dist") || entry.path.includes(".git") || entry.path.includes(".vscode")) {
    continue
  }
  if (entry.isDirectory) {
    console.log(distPath)
    fs.emptyDir(distPath)
  } else if(entry.isFile) {
    await Deno.copyFile(entry.path,distPath)
  }
}

const routes: string[] = []
for await (const entry of fs.expandGlob("./routes/**/*.{ts,tsx,mdx}")) {
  if (!entry.isFile) {
    continue
  }
  routes.push(entry.path)
}
await esbuild.build({
  outdir: "./dist/routes",
  entryPoints: [...routes],
  minify: true,
  bundle: true,
  plugins: [
    esbuildCachePlugin({
      lockMap,
      denoCacheDirectory: await esbuildCachePlugin.util.getDenoDir(),
      importmap: importMap,
    }),
    /*{
      name: "Aleph",
      setup (build) {
        
      }
    }*/
  ],
  external: [...Object.keys(importMap.imports)],
  format: "esm"
})
esbuild.stop()
for await (const entry of fs.expandGlob("./dist/routes/**/*.js")) {
  if (!entry.isFile) {
    continue
  }
  const file = "import React from 'react';" +await Deno.readTextFile(entry.path)
  await Deno.writeTextFile(entry.path.replace(/\.js$/, ".ts"), file)
  await Deno.remove(entry.path)
}

for await (const entry of fs.expandGlob("./dist/**/*.js")) {
  if (!entry.isFile) {
    continue
  }
  await Deno.rename(entry.path, entry.path.replace(/\.js$/, ".ts"))
}
const exportTs = (await Deno.readTextFile("./routes/_export.ts")).replaceAll(".tsx",".ts")
await Deno.writeTextFile("./dist/routes/_export.ts", exportTs)
