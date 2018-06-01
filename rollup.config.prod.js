import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import VueLoader from 'rollup-plugin-vue'
import butternut from 'rollup-plugin-butternut'

export default {
  input: 'src/index.js',
  plugins: [
    VueLoader(),
    babel(),
    butternut(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    })
  ],
  output: [
    {
      file: 'dist/vue-extend-layout.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/vue-extend-layout.es.js',
      format: 'es'
    },
    {
      file: 'dist/vue-extend-layout.amd.js',
      format: 'amd'
    },
    {
      name: 'VueExtendLayout',
      file: 'dist/vue-extend-layout.js',
      format: 'umd'
    }
  ]
}
