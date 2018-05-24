import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import VueLoader from 'rollup-plugin-vue'
import butternut from 'rollup-plugin-butternut'

export default {
  entry: 'src/index.js',
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
    },
    {
      name: 'VueExtendLayout',
      file: 'dist/vue-extend-layout.js',
      format: 'umd'
    }
  ]
}
