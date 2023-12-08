import React from "react";
import "./style.css";

function Button({text,clickFunction,outlined})
{


    return <button className={outlined?"outlined-btn":"btn"} onClick={()=>{
        clickFunction();
    }} >{text}</button>
}
export default Button;