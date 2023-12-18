import { talk } from "../utils/helper";

console.info('contentScript is running')

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "TALK") {
    talk(request.msg);
  }
});