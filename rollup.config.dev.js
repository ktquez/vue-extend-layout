import resolve from 'rollup-plugin-node-resolve'
import VueLoader from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import chokidar from 'chokidar'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    eslint({
      include: './src/**'
    }),
    VueLoader(),
    babel(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    })
  ],
  output: [
    {
      name: 'VueExtendLayout',
      file: 'example/vue-extend-layout.js',
      format: 'umd'
    }
  ]
}
