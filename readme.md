# template-minify-loader

Lodash template loader for webpack. Besides standard template creating, removes extra white spaces.

## Peer dependency

`lodash` or `lodash.template` *must* be installed.

### Installation

`npm i template-minify-loader`

### Usage

```javascript
module.exports = {
  //...
  module: {
    loaders: [
      {
        test: /\.tpl$/,
        use: [{
          loader:'template-minify-loader',
          options: {
            /* By default, loader will only compile the template.
             * If `execute` is set to a truthy value, templates will be called with it.
             * The results of this call will be returned instead of the template.
             */
            execute: false            
          }
        }]
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
