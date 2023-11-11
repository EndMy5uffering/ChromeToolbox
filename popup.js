function sendAction(action) {
    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {"action": action});
    });
}

document.querySelector('#captureframe').addEventListener('click', () => {
    sendAction("captureFrame")
})