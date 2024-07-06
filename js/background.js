const background = ['background01.jpg', 'background02.jpg', 'background03.jpg'];

const idx = Math.floor(Math.random() * 10) % background.length;

const chosenImage = background[idx];

const showBackGround = document.getElementById('background');

// showBackGround.innerHTML = `<img src='img/${chosenImage}'></img>`;

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

showBackGround.appendChild(bgImage);