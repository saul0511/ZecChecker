chrome.runtime.onInstalled.addListener(() => {
 });


let dataFromContentScript = "";

// Listen for messages from content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
 
  // content.js case
  if (request.type === "sendData") {
    
    
    console.log("if case:sendData"); 
    console.log(JSON.stringify(request));

    dataFromContentScript = request.data;
    console.log("dataFromContentScript:" + dataFromContentScript);

    return true;
 
  }

    // popup.js case
  if (request.type === "getData") {
    console.log("if case:getData"); 
    // send dataFromContentScript
    console.log("dataFromContentScript:" + dataFromContentScript);
    sendResponse({
      type:"contentData", 
      data: dataFromContentScript
    });  
    return true;
  }
});