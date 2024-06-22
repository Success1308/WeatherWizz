// weatherAPI.js
const API_KEY = "64f60853740a1ee3ba20d0fb595c97d5";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherData(city) {
  const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Weather data not available");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
