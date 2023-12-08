import React, { useContext, useEffect } from "react";
import Header from "../Components/common/Header/Header";
import MainComponent from "../Components/landingPages/MainComponent";
import watchListContext from "../context/watchListContext";
import Footer from "../Components/common/Footer/Footer";

const Home = () => {
  const { globalWatchList, setGlobalWatchList } = useContext(watchListContext);

  

  return (
    <div>
      <Header />
      <MainComponent />
      
    </div>
  );
};
export default Home;
