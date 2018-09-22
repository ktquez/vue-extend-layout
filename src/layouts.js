import { OPTIONS } from './constants'

/**
 * Retrieve context components to global register on Vue
 * @export
 * @return {Array} With layout components
 */
export default function layouts () {

  let layoutPath = '@/'+OPTIONS.layoutDefaultPath

  const layouts = require.context(layoutPath, false, /^\.\/.*\.vue$/)
  return layouts.keys().map(layouts)
}
