// Select HTML elements in the document

const myKey = '90158c8799bb28ca5c3054efdcbe85fd';
const myLat = '8.999893532275784';
const myLon = '-79.52049637702123';

const time = new Date();
const day = time.getDay();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


document.addEventListener('DOMContentLoaded', () => {

    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}`;

    async function apiFetch() {
        try {
            const response = await fetch(urlWeather);
            if (response.ok) {
                const data = await response.json();
                //console.log(data); // Testing only
                displayResults(data);
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.error(error);
        }
    }

    const displayResults = (data) => {
        const eventMainBox = document.querySelector('#weather-main');
        eventMainBox.innerHTML = '';

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let desc = data.weather[0].description;

        eventMainBox.innerHTML = `
            <div class="current-weather">
                <h3>Weather <span id="city-name">${data.name}</span><br>${weekdays[day]}</h3>
                <div class="weather-content"></div>
                <p>Temperature <span id="current-temp">${data.main.temp}&deg;F</span></p>
                <figure>
                    <img id="weather-icon" src="${iconsrc}" alt="${desc}">
                    <figcaption>${desc}</figcaption>
                </figure>
            </div>
        `;
    };

    apiFetch();
});


document.addEventListener('DOMContentLoaded', () => {

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}`;

    async function apiForecastFetch() {
        try {
            const response = await fetch(forecastUrl);
            if (response.ok) {
                const forecastData = await response.json();
                //console.log(forecastData);
                displayResultsForecast(forecastData);
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    const displayResultsForecast = (forecastData) => {
        const weatherForecast = document.querySelector('#weather-forecast');
        weatherForecast.innerHTML = '';

        const forecast = document.createElement('article');
        forecast.className = 'forecast';
        forecast.innerHTML = `
            <h3>3-Days Weather Forecast</h3>
            <div class="main-day-box">
                <div class="day-box">
                    <h4 id="day-01">${weekdays[(day + 1) % 7]}</h4>
                    <figure>
                        <img id="weather-icon-1" src="" alt="">
                        <figcaption id="figcaption-1"></figcaption>
                    </figure>
                    <p>Temperature: <span id="temp-1"></span></p>
                </div>
                <div class="day-box">
                    <h4 id="day-02">${weekdays[(day + 2) % 7]}</h4>
                    <figure>
                        <img id="weather-icon-2" src="" alt="">
                        <figcaption id="figcaption-2"></figcaption>
                    </figure>
                    <p>Temperature: <span id="temp-2"></span></p>
                </div>
                <div class="day-box">
                    <h4 id="day-03">${weekdays[(day + 3) % 7]}</h4>
                    <figure>
                        <img id="weather-icon-3" src="" alt="">
                        <figcaption id="figcaption-3"></figcaption>
                    </figure>
                    <p>Temperature: <span id="temp-3"></span></p>
                </div>
            </div>
        `;
        weatherForecast.appendChild(forecast);

        const dailyForecasts = forecastData.list.slice(0, 3);
        dailyForecasts.forEach((dailyData, index) => {
            document.getElementById(`weather-icon-${index + 1}`).src = `https://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`;
            document.getElementById(`figcaption-${index + 1}`).textContent = dailyData.weather[0].description;
            document.getElementById(`temp-${index + 1}`).textContent = `${dailyData.main.temp}°F`;
        });
    };

    apiForecastFetch();
});


