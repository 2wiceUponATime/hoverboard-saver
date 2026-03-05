const browserAPI = globalThis.browser ?? chrome;

const script = document.createElement("script");
script.type = "module";
script.src = browserAPI.runtime.getURL("dist/index.js");
document.documentElement.appendChild(script);
script.onload = () => script.remove();