import React, { useState } from "react";
import { Box, Typography, Input, Grid, Paper, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Cart from "../../components/cart/cart";
import { Product1, Product2 } from "../../components/image";
import BottomMenu from "../../layout/bottomMenu";
import AddCart from "../../components/addCart";

const useStyles = makeStyles(() => ({
  category: {
    display: "flex",
    height: "37px",
    padding: "10px 14px",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.09)",
    background: "#FFF",
    whiteSpace: "nowrap",
  },
  sub_category: {
    // display: "flex",
    // height: "37px",
    // padding: "10px 14px",
    // justifyContent: "center",
    // alignItems: "center",
    // gap: "5px",
    // borderRadius: "8px",
    // border: "1px solid rgba(0, 0, 0, 0.09)",
    padding: "10px 0px 10px 0px",
    background: "#FFF",
    whiteSpace: "nowrap",
  },
}));

const OrderNow = () => {
  const [isArrange, setArrange] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const products = [
    { img: Product2, addedToCart: true },
    { img: Product2, addedToCart: true },
    { img: Product2, addedToCart: false },
    { img: Product2, addedToCart: false },
    { img: Product2, addedToCart: false },
    { img: Product2, addedToCart: false },
  ];
  const classes = useStyles();
  const handleArrange = () => {
    setArrange(!isArrange);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AddCart isOpen={isOpen} handleClose={handleClose} />
      <Box
        sx={{
          paddingTop: "18px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "150px",
        }}
      >
        {/* order now  */}
        <Box sx={{ display: "flex", gap: "23px" }}>
          <Box sx={{ width: "7px", height: "16px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
            >
              <path
                d="M9.5 1L2 10L9.5 17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </Box>
          <Typography>Order Now</Typography>
        </Box>

        {/* header part  */}
        <Box sx={{ marginTop: "19px" }}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            {/* search menu  */}
            <Box style={{ width: "100%", boxSizing: "border-box" }}>
              <Box
                style={{
                  borderRadius: "6px",
                  border: "1px solid rgba(0, 0, 0, 0.07)",
                  background: "#FFF",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Input
                    className={classes.sidebar_text}
                    placeholder="Select Menu"
                    disableUnderline
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#989898",
                      border: "none",
                      height: "43px",
                    }}
                    sx={{
                      "&:focus": {
                        border: "none",
                      },
                    }}
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <path
                      d="M9.10482 16.6247C13.2585 16.6247 16.6257 13.2575 16.6257 9.10384C16.6257 4.9502 13.2585 1.58301 9.10482 1.58301C4.95118 1.58301 1.58398 4.9502 1.58398 9.10384C1.58398 13.2575 4.95118 16.6247 9.10482 16.6247Z"
                      stroke="#969797"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.4173 17.4163L15.834 15.833"
                      stroke="#969797"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
            </Box>
            {/* arrange icon  */}
            <Box
              sx={{ display: "flex", width: "86px", height: "45px" }}
              onClick={handleArrange}
            >
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="45"
                  viewBox="0 0 86 45"
                  fill="none"
                >
                  <rect width="86" height="45" rx="8" fill="white" />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="85"
                    height="44"
                    rx="7.5"
                    stroke="black"
                    stroke-opacity="0.07"
                  />
                  <rect
                    x="44"
                    y="3"
                    width="39"
                    height="39"
                    rx="6"
                    fill="#0575FC"
                  />
                  <rect
                    x="44.5"
                    y="3.5"
                    width="38"
                    height="38"
                    rx="5.5"
                    stroke="black"
                    stroke-opacity="0.07"
                  />
                  <path
                    d="M73.0833 19.1653V14.8145C73.0833 13.4632 72.47 12.917 70.9463 12.917H67.0746C65.5508 12.917 64.9375 13.4632 64.9375 14.8145V19.1557C64.9375 20.5166 65.5508 21.0532 67.0746 21.0532H70.9463C72.47 21.0628 73.0833 20.5166 73.0833 19.1653Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M73.0833 29.9463V26.0746C73.0833 24.5508 72.47 23.9375 70.9463 23.9375H67.0746C65.5508 23.9375 64.9375 24.5508 64.9375 26.0746V29.9463C64.9375 31.47 65.5508 32.0833 67.0746 32.0833H70.9463C72.47 32.0833 73.0833 31.47 73.0833 29.9463Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M62.0626 19.1653V14.8145C62.0626 13.4632 61.4492 12.917 59.9255 12.917H56.0538C54.5301 12.917 53.9167 13.4632 53.9167 14.8145V19.1557C53.9167 20.5166 54.5301 21.0532 56.0538 21.0532H59.9255C61.4492 21.0628 62.0626 20.5166 62.0626 19.1653Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M62.0625 29.9463V26.0746C62.0625 24.5508 61.4491 23.9375 59.9254 23.9375H56.0537C54.53 23.9375 53.9166 24.5508 53.9166 26.0746V29.9463C53.9166 31.47 54.53 32.0833 56.0537 32.0833H59.9254C61.4491 32.0833 62.0625 31.47 62.0625 29.9463Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="3"
                    y="3"
                    width="39"
                    height="39"
                    rx="6"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M21.5 30.77V26.73C21.5 25.14 20.86 24.5 19.27 24.5H15.23C13.64 24.5 13 25.14 13 26.73V30.77C13 32.36 13.64 33 15.23 33H19.27C20.86 33 21.5 32.36 21.5 30.77Z"
                    stroke="#545454"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 26.5H32"
                    stroke="#545454"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M26 30.5H32"
                    stroke="#545454"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M21.5 19.27V15.23C21.5 13.64 20.86 13 19.27 13H15.23C13.64 13 13 13.64 13 15.23V19.27C13 20.86 13.64 21.5 15.23 21.5H19.27C20.86 21.5 21.5 20.86 21.5 19.27Z"
                    stroke="#545454"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 15H32"
                    stroke="#545454"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M26 19H32"
                    stroke="#545454"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "6px",
              marginTop: "15px",
              width: "100%",
              overflowX: "auto",
            }}
          >
            <Box
              sx={{ display: "flex", gap: "5px" }}
              className={classes.category}
            >
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <path
                    d="M11 3.75H8"
                    stroke="#333333"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 3.75H1"
                    stroke="#333333"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 5.5C5.9665 5.5 6.75 4.7165 6.75 3.75C6.75 2.7835 5.9665 2 5 2C4.0335 2 3.25 2.7835 3.25 3.75C3.25 4.7165 4.0335 5.5 5 5.5Z"
                    stroke="#333333"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 9.25H9"
                    stroke="#333333"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 9.25H1"
                    stroke="#333333"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 11C7.9665 11 8.75 10.2165 8.75 9.25C8.75 8.2835 7.9665 7.5 7 7.5C6.0335 7.5 5.25 8.2835 5.25 9.25C5.25 10.2165 6.0335 11 7 11Z"
                    stroke="#333333"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Typography>Filter</Typography>
            </Box>
            <Box className={classes.category}>Drinks</Box>
            <Box className={classes.category}>Starters</Box>
            <Box className={classes.category}>Main Courses</Box>
          </Box>
          <Box
            sx={{
              marginTop: "9px",
              gap: "18px",
              display: "flex",
              width: "100%",
              overflowX: "auto",
            }}
          >
            <Typography className={classes.sub_category}>Cocktails</Typography>
            <Typography className={classes.sub_category}>Mocktails</Typography>
            <Typography className={classes.sub_category}>Liquor</Typography>
            <Typography className={classes.sub_category}>
              Soft Drinks
            </Typography>
            <Typography className={classes.sub_category}>Tea</Typography>
          </Box>
        </Box>

        {/* product part  */}
        <Box sx={{ marginTop: "20px" }}>
          <Grid container spacing="15px">
            {products.map((product) => (
              <Grid
                item
                xs={isArrange ? 12 : 6}
                md={6}
                sx={{ marginTop: "15px" }}
              >
                <Cart
                  img={product.img}
                  addedToCart={product.addedToCart}
                  isArrange={isArrange}
                  handleOpen={handleOpen}
                />
                <Box
                  sx={{
                    marginTop: "30px",
                    background: "rgba(0, 0, 0, 0.10)",
                    width: "100%",
                    height: "1px",
                  }}
                ></Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          width: "100%",
          background: "#fff",
          position: "fixed",
          bottom: "70px",
          padding: "20px",
          border: "1px solid rgba(0, 0, 0, 0.10)",
        }}
      >
        <Typography>2 Items Added</Typography>
        <Button variant="contained">View Cart</Button>
      </Box>
      <BottomMenu />
    </>
  );
};

export default OrderNow;
