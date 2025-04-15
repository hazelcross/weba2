
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import polyfill from 'rollup-plugin-polyfill-node';
import json from '@rollup/plugin-json';

export default {
  input: 'src/router.js',
  output: {
    format: 'iife',
    file: 'gen/router.js',
    globals: {
      lodash: '_',
    }
  },
  plugins: [
    commonjs(),
    resolve({
      browser: true,
      main: true
    }),
    polyfill(),
    json(),
    
    terser({
      compress: {
        drop_console: true,
      },
      format: {
        comments: false
      }
    })
  ]
};