import React, { useEffect, useState } from "react";
import "./Yankees.css";
import axios from "axios";

function Yankees() {
  const [yankeesGames, setYankeesGames] = useState([]);
  const [currentDate, setCurrentDate] = useState(getFormattedDate());

  const baseballKey = import.meta.env.VITE_X_BASEBALL_KEY;
  const baseballHost = import.meta.env.VITE_X_BASEBALL_HOST;
  const baseballUrl = import.meta.env.VITE_X_BASEBALL_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "Get",
          url: baseballUrl,
          params: {
            gameDate:currentDate,
            topPerformers: "true",
          },
          headers: {
            "X-RapidApi-Key": baseballKey,
            "X-RapidApi-Host": baseballHost,
          },
        };

        const response = await axios.request(options);

        // Log the entire response to verify its structure
        console.log("API Response:", response.data);

        // Here I am Filtering the  Yankees games from the response
        const yankeesGames = Object.entries(response.data.body).filter(
          ([key, game]) => game.away === "NYY" || game.home === "NYY"
        );

        console.log("Yankees Games:", yankeesGames);

        setYankeesGames(yankeesGames);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, [baseballHost, baseballKey, baseballUrl]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getFormattedDate());
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  }

  return (
    <div className="yankees-container">
      <h1>New York Yankees</h1>
      {yankeesGames.map(([key, game]) => (
        <div key={key}>
          <p>
            {" "}
            {game.away} VS {game.home}
          </p>
          <p>Game Time {game.gameTime}</p>
          <p>Game Status {game.gameStatus}</p>
          <p>Away {game.away}</p>
          <p>Home {game.home}</p>
          <p>Result {game.awayResult}</p>

          <p>
            Scores :{" "}
            {game.lineScore
              ? ` Away ${game.lineScore.away.R} -- Home ${game.lineScore.home.R}`
              : "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Yankees;
