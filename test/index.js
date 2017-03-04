/* This isn't a real test, just a file for checking behaviour. */

/* The templateMinifyLoader */
const loader = require('../src');

/* Just random template */
const templateExample = '<div class="<%= someClass %>"><% %></div>';

/* Simulate context that is normally given by webpack. */
const webpackSimulator = {
  cacheable: () => {}
};

/* This should be a function. */
const result = loader.call(webpackSimulator, templateExample);

console.log(result);
