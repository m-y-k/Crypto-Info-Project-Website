import React from "react";
import "./style.css";
import Button from "../Button";
import TemporaryDrawer from "./drawer.js";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="navbar">
        <NavLink className="logoLink" to="/">
          <h1 className="logo">
            CoinInfo <span style={{ color: "var(--blue)" }}>.</span>{" "}
          </h1>
        </NavLink>
        <div className="links">
          <DarkMode />
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/compare">
            Compare
          </NavLink>
          <NavLink className="link" to="/watchlist">
            WatchList
          </NavLink>
          <Button
            text={"DashBoard"}
            clickFunction={() => {
              navigate("/dashboard");
            }}
            outlined={false}
          />
        </div>
        <div className="mobile-drawer">
          <TemporaryDrawer />
        </div>
      </div>
    </div>
  );
};
export default Header;
