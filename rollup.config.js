import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import VueLoader from 'rollup-plugin-vue'
import json from 'rollup-plugin-json'

export default {
  entry: 'src/index.js',
  plugins: [
    resolve(),
    VueLoader(),
    json(),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  targets: [
    {
      dest: 'dist/vue-extend-layout.cjs.js',
      format: 'cjs'
    },
    {
      dest: 'dist/vue-extend-layout.es.js',
      format: 'es'
    },
    {
      dest: 'dist/vue-extend-layout.amd.js',
      format: 'amd'
    }
  ]
}
