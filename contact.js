let form =
document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

document.getElementById("success")
.style.display = "block";

form.reset();

});