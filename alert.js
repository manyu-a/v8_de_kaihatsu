function showAlert() {
	document.body.style.fontSize = "40px";
}
flag = 0
chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
        function: showAlert()
	});
});