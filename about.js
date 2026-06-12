// Counter Animation

let client = 0;
let order = 0;
let exp = 0;

setInterval(()=>{

if(client < 5000){

client += 50;

document.getElementById("clients")
.innerHTML = client + "+";

}

if(order < 12000){

order += 100;

document.getElementById("orders")
.innerHTML = order + "+";

}

if(exp < 25){

exp++;

document.getElementById("experience")
.innerHTML = exp;

}

},50);