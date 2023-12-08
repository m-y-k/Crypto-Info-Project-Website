import React from "react";
import "./style.css";

import convertNumber from "../../../Functions/convertNumber";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import Heart from "../../Heart";
import { ToastContainer } from "react-toastify";

const List = ({ coin }) => {
  // console.log(coin);
  const navigate = useNavigate();
  return (
    <tr
      className="table-row"
      onClick={() => {
        navigate(`/coin/${coin.id}`);
      }}
    >
      <td className="td-image">
        <img className="list-image" src={coin.image} />
      </td>
      <td className="list-coin-basics">
        <p className="list-coin-symbol">{coin.symbol}</p>
        <p className="list-coin-name">{coin.name}</p>
      </td>
      <td className="td-price-chip">
        {coin.price_change_percentage_24h >= 0 ? (
          <div className="list-price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        ) : (
          <div className="list-price-chip red-chip-list">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        )}
      </td>
      <td className="td-trend-icon">
        {coin.price_change_percentage_24h < 0 ? (
          <p className="list-trend-red">
            <TrendingDownRoundedIcon />
          </p>
        ) : (
          <p className="list-trend-green">
            <TrendingUpRoundedIcon />
          </p>
        )}
      </td>
      <td className="td-current-price">
        <Tooltip title="current price">
          <h3
            className="list-current-price"
            style={{
              color:
                coin.price_change_percentage_24h >= 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </Tooltip>
      </td>
      <td className="td-total-volume">
        <Tooltip title=" total volume ">
          <p className="list-total-volume">
            {coin.total_volume.toLocaleString()}
          </p>
        </Tooltip>
      </td>
      <td className="td-market-cap">
        <Tooltip title=" Market Cap ">
          <p className="list-market-cap">${coin.market_cap.toLocaleString()}</p>
        </Tooltip>
      </td>
      <td className="td-mobile-market">
        <Tooltip title=" Market Cap ">
          <p className="list-market-cap">${convertNumber(coin.market_cap)}</p>
        </Tooltip>
      </td>
      <td>
        <Tooltip title="add to watchlist">
          <Heart id={coin.id}  />
          
        </Tooltip>
      </td>
    </tr>
  );
};

export default List;
