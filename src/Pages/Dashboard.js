import React, { useEffect, useState } from "react";
import Header from "../Components/common/Header/Header";
import TabsComponent from "../Components/Dashboard/tabs/TabsComponent";
import axios from "axios";
import Search from "../Components/Dashboard/search";
import PaginationComp from "../Components/Dashboard/pagination/Pagination";
import LoaderDisplay from "../Components/common/loader/Loader";
import BackToTop from "../Components/common/backToTop/BackToTop";
import { get100Coins } from "../Functions/get100Coins";
import Footer from "../Components/common/Footer/Footer";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const onSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    var preIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(preIndex, preIndex + 10));
  };

  var filteredCoins = coins.filter(
    (coin, index) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  async function getData() {
    const myCoin = await get100Coins();
    if (myCoin) {
      setCoins(myCoin);
      setPaginatedCoins(myCoin.slice(0, 10));
      setIsLoading(false);
    }
  }

  return (
    <div>
       <Header />
      {loading ? (
        <LoaderDisplay />
      ) : (
        <div>
          <BackToTop />
         
          <Search search={search} onSearch={onSearch} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComp page={page} handlePageChange={handlePageChange} />
          )}
        </div>
      )}
      <Footer/>
    </div>
  );
};
export default Dashboard;
