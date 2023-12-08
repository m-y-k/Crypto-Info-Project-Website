import React from "react";
import "./style.css";
import KeyboardDoubleArrowUpTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowUpTwoTone";

const BackToTop = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {

    const topBtn = document.getElementById("back-to-top-btn");

    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
     

     
      if (topBtn) {
        topBtn.style.opacity = 1;
      }
    } else {
      if (topBtn) {
        topBtn.style.opacity = 0;
      }
    }
  }
  function changeToTop() {
   
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div
      className="top-btn-container"
      id="back-to-top-btn"
      onClick={() => changeToTop()}
    >
      <KeyboardDoubleArrowUpTwoToneIcon className="top-btn" />
    </div>
  );
};
export default BackToTop;
