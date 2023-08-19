function showAlert() {
	document.body.style.fontSize = "40px";
}
chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: showAlert
	});
});