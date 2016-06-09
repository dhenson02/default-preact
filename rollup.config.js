import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { minify } from 'uglify-js';

export default {

    entry: 'src/js/app.js',
    exports: 'none',
    sourceMap: 'dist/js/app.js.map',
    treeshake: true,
    plugins: [
        commonjs({
            include: 'node_modules/**'
        }),
        babel({
            runtimeHelpers: true,
            plugins: [ 'external-helpers' ]
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        /*inject({
            include: 'node_modules/!**'
        }),*/
        uglify({
            screwIE8: true,
            mangle: true,
            sourceMap: 'dist/js/app.min.js.map',
            compress: {
                unsafe: true,
                keep_fargs: true,
                drop_console: true,
                collapse_vars: true,
                if_return: true,
                join_vars: true,
                cascade: true,
                booleans: true,
                loops: true,
                unused: true,
                comparisons: true,
                conditionals: true,
                drop_debugger: true,
                dead_code: true,
                properties: true,
                sequences: true
            }
        }, minify)
    ],
    targets: [
        // { dest: 'dist/js/app.min.js', format: 'cjs' },
        { dest: 'dist/js/app.min.js', format: 'es6' },
        // { dest: 'dist/js/app.min.js', format: 'iife' },
        // { dest: 'dist/js/app.min.js', format: 'umd' },
        // { dest: 'dist/js/app.min.js', format: 'amd' }
    ]
};
