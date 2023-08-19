chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'performAction') {
      // ここに拡張機能の動作を実装する
      alert('Hello, World!')
      document.body.style.fontSize = "40px";
    }
  })