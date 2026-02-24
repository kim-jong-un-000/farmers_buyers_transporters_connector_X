let total=0;

function addItem(){
let name=document.getElementById("name").value;
let qty=parseFloat(document.getElementById("qty").value);
let price=parseFloat(document.getElementById("price").value);

if(name===""||isNaN(qty)||isNaN(price)) return;

let itemTotal=qty*price;
total+=itemTotal;

let div=document.createElement("div");
div.className="item";
div.innerHTML="<div>"+name+" (x"+qty+")</div><div>$"+itemTotal.toFixed(2)+"</div>";

document.getElementById("list").appendChild(div);
document.getElementById("grandTotal").innerText="$"+total.toFixed(2);

document.getElementById("name").value="";
document.getElementById("qty").value="";
document.getElementById("price").value="";
}

function clearList(){
document.getElementById("list").innerHTML="";
total=0;
document.getElementById("grandTotal").innerText="$0.00";
}