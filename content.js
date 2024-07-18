chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "openPopup") {
      chrome.runtime.sendMessage({ action: "openPopup" });
    }
  });
  