import React, { useContext, useEffect, useState } from "react";
import watchListContext from "../../context/watchListContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import DarkThemeContext from "../../context/darkThemeContext";
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import StarIcon from '@mui/icons-material/Star';

const Heart = ({ id }) => {
  const { globalWatchList, setGlobalWatchList } = useContext(watchListContext);
  const { darkMode, setDarkMode } = useContext(DarkThemeContext);

  
  const [liked, setLiked] = useState(false);

  useEffect(() => {
   
    if (globalWatchList.includes(id)) {
      setLiked(true);
    }
  }, []);

  const handleLikeToggle = () => {
    if (!liked) {
      let newWatchList;
      if(globalWatchList.length==1&&globalWatchList[0]=="")
      {
        newWatchList = [id];

      }else
      {
        newWatchList = [...globalWatchList, id];
      }
       
      setGlobalWatchList(newWatchList);
      localStorage.setItem("watchList", JSON.stringify(newWatchList));

      toast.success('Added to WatchList', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: darkMode?"dark":"light",
        });

     
    } else {

      const newWatchList = globalWatchList.filter((item) => item !== id);
      localStorage.setItem("watchList", JSON.stringify(newWatchList));
      setGlobalWatchList(globalWatchList.filter((item) => item !== id));
      
      // Update localStorage

      toast.error('Removed from watchList', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: darkMode?"dark":"light",
        });
      
    }
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "block",
        width: "fit-content",
      }}
    >
      
      <FormControlLabel
        control={
          <Checkbox
            icon={<StarBorderPurple500SharpIcon />}
            checkedIcon={<StarIcon />}
            name="checked"
            checked={liked} // Set the checked state of the checkbox
            onChange={handleLikeToggle} // Handle the click event
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        }
      />
    </div>
    
  );
};
export default Heart;
