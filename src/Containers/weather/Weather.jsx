import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
function Weather() {
  const [weathers, setWeathers] = useState({
    City: "",
    State: "",
    TempF: "",
  });

  const weatherKey = import.meta.env.VITE_X_WEATHER_KEY;
  const weatherHost = import.meta.env.VITE_X_WEATHER_HOST;
  const weatherUrl = import.meta.env.VITE_X_WEATHER_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: weatherUrl,
          params: { zip: "11691" },
          headers: {
            "X-RapidApi-Key": weatherKey,
            "X-RapidApi-Host": weatherHost,
          },
        };

        const response = await axios.request(options);
        setWeathers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [weatherKey, weatherHost, weatherUrl]);

  return (
    <div className="weather-container">
      <h1>Weather</h1>
      <p>City {weathers.City}</p>
      <p> {weathers.State}</p>
      <p>{weathers.TempF}</p>
      <p>{weathers.Weather}</p>
    </div>
  );
}

export default Weather;
