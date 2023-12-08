import React, { useContext, useEffect } from "react";
import Header from "../Components/common/Header/Header";
import { get100Coins } from "../Functions/get100Coins";
import { useState } from "react";
import TabsComponent from "../Components/Dashboard/tabs/TabsComponent";
import watchListContext from "../context/watchListContext";
import BackToTop from "../Components/common/backToTop/BackToTop";

const WatchList = () => {
  const {globalWatchList,setGlobalWatchList}=useContext(watchListContext)
  const [coins, setCoins] = useState([]);

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
    const myCoin = await get100Coins();
    if (myCoin) {

      setCoins(myCoin.filter((item,index)=>globalWatchList.includes(item.id)));
    }
  }

  return (
    <div>
      <Header />
      <BackToTop />
      {coins ? <TabsComponent coins={coins} /> : <p>no items in the list</p>}
    </div>
  );
};
export default WatchList;
