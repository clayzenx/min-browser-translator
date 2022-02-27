// ==UserScript==
// @name Translator
// @match *
// @run-at document-start
// ==/UserScript==

const script = document.createElement('script')
script.setAttribute('type', 'module')
script.innerHTML = 'Paste configured inline script from test.html here';
document.head.appendChild(script)

