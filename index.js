chrome.browserAction.onClicked.addListener(function(tab){
    if(tab.url.indexOf("https://ko.aliexpress.com/item/",0))
    {
        alert("수집할 수 없는 페이지 입니다.");
        return;
    }
    chrome.tabs.executeScript(tab.id, {file: 'go.js'});
    chrome.tabs.insertCSS(tab.id, {file: 'style.css'});
});
