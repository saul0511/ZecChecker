

document.addEventListener("DOMContentLoaded", function(){

});

const popupMessage = {
    type: "getData",
    data: ""
  }; 


chrome.runtime.sendMessage(popupMessage, response => {

    console.log("Send hello message from popup.js!");
    
    if (response.type === "contentData") {
        console.log("if case:contentData");
        console.log(response);

        // assign value to popupMessage
        popupMessage.data = response.data;
        console.log("popupMessage:");
        console.log(popupMessage);

        // change popup.html's DOM
        document.getElementById("para1").innerHTML = popupMessage.data;
    }

});
  