// Typing Animation

let text =
"Premium Textile Solutions";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing-text")
.innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();




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




// Testimonial Slider

let names = [

"Sophia",
"James",
"Emma",
"Oliver"

];

let reviews = [

"Exceptional quality fabrics.",

"Highly recommended textile supplier.",

"Beautiful premium collections.",

"Fast delivery and excellent support."

];

let index = 0;

setInterval(()=>{

index++;

if(index >= names.length){
index = 0;
}

document.getElementById("name")
.innerHTML = names[index];

document.getElementById("review")
.innerHTML = reviews[index];

},3000);