// main.js
import "./style.css";
import { createLogo, createWeatherHeader } from "./DOM.js";
import { fetchWeatherData } from "./weatherAPI.js";
import { createWeatherCard, createWeatherInfo } from "./weatherdata.js";

document.addEventListener("DOMContentLoaded", async () => {
  const mainContainer = document.querySelector(".main-container");

  const subContainer = document.createElement("div");
  subContainer.className = "container";

  const logo = createLogo();
  subContainer.appendChild(logo);
  const weatherHeader = createWeatherHeader();
  subContainer.appendChild(weatherHeader);

  mainContainer.appendChild(subContainer);
});

//   // Add event listener for search form submit
//   const searchForm = document.querySelector(".weather__search");
//   searchForm.addEventListener("click", handleSearch);

//   // Add event listener for search input with enter key
//   const searchInput = document.querySelector(".weather__searchform");
//   searchInput.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//       handleSearch(event);
//     }
//   });

//   const initialCity = "toronto";
//   if (initialCity) {
//     try {
//       const data = await fetchWeatherData(initialCity);
//       if (data) {
//         updateWeatherUI(data);
//       }
//     } catch (error) {
//       console.error("Error fetching initial weather data:", error);
//     }
//   }

// async function handleSearch(event) {
//   event.preventDefault();
//   const searchInput = document.querySelector(".weather__searchform");
//   const city = searchInput.value.trim();
//   if (!city) return;

//   try {
//     const data = await fetchWeatherData(city);
//     if (data) {
//       updateWeatherUI(data);
//     }
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// }

// function updateWeatherUI(data) {
//   // Clear previous weather cards if any
//   const weatherContainer = document.querySelector(".weather__container");
//   weatherContainer.innerHTML = "";

//   // Create weather card
//   const weatherCard = createWeatherCard(data);
//   weatherContainer.appendChild(weatherCard);

//   // Create weather info
//   const weatherInfo = createWeatherInfo(data);
//   weatherContainer.appendChild(weatherInfo);
// }
