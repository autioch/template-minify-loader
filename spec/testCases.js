module.exports = [{
  source: '<div></div>',
  minified: '<div></div>'
}, {
  source: ' <div></div>',
  minified: '<div></div>'
}, {
  source: '<div></div> ',
  minified: '<div></div>'
}, {
  source: '<div><% %></div>',
  minified: '<div></div>'
}, {
  source: '<div><%- test %></div>',
  minified: '<div><%- test %></div>'
}, {
  source: '<div class="<%= someClass %>"><% %></div>',
  minified: '<div class="<%= someClass %>"></div>'
}, {
  source: `<div
    class="<%= someClass %>"><% %></div>`,
  minified: '<div class="<%= someClass %>"></div>'
}, {
  source: `<div
    class="<%= someClass %>"
  />`,
  minified: '<div class="<%= someClass %>" />'
}, {
  source: `<div class="<%= someClass %>"></div>
  <div class="<%= someClass %>"></div>`,
  minified: '<div class="<%= someClass %>"></div><div class="<%= someClass %>"></div>'
}];
