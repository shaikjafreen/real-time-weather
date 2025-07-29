async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '5c7579e1058b62feceb8eae88e26581a'; // Replace this with your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const weatherInfo = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      `;
      document.getElementById('weatherResult').innerHTML = weatherInfo;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>City not found</p>`;
    }
  } catch (error) {
    console.log(error);
    document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data</p>`;
  }
}
