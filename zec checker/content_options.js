document.body.style.backgroundColor = 'red';
console.log("CONTENT")

var message = {
    type: "sendData",
    data: "Hello from content options script!"
  }; 

message.data = CheckOpitonsPage();

chrome.runtime.sendMessage(message, response => {
 
    console.log("Send hello message from content_option!");
});


function CheckOpitonsPage(){

  console.log("CheckOptionsPage");

  var errMsg = "";

  if(document.getElementById("option_has_note").checked == false){

    errMsg += "<p class=\"navbar\">";   
    errMsg += "無勾選備註欄";
    errMsg += "</p>";

    errMsg += "<br>";

    errMsg += "建議勾選備註欄，提供給消費者的資訊更完整";
    errMsg += "<br>";

    errMsg += "<br>";
  }

  if(document.getElementById("option_shipping_options[TW]").value == ''){

    errMsg += "<p class=\"navbar\">";   
    errMsg += "無設定 本島運費";
    errMsg += "</p>";

    errMsg += "<br>";

    errMsg += "請填寫運費處相關資訊，將台灣本島的運費設為 0。 其他地區運費則依您的需求訂定。如有無法寄送之國家、地區，請在運費處留空。";
    errMsg += "<br>";

    errMsg += "<br>";
  }


  if(document.getElementById("option_note_to_backer").value == ''){


    errMsg += "<p class=\"navbar\">";   
    errMsg += "無設定 給贊助人的話";
    errMsg += "</p>";

    errMsg += "<br>";

    errMsg += "建議填寫給贊助人的話，此部分是成功付款後會出現的文字，可再搭配其他行銷方案。";
    errMsg += "<br>";

    errMsg += "<br>";
  }



  return errMsg;  
}