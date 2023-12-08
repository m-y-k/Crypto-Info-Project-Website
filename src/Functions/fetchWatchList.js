import React, { useContext } from "react";


const fetchWatchList=(setGlobalWatchList)=>
{
   
        const myData = localStorage.getItem("watchList");
        if (myData) {
          setGlobalWatchList(JSON.parse(myData));
        } else {
          localStorage.setItem("watchList", JSON.stringify([]));
        }
      
}
export default fetchWatchList