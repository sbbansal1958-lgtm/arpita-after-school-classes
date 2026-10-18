/* =========================================================================
   Build ke baad "dist" ko ek single, self-contained HTML me badalta hai.
   Isse website bina kisi server ke (seedha double-click karke) khul jaati hai.
   Chalane ke liye:  npm run standalone
   ========================================================================= */
import { readFileSync, writeFileSync, readdirSync, existsSync, cpSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const assets = join(dist, 'assets')

let html = readFileSync(join(dist, 'index.html'), 'utf8')
const files = readdirSync(assets)
const css = files.find((f) => f.endsWith('.css'))
const js = files.find((f) => f.endsWith('.js'))

if (css) {
  const cssText = readFileSync(join(assets, css), 'utf8')
  html = html.replace(/<link[^>]*href="[^"]*assets\/[^"]*"[^>]*>/i, () => `<style>\n${cssText}\n</style>`)
}

if (js) {
  const jsText = readFileSync(join(assets, js), 'utf8').replace(/<\/script/gi, '<\\/script')
  html = html.replace(
    /<script[^>]*src="[^"]*assets\/[^"]*"[^>]*>\s*<\/script>/i,
    () => `<script type="module">\n${jsText}\n</script>`
  )
}

writeFileSync(join(dist, 'standalone.html'), html)
writeFileSync(join(root, 'website.html'), html)

// website.html root me hai, aur photos ko "./gallery/..." se dhoondhta hai.
// Isliye public/gallery ko root ke gallery/ me copy kar dete hain (ye git me nahi jaata).
const pubGallery = join(root, 'public', 'gallery')
const rootGallery = join(root, 'gallery')
if (existsSync(pubGallery)) {
  cpSync(pubGallery, rootGallery, { recursive: true, force: true })
  console.log('OK -> gallery/ (root copy) bhi ban gayi')
}

console.log('OK -> dist/standalone.html aur website.html ban gaye')
