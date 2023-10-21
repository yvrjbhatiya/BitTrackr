import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";

import "./Coin.css";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <div>
      <div className="coin-container">
        {/* First Div */}
        <div className="content">
          <div className="row">
            <div className="column">
              <h3 className="rank-btn">Rank # {coin.market_cap_rank}</h3>
            </div>
            <div className="column">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <span>{coin.symbol.toUpperCase()}</span> : null}
            </div>
            <div className="column">
              {coin.market_data?.current_price ? (
                <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <hr />

        {/* second Div */}
        <div className="content">
          <div className="about">
            <p
              className="about-para"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
