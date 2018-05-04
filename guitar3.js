var myJSON =  (JSON.parse(localStorage.myData)).allProducts;
var d=localStorage.getItem("cnt");

document.getElementById("finalimg").src=myJSON[d].image_path;
document.getElementById("pd").innerHTML =myJSON[d].product_description;
document.getElementById("sd").innerHTML =myJSON[d].shipping_details;
document.getElementById("p").innerHTML ="Price is: " + myJSON[d].price;
document.getElementById("noi").innerHTML ="Total no of items is: " + myJSON[d].no_of_items;
