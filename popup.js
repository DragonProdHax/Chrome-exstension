document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("goButton").addEventListener("click", function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.update(tabs[0].id, { url: "https://enderandsam.github.io/r" });
      });
    });
  
    document.getElementById("stayButton").addEventListener("click", function() {
      window.close(); // Close the popup
    });
  });
  