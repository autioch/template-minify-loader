/* List of strings that can be removed without changing the template. */
const definitions = [{
  test: /(\t|\r\n|\r|\n) */gm,
  result: ' '
}, {
  test: / +/gm,
  result: ' '
}, {
  test: /<% %>/gm,
  result: ''
}, {
  test: /> </gm,
  result: '><'
}];

/**
 * Replaces all occurences of the given regex in the source.
 * @param  {String} source Template text.
 * @param  {Object} def    Item of definitions.
 * @return {String}        Reduced text.
 */
const replacer = (source, def) => source.replace(def.test, def.result);

/**
 * Minifies template content using predefined definitions.
 * @param  {String} source Template text.
 * @return {String}        Reduced text.
 */
module.exports = function minify(source) {
  return definitions.reduce(replacer, source.trim());
};
