import React from "react";
import "./style.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const Navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h3 className="not-found">Page not found</h3>
      <div className="backToHome">
        
        <h6 className="backToHome" onClick={()=>{
            Navigate("/")
        }}>back to home </h6>

      </div>
    </div>
  );
};
export default ErrorPage;
