import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./style.css";

export default function PaginationComp({ page, handlePageChange }) {
  return (
    <div className="pagination-component">
      <Pagination
        count={10}
        page={page}
        onChange={(e, v) => {
          handlePageChange(e, v);
        }}
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--white) !important",
            scale:"1.3"
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--darkgrey)",
            backgroundColor: "var(--grey) ",
            border: '1px solid var(--grey)',
          },
        }}
      />
    </div>
  );
}
