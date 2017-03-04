# template-minify-loader

Lodash template loader for webpack. Besides standard template creating, removes extra white spaces.

`lodash` or `lodash.template` *must* be loaded.

### Installation

`npm install template-minify-loader`

### Usage

```javascript
module.exports = {
  //...
  module: {
    loaders: [
      {
        test: /\.tpl$/,
        loader: 'template-minify-loader'
      }
    ]
  },
};
```

#### Using compiled template

```html
<!-- template.tpl -->
'<div class="<%= someClass %>"><% %></div>'
```

```javascript
const template = require('./template.tpl');
const result = template({name: 'some-class'});

/* Prints '<div class="some-class"></div>' */
console.log(result);
```
