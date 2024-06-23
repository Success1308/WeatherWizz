// weatherIcons.js

export function getWeatherIcon(condition, isDay) {
  switch (condition.toLowerCase()) {
    case "sunny":
      return isDay ? "fas fa-sun" : "fas fa-moon";
    case "clear":
      return isDay ? "fas fa-sun" : "fas fa-moon";
    case "partly cloudy":
      return isDay ? "fas fa-cloud-sun" : "fas fa-cloud-moon";
    case "cloudy":
      return "fas fa-cloud";
    case "overcast":
      return "fas fa-cloud-sun";
    case "mist":
      return "fas fa-smog";
    case "patchy rain possible":
      return "fas fa-cloud-showers-heavy";
    case "patchy snow possible":
      return "fas fa-snowflake";
    case "patchy sleet possible":
      return "fas fa-snowflake";
    case "patchy freezing drizzle possible":
      return "fas fa-snowflake";
    case "thundery outbreaks possible":
      return "fas fa-bolt";
    case "blowing snow":
      return "fas fa-snowflake";
    case "blizzard":
      return "fas fa-snowflake";
    case "fog":
      return "fas fa-smog";
    case "freezing fog":
      return "fas fa-snowflake";
    case "patchy light drizzle":
      return "fas fa-cloud-showers-heavy";
    case "light drizzle":
      return "fas fa-cloud-showers-heavy";
    case "freezing drizzle":
      return "fas fa-snowflake";
    case "heavy freezing drizzle":
      return "fas fa-snowflake";
    case "patchy light rain":
      return "fas fa-cloud-showers-heavy";
    case "light rain":
      return "fas fa-cloud-showers-heavy";
    case "moderate rain at times":
      return "fas fa-cloud-showers-heavy";
    case "moderate rain":
      return "fas fa-cloud-showers-heavy";
    case "heavy rain at times":
      return "fas fa-cloud-showers-heavy";
    case "heavy rain":
      return "fas fa-cloud-showers-heavy";
    case "light freezing rain":
      return "fas fa-snowflake";
    case "moderate or heavy freezing rain":
      return "fas fa-snowflake";
    case "light sleet":
      return "fas fa-snowflake";
    case "moderate or heavy sleet":
      return "fas fa-snowflake";
    case "patchy light snow":
      return "fas fa-snowflake";
    case "light snow":
      return "fas fa-snowflake";
    case "patchy moderate snow":
      return "fas fa-snowflake";
    case "moderate snow":
      return "fas fa-snowflake";
    case "patchy heavy snow":
      return "fas fa-snowflake";
    case "heavy snow":
      return "fas fa-snowflake";
    case "ice pellets":
      return "fas fa-snowflake";
    case "light rain shower":
      return "fas fa-cloud-showers-heavy";
    case "moderate or heavy rain shower":
      return "fas fa-cloud-showers-heavy";
    case "torrential rain shower":
      return "fas fa-cloud-showers-heavy";
    case "light sleet showers":
      return "fas fa-snowflake";
    case "moderate or heavy sleet showers":
      return "fas fa-snowflake";
    case "light snow showers":
      return "fas fa-snowflake";
    case "moderate or heavy snow showers":
      return "fas fa-snowflake";
    case "light showers of ice pellets":
      return "fas fa-snowflake";
    case "moderate or heavy showers of ice pellets":
      return "fas fa-snowflake";
    case "patchy light rain with thunder":
      return "fas fa-bolt";
    case "moderate or heavy rain with thunder":
      return "fas fa-bolt";
    case "patchy light snow with thunder":
      return "fas fa-bolt";
    case "moderate or heavy snow with thunder":
      return "fas fa-bolt";
    default:
      return "fas fa-question-circle"; // Default icon for unknown conditions
  }
}
