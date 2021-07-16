import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import glob from 'glob';
import { uglify } from "rollup-plugin-uglify";

import { babel } from '@rollup/plugin-babel';

export default {
    // input: 'src/getNowDate.js',
    input: glob.sync('src/**/*.js'),
    output: [
        {
            format: 'es',
            dir:'dist/es',
            name:'zonst_utils',
            // format: 'amd',
            // dir:'amd',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        {
            // format: 'es',
            // dir:'es',
            name:'zonst_utils',
            format: 'amd',
            dir:'dist/amd',
            // file: 'out.js',
            // inlineDynamicImports: true

        },
        {
            // format: 'es',
            // dir:'es',
            name:'zonst_utils',
            format: 'cjs',
            dir:'dist/cjs',
            // file: 'out.js',
            // inlineDynamicImports: true

        }
    ],
    plugins: [
        json(),
        resolve(),
        commonjs({
            include: 'node_modules/**',
        }),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**'
    }),
    // uglify()

    ],
    external:["@babel/runtime"]
};
