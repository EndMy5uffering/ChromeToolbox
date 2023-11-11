chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.action) {
            case "add_menue":
                break;
            case "remove_menue":
                break;
            default:
                alert("Unknown action: " + request.action)
                break;
        }
    }
);