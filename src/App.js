import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/common/Footer/Footer";
import Header from "./Components/common/Header/Header";
import MainComponent from "./Components/landingPages/MainComponent";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import CoinPage from "./Pages/CoinInfoPage";
import Compare from "./Pages/Compare";
import WatchList from "./Pages/WatchList";
import WatchListProvider from "./context/watchListProvider";
import DarkThemeContextProvider from "./context/darkThemeContextProvider";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./Components/common/error/Error";


function App() {

  



  return (
    <DarkThemeContextProvider>
      <WatchListProvider>
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/coin/:id" element={<CoinPage />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/watchlist" element={<WatchList />} />
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
            <ToastContainer/>
          </BrowserRouter>
        </div>
      </WatchListProvider>
    </DarkThemeContextProvider>
  );
}

export default App;
