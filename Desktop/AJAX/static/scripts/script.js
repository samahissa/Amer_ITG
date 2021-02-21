function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
          document.body.innerHTML = document.body.innerHTML+this.responseText;
          document.getElementById("button").addEventListener("click",function(){
            document.getElementById("contact").style.zIndex=-1;
          document.querySelector(".popup").style.display="flex";
          })
          document.querySelector(".close").addEventListener("click",function(){
          document.querySelector(".popup").style.display="none";
          document.getElementById("contact").style.zIndex=1;
          })
      }
    };
    xhttp.open("GET", "http://192.168.1.106/ServerSidePopupFiles/AJAXHtml.html", true);
    xhttp.send();
  }
