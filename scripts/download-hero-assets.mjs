/**
 * Downloads hero collage + background JPEGs and self-hosted Google Fonts (latin woff2).
 * Run: node scripts/download-hero-assets.mjs
 * Requires network. Commit outputs under public/hero and public/fonts for offline/CDN-free loads.
 *
 * Educational: this is the only “network I/O” in the toolchain — not a runtime API for the site.
 * The live page still works if you skip this script: js/data.js lists IMAGE_REMOTE_FALLBACK URLs.
 *
 * Duck / fish-alt / guinea use Pexels CDN URLs (verified animal subjects). Pexels license: free use,
 * see https://www.pexels.com/license/
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const heroDir = path.join(root, "public", "hero");
const fontDir = path.join(root, "public", "fonts");

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function download(url, dest) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": UA,
      Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
}

/**
 * Collage + full-bleed slides (matches js/data.js remote fallbacks).
 * URLs chosen so each file is clearly the named animal (not generic landscapes).
 */

async function downloadLatinWoff2() {
  fs.mkdirSync(fontDir, { recursive: true });
  const cssUrl =
    "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,600;0,700;1,400&display=swap";
  const cssRes = await fetch(cssUrl, { headers: { "User-Agent": UA } });
  if (!cssRes.ok) throw new Error(`Font CSS ${cssRes.status}`);
  const css = await cssRes.text();

  const blocks = css.split("@font-face");
  /** @type {Map<string, string>} first saved path per woff2 URL (Google often reuses one file per family for all weights). */
  const urlToPath = new Map();
  let count = 0;

  for (const block of blocks) {
    if (!block.includes("U+0000-00FF")) continue;
    const m = block.match(/src:\s*url\(([^)]+\.woff2)\)/);
    if (!m) continue;
    const woffUrl = m[1];

    const isFredoka = /font-family:\s*['"]Fredoka['"]/.test(block);
    const fam = isFredoka ? "fredoka" : "nunito";
    const wm = block.match(/font-weight:\s*(\d+)/);
    const wt = wm ? wm[1] : "400";
    const isItalic = /font-style:\s*italic/.test(block);
    const fname = `${fam}-${wt}${isItalic ? "-italic" : ""}.woff2`;
    const dest = path.join(fontDir, fname);

    process.stdout.write(`font ${fname}… `);
    if (urlToPath.has(woffUrl)) {
      fs.copyFileSync(urlToPath.get(woffUrl), dest);
      console.log("ok (copy)");
    } else {
      await download(woffUrl, dest);
      urlToPath.set(woffUrl, dest);
      console.log("ok");
    }
    count += 1;
  }

  console.log(`Fonts: ${count} latin @font-face file(s).`);
}

async function main() {
  await downloadLatinWoff2();
  console.log("All downloads finished.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
