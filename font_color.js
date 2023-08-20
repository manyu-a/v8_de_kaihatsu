function numbers_color() {
	const elements = document.querySelectorAll('html');
  
	elements.forEach(element => {
	  const text = element.innerText;
	  const new_text = text.replace(/\d+/g, '<newtext style="color: red;">$&</newtext>');
	  element.innerHTML = new_text;
	});
  }
  
  chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  function: numbers_color
	});
  });
  