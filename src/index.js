/* Function that will be used to compile the minified template. */
const template = require('./template');

/* Function that will minify template text */
const minify = require('./minify');

/* Prefix for compatility with webpack. */
const prefix = 'module.exports = ';

/**
 * template-minify-loader
 * @param  {String} source Template text.
 * @return {String}        Serialized function with module prefix.
 */
module.exports = function tplCustomLoader(source) {
  this.cacheable();

  const compiledTemplate = template(minify(source));
  const execute = this.options && this.options.execute;

  if (execute) {
    return compiledTemplate(execute);
  }

  return prefix + compiledTemplate.toString();
};
