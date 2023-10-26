import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useRoutes, useLocation } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './routes/Coin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const coinRoutes = useRoutes([
    {
      path: '/',
      element: <Coins coins={coins} />,
    },
    {
      path: '/coin',
      element: <Coin />,
      children: [
        {
          path: ':coinId',
          element: <Coin />,
        },
      ],
    },
    {
      path: '/market',
      element: <Coins coins={coins} />,
      
    }
  ]);

  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname === '/' && <Hero />} 
      {coinRoutes}
      {location.pathname === '/' && <Footer />}
    </>
  );
}

export default App;
