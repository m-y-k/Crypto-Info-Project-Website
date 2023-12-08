import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/common/Header/Header";
import SelectCoins from "../Components/comparePage/SelectCoins";
import SelectDays from "../Components/Coin/selectDays";
import { getCoinData } from "../Functions/getCoinData";
import { coinObject } from "../Functions/convertObject";
import { getCoinPrices } from "../Functions/getCoinPrices";
import { makeChartData } from "../Functions/makeChartData";
import LoaderDisplay from "../Components/common/loader/Loader";
import List from "../Components/Dashboard/List";
import CoinDetails from "../Components/Coin/coinInfo";
import LineChart from "../Components/Coin/linechart";
import ToggleChart from "../Components/Coin/toggleChart";
import watchListContext from "../context/watchListContext";
import BackToTop from "../Components/common/backToTop/BackToTop";
import Footer from "../Components/common/Footer/Footer";

const Compare = () => {
  const {globalWatchList,setGlobalWatchList}=useContext(watchListContext)
  const [coin1, setCoin1] = useState("bitcoin");
  const [coin2, setCoin2] = useState("ethereum");
  const [coinData1, setCoinData1] = useState({});
  const [coinData2, setCoinData2] = useState({});
  const [days, setDays] = useState(7);
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);

    if (isCoin2) {
      setCoin2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCoinData2, data);
      const prices1 = await getCoinPrices(coin1, days, priceType);
      const prices2 = await getCoinPrices(coin2, days, priceType);

      if (prices1 && prices2) {
        setIsLoading(false);
      }
    } else {
      const data = await getCoinData(event.target.value);
      coinObject(setCoinData1, data);
      setCoin1(event.target.value);
      const prices1 = await getCoinPrices(coin1, days, priceType);
      const prices2 = await getCoinPrices(coin2, days, priceType);

      if (prices1 && prices2) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
  
    const myList=localStorage.getItem("watchList");
    if(myList)
    {
      setGlobalWatchList(JSON.parse(myList));
    }
    else
    {
      localStorage.setItem("watchList",JSON.stringify(globalWatchList))
    }

    getData();
   
  },[]);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(coin1);
    const data2 = await getCoinData(coin2);
    if (data1) {
      coinObject(setCoinData1, data1);
    }
    if (data2) {
      coinObject(setCoinData2, data2);
    }

    if (data1 && data2) {
      const prices1 = await getCoinPrices(coin1, days, priceType);
      const prices2 = await getCoinPrices(coin2, days, priceType);
      makeChartData(setChartData, prices1, prices2);
      if (prices1 && prices2) {
        setIsLoading(false);
      }
    }
  }

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(coin1, event.target.value, priceType);
    const prices2 = await getCoinPrices(coin2, event.target.value, priceType);
    makeChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }

  const handlePriceType = async (event, newPriceType) => {
    setIsLoading(true);
    setPriceType(event.target.value);
    const prices1 = await getCoinPrices(coin1, days, event.target.value);
    const prices2 = await getCoinPrices(coin2, days, event.target.value);
    makeChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <LoaderDisplay />
      ) : (
        <div>
           <BackToTop />
          <div className="compare-container">
            <SelectCoins
              coin1={coin1}
              coin2={coin2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
          </div>

          <div className="coin-grey-wrapper">
            <List coin={coinData1} />
          </div>
          <div className="coin-grey-wrapper">
            <List coin={coinData2} />
          </div>
       
          <div className="grey-wrapper-container">
            <ToggleChart
              priceType={priceType}
              handlePriceType={handlePriceType}
            />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinDetails coin={coinData1} />
          <CoinDetails coin={coinData2} />
        </div>
      )}
      <Footer/>
    </div>
  );
};
export default Compare;
