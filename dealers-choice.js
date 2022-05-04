const header = document.getElementsByTagName("header")[0];

document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 65) { header.classList.add("active"); } 
    else { header.classList.remove("active"); } 
});

let currentImage = 0;
const images = document.querySelectorAll(".carousel-image");
setInterval(() => {
     images[currentImage].classList.add("hidden");
     if (currentImage === 11) { currentImage = 0; } 
     else { currentImage += 1; }
     images[currentImage].classList.remove("hidden");
     }, 4000);

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

//pulls date from input field
let dateControl = document.querySelector('input[type="date"]');
console.log(dateControl.value); 

