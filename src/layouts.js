/**
 * Retrieve context components to global register on Vue
 * @export
 * @return {Array} With layout components
 */
export default function layouts () {
  const layouts = require.context('@/layouts', false, /^\.\/.*\.vue$/)
  return layouts.keys().map(layouts)
}
