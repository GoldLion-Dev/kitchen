import { Box, Typography } from "@mui/material";
import React from "react";

const Counter = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box>
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
      <Typography>6</Typography>
      <Box>
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
