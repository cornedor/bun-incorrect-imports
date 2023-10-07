import { glob } from "glob";

let files = await glob("{client,pages}/**/*.js");
console.log("Building", files.length, files);

console.log(
  await Bun.build({
    entrypoints: files,
    outdir: "./build",
    splitting: true,
  })
);

// let startBuilder = async () => {
//   let pages = await Glob.glob("{pages,client}/**/*.{ts,tsx,mdx,js}")
//   Js.log("Building " ++ Belt.Int.toString(Array.length(pages)) ++ " files...")
//   await Bun.build({
//     entrypoints: pages,
//     outdir: "./_s",
//     splitting: true,
//     plugins: [MDXPlugin.mdxPlugin],
//     // minify: process.env.DEV_MODE !== "true",
//   })
// }

// Promise.done(startBuilder())
