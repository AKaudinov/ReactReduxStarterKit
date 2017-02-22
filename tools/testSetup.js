process.env.NODE_ENV = 'test';

/*eslint-disable no-console*/
/*eslint-disable no-var*/

require('babel-register')();

require.extensions['.css'] = function(){return null;};
require.extensions['.scss'] = function(){return null;};
require.extensions['.png'] = function(){return null;};
require.extensions['.jpg'] = function(){return null;};

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator','document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).foreach((property) =>{
   if(typeof global[property] === 'undefined'){
       exposedProperties.push(property);
       global[property] = document.defaultView[property];
   }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document; //eslint-disable-lin no-undef