import React, { useState } from "react";
import watchListContext from "./watchListContext";
const WatchListProvider = ({children}) =>{
    const [globalWatchList,setGlobalWatchList]=useState([""]);


    return (
        <watchListContext.Provider value={{globalWatchList,setGlobalWatchList}}>
            {
                children
            }
        </watchListContext.Provider>
    )
}
export default WatchListProvider;