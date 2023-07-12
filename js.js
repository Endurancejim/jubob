// NAVBAR

const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('mobile-menu')
})



function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 150 ){
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }

}

window.addEventListener('scroll', changeBg)


// Parallax scrolling

let valueDisplay = document.querySelectorAll(".num");
let interval = 5000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-va"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});
