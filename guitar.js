
var im=[];
var count = 0;


loadDoc();
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var parsedJson = JSON.parse(this.responseText);
            // console.log(this.responseText);
            var stringified = JSON.stringify(parsedJson);
         localStorage.myData = stringified;
         // document.getElementById("demo").innerHTML = mydata.price[0];

        }
    };
    xhttp.open("GET", "guitardata.json", true);
    xhttp.send();
}

var myJSON =  (JSON.parse(localStorage.myData)).allProducts;




function updateGuitarInfo(num) {
    var img1 = document.getElementById('g1');
    img1.src= im[count];
    document.getElementById("ic").innerHTML = myJSON[count].product_description;
    document.getElementById("s").innerHTML = myJSON[count].shipping_details;
    document.getElementById("c").innerHTML= myJSON[count].customer_reviews;
    localStorage.setItem("cnt",count);


}

for(var i=0; i<myJSON.length;i++){
    im.push(myJSON[i].image_path);
}
updateGuitarInfo(0);



function nxt()
{
    if(count==myJSON.length-1)
    {
        count=0;
    }
    else
    {
        count++;
    }

    updateGuitarInfo(count);

}


function prev()
{
    if(count==0)
    {
        count=myJSON.length;
    }
    else
    {
        count--;
    }

    updateGuitarInfo(count);
}

function piinfo() {


    var x = document.getElementById("ic");
       if (x.style.display == "none") {
        document.getElementById("b1").style.borderBottom = "0px solid #505050";
        x.style.display = "block";


    } else {
           x.style.display = "none";

    }
}

function sinfo() {
    var y = document.getElementById("s");
    if (y.style.display == "none") {
        y.style.display = "block";
       document.getElementById("b2").style.borderBottom = "0px solid grey";
    } else {
        y.style.display = "none";
    }
}

function cr() {

    var z = document.getElementById("c");
    if (z.style.display == "none") {
        z.style.display = "block";
        document.getElementById("b3").style.borderBottom = "2px dotted grey";
    } else {
        z.style.display = "none";
    }
}





