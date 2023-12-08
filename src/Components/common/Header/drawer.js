import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import DarkMode from "../DarkMode/DarkMode";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="drawer-container">
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
          <NavLink className="link" to="/dashboard">
            DashBoard
          </NavLink>
        </div>
      </Drawer>
    </div>
  );
}
