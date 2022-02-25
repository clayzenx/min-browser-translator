// ==UserScript==
// @name Translator
// @match *
// @run-at document-start
// ==/UserScript==

const script = document.createElement('script')
script.setAttribute('type', 'module')
script.innerHTML = 'Сюда инлайном скрипт из тестового хтмл'; 
document.head.appendChild(script)

