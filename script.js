const apiKey = "337a078832ee59295aa59ea91d086629";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("Error: " + data.message);
      return;
    }

    updateWeather(data);
  } catch (error) {
    alert("Failed to fetch weather data. Please try again later.");
    console.error(error);
  }
}

function updateWeather(data) {
  document.querySelector("#city").innerText = `${data.name}, ${data.sys.country}`;
  document.querySelector("#temp").innerText = `🌡️ Temperature: ${data.main.temp} °C`;
  document.querySelector("#weather").innerText = `☁️ Condition: ${data.weather[0].description}`;
}
