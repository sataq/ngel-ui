if (typeof Promise === 'undefined') {
  window.Promise = require('promise-polyfill');
  require('whatwg-fetch');
}
