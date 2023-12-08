import React,{useState} from "react";
import "./style.css"

import SearchIcon from '@mui/icons-material/Search';


const Search=({search,onSearch})=>{

   

    return (
        <div className="search-container">
            <SearchIcon className="search-icon"/>
            <input className="search-input" placeholder="Search" value={search} onChange={(e)=>{
                onSearch(e)
            }}
             />
        </div>
    )

}
export default Search;