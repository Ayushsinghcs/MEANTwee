
window.addEventListener('mouseup', selectWord);

function selectWord() {
  let selectedText = window.getSelection().toString();
  console.log(selectedText);
  if (selectedText.length > 0) {
    var message = {
      text: selectedText
    };
    chrome.runtime.sendMessage(message);
  }
}
