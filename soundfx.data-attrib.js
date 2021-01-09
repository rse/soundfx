/*
**  SoundFX -- Sound Effect Collection
**  Copyright (c) 2020-2021 Dr. Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const fs   = require("fs")
const glob = require("glob")

;(async () => {
    let info = {}
    for (const file of glob.sync("soundfx.d/*.txt").sort()) {
        const name = file.replace(/^soundfx\.d\/(.+?)\.txt$/, "$1")
        let txt = fs.readFileSync(file, { encoding: "utf8" })
        let cfg = { SoundName: name }
        txt.replace(/^(.+?):\s*(.+)$/mg, (_, key, val) => { cfg[key.replace(/-/g, "")] = val })
        let id = cfg.LicenseName.replace(/^.*\((.+?)\).*$/, "$1")
        if (info[id] === undefined)
            info[id] = []
        info[id].push(cfg)
    }
    let html = "This software uses the <a href=\"https://npmjs.com/@rse/soundfx\">SoundFX</a> Sound Effect Collection.\n"
    for (const id of Object.keys(info).sort()) {
        html += `SoundFX is based on the following <a href="${info[id][0].LicenseURL}">${info[id][0].LicenseName}</a> licensed sound effects:\n`
        let first = true
        for (const fx of info[id]) {
            if (!first)
                html += ",\n"
            html += `<b>${fx.SoundName}</b> from <a href="${fx.SoundOrigin}">${fx.SoundCopyright}</a>`
            first = false
        }
        html += ".\n"
    }
    fs.writeFileSync("soundfx.data-attrib.json", JSON.stringify(html), { encoding: "utf8" })
})().catch((err) => {
    console.log(`ERROR: ${err}`)
})

