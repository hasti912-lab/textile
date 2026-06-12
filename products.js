// Cart Counter

let cart = 0;

let buttons =
document.querySelectorAll(".cartBtn");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

cart++;

document.getElementById("cartCount")
.innerHTML = cart;

btn.innerHTML =
"Added ✓";

btn.style.background =
"green";

});

});



// Wishlist

let hearts =
document.querySelectorAll(".heart");

hearts.forEach(heart=>{

heart.addEventListener("click",()=>{

heart.style.color = "red";

});

});