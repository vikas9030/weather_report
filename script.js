function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = "baee05c65266a6f1777d366f1520216c"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                const weatherDetails = `
                    <h2>Weather in ${city}</h2>
                    <p><strong>Temperature:</strong> ${temperature} °C</p>
                    <p><strong>Weather:</strong> ${weatherDescription}</p>
                    <p><strong>Humidity:</strong> ${humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
                `;

                document.getElementById('weather-info').innerHTML = weatherDetails;
            } else {
                document.getElementById('weather-info').innerHTML = `<p>Error: ${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weather-info').innerHTML = `<p>Failed to fetch weather data.</p>`;
            console.error("Error fetching weather data:", error);
        });
}
