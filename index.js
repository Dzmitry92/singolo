// Navigation links

const navLinks = document.querySelectorAll('a');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = () => {
        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove('active-link');
        }
        navLinks[i].classList.add('active-link');
    }
}

document.addEventListener("scroll", changeActiveLink);
window.onload = changeActiveLink();

function changeActiveLink() {
    const positionY = window.scrollY;
    const idTags = document.querySelectorAll('[id]');

    for (let i = 0; i < idTags.length; i++) {
        if(idTags[i].offsetTop - 95 <= positionY &&
             (idTags[i].offsetTop + idTags[i].offsetHeight - 95)
              > positionY){
                for (let x = 0; x < navLinks.length; x++){
                    navLinks[x].classList.remove('active-link');
                    if(idTags[i].getAttribute("id") === navLinks[x].getAttribute("href").substring(1)){
                        navLinks[x].classList.add('active-link');
                    }
                }
              }
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

let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;
let changerColor = document.querySelector('.slider-section');

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction)
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem('to-left');
    changeCurrentItem(n - 1);
    showItem('from-right');
    changerBackgroundColor();
}

function nextItem(n) {
    hideItem('to-right');
    changeCurrentItem(n + 1);
    showItem('from-left'); 
    changerBackgroundColor();
}

document.querySelector('.arrow-left').addEventListener('click', function() {
    if(isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    if(isEnabled) {
        nextItem(currentItem);
    }
});

function changerBackgroundColor() {
    if(items[1].classList.contains('active') === false) {
        changerColor.classList.add('active-color');
    }
    else {
        changerColor.classList.remove('active-color');
    }
}