import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Counter from "../counter";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  title: {
    color: "#000",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    fontFamily: "Metropolis !important",
    fontStyle: "normal",
    lineHeight: "18px !important",
    whiteSpace: "nowrap",
  },
  price: {
    color: "#000",
    fontSize: "15px !important",
    fontWeight: "500 !important",
    fontFamily: "Metropolis !important",
    fontStyle: "normal",
    lineHeight: "15px !important",
    whiteSpace: "nowrap",
  },
  btn_text: {
    color: "#fff",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    fontFamily: "Metropolis !important",
    fontStyle: "normal",
    lineHeight: "14px !important",
    whiteSpace: "nowrap",
    lineHeight: "14px !important",
  },
  product_title: {
    color: "#000",
    fontSize: "18px !important",
    fontWeight: "600 !important",
    fontFamily: "Metropolis !important",
    fontStyle: "normal",
    lineHeight: "18px !important",
  },
  product_description: {
    color: "#989898",
    fontSize: "14px !important",
    fontWeight: "400 !important",
    fontFamily: "Metropolis !important",
    fontStyle: "normal",
    lineHeight: "19px !important",
  },
}));
const Cart = ({ img, handleOpen, addedToCart, isArrange }) => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: isArrange ? "row" : "column",
          sm: "column",
          md: "column",
          pb: isArrange ? "row" : "column",
        },
        gap: { xs: "8px", md: "22px " },
        width: "100%",
        // flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: {
            xs: isArrange ? "71px" : "100%",
            sm: isArrange ? "100%" : "100%",
            md: isArrange ? "180px" : "100%",
          },
        }}
      >
        <img src={img} style={{ width: "100%" }} />
        <Box
          sx={{
            display: isArrange ? "none" : "flex",
            position: "absolute",
            top: "7px",
            right: "7px",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            borderRadius: "5px",
            background: "rgba(0, 0, 0, 0.40)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M8.32037 14.2515L8.31965 14.2508C6.50732 12.6074 5.04331 11.277 4.02654 10.033C3.01526 8.79579 2.49878 7.70532 2.49878 6.5502C2.49878 4.66393 3.96833 3.2002 5.84878 3.2002C6.91563 3.2002 7.94784 3.69942 8.61936 4.48184L8.99878 4.92391L9.3782 4.48184C10.0497 3.69942 11.0819 3.2002 12.1488 3.2002C14.0292 3.2002 15.4988 4.66393 15.4988 6.5502C15.4988 7.70532 14.9823 8.79579 13.971 10.033C12.9543 11.277 11.4902 12.6074 9.67791 14.2508L9.67719 14.2515L8.99878 14.869L8.32037 14.2515Z"
              stroke="white"
            />
          </svg>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ lineHeight: "1" }}
            className={classes.product_title}
          >
            Old Fashioned
          </Typography>
          <Box
            sx={{
              display: isArrange ? "block" : "none",
              width: "15px",
              height: "13.76px",
            }}
          >
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.24909 12.6528L7.24837 12.6521C5.30729 10.8919 3.7364 9.46452 2.64494 8.12919C1.55898 6.80059 1 5.62437 1 4.375C1 2.33424 2.59055 0.75 4.625 0.75C5.77885 0.75 6.89456 1.28973 7.62058 2.13564L8 2.57771L8.37942 2.13564C9.10544 1.28973 10.2212 0.75 11.375 0.75C13.4095 0.75 15 2.33424 15 4.375C15 5.62437 14.441 6.80059 13.3551 8.12919C12.2636 9.46452 10.6927 10.8919 8.75163 12.6521L8.75091 12.6528L8 13.3363L7.24909 12.6528Z"
                stroke="#C6C6C6"
              />
            </svg>
          </Box>
        </Box>
        <Box sx={{ overflow: "hidden" }}>
          <Typography
            className={classes.product_description}
            sx={{
              marginTop: { xs: "", sm: "10px", md: "10px" },
              lineHeight: "1",
              display: isArrange ? "block" : "none",
              overflow: { xs: "hidden", sm: "", md: "" },
              textOverflow: { xs: "ellipsis", sm: "", md: "" },
              whiteSpace: { xs: "nowrap", sm: "wrap", md: "wrap" },
              maxWidth: { xs: "190px", md: "250px" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            diam leo, convallis scelerisque orci vitae, auctor imperdiet dolor.
            fgdfg Lorem ipsum dolor sit amet, fgfgfd consectetur adipiscing
            elit.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "13.5px",
            width: "100%",
          }}
        >
          <Typography className={classes.price}>150$</Typography>
          <Box
            onClick={handleOpen}
            style={{}}
            sx={{
              width: "58px",
              borderRadius: "100px",
              padding: "5px 14px 4.36px 13px",
              display: addedToCart ? "none" : "flex",
              background: "#0575FC",
              justifyContent: "center",
            }}
          >
            <Typography className={classes.btn_text}>Add</Typography>
          </Box>

          <Box
            sx={{
              // width: "70px",
              justifyContent: "space-between",
              alignItems: "center",
              display: addedToCart ? "flex" : "none",
            }}
          >
            <Counter />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
