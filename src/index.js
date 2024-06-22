// main.js
import "./style.css";
import { createLogo, createWeatherHeader } from "./DOM.js";
import { fetchWeatherData } from "./weatherAPI.js";
import { createWeatherCard, createWeatherInfo } from "./weatherdata.js";

const mainContainer = document.querySelector(".main-container");

const subContainer = document.createElement("div");
subContainer.className = "container";

document.addEventListener("DOMContentLoaded", async () => {
  const logo = createLogo();
  subContainer.appendChild(logo);
  const weatherHeader = createWeatherHeader();

  subContainer.appendChild(weatherHeader);
  subContainer.appendChild(weather);

  mainContainer.appendChild(subContainer);

  const searchForm = document.querySelector(".weather__search");
  searchForm.addEventListener("click", handleSearch);

  const searchInput = document.querySelector(".weather__searchform");
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  });

  const initialCity = "toronto";
  if (initialCity) {
    try {
      const data = await fetchWeatherData(initialCity);
      if (data) {
        updateWeatherUI(data);
      }
    } catch (error) {
      console.error("Error fetching initial weather data:", error);
    }
  }
});

async function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.querySelector(".weather__searchform");
  const city = searchInput.value.trim();
  if (!city) return;

  try {
    const data = await fetchWeatherData(city);
    if (data) {
      updateWeatherUI(data);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function updateWeatherUI(data) {
  const weatherContainer = document.querySelector(".weather__container");
  weatherContainer.innerHTML = "";

  const weatherCARd = document.createElement("div");
  weatherCARd.className = "cardContainer";

  const weatherINfo = document.createElement("div");
  weatherINfo.className = "weather__info";

  // Create weather card
  const weatherCard = createWeatherCard(data);
  weatherCARd.appendChild(weatherCard);

  // Create weather info
  const weatherInfo = createWeatherInfo(data);
  weatherINfo.appendChild(weatherInfo);

  subContainer.appendChild(weatherCARd);
  subContainer.appendChild(weatherINfo);
}
