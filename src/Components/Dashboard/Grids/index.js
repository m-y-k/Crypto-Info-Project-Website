import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Heart from "../../Heart";
import { Tooltip } from "@mui/material";
import { ToastContainer } from "react-toastify";

const Grid = ({ coin }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`grid-container ${
        coin.price_change_percentage_24h < 0 && "grid-container-red"
      } `}
      onClick={() => {
        navigate(`/coin/${coin.id}`);
      }}
    >
      <div className="coin-info">
        <div className="coin-info-container">
          <img src={coin.image} className="coin-logo" />
          <div className="coin-basic">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </div>
       
        <Tooltip title="add to watchlist">
        <Heart id={coin.id}/>
        
        </Tooltip>
       
      </div>

      {coin.price_change_percentage_24h >= 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div>
            <TrendingUpRoundedIcon className="trend-chip" />
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip red-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div>
            <TrendingDownRoundedIcon className="trend-chip red-chip" />
          </div>
        </div>
      )}
      <div className="price-container">
        <h3
          className="current-price"
          style={{
            color:
              coin.price_change_percentage_24h >= 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className="total-volume">
          total volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="market-cap">
          market cap : ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
export default Grid;
