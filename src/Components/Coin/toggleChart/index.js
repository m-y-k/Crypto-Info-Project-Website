import React, { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./style.css"

export default function ToggleChart({priceType,handlePriceType}) {
 

 

  return (
   <div className="toggle-chart-container">
     <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceType}
      aria-label="chart type"
      sx={{
        "& .Mui-selected": {
          color: "var(--blue) !important",
          background: "var(--black) !important",
        },
        borderColor: "var(--blue)",

        border: "unset !important",

        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",

          borderColor: "unset",

          color: "var(--blue)",
        },

        "& .MuiToggleButton-standard": {
          color: "var(--blue)",
        },
      }}
    >
      <ToggleButton value="prices" aria-label="price" className="toggle-chart-btn">
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" aria-label="market cap" className="toggle-chart-btn">
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" aria-label="total volume" className="toggle-chart-btn">
        Total Volume
      </ToggleButton>
    </ToggleButtonGroup>
   </div>
  );
}
