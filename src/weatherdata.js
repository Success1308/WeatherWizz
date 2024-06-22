// weatherComponents.js
export function createWeatherCard(data) {
  const card = document.createElement("div");
  card.className = "card";

  const city = document.createElement("p");
  city.className = "city";
  city.textContent = `${data.name}, ${data.sys.country}`;
  card.appendChild(city);

  const weather = document.createElement("p");
  weather.className = "weather";
  weather.textContent = data.weather[0].description.toUpperCase();
  card.appendChild(weather);

  const svg = document.createElement("svg");
  svg.className = "weather";
  svg.setAttribute("version", "1.1");
  svg.setAttribute("id", "Layer_1");
  svg.setAttribute("x", "0px");
  svg.setAttribute("y", "0px");
  svg.setAttribute("width", "150px");
  svg.setAttribute("height", "150px");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("xml:space", "preserve");
  // Set the image source based on the weather data
  const image = document.createElement("image");
  image.setAttribute("id", "image0");
  image.setAttribute("width", "100px");
  image.setAttribute("height", "100px");
  image.setAttribute("x", "0");
  image.setAttribute("y", "0");
  image.setAttribute(
    "href",
    `path/to/weather/icons/${data.weather[0].icon}.png`
  );
  svg.appendChild(image);
  card.appendChild(svg);

  const temp = document.createElement("p");
  temp.className = "temp";
  temp.textContent = `${Math.round(data.main.temp)}°`;
  card.appendChild(temp);

  const minmaxContainer = document.createElement("div");
  minmaxContainer.className = "minmaxContainer";

  const min = document.createElement("div");
  min.className = "min";
  const minHeading = document.createElement("p");
  minHeading.className = "minHeading";
  minHeading.textContent = "Min";
  min.appendChild(minHeading);
  const minTemp = document.createElement("p");
  minTemp.className = "minTemp";
  minTemp.textContent = `${Math.round(data.main.temp_min)}°`;
  min.appendChild(minTemp);

  const max = document.createElement("div");
  max.className = "max";
  const maxHeading = document.createElement("p");
  maxHeading.className = "maxHeading";
  maxHeading.textContent = "Max";
  max.appendChild(maxHeading);
  const maxTemp = document.createElement("p");
  maxTemp.className = "maxTemp";
  maxTemp.textContent = `${Math.round(data.main.temp_max)}°`;
  max.appendChild(maxTemp);

  minmaxContainer.appendChild(min);
  minmaxContainer.appendChild(max);
  card.appendChild(minmaxContainer);

  return card;
}

export function createWeatherInfo(data) {
  const weatherInfo = document.createElement("div");

  const realFeel = createWeatherInfoCard(
    "fa-temperature-full",
    "Real Feel",
    `${Math.round(data.main.feels_like)}°`
  );
  weatherInfo.appendChild(realFeel);

  const humidity = createWeatherInfoCard(
    "fa-droplet",
    "Humidity",
    `${data.main.humidity}%`
  );
  weatherInfo.appendChild(humidity);

  const wind = createWeatherInfoCard(
    "fa-wind",
    "Wind",
    `${data.wind.speed} m/s`
  );
  weatherInfo.appendChild(wind);

  const pressure = createWeatherInfoCard(
    "fa-gauge-high",
    "Pressure",
    `${data.main.pressure} hPa`
  );
  weatherInfo.appendChild(pressure);

  return weatherInfo;
}

function createWeatherInfoCard(iconClass, label, value) {
  const card = document.createElement("div");
  card.className = "weather__card";

  const icon = document.createElement("i");
  icon.className = `fa-solid ${iconClass}`;
  card.appendChild(icon);

  const textContainer = document.createElement("div");
  const labelElem = document.createElement("p");
  labelElem.textContent = label;
  const valueElem = document.createElement("p");
  valueElem.className = `weather__${label.toLowerCase().replace(" ", "")}`;
  valueElem.innerHTML = value;
  textContainer.appendChild(labelElem);
  textContainer.appendChild(valueElem);

  card.appendChild(textContainer);
  return card;
}
