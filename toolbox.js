chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.action) {
            case "captureFrame":
                captureFrame();
                break;
            case "remove_menue":
                break;
            default:
                alert("Unknown action: " + request.action)
                break;
        }
    }
);


function captureFrame() {
    var imageName = prompt("Capture frame:", "Frame");
    if(!imageName) return;
    var video = document.querySelector('video');
    if(!video) alert("No video player could be found!");
    var canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(video, 0, 0);
    var dlLink = document.createElement('a');
    dlLink.download = imageName+ '.png';
    dlLink.href = canvas.toDataURL('image/png');
    dlLink.dataset.downloadurl = ['image/png', dlLink.download, dlLink.href].join(':');
    dlLink.click();
}