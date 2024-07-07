const API_KEY = 'c20f70287904d2b79d227207a839e0f2';

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&lang=kr&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json()
            .then(data => {
                const weatherContainer = document.getElementById('weather');
                const city = data.name;
                const weather = data.weather[0].description;
                const temperature = data.main.temp;

                weatherContainer.querySelector('span:nth-child(1)').innerText = city;
                weatherContainer.querySelector('span:nth-child(2)').innerText = weather;
                weatherContainer.querySelector('span:nth-child(3)').innerText = temperature;
    }));
}
function onGeoError() {
    alert("위치를 찾을 수 없습니다...");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
