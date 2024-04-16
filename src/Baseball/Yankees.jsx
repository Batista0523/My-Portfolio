import React, { useEffect, useState } from "react";
import "./Yankees.css";
import axios from "axios";

function Yankees() {
  const [yankeesGames, setYankeesGames] = useState([]);

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
            gameDate: "20240416", 
            topPerformers: "true",
          },
          headers: {
            "X-RapidApi-Key": baseballKey,
            "X-RapidApi-Host": baseballHost,
          },
        };

        const response = await axios.request(options);
        const yankeesGames = Object.entries(response.data.body).filter(
          ([key, game]) => game.away === "NYY" || game.home === "NYY"
        );
        setYankeesGames(yankeesGames);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, [baseballHost, baseballKey, baseballUrl]);

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
        </div>
      ))}
    </div>
  );
}

export default Yankees;
