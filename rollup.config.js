
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
        replace({ "__dirname": "\".\"" }),
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

