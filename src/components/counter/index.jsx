import { Box, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  count: {
    color: "#000",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    fontFamily: "Metropolis !important",
    fontStyle: "normal",
    lineheight: "14px !important",
    whiteSpace: "nowrap",
  },
}));
const Counter = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const handleClickPlus = () => {
    setCount(count + 1);
  };
  const handleClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box
        onClick={handleClickMinus}
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "22px" },
          height: { xs: "22px" },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <rect width="26" height="26" rx="6" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="25"
            height="25"
            rx="5.5"
            stroke="black"
            stroke-opacity="0.1"
          />
          <path
            d="M18 13H8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
      <Typography
        sx={{ display: "flex", alignItems: "center" }}
        className={classes.count}
      >
        {count}
      </Typography>
      <Box
        onClick={handleClickPlus}
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "22px" },
          height: { xs: "22px" },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <rect width="26" height="26" rx="6" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="25"
            height="25"
            rx="5.5"
            stroke="black"
            stroke-opacity="0.1"
          />
          <path
            d="M13 8V18M18 13H8"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Counter;
