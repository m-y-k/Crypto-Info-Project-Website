import React,{useState,useEffect} from "react";
import "./style.css";

const CoinDetails = ({ coin }) => {
  
  const shortDesc = coin.desc.slice(0, 300)+`<span class="toggle-para-btn">......show more</span>`;
  const longDesc = coin.desc+`<span class="toggle-para-btn">......show less</span>`;
  const [togglePara,setTogglePara]=useState(true)//if true > 300
 

  function toggleLength()
  {

    setTogglePara(!togglePara);

  }

 

  return (
    <div className="coin-grey-wrapper coin-details-full">
      <h2>{coin.name}</h2>
     <div className="coin-desc-container">
     {
        longDesc.length<300? <p
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html:coin.desc }}

      ></p>:
     togglePara ? (
       
       <p
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: shortDesc }}
        onClick={()=>{
            toggleLength()
        }}
      ></p>
    
   
    ) : (
     
      <p
       className="coin-info-desc"
       dangerouslySetInnerHTML={{ __html:longDesc }}
       onClick={()=>{
        toggleLength()
    }}
     ></p>
    
    )}
     
     </div>
    </div>
  );
};
export default CoinDetails;
