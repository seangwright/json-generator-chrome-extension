(function (chrome) {
    "use strict";
    
    chrome.browserAction.onClicked.addListener(function (activeTab) {
        let newURL = "index.html";
        chrome.tabs.create({ url: newURL });
    });
})(window.chrome);