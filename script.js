// Navigation links

const navLinks = document.querySelectorAll("nav ul li a");
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

//commented out the function, because I did not have time to redo the slider :(

// let firstPhoneBtn = document.querySelectorAll('.phone-btn')[0];
// let secondPhoneBtn = document.querySelectorAll('.phone-btn')[1];
// let verticalPhoneDisplay = document.querySelectorAll('.black-display')[0];
// let horizontalPhoneDisplay = document.querySelectorAll('.black-display')[1];

// firstPhoneBtn.onclick = () => {
//     if(verticalPhoneDisplay.style.zIndex == 1){
//         verticalPhoneDisplay.style.zIndex = 0;
//     }
//     else{
//         verticalPhoneDisplay.style.zIndex = 1;
//     }
// }

// secondPhoneBtn.onclick = () => {
//     if(horizontalPhoneDisplay.style.zIndex == 1){
//         horizontalPhoneDisplay.style.zIndex = 0;
//     }
//     else{
//         horizontalPhoneDisplay.style.zIndex = 1;
//     }
// }

const burger = document.querySelector(".burger");
const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const nav = header.querySelector("nav");
let menuOpened = false;
darkenContent(header);
const headerBackground = header.querySelector(".dark-background");
hideDarkBackground();

function drawMenu() {
  if (document.documentElement.clientWidth >= 768) {
    menuOpened = true;
  }
  if(menuOpened) {
    hideDarkBackground();
    burger.classList.remove("rotated90");
    h1.classList.remove("to-left");
    nav.classList.remove("to-right");
  } else {
    showDarkBackground();
    burger.classList.add("rotated90");
    h1.classList.add("to-left");
    nav.classList.add("to-right");
  }
  menuOpened = !menuOpened;
}

function hideDarkBackground(){
  if(!headerBackground.classList.contains("transparent")) {
    headerBackground.classList.add("transparent");
  }
}

function showDarkBackground(){
  if(headerBackground.classList.contains("transparent")) {
    headerBackground.classList.remove("transparent");
  }
}

burger.addEventListener("click", drawMenu);
headerBackground.addEventListener("click", drawMenu);

window.addEventListener("resize", () => {
  if(document.documentElement.clientWidth >= 768) {
    drawMenu();
  }
});

navLinks.forEach(link => link.addEventListener("click", e => {
  if(document.documentElement.clientWidth < 768) {
    setTimeout(drawMenu, 1100);
  }
}));

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
    hideItem('to-right');
    changeCurrentItem(n + 1);
    showItem('from-left');
    changerBackgroundColor();
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n - 1);
    showItem('from-right'); 
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


// Portfolio 

const buttons = document.querySelectorAll('.button');
const portfolioContainer = document.querySelector('.portfolio-image-container');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick= () => {
        if(buttons[i].classList.contains('selected') == false){
            let pic = [...portfolioContainer.querySelectorAll('.portfolio-item')];
            pic.unshift(pic.pop());
            for( let index = 0; index < pic.length; index++){
                portfolioContainer.append(pic[index]);
            }
        }
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('selected');
        }
        buttons[i].classList.add('selected');
    }
}

// Active image in portfolio

let thereIsActivity = true;
const portfolioImages = document.querySelectorAll('.portfolio-item');
for(let i = 0; i < portfolioImages.length; i++){
    portfolioImages[i].onclick = () => {
        if(portfolioImages[i].classList.contains('active-image') == true){
            thereIsActivity = false;
        }
        for (let j = 0; j < portfolioImages.length; j++) {
            portfolioImages[j].classList.remove('active-image');
        }
        if(thereIsActivity) {
            portfolioImages[i].classList.add('active-image');
        }
        thereIsActivity = true;
    }
}

// Message window

const submitButton = document.querySelector('.submit-button');
const modal = document.querySelector('.modal');
const modalWindow = document.querySelector('.modal-window');

function darkenContent(node, onClickCallback = false){
    if(node.querySelector(".dark-background") === null) {
      let background = document.createElement("div");
      background.classList.add("dark-background");
      node.append(background);
      if (onClickCallback) {
        node.querySelector(".dark-background").addEventListener("click", onClickCallback);
      }
    }
    return node;
}

function addCloseButton(node){
    node.innerHTML += "<button class='modal-button' type='button'>OK</button>";
    const modalButton = document.querySelector(".modal-button");
    modalButton.addEventListener("click", hideModal);
    return node;
}

function addNodeValue (node, defaultValue = "Not completed") {
    let value = document.querySelector(node).value;
    value = (value == "") ? defaultValue : value;
    return value;
}

function showModal () {
    modal.classList.remove("hidden");
    modalWindow.classList.remove("hidden");
}

function hideModal () {
    modal.classList.add("hidden");
    modalWindow.classList.add("hidden");
    document.forms[0].reset();
}

submitButton.addEventListener("click", (event) => {
    let requiredFields = [...document.querySelectorAll("[required]")];
    let isValid = node => node.checkValidity();
  
    if (requiredFields.every(isValid) ) {
        event.preventDefault();
        modalWindow.innerHTML = "";
        let title = document.createElement("h3");
        title.innerText = "The letter was sent";
        let subject = document.createElement("span");
        subject.innerText = "Subject: " + addNodeValue("input[name='subject']", "No subject");
        let description = document.createElement("span");
        description.innerText = "Description: " + addNodeValue("textarea[name='message']", "No description");
        modalWindow.append(title, subject, description);
        addCloseButton(modalWindow);
        darkenContent(modal, hideModal);
        const modalBackground = modal.querySelector(".dark-background");
        if (!modalBackground.classList.contains("height100percents")) {
            modalBackground.classList.add("height100percents");
        }
        showModal();
    }
});