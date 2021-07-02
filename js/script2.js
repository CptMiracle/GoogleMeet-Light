var storage = chrome.storage.sync;

chrome.tabs.insertCSS(null, {file: storage})

white.addEventListener("click", function () {
//   alert("Switched to white theme.");
    chrome.tabs.insertCSS(null, {file:"styles/style-white.css"})
    chrome.storage.sync.set({file: "styles/style-white.css"})
});

blue.addEventListener("click", function () {
//   alert("Switched to blue theme.");
    chrome.tabs.insertCSS(null, {file:"styles/style-blue.css"})
    chrome.storage.sync.set({file: "styles/style-blue.css"})
});

purple.addEventListener("click", function () {
//   alert("Switched to purple theme.");
    chrome.tabs.insertCSS(null, {file:"styles/style-purple.css"})
});

orange.addEventListener("click", function () {
//   alert("Switched to orange theme.");
    chrome.tabs.insertCSS(null, {file:"styles/style-orange.css"})
});

green.addEventListener("click", function () {
//   alert("Switched to green theme.");
    chrome.tabs.insertCSS(null, {file:"styles/style-green.css"})
});
