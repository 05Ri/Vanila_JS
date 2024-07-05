
const clock = document.getElementById('clock');

function tictok() {
    const day = new Date();
    const hour = String(day.getHours()).padStart(2, '0');
    const minute = String(day.getMinutes()).padStart(2, '0');
    const second = String(day.getSeconds()).padStart(2, '0');
    clock.querySelector('h3').innerText = `${hour}:${minute}:${second}`;
}

tictok();
setInterval(tictok, 1000);
