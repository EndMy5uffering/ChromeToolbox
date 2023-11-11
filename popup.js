function send_add_buttons() {
    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {"action": "add_menue"});
    });
}

function send_remove_buttons() {
    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {"action": "remove_menue"});
    });
}

document.querySelector('#yt_action_btn_add').addEventListener('click', send_add_buttons)
document.querySelector('#yt_action_btn_remove').addEventListener('click', send_remove_buttons)