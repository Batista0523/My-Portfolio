import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Time.css";

function Time() {
  const [news, setNews] = useState([]);

  const timeKey = import.meta.env.VITE_X_TIME_KEY;
  const timeUrl = import.meta.env.VITE_X_TIME_URL;
  const timeHost = import.meta.env.VITE_X_TIME_HOST;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "Get",
          url: timeUrl,
          params: {
            country: "us",
            language: "en",
            pageSize: "2",
            category: "news"
          },
          headers: {
            "X-RapidApi-Key": timeKey,
            "X-RapidApi-Host": timeHost,
          },
        };

        const response = await axios.request(options);
        setNews(response.data.articles);
        console.log("RESPONSE--->", response.data.articles);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(); 
  };

  return (
    <div className='timer-container'>
      <h1>Breakings News</h1>
      {news.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>Published Date: {formatDate(article.published_date)}</p>
          <p>Publisher: {article.publisher.name}</p>
          <a className="read-more" target="_blank" href={article.url}>Read More</a>
        </div>
      ))}
    </div>
  );
}

export default Time;
