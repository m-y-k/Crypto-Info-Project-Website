import React, { useContext, useEffect } from "react";
import "./style.css";
import Button from "../../common/Button";
import { Dashboard } from "@mui/icons-material";

import gradient from "../../../Assets/gradient.png";
import iphone from "../../../Assets/iphone.png";
import { animate, motion } from "framer-motion";
import fetchWatchList from "../../../Functions/fetchWatchList"
import watchListContext from "../../../context/watchListContext" ;
import { useNavigate } from "react-router-dom";

const MainComponent = () => {

const navigate=useNavigate();




const {globalWatchList,setGlobalWatchList}=useContext(watchListContext)


  useEffect(()=>{
    const myList=localStorage.getItem("watchList");
    if(myList)
    {
      setGlobalWatchList(JSON.parse(myList));
    }
    else
    {
      localStorage.setItem("watchList",JSON.stringify(globalWatchList))
    }
  },[])




  return (
    <div className="hero-container">
      <div className="info">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <p className="info-text">
          {" "}
          Track crypto through a public api in real time. Visit the dashboard to
          do so!{" "}
        </p>
        <div className="info-buttons">
          <Button
            text={"Dashboard"}
            clickFunction={() => {
             navigate("/dashboard")
            }}
            outlined={false}
          />

          <Button
            text={"Share"}
            clickFunction={() => {
              console.log("share clicked");
            }}
            outlined={true}
          />

          
          
        </div>
      </div>
      
      <div className="phone-container">
        <img src={gradient} className="phone-gradient" />
        <motion.img src={iphone} className="iphone" initial={{y:0}} animate={{y:20}} transition={{duration:2,repeat:Infinity,repeatType:"mirror",type:"smooth"}} />
      </div>
    </div>
  );
};
export default MainComponent;
