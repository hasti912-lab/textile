let searchBox =
document.getElementById("searchBox");

searchBox.addEventListener("keyup",()=>{

let filter =
searchBox.value.toUpperCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

let text =
card.innerText.toUpperCase();

if(text.includes(filter))
{
card.style.display = "";
}
else
{
card.style.display = "none";
}

});

});