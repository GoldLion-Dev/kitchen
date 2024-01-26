import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Cart = ({ img, handleOpen, addedToCart, isArrange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isArrange ? "row" : "column",
        gap: "8px",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ width: isArrange ? "71px" : "100%" }}>
        <img src={img} style={{ width: "100%" }} />
      </Box>
      <Box sx={{ flexGrow: "1" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ lineHeight: "1" }}>Old Fashioned</Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M8.24909 14.6528L8.24837 14.6521C6.30729 12.8919 4.7364 11.4645 3.64494 10.1292C2.55898 8.80059 2 7.62437 2 6.375C2 4.33424 3.59055 2.75 5.625 2.75C6.77885 2.75 7.89456 3.28973 8.62058 4.13564L9 4.57771L9.37942 4.13564C10.1054 3.28973 11.2212 2.75 12.375 2.75C14.4095 2.75 16 4.33424 16 6.375C16 7.62437 15.441 8.80059 14.3551 10.1292C13.2636 11.4645 11.6927 12.8919 9.75163 14.6521L9.75091 14.6528L9 15.3363L8.24909 14.6528Z"
              stroke="#C6C6C6"
            />
          </svg>
        </Box>
        <Typography
          sx={{ lineHeight: "1", display: isArrange ? "block" : "none" }}
        >
          Lorem Ipsum is simply dum...
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "13.5px",
          }}
        >
          <Typography>150$</Typography>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              width: "58px",
              height: "23px",
              fontSize: "13px",
              borderRadius: "100px",
              // padding: "5px 13px",

              display: addedToCart ? "none" : "flex",
              alignItems: "center",
            }}
          >
            Add
          </Button>

          <Box
            sx={{
              width: "70px",
              justifyContent: "space-between",
              alignItems: "center",
              display: addedToCart ? "flex" : "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "22px",
                height: "26px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <rect
                  x="1"
                  y="1"
                  width="34"
                  height="34"
                  rx="5"
                  stroke="black"
                  stroke-opacity="0.1"
                  stroke-width="2"
                />
                <path
                  d="M19.2724 19.272H16.7269H11.636C10.9331 19.272 10.3633 18.7022 10.3633 17.9993C10.3633 17.2964 10.9331 16.7266 11.636 16.7266H16.7269L19.2724 16.7269L24.3632 16.7266C25.0662 16.7266 25.636 17.2964 25.636 17.9993C25.636 18.7022 25.0662 19.272 24.3633 19.272H19.2724Z"
                  fill="black"
                />
              </svg>
            </Box>
            <Box sx={{ width: "21px", textAlign: "center" }}>3</Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "22px",
                height: "26px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <rect
                  x="1"
                  y="1"
                  width="34"
                  height="34"
                  rx="5"
                  stroke="black"
                  stroke-opacity="0.1"
                  stroke-width="2"
                />
                <path
                  d="M19.2724 24.3633C19.2724 25.0662 18.7026 25.636 17.9996 25.636C17.2967 25.636 16.7269 25.0662 16.7269 24.3633V19.2724H11.636C10.9331 19.2724 10.3633 18.7026 10.3633 17.9996C10.3633 17.2967 10.9331 16.7269 11.636 16.7269H16.7269V11.636C16.7269 10.9331 17.2967 10.3633 17.9996 10.3633C18.7026 10.3633 19.2724 10.9331 19.2724 11.636V16.7269H24.3633C25.0662 16.7269 25.636 17.2967 25.636 17.9996C25.636 18.7026 25.0662 19.2724 24.3633 19.2724H19.2724V24.3633Z"
                  fill="black"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
