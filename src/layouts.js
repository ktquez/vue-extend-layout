/**
 * Retrieve context components to global register on Vue
 * @export
 * @param {String} dirname
 * @return {Array} With layout components
 */
export default function layouts (dirname) {
  const layouts = require.context('@/layouts', false, /^\.\/.*\.vue$/)
  return layouts.keys().map(layouts)
}
