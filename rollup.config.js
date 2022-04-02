/*
**  SoundFX -- Sound Effect Collection
**  Copyright (c) 2020-2022 Dr. Ralf S. Engelschall <rse@engelschall.com>
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

import commonjs    from "@rollup/plugin-commonjs"
import replace     from "@rollup/plugin-replace"
import resolve     from "@rollup/plugin-node-resolve"
import json        from "@rollup/plugin-json"
import babel       from "rollup-plugin-babel"
import { terser }  from "rollup-plugin-terser"

export default {
    external:      [],
    context:       "window",
    moduleContext: "window",
    plugins: [
        resolve({ browser: true }),
        commonjs(),
        replace({ "__dirname": "\".\"", preventAssignment: true }),
        json(),
        babel({
		    babelrc: false,
            runtimeHelpers: true,
            include: [ "soundfx.js" ],
            exclude: [ "node_modules/**" ],
		    presets: [ [ "@babel/preset-env", { targets: { ie: 9 }, modules: false } ] ]
	    }),
        terser()
    ],
    input: "soundfx.js",
    output: {
        globals: {},
        file:   "soundfx.browser.js",
        name:   "SoundFX",
        format: "umd"
    }
}

