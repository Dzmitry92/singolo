// Navigation links

let navLinks = document.querySelectorAll('.menu-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = () => {
        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('active-link');
        }
        navLinks[i].classList.add('active-link');
    }
}

// Activating phone screens

let firstPhoneBtn = document.querySelectorAll('.phone-btn')[0];
let secondPhoneBtn = document.querySelectorAll('.phone-btn')[1];
let verticalPhoneDisplay = document.querySelectorAll('.black-display')[0];
let horizontalPhoneDisplay = document.querySelectorAll('.black-display')[1];

firstPhoneBtn.onclick = () => {
    if(verticalPhoneDisplay.style.zIndex == 1){
        verticalPhoneDisplay.style.zIndex = 0;
    }
    else{
        verticalPhoneDisplay.style.zIndex = 1;
    }
}

secondPhoneBtn.onclick = () => {
    if(horizontalPhoneDisplay.style.zIndex == 1){
        horizontalPhoneDisplay.style.zIndex = 0;
    }
    else{
        horizontalPhoneDisplay.style.zIndex = 1;
    }
}

// Slider 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('item');
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}