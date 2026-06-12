let form =
document.getElementById("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

document.getElementById("message")
.style.display = "block";

form.reset();

});