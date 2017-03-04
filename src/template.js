let templateFunction;
let found = false;

try {
  require.resolve('lodash');
  templateFunction = require('lodash').template;
  found = true;
} catch (err) {}

if (!found) {
  try {
    require.resolve('lodash.template');
    templateFunction = require('lodash.template');
    found = true;
  } catch (err) {}
}

if (!found) {
  throw Error('template-minify-loader requires `lodash` or `lodash.template` installed.');
}

module.exports = templateFunction;
