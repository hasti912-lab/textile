let images =
document.querySelectorAll(".container img");

let lightbox =
document.querySelector(".lightbox");

let preview =
document.getElementById("preview");

let closeBtn =
document.querySelector(".close");



images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display = "flex";

preview.src = image.src;

});

});



closeBtn.addEventListener("click",()=>{

lightbox.style.display = "none";

});



window.addEventListener("click",(e)=>{

if(e.target == lightbox)
{
lightbox.style.display = "none";
}

});