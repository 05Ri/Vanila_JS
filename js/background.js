const images = ['background01', 'background02', 'background03'];

const idx = Math.floor(Math.random() * images.length);

const chosenImage = images[idx];

document.body.style.backgroundImage = `url(img/${chosenImage}.jpg)`;

// const showBackGround = document.getElementById('background');
//
// // showBackGround.innerHTML = `<img src='img/${chosenImage}'></img>`;
//
// const bgImage = document.createElement('img');
//
// bgImage.src = `img/${chosenImage}.jpg`;
//
// showBackGround.appendChild(bgImage);