import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import "./style.css";
import Grid from "../Grids";
import List from "../List";

const style = {
  color: "var(--white)",
  width: "50vw",
  fontSize: "1.2rem",
  fontWeight: "600",
  fontFamily: "Inter",
  textTransform: "capitalize",
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#006aff",
    },
  },
});

function TabsComponent({ coins }) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}  >
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} centered>
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style} />
          </TabList>
        </div>
        <TabPanel value="Grid">
          <div className="grid-flex">
          {coins.map((coin,index)=>(
          <Grid coin={coin} key={coin.id} />
        ))}
          </div>
        </TabPanel>
        <TabPanel value="List">
         <table className="list-table">
          {
            coins.map((coin,index)=>(
              <div className="coin-grey-wrapper">
                <List coin={coin} key={coin.id} />
              </div>
            ))
          }
         </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
export default TabsComponent;
