import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";

const Hero = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const handleButtonClick = () => {
    const offset = 900;
    window.scrollBy({
      top: offset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 3,
              page: 1,
              sparkline: false,
              locale: "en",
            },
          }
        );
        setTrendingCoins(response.data);
      } catch (error) {
        console.error("Error fetching trending coins: ", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <>
      <div className="hero-content">
        <div className="hero-content-text">
          <h1>
            Real-time
            <br /> <span>Crypto Tracker</span>
          </h1>
        </div>
        <button className="mobile-btn-hero" onClick={handleButtonClick}>
          See Prices
        </button>
      </div>

      <div className="trending-coins-row">
        {trendingCoins.map((coin) => (
          <div key={coin.id} className="trending-coin-column">
            <img src={coin.image} alt={coin.name} className="coin-image" />
            <h2>{coin.name}</h2>
            <p>${coin.current_price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
