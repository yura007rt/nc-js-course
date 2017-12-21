/**
 * script tag can be embedded in any place of a document
 */
var script = document.createElement('script');
script.innerHTML = 'alert("hello world")';
document.querySelector('body').appendChild(script);
document.querySelector('head').appendChild(script);

var div = document.createElement('div');
document.querySelector('body').appendChild(div);
document.querySelector('div').appendChild(script);

// var scriptElem = document.createElement('script');
// elem.innerHTML = 'alert("hello world")';
// document.querySelector('head').appendChild(elem);