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