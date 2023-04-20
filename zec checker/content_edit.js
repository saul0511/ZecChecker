document.body.style.backgroundColor = 'blue';

var message = {
    type: "sendData",
    data:  ""
  }; 

message.data = CheckEditPage();
  

chrome.runtime.sendMessage(message, response => {

    console.log("Send hello message from content_edit!");

});

function CheckEditPage() {

  console.log("CheckEditPage");

  var errMsg = "";

  if(document.getElementById("project_contact").value == ''){
    
    errMsg += "<p class=\"navbar\">";   
    errMsg += "無設定 客服聯絡方式";
    errMsg += "</p>";

    errMsg += "<br>";

    errMsg += "建議包含客服信箱、聯絡電話或 Line。 若未填寫、或無明確的聯絡管道 (如：只含官網、Facebook 網址)，將被金流拒絕帳戶申請及信用卡交易。";
    errMsg += "<br>";

    errMsg += "<br>";
  }

  if(document.getElementById("project_risk_description").value == ''){

    errMsg += "<p class=\"navbar\">";   
    errMsg += "無描述 風險與挑戰";
    errMsg += "</p>";

    errMsg += "<br>";

    errMsg += "未告示專案風險與挑戰，將被金流 / 收單銀行拒絕帳戶申請及信用卡交易。";
    errMsg += "<br>";

    errMsg += "<br>";

  }

  if(document.getElementById("project_return_description").value == ''){

    errMsg += "<p class=\"navbar\">";   
    errMsg += "無描述 退換貨規則";
    errMsg += "</p>";

    errMsg += "<br>";

    errMsg += "未告示退換貨 / 退費規則，或相關規則違反臺灣法規，將被金流拒絕帳戶申請及信用卡交易。";
    errMsg += "<br>";

    errMsg += "<br>";

  }  


  if(document.getElementById("project_facebook_pixel_id").value == ''){

    errMsg += "<p class=\"navbar\">";  
    errMsg += "無設定Meta像素機制";
    errMsg += "</p>";

    errMsg += "<br>";

    errMsg += "若專案上線後有投廣需求，建議設置Meta像素";
    errMsg += "<br>";

    errMsg += "<br>";
  }

  return errMsg;
}
