import React, { useEffect, useState } from "react";
import "./style.css";
import { get100Coins } from "../../../Functions/get100Coins";
import { MenuItem, Select } from "@mui/material";

const SelectCoins = ({coin1,coin2,handleCoinChange}) => {
  
  const [coinList, setCoinList] = useState([]);

  

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
    
    
  };

  useEffect(() => {
   
    getData();
  },[]);
  
  async function getData() {
    const myCoins = await get100Coins();
    if (myCoins) {
      setCoinList(myCoins);
    }
  }


  return (
    <div className="compare-select-coin-container">
      <div className="compare-coin-select-box">
        <p className="select-coin-text">Coin 1</p>
        <Select
          sx={style}
          value={coin1}
          label="Coin 1"
          onChange={(event) => {
            handleCoinChange(event, false);
          }}
        >
          {coinList.filter((item)=>item.id!=coin2).map((item,i) => (
            <MenuItem key={i} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </div>
      <div className="compare-coin-select-box">
        <p className="select-coin-text">Coin 2</p>
        <Select
          sx={style}
          value={coin2}
          label="Coin 2"
          onChange={(event) => {
            handleCoinChange(event, true);
          }}
        >
          {coinList.filter((item)=>item.id!=coin1).map((item,i) => (
            <MenuItem key={i} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
export default SelectCoins;
