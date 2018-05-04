var myJSON =  (JSON.parse(localStorage.myData)).allProducts;
var c=localStorage.getItem("cnt");
document.getElementById("ima").src = myJSON[c].image_path;
document.getElementById("desc").innerHTML = myJSON[c].product_description;


function get_review(){
   // alert("sdgst");
    var x=document.getElementById("fn").value;
    var y=document.getElementById("ln").value;
    var z=document.getElementById("cc").value;
    var c=document.getElementById("em").value;

    document.getElementById("rd").innerHTML = "FIRSTNAME IS: " + x + "<br/><br/>" +
        " LASTNAME IS: " + y + "<br/><br/> CC IS:" + z + "<br/><br/>E-MAILS IS: " +c;
}