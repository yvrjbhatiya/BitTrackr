import React, { useState } from 'react';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import './Coins.css';

const Coins = (props) => {
  const coinsPerPage = 10; // Number of coins to display per page
  const totalPages = Math.ceil(props.coins.length / coinsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * coinsPerPage;
  const endIndex = Math.min(startIndex + coinsPerPage, props.coins.length);

  const displayedCoins = props.coins.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
        </div>

        {displayedCoins.map((coin, index) => {
          const coinIndex = startIndex + index + 1;
          return (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <CoinItem coins={{ ...coin, market_cap_rank: coinIndex }} />
            </Link>
          );
        })}

        <div className='pagination'>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={currentPage === page + 1 ? 'active' : ''}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coins;
