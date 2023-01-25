var script = document.createElement('script');
script.src = chrome.runtime.getURL('/main.js');
document.body.appendChild(script);