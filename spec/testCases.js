/* eslint-disable no-sync */
const fs = require('fs');
const { join } = require('path');

const templateFiles = fs.readdirSync(join(__dirname, 'testCases'));

module.exports = {
  fromFile: templateFiles.map((fileName) => fs.readFileSync(join(__dirname, 'testCases', fileName), 'utf8')),
  withResult: [{
    source: '<div></div>',
    minified: '<div></div>',
    compiled: '<div></div>'
  }, {
    source: ' <div></div>',
    minified: '<div></div>',
    compiled: '<div></div>',
    execute: true
  }, {
    source: '<div></div> ',
    minified: '<div></div>',
    compiled: '<div></div>',
    execute: {}
  }, {
    source: '<div><% %></div>',
    minified: '<div></div>',
    compiled: '<div></div>'
  }, {
    source: '<div><%- test %></div>',
    minified: '<div><%- test %></div>',
    compiled: '<div>be-happy</div>',
    execute: {
      test: 'be-happy'
    }
  }, {
    source: '<div class="<%= someClass %>"><% %></div>',
    minified: '<div class="<%= someClass %>"></div>',
    compiled: '<div class="be-happy"></div>',
    execute: {
      someClass: 'be-happy'
    }
  }, {
    source: `<div
    class="<%= someClass %>"><% %></div>`,
    minified: '<div class="<%= someClass %>"></div>',
    compiled: '<div class="be-happy"></div>',
    execute: {
      someClass: 'be-happy'
    }
  }, {
    source: `<div
    class="<%= someClass %>"
  />`,
    minified: '<div class="<%= someClass %>" />',
    compiled: '<div class="be-happy" />',
    execute: {
      someClass: 'be-happy'
    }
  }, {
    source: `<div class="<%= someClass %>"></div>
  <div class="<%= someClass %>"></div>`,
    minified: '<div class="<%= someClass %>"></div><div class="<%= someClass %>"></div>',
    compiled: '<div class="be-happy"></div><div class="be-happy"></div>',
    execute: {
      someClass: 'be-happy'
    }
  }]
};
