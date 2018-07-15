
chrome.runtime.onMessage.addListener(gotText);

window.word = "Select Word!";

function gotText(request, sender, sendResponse) {
  console.log(request);
  window.word = request.text;
}
