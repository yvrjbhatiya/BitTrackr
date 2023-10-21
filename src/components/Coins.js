import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Coins.css';

const Coin = (props) => {
  const coinsPerPage = 10;
  const totalPages = Math.ceil(props.coins.length / coinsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * coinsPerPage;
  const endIndex = Math.min(startIndex + coinsPerPage, props.coins.length);
  const displayedCoins = props.coins.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const priceChangeClass = (percentageChange) => {
    return percentageChange < 0 ? 'red' : 'green';
  };

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: 'smooth',
    });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='container'>
        <div className='coin-table'>
          <table>
            <thead>
              <tr>
                <th style={{borderTopLeftRadius: "8px"}}></th>
                <th className='coin-name'>Coin</th>
                <th>Price</th>
                <th>24h Change</th>
                <th style={{borderTopRightRadius: "8px"}}>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {displayedCoins.map((coin, index) => {
                const coinIndex = startIndex + index + 1;
                const changeClass = priceChangeClass(coin.price_change_percentage_24h);
                return (
                  <tr key={coin.id}>
                    <td>{coinIndex}</td>
                    <td>
                      <Link to={`/coin/${coin.id}`} onClick={scrollTop}>
                        <div className='img-symbol'>
                          <img src={coin.image} alt='' />
                          <p>{coin.symbol.toUpperCase()}</p>
                        </div>
                      </Link>
                    </td>
                    <td>${coin.current_price.toLocaleString()}</td>
                    <td className={changeClass}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    <td>${coin.market_cap.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='pagination'>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={currentPage === page + 1 ? 'active' : ''}
              onClick={() => {
                handlePageChange(page + 1);
                scrollMarket();
              }}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Coin;
